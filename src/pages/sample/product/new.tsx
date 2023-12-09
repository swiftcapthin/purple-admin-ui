// 기본 레이아웃과 페이지 헤더 설정을 위한 컴포넌트와 타입을 가져옵니다.
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
// 상품 양식 컴포넌트를 가져옵니다.
import ProductForm from "@/components/page/sample/product/product-form";

// 페이지 헤더의 제목을 설정합니다.
const pageHeader: IPageHeader = {
  title: "주문 작성",
};

// 새로운 상품 생성 페이지 컴포넌트를 정의합니다.
const ProductNewPage: IDefaultLayoutPage = () => {
  // 상품 양식 컴포넌트를 렌더링하고, 초기 상태를 "NOTSALE"로 설정합니다.
  return <ProductForm initialValues={{ status: "NOTSALE" }} />;
};

// 페이지의 레이아웃과 헤더를 설정합니다.
ProductNewPage.getLayout = getDefaultLayout;
ProductNewPage.pageHeader = pageHeader;

// 컴포넌트를 내보냅니다.
export default ProductNewPage;
