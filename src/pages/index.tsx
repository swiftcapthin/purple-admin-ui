// 필요한 모듈과 컴포넌트를 임포트합니다.
import { useDashboard } from "@/client/sample/dashboard"; // 대시보드 데이터 가져오기
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout"; // 기본 레이아웃 설정
import ImageComponent from '@/components/layout/home-benner';
import CalendarSample from "@/components/page/index/calendar-sample"; // 달력 샘플 컴포넌트
import StatisticSample from "@/components/page/index/statistic-sample"; // 통계 샘플 컴포넌트
import { useAuth } from "@/lib/auth/auth-provider"; // 인증 제공자 사용
import { Alert, Divider, Skeleton } from "antd"; // Ant Design UI 컴포넌트

// 페이지 헤더 설정
const pageHeader: IPageHeader = {
  title: "",
  adImageUrl: undefined
};

// 인덱스 페이지 컴포넌트 정의
const IndexPage: IDefaultLayoutPage = () => {
  // 인증 정보 및 대시보드 데이터를 가져옵니다.
  const { session } = useAuth();
  const { data, error } = useDashboard();

  return (
    <>
      
      <ImageComponent />
      {/* 사용자 환영 메시지 */}
      <h2 className="title">👋 {session.user.name || "관리자"}님 안녕하세요!</h2>
      
      {/* 통계 데이터 또는 로딩/오류 메시지 표시 */}
      <div className="my-5">
        {data ? (
          <StatisticSample data={data} /> // 통계 데이터를 표시합니다.
        ) : error ? (
          <Alert message="대시보드 API 호출 중 오류가 발생했습니다." type="warning" /> // 오류 메시지를 표시합니다.
        ) : (
          <Skeleton /> // 데이터 로딩 중 스켈레톤 표시
        )}
      </div>
      

      <Divider />
    {/* Flexbox 스타일을 인라인으로 적용하여 왼쪽에 고정 */}
    <div style={{
      display: 'flex',
      flexDirection: 'row', // 기본적으로 가로 방향
      flexWrap: 'wrap', // 내용이 넘칠 경우 다음 줄로 이동
      justifyContent: 'flex-start',
      width: '100%'
    }}>
      <div> {/* 최소 너비 설정 */}
        <h3 className="title">달력</h3>
        <CalendarSample />
      </div>
      
    </div>
    
    </>
    
  );
  
};

IndexPage.getLayout = getDefaultLayout; // 페이지의 레이아웃 설정
IndexPage.pageHeader = pageHeader; // 페이지 헤더 설정

export default IndexPage; // 페이지 컴포넌트 내보내기
