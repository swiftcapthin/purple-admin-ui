// 필요한 컴포넌트와 모듈을 임포트합니다.
import GradientBg from "@/components/page/login/gradient-bg"; // 그라데이션 배경 컴포넌트
import LoginForm from "@/components/page/login/login-form"; // 로그인 폼 컴포넌트
import { Alert } from "antd"; // Ant Design의 Alert 컴포넌트
import { Verified } from "lucide-react"; // Lucide React 아이콘

// 로그인 페이지 컴포넌트 정의
const LoginPage = () => {
  return (
    // 전체 페이지를 감싸는 컨테이너
    <div className="flex min-h-screen bg-white items-centerw-full">
      {/* 그라데이션 배경을 포함하는 섹션 */}
      <div className={`relative hidden w-1/2 lg:block`}>
        <GradientBg className="absolute top-0 left-0 w-full h-full" />
        <img src="/logo.png" className="absolute w-10 h-10 top-5 left-5" alt="logo" />
        <div className="absolute inline-flex items-center gap-1 px-3 py-2 font-semibold text-white border-2 border-white rounded-lg left-5 bottom-5">
          <Verified width={18} height={18} />
          풀필먼트 전문업체
        </div>
      </div>

      {/* 로그인 폼을 포함하는 섹션 */}
      <div className="w-full lg:w-1/2">
        <div className="relative flex items-center justify-center h-full">
          <section className="w-full px-5 pb-10 text-gray-800 sm:w-4/6 md:w-3/6 lg:w-4/6 xl:w-3/6 sm:px-0">
            {/* 환경변수 설정 오류 메시지 */}
            {!process.env.NEXT_PUBLIC_API_ENDPOINT ? (
              <Alert
                message="환경변수 설정 오류"
                description={
                  <span>
                    .env.example 파일을 복사하여 .env 파일을 생성해주세요.{" "}
                    <a
                      href="https://github.com/purpleio/purple-admin-ui#%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95"
                      target="_blank"
                      rel="noreferrer"
                    >
                      참고 링크
                    </a>
                  </span>
                }
                type="error"
                showIcon
                className="my-10"
              />
            ) : null}
            {/* 로그인 페이지 헤더 */}
            <div className="flex flex-col items-center justify-center px-2 mt-8 sm:mt-0">
              <h2 className="mt-2 text-5xl font-bold leading-tight inter">동대문 스위프트</h2>
              <div className="mt-1 text-lg text-gray-400">(주)SWIFT SUPPORTER</div>
            </div>

            {/* 로그인 폼 */}
            <div className="w-full px-2 mt-12 sm:px-6">
              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; // 페이지 컴포넌트 내보내기
