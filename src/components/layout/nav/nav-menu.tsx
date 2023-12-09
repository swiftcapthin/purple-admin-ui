import { ChevronDown, ChevronUp } from "lucide-react"; // 'lucide-react'에서 아래/위 체브론 아이콘을 가져옵니다.
import { useRouter } from "next/router"; // Next.js의 라우터 훅을 가져옵니다.
import React, { useState } from "react"; // React와 상태 관리 훅 useState를 가져옵니다.
import { IMenu, isEqualPath } from "."; // 현재 디렉토리에서 IMenu 인터페이스와 isEqualPath 함수를 가져옵니다.
import NavItem from "./nav-item"; // NavItem 컴포넌트를 가져옵니다.

interface INavMenuProps {
  menu: IMenu; // 네비게이션 메뉴의 속성을 정의합니다.
}
const NavMenu = ({ menu }: INavMenuProps) => {
  const router = useRouter();
  const [isShowSubMenu, setIsShowSubMenu] = useState(
    menu.submenu && menu.submenu.length > 0 && menu.submenu.find((v) => (v.isActive || isEqualPath)(router, v.link))
      ? true
      : false
  ); // 하위 메뉴의 표시 여부를 결정하는 상태입니다. 현재 경로가 하위 메뉴 중 하나와 일치하면 초기값을 true로 설정합니다.


  if (menu.submenu) {
    return (
      <li>
        <a onClick={() => setIsShowSubMenu(!isShowSubMenu)}>
          {menu.icon}
          <span className="cursor-pointer grow">{menu.name}</span>
          {menu.submenu && menu.submenu.length > 0 ? (
            isShowSubMenu ? (
              <ChevronUp className="w-6 h-6 text-gray-500" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-500" />
            )
          ) : (
            <></>
          )}
        </a>
        <ul className={isShowSubMenu ? "block" : "hidden"}>
          {menu.submenu.map((sub) => {
            return <NavItem key={sub.name} item={sub} />;
          })}
        </ul>
      </li>
    );
  }

   return <NavItem item={menu} />; // 하위 메뉴가 없는 경우, 단일 NavItem 컴포넌트를 렌더링합니다.
};

export default React.memo(NavMenu); // React.memo를 사용하여 NavMenu 컴포넌트를 내보냅니다.
// 이는 props가 변경되지 않는 한, NavMenu 컴포넌트의 불필요한 렌더링을 방지합니다.
