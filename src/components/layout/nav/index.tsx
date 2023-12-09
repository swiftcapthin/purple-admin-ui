import { NextRouter } from "next/router"; // Next.js 라우터 타입을 가져옵니다.
import { ParsedUrlQueryInput } from "querystring"; // querystring 모듈의 타입을 가져옵니다.
import React from "react"; // React 라이브러리를 가져옵니다.
import NavMenu from "./nav-menu"; // NavMenu 컴포넌트를 가져옵니다.
import style from "./nav.module.css"; // CSS 모듈 스타일을 가져옵니다.
interface INavProps {
  data: IMenu[]; // INavProps 인터페이스는 네비게이션 메뉴 데이터의 배열을 정의합니다.
}

export interface IMenu {
  // 메뉴 항목을 정의하는 인터페이스입니다.
  id?: string /* 식별자가 없으면 name으로 대체됩니다. */;
  name: string; // 메뉴 이름.
  link?: {
    path: string; // 메뉴 항목의 경로.
    query?: ParsedUrlQueryInput; // 경로의 쿼리 파라미터.
  };
  icon?: React.ReactNode; // 메뉴 아이콘 컴포넌트.
  isActive?: (router: NextRouter, link: IMenu["link"]) => boolean; // 현재 경로와 메뉴 항목의 경로가 일치하는지 확인하는 함수.
  submenu?: IMenu[]; // 하위 메뉴 항목 배열.
}

export const isEqualPath = (router: NextRouter, link: IMenu["link"]) => {
  // 현재 라우터의 경로와 메뉴 항목의 경로가 일치하는지 비교하는 함수입니다.
  return (
    router.pathname === link?.path &&
    Object.keys(link.query || {}).every((k) => String(link.query?.[k]) === router.query[k])
  );
};

const Nav = ({ data }: INavProps) => {
  // 네비게이션 컴포넌트입니다. props로 받은 메뉴 데이터를 리스트로 렌더링합니다.
  return (
    <ul className={style.menu}>
      {data.map((menu) => {
        // 받은 메뉴 데이터를 map 함수를 사용하여 리스트 아이템으로 변환합니다.
        return <NavMenu key={menu.id || menu.name} menu={menu} />;
        // 각 메뉴 아이템에 대해 NavMenu 컴포넌트를 렌더링합니다. key는 React가 리스트 아이템을 식별하는 데 사용합니다.
      })}
    </ul>
  );
};

export default React.memo(Nav); // React.memo를 사용하여 Nav 컴포넌트를 내보냅니다. 
// 이는 props가 변경되지 않는 한, Nav 컴포넌트의 불필요한 렌더링을 방지합니다.
