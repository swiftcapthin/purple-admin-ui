import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.

// IFormGroupProps 인터페이스 정의
interface IFormGroupProps {
  title?: string; // 그룹의 제목 (선택적)
  description?: string; // 그룹의 설명 (선택적)
}

// FormGroup 컴포넌트 정의
const FormGroup = ({ title, description, children }: PropsWithChildren<IFormGroupProps>) => {
  // PropsWithChildren을 사용하여 children prop의 타입을 정의합니다.
  // 이 컴포넌트는 제목, 설명, 그리고 자식 요소들(children)을 받아서 렌더링합니다.

  return (
    <div className="mb-0 lg:flex lg:mb-3">
      {/* 컨테이너 div. lg 사이즈에서 flex 레이아웃을 적용합니다. */}
      <div className="flex-none w-full mt-1 mb-3 lg:w-48 lg:mb-0">
        {/* 제목과 설명을 포함하는 div */}
        <div>{title}</div> {/* 제목을 표시합니다. */}
        <div className="text-gray-400">{description}</div> {/* 설명을 회색 텍스트로 표시합니다. */}
      </div>
      <div className="min-w-0 mb-5 grow lg:-mb-3">{children}</div>
      {/* 자식 요소들을 렌더링하는 div. grow 클래스를 사용하여 필요한 공간을 채웁니다. */}
    </div>
  );
};

export default React.memo(FormGroup); 
// React.memo를 사용하여 FormGroup 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
