import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.
import style from "./form.module.css"; // CSS 모듈 스타일을 가져옵니다.

interface IFormSearchProps {} // IFormSearchProps 인터페이스 정의 (현재는 비어 있음)

// FormSearch 컴포넌트 정의
const FormSearch = ({ children }: PropsWithChildren<IFormSearchProps>) => {
  // PropsWithChildren을 사용하여 children prop의 타입을 정의합니다.
  // 이 컴포넌트는 자식 요소(children)를 받아서 렌더링합니다.

  return <div className={style["search-form"]}>{children}</div>;
  // CSS 모듈의 "search-form" 클래스를 사용하여 스타일링된 div를 반환합니다.
  // 이 div는 자식 요소들을 포함합니다.
};

export default React.memo(FormSearch); 
// React.memo를 사용하여 FormSearch 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
