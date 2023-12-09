import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.

interface IFormSectionProps {
  title?: string; // 섹션의 제목 (선택적)
  description?: string; // 섹션의 설명 (선택적)
}

// FormSection 컴포넌트 정의
const FormSection = ({ title, description, children }: PropsWithChildren<IFormSectionProps>) => {
  // PropsWithChildren을 사용하여 children prop의 타입을 정의합니다.
  // 이 컴포넌트는 제목, 설명, 그리고 자식 요소들(children)을 받아서 렌더링합니다.

  return (
    <div className="w-full pt-5 pb-4 pl-3 pr-3 mb-5 border border-gray-200 rounded-lg shadow-sm">
      {/* 테두리와 그림자가 있는 컨테이너 div */}
      {title ? <h3 className="pl-4 pr-4 text-xl">{title}</h3> : null}
      {/* 제목이 있으면 표시합니다. */}
      {description ? (
        <div className="pb-5 pl-4 pr-4 mt-1 mb-6 text-gray-400 border-b border-gray-200">
          {description}
        </div>
      ) : null}
      {/* 설명이 있으면 표시합니다. */}
      
      <div className="pl-4 pr-4">{children}</div>
      {/* 자식 요소들을 렌더링하는 div */}
    </div>
  );
};

export default React.memo(FormSection); 
// React.memo를 사용하여 FormSection 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
