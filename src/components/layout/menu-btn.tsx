import React from "react"; // React 라이브러리를 가져옵니다.
import style from "./default-layout.module.css"; // CSS 모듈 스타일을 가져옵니다.

interface IMenuBtnProps {
  isActive: boolean; // 버튼의 활성화 상태를 나타내는 프롭입니다.
  setActive: (val: boolean) => void; // 활성화 상태를 설정하는 함수를 나타내는 프롭입니다.
}

const MenuBtn = ({ isActive, setActive }: IMenuBtnProps) => {
  return (
    <button className="p-3 -mr-2" onClick={() => setActive(!isActive)}>
      {/* 버튼을 클릭하면 'isActive' 상태를 토글합니다. */}
      <div className={style["menu-wrapper"]}>
        {/* 메뉴 바를 구성하는 세 개의 div 요소입니다. 각각의 상태에 따라 다른 스타일이 적용됩니다. */}
        <div className={`${style["menu-bar"]} ${style["menu-top"]} ${isActive ? "active" : ""}`} />
        <div className={`${style["menu-bar"]} ${style["menu-middle"]} ${isActive ? "active" : ""}`} />
        <div className={`${style["menu-bar"]} ${style["menu-bottom"]} ${isActive ? "active" : ""}`} />
      </div>
    </button>
  );
};

export default React.memo(MenuBtn); // React.memo를 사용하여 MenuBtn 컴포넌트를 최적화합니다. 
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
