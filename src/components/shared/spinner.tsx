import React from "react"; // React 라이브러리를 가져옵니다.
import style from "./spinner.module.css"; // CSS 모듈 스타일을 가져옵니다.

interface ISpinnerProps {
  color?: "gray"; // 스피너의 색상을 지정할 수 있는 선택적 프로퍼티 (기본값은 "gray").
}

// Spinner 컴포넌트 정의
const Spinner = ({ color = "gray" }: ISpinnerProps) => {
  return (
    <div className={style.spinner}>
      {/* 스피너를 렌더링할 div. CSS 모듈의 spinner 클래스를 적용합니다. */}
      <div className={`mx-auto lds-spinner lds-spinner-${color}`}>
        {/* lds-spinner 클래스를 사용한 스피너의 실제 애니메이션 부분. 색상은 color prop에 따라 결정됩니다. */}
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        {/* 이 div들은 스피너의 각 섹션을 나타냅니다. 애니메이션은 CSS에서 처리됩니다. */}
      </div>
    </div>
  );
};

export default React.memo(Spinner); 
// React.memo를 사용하여 Spinner 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
