// 기본 레이아웃과 페이지 헤더 설정을 위한 컴포넌트와 타입을 가져옵니다.
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
// 상품 리스트와 검색 컴포넌트를 가져옵니다.
import ProductList from "@/components/page/sample/product/product-list";
import ProductSearch from "@/components/page/sample/product/product-search";

// 페이지 헤더의 제목을 설정합니다.
const pageHeader: IPageHeader = {
  title: "내 주문 관리",
};
// 상품 리스트 페이지 컴포넌트를 정의합니다.
const ProductListPage: IDefaultLayoutPage = () => {
  // 상품 검색 및 리스트 컴포넌트를 렌더링합니다.
  return (
    <>
      <ProductSearch />
      <ProductList />
    </>
  );
};

// 페이지의 레이아웃과 헤더를 설정합니다.
ProductListPage.getLayout = getDefaultLayout;
ProductListPage.pageHeader = pageHeader;

// 컴포넌트를 내보냅니다.
export default ProductListPage;