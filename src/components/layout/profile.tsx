import { useAuth } from "@/lib/auth/auth-provider"; // 인증 관련 커스텀 훅을 가져옵니다.
import { Dropdown, MenuProps } from "antd"; // Ant Design의 드롭다운과 메뉴 프롭 타입을 가져옵니다.
import { ChevronDown, LogOut, User } from "lucide-react"; // lucide-react에서 필요한 아이콘을 가져옵니다.
import { signOut } from "next-auth/react"; // next-auth 라이브러리에서 로그아웃 함수를 가져옵니다.
import Link from "next/link"; // Next.js의 Link 컴포넌트를 가져옵니다.
import React, { useCallback } from "react"; // React와 useCallback 훅을 가져옵니다.

const Profile = () => {
  const { session } = useAuth(); // 세션 정보를 가져오는 훅을 사용합니다.

  const handleLogoutClick = useCallback(async () => {
    signOut({ callbackUrl: "/login" }); // 로그아웃 함수를 정의합니다. 로그아웃 후에는 로그인 페이지로 이동합니다.
  }, []);

  const items: MenuProps["items"] = [
    // 드롭다운 메뉴 아이템을 정의합니다.
    {
      label: (
        <Link href="/sample/profile" className="min-w-[8rem] link-with-icon">
          <User width={16} height={16} />내 프로필
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <a onClick={handleLogoutClick} className="link-with-icon">
          <LogOut width={16} height={16} />
          로그아웃
        </a>
      ),
      key: "1",
    },
  ];

  return (
    <>
      <div className="ml-2">셀러 이름</div>
      <Dropdown menu={{ items }} trigger={["click"]}>
        {/* 사용자 이름과 드롭다운을 렌더링합니다. */}
        <button className="flex items-center px-2 text-gray-600 rounded hover:bg-gray-200 enable-transition">
          <span className="sm:max-w-[10rem] ellipsis-text">{session.user.login}</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </Dropdown>
    </>
  );
};

export default React.memo(Profile); // React.memo를 사용하여 Profile 컴포넌트를 최적화합니다.
