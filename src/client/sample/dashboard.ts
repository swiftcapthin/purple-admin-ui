import useSWR from "swr"; // SWR 라이브러리를 가져옵니다. SWR은 데이터 패칭을 위한 React 훅입니다.

export interface IDashboardResponse {
  visitor: {
    value: number; // 방문자 수
    rate: number;  // 방문자 변화율(백분율)
  };
  order: {
    value: number; // 주문 수
    rate: number;  // 주문 변화율(백분율)
  };
  income: {
    value: number; // 수입
    rate: number;  // 수입 변화율(백분율)
  };
} // 대시보드 데이터의 구조를 정의하는 TypeScript 인터페이스입니다. 방문자, 주문, 수입 데이터와 각각의 변화율을 포함합니다.

export const useDashboard = () => {
  return useSWR<IDashboardResponse>(`/api/sample/dashboard`);
}; // 대시보드 데이터를 가져오기 위한 커스텀 훅입니다. '/api/sample/dashboard' 엔드포인트로부터 IDashboardResponse 타입의 데이터를 가져옵니다.
