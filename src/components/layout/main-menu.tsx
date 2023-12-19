import { Divider } from "antd";
import { Heart, Home, Monitor, Package2, Truck } from "lucide-react";
import React from "react";
import Menu, { IMenu } from "./nav";

const mainMenuData: IMenu[] = [
  {
    id: "home",
    name: "홈",
    icon: <Home className="w-5 h-5" />,
    link: {
      path: "/",
    },
  },
  {
    id: "product",
    name: "내 상품 관리",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "사입/검수 요청하기",
        link: {
          path: "/sample/product/list",
        },
        
      },
      {
        id: "productList",
        name: "사입/검수 처리내역",
        link: {
          path: "/sample/product/list",
        },
        
      },
      {
        id: "productList",
        name: "입고/재고 관리",
        link: {
          path: "ㅇㅇ",
        },
        
      },
    ],
  },
  {
    id: "product",
    name: "택배관리",
    icon: <Truck  className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "택배 발송요청",
        link: {
          path: "/sample/product/list",
        },
        
      },
      {
        id: "productList",
        name: "택배 발송내역",
        link: {
          path: "ㅇㅇ",
        },
        
      },
            {
        id: "productList",
        name: "반품 접수하기",
        link: {
          path: "ㅇㅇ",
        },
        
      },
    ],
  },
   {
    id: "Heart",
    name: "고객 만족도 높이기!",
    icon: <Heart className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "포장 추가하기",
        link: {
          path: "/sample/product/list",
        },
        
      },
    ],
  },
];

const devMenuData: IMenu[] = [
  {
    id: "dev",
    name: "사용 가이드",
    icon: <Monitor className="w-5 h-5" />,
    submenu: [
      {
        name: "폼",
        link: {
          path: "/sample/form",
        },
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <>
      <>
        <Divider orientation="left" plain>
          메인
        </Divider>

        <Menu data={mainMenuData} />
      </>
      <>
        <Divider orientation="left" plain>
          개발
        </Divider>

        <Menu data={devMenuData} />
      </>
    </>
  );
};

export default React.memo(MainMenu);
