import { useProduct } from "@/client/sample/product"; // 상품 데이터를 가져오는 훅을 가져옵니다.
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout"; // 레이아웃 설정을 위한 컴포넌트와 타입을 가져옵니다.
import ProductForm from "@/components/page/sample/product/product-form"; // 상품 수정 양식 컴포넌트를 가져옵니다.
import { Alert, Skeleton } from "antd"; // 안테 디자인의 Alert와 Skeleton 컴포넌트를 가져옵니다.
import { useRouter } from "next/router"; // Next.js의 라우터 훅을 가져옵니다.

// 페이지 헤더 설정
const pageHeader: IPageHeader = {
  title: "상품수정",
};

// 상품 수정 페이지 컴포넌트를 정의합니다.
const ProductEditPage: IDefaultLayoutPage = () => {
  const router = useRouter(); // 라우터 인스턴스를 가져옵니다.
  const { data, error, isLoading, isValidating } = useProduct(router.query.id as string);
  // URL 쿼리에서 상품 ID를 가져와 해당 상품 데이터를 로딩합니다.

  if (error) {
    // 데이터 로딩 중 오류가 발생한 경우
    return <Alert message="데이터 로딩 중 오류가 발생했습니다." type="warning" className="my-5" />;
  }

  if (!data || isLoading || isValidating) {
    // 데이터 로딩 중이거나 유효성 검사 중인 경우
    return <Skeleton className="my-5" />;
    // 로딩 스켈레톤을 표시합니다.
  }

  // 데이터 로딩이 완료되면 상품 수정 양식을 표시합니다.
  return <ProductForm id={router.query.id as string} initialValues={data.data} />;
};

// 레이아웃과 페이지 헤더를 설정합니다.
ProductEditPage.getLayout = getDefaultLayout;
ProductEditPage.pageHeader = pageHeader;

export default ProductEditPage; // 컴포넌트를 내보냅니다.
