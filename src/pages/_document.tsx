// 필요한 모듈을 임포트합니다.
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs"; // Ant Design CSS-in-JS 관련 라이브러리
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"; // Next.js 문서 관련 컴포넌트 및 타입

// 사용자 지정 Document 클래스를 생성합니다.
export default class MyDocument extends Document {
  // 초기 속성을 가져오는 정적 메소드
  static async getInitialProps(ctx: DocumentContext) {
    // CSS-in-JS 스타일 캐시를 생성합니다.
    const cache = createCache();
    // 원래 페이지 렌더링 함수를 저장합니다.
    const originalRenderPage = ctx.renderPage;

    // 페이지 렌더링을 수정하여 StyleProvider를 추가합니다.
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
      });

    // 기본 문서 속성을 가져옵니다.
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // 스타일을 추출하여 문서에 포함시킵니다.
      styles: (
        <>
          {initialProps.styles}
          <style data-test="extract" dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />
        </>
      ),
    };
  }

  // 문서 구조를 렌더링합니다.
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
