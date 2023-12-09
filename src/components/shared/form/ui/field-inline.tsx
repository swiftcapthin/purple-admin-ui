import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.

// FieldInline 컴포넌트 정의
const FieldInline = ({ children }: PropsWithChildren<{}>) => {
  // PropsWithChildren을 사용하여 children prop의 타입을 정의합니다.
  // 이 컴포넌트는 자식 요소(children)를 받아서 렌더링합니다.

  return (
    <div className="flex flex-wrap items-center gap-2">
      {children}
      {/* 자식 요소들을 flex 컨테이너 안에 렌더링합니다.
           - 'flex': 자식 요소들을 플렉스 아이템으로 배치합니다.
           - 'flex-wrap': 자식 요소들이 컨테이너 너비를 초과할 경우 줄바꿈합니다.
           - 'items-center': 자식 요소들을 세로 중앙에 정렬합니다.
           - 'gap-2': 자식 요소들 사이에 간격을 설정합니다. */}
    </div>
  );
};

export default React.memo(FieldInline);
// React.memo를 사용하여 FieldInline 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
