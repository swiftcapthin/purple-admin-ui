import { ChevronLeft, MenuIcon } from "lucide-react"; // lucide-react 라이브러리에서 필요한 아이콘을 가져옵니다.
import Link from "next/link"; // Next.js의 Link 컴포넌트를 가져옵니다.
import React from "react"; // React 라이브러리를 가져옵니다.
import style from "./default-layout.module.css"; // CSS 모듈 스타일을 가져옵니다.
import MainMenu from "./main-menu"; // 메인 메뉴 컴포넌트를 가져옵니다.
import Profile from "./profile"; // 프로필 컴포넌트를 가져옵니다.

interface ISidebarProps {
  isShowSidebar: boolean; // 사이드바의 표시 여부를 나타내는 프롭입니다.
  hideSidebar: () => void; // 사이드바를 숨기는 함수를 나타내는 프롭입니다.
}

const Sidebar = ({ isShowSidebar, hideSidebar }: ISidebarProps) => {
  // 사이드바 컴포넌트입니다.
  return (
    <aside className={`hidden ${style.sidebar} ${isShowSidebar ? "sm:block" : "hidden"}`}>
      {/* 사이드바의 가시성을 제어하는 클래스를 적용합니다. */}
      <div className="flex flex-col h-full">
        {/* 사이드바의 상단 부분 */}
        <div className="flex">
          <div className="shrink-0">
            <Link href="/" className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-turquoise">
              P {/* 로고 또는 브랜드 표시 */}
            </Link>
          </div>
          <div className="ml-1 grow">
            <Profile /> {/* 사용자 프로필 표시 */}
          </div>
        </div>
        <div className="overflow-auto grow">
          <MainMenu /> {/* 메인 메뉴 표시 */}
        </div>
        {/* 사이드바를 숨기는 버튼 */}
        <div>
          <div className="flex justify-end">
            <button
              className="flex items-center justify-center w-12 h-12 rounded enable-transition hover:bg-gray-200"
              onClick={hideSidebar}
            >
              <ChevronLeft className="w-3 h-3" /> {/* 왼쪽 화살표 아이콘 */}
              <MenuIcon className="w-5 h-5" /> {/* 메뉴 아이콘 */}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar); // React.memo를 사용하여 Sidebar 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
