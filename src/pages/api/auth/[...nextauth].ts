// 필요한 모듈들을 임포트합니다.
import NextAuth, { Session } from "next-auth";
import { OAuthUserConfig } from "next-auth/providers";
import CredentialsProvider, { CredentialsConfig } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// 자격 증명(Credentials) 기반 인증 설정
const credentialsProviderOption: CredentialsConfig<{}> = {
  type: "credentials",
  // 인증 타입을 자격 증명으로 설정
  id: "login-credentials",
  name: "login-credentials",
  credentials: {
    // 사용자에게 요구되는 자격 증명 필드 정의
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials: Record<string, unknown> | undefined) {
    // 자격 증명으로 사용자를 인증하는 함수
    if (credentials && credentials.username === "admin" && credentials.password === "admin") {
      // 관리자 계정에 대한 하드코딩된 인증 로직
      return {
        // 사용자 객체 반환
        id: "1",
        login: "admin",
        name: "관리자",
        email: "",
        image: "",
      };
    }
    return null; // 인증 실패 시 null 반환
  },
};

// Google OAuth 설정
const googleProviderOption: OAuthUserConfig<{}> = {
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  profile: (profile: any) => ({ ...profile, id: profile.sub, login: profile.email, image: profile.picture }),
};

// GitHub OAuth 설정
const githubProviderOption: OAuthUserConfig<{}> = {
  clientId: process.env.GITHUB_CLIENT_ID || "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  profile: (profile: any) => ({ ...profile, image: profile.avatar_url }),
};

// NextAuth 설정
export default NextAuth({
  pages: {
    // 사용자 정의 인증 페이지 경로 설정
    signIn: "/login",
    verifyRequest: "/login?verify=1",
    error: "/login",
  },
  providers: [
    // 인증 제공자 추가
    CredentialsProvider(credentialsProviderOption),
    GoogleProvider(googleProviderOption),
    GithubProvider(githubProviderOption),
  ],
  callbacks: {
    // JWT 및 세션 콜백 설정
    jwt({ token, user }) {
      // JWT 토큰 생성 또는 업데이트
      if (user) {
        token.id = (user as Session["user"]).id;
        token.login = (user as Session["user"]).login;
      }
      return token;
    },
    session({ session, token }) {
      // 세션 데이터 생성 또는 업데이트
      session.user = { ...session.user, id: token.id as string, login: token.login as string };
      return session;
    },
  },
});
