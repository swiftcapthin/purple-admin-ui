import { ChevronRight } from "lucide-react"; // 'lucide-react' 라이브러리에서 ChevronRight 아이콘을 가져옵니다.
import Link from "next/link"; // Next.js의 Link 컴포넌트를 가져옵니다. 이 컴포넌트는 클라이언트 사이드 네비게이션을 제공합니다.
import { useRouter } from "next/router"; // Next.js의 useRouter 훅을 가져옵니다. 이 훅은 라우팅 정보에 접근할 수 있게 해줍니다.
import React from "react"; // React 라이브러리를 가져옵니다.
import { IMenu, isEqualPath } from "."; // 현재 디렉토리에서 IMenu 인터페이스와 isEqualPath 함수를 가져옵니다.

interface INavItemProps {
  item: IMenu; // 네비게이션 아이템의 속성을 정의합니다.
}

const NavItem = ({ item }: INavItemProps) => {
  const router = useRouter(); // 현재 라우터 객체를 가져옵니다.

  return (
    <li>
      <Link
        href={{
          pathname: item.link?.path ?? "/",
          query: item.link?.query,
        }}
        className={(item.isActive || isEqualPath)(router, item.link) ? "active" : ""}
      >
        {item.icon}
        <span className="cursor-pointer grow">{item.name}</span>
        <ChevronRight className="w-6 h-6 text-white active-check" />
      </Link>
    </li>
  );
};

export default React.memo(NavItem);// React.memo를 사용하여 NavItem 컴포넌트를 내보냅니다.
// 이는 props가 변경되지 않는 한, NavItem 컴포넌트의 불필요한 렌더링을 방지합니다.
