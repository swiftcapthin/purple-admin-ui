import { motion } from "framer-motion"; // 애니메이션을 위한 라이브러리입니다.
import { ChevronRight, Menu as MenuIcon } from "lucide-react"; // 아이콘 라이브러리에서 필요한 아이콘을 가져옵니다.
import { NextComponentType, NextPage } from "next"; // Next.js의 컴포넌트와 페이지 타입을 가져옵니다.
import { useRouter } from "next/router"; // 페이지 라우팅을 위한 훅입니다.
import { useCallback, useEffect, useState } from "react"; // React의 훅을 가져옵니다.
import MainMenu from "./main-menu"; // 메인 메뉴 컴포넌트입니다.
import MenuBtn from "./menu-btn"; // 메뉴 버튼 컴포넌트입니다.
import PageHeader from "./page-header"; // 페이지 헤더 컴포넌트입니다.
import Profile from "./profile"; // 프로필 컴포넌트입니다.
import Sidebar from "./sidebar"; // 사이드바 컴포넌트입니다.

// 페이지 헤더 인터페이스입니다.
export interface IPageHeader {
  adImageUrl: any;
  title: string;
}

// 기본 레이아웃을 위한 페이지 타입입니다. NextPage를 확장하고, 추가적인 getLayout 함수와 pageHeader 속성을 포함합니다.
export type IDefaultLayoutPage<P = {}> = NextPage<P> & {
  getLayout(page: NextComponentType, props: unknown): React.ReactNode;
  pageHeader?: IPageHeader;
};

interface IDefaultLayoutProps {
  Page: IDefaultLayoutPage; // 페이지 컴포넌트를 받습니다.
}

const DefaultLayout = ({ Page, ...props }: IDefaultLayoutProps) => {
  // 사이드바와 팝업 메뉴의 표시 여부를 상태로 관리합니다.
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [isShowPopupMenu, setIsShowPopupMenu] = useState(false);
  const router = useRouter();

  // 사이드바를 표시하거나 숨기는 함수입니다.
  const showSidebar = useCallback(() => {
    setIsShowSidebar(true);
  }, []);
  const hideSidebar = useCallback(() => {
    setIsShowSidebar(false);
  }, []);

  // 팝업 메뉴를 활성화/비활성화하는 함수입니다.
  const setActive = useCallback((val: boolean) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setIsShowPopupMenu(val);
  }, []);

  // 라우터의 경로가 변경될 때마다 팝업 메뉴를 비활성화합니다.
  useEffect(() => {
    setActive(false);
  }, [router.asPath, setActive]);

  return (
    <div>
       {/* 사이드바 컴포넌트를 포함하는 섹션입니다. */}
      <Sidebar isShowSidebar={isShowSidebar} hideSidebar={hideSidebar} />

      {/* mobile navigation */}
      {/* 모바일 네비게이션 부분입니다. */}
      <div className="z-40 flex items-center justify-between px-5 border-b h-14 sm:hidden">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-turquoise">P</div>
          <div className="ml-3 text-lg text-black"> </div>
        </div>
        <div>
          <MenuBtn isActive={isShowPopupMenu} setActive={setActive} />
        </div>
      </div>
      
      {/* 페이지의 주요 콘텐츠를 렌더링하는 섹션입니다. */}
      <motion.div
        animate={isShowPopupMenu ? "open" : "closed"}
        initial={{ display: "none" }}
        variants={{
          open: { display: "block", opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-10px", transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.15 }}
        className="fixed bottom-0 left-0 right-0 z-30 w-full p-5 overflow-auto bg-white"
        style={{ top: "3.5rem" }}
      >
        <Profile />
        <MainMenu />
      </motion.div>

      {/* 사이드바를 토글하는 버튼입니다. !홈 화면 api를 호출하네*/}
      <div className={`sm:h-full sm:overflow-auto ${isShowSidebar ? "sm:ml-72" : ""}`}>
        {Page.pageHeader ? (
          <PageHeader value={Page.pageHeader} />
        ) : !isShowSidebar ? (
          <div className="pt-5 pl-7">
            <button
              className="inline-flex items-center justify-center h-12 px-3 transition-all duration-300 rounded hover:bg-gray-200"
              onClick={showSidebar}
            >
              <MenuIcon className="w-5 h-5" />
              <span className="px-2">메뉴 열기</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <></>
        )}
        <section className="px-5 pb-5 sm:px-10">
          <Page {...props} />
        </section>
        {!isShowSidebar ? (
          <div className="fixed bottom-5 left-5">
            <button
              className="flex items-center justify-center w-12 h-12 bg-white border rounded opacity-50 enable-transition hover:opacity-100"
              onClick={showSidebar}
            >
              <MenuIcon className="w-5 h-5" />
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const getDefaultLayout = (Page: IDefaultLayoutPage, props: Record<string, unknown>) => {
  return <DefaultLayout {...props} Page={Page} />;
};
