import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.

interface IDefaultTableBtnProps {
  className?: string; // 컴포넌트에 적용할 추가적인 CSS 클래스명 (선택적).
}

// DefaultTableBtn 컴포넌트 정의
const DefaultTableBtn = ({ children, className }: PropsWithChildren<IDefaultTableBtnProps>) => {
  return <div className={`my-5 flex-item-list ${className}`}>{children}</div>;
  // div 요소를 반환합니다. 여기에는 두 개의 CSS 클래스가 적용됩니다:
  // - 'my-5': 위쪽과 아래쪽 마진을 설정합니다.
  // - 'flex-item-list': 플렉스 아이템 목록을 위한 스타일링을 제공합니다 (이 클래스는 외부에서 정의되어야 합니다).
  // - `${className}`: 추가적인 사용자 정의 클래스명을 적용할 수 있습니다.
  // 이 div는 children으로 전달된 요소들을 포함합니다.
};

export default React.memo(DefaultTableBtn); 
// React.memo를 사용하여 DefaultTableBtn 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
