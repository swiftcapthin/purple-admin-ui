import React from "react"; // React 라이브러리를 가져옵니다.

// IDefaultBtnGroupProps 인터페이스 정의
interface IDefaultBtnGroupProps {
  children: React.ReactNode; // 자식 요소(버튼 등). ReactNode 타입으로 어떤 React 요소든 포함할 수 있습니다.
  align?: "start" | "end" | "center"; // 버튼 그룹의 정렬 방식 (시작, 끝, 중앙). 기본값은 "start"입니다.
  className?: string; // 추가적인 CSS 클래스명 (선택적).
}

// DefaultBtnGroup 컴포넌트 정의
const DefaultBtnGroup = ({ className, children, align = "start" }: IDefaultBtnGroupProps) => {
  return (
    <div className={`flex flex-wrap gap-2 mt-5 justify-${align} ${className || ""}`}>
      {children}
      {/* children으로 전달된 요소들을 flex 컨테이너 안에 렌더링합니다.
           - 'flex': 자식 요소들을 플렉스 아이템으로 배치합니다.
           - 'flex-wrap': 자식 요소들이 컨테이너 너비를 초과할 경우 줄바꿈합니다.
           - 'gap-2': 자식 요소들 사이에 간격을 설정합니다.
           - 'mt-5': 위쪽 마진을 설정합니다.
           - `justify-${align}`: 버튼 그룹의 정렬을 align 값에 따라 설정합니다. */}
    </div>
  );
};

export default React.memo(DefaultBtnGroup); 
// React.memo를 사용하여 DefaultBtnGroup 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
