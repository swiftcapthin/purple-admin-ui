// 필요한 모듈과 컴포넌트를 임포트합니다.
import { fetcher } from "@/client/base"; // 데이터 페칭 로직
import { IDefaultLayoutPage } from "@/components/layout/default-layout"; // 기본 레이아웃 인터페이스
import SeoHead from "@/components/layout/seo-head"; // SEO를 위한 헤드 컴포넌트
import AuthProvider from "@/lib/auth/auth-provider"; // 인증 제공자
import "@/styles/globals.css"; // 전역 CSS 스타일
import { ConfigProvider } from "antd"; // Ant Design 구성 제공자
import koKR from "antd/locale/ko_KR"; // 한국어 지역 설정
import { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react"; // 세션 제공자
import type { AppProps } from "next/app"; // 앱 프롭스 타입
import localFont from "next/font/local"; // 로컬 폰트 로딩
import Head from "next/head"; // HTML head 관리
import { SWRConfig } from "swr"; // SWR 구성

// 로컬 폰트 설정
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  weight: "45 920",
  variable: "--font-pretendard",
});

// 메인 앱 컴포넌트를 정의합니다.
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // 각 페이지의 레이아웃을 설정합니다.
  const getLayout =
    (Component as IDefaultLayoutPage).getLayout ||
    ((Page: NextComponentType, props: Record<string, unknown>) => <Page {...props} />);

  return (
    <>
      <SeoHead />
      <Head>{/* 여기서 웹사이트 아이콘, 매니페스트, 분석 스크립트 등을 설정합니다. */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {process.env.NEXT_PUBLIC_CODENBUTTER_SITE_ID ? (
          <script src="https://buttr.dev/butter.js" data-site-id={process.env.NEXT_PUBLIC_CODENBUTTER_SITE_ID} async />
        ) : null}
      </Head>
      <ConfigProvider // Ant Design 구성을 설정합니다.
        theme={{
          token: {
            colorPrimary: "#63489a",
            colorLink: "#63489a",
            colorLinkHover: "#7f68a6",
          },
        }}
        locale={koKR}
      >
        <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
          <SessionProvider session={session}>
            <AuthProvider>
              {/* 페이지의 메인 내용을 렌더링합니다. */}
              <main className={`${pretendard.variable} font-sans`}>{getLayout(Component, pageProps)}</main>
            </AuthProvider>
          </SessionProvider>
        </SWRConfig>
      </ConfigProvider>
    </>
  );
}
