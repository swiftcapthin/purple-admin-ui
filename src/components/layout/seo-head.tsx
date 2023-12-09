import Head from "next/head"; // Next.js의 Head 컴포넌트를 가져옵니다. 이 컴포넌트는 HTML 문서의 <head> 부분을 수정할 수 있게 해줍니다.
import React from "react"; // React 라이브러리를 가져옵니다.

export const DEFAULT_TITLE = "동대문 스위프트"; // 기본 제목을 정의합니다.
export const DEFAULT_DESCRIPTION = "동대문 스위프트"; // 기본 설명을 정의합니다.

interface ISeoHeadProps {
  title?: string; // 페이지 제목
  description?: string; // 페이지 설명
}

const SeoHead = ({ title, description }: ISeoHeadProps) => {
  return (
    <Head>
      {/* 페이지의 <title> 태그를 설정합니다. */}
      <title>{title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}</title>
      {/* 페이지의 <meta> 태그에서 설명(description)을 설정합니다. */}
      <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
    </Head>
  );
};

export default React.memo(SeoHead); // React.memo를 사용하여 SeoHead 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
