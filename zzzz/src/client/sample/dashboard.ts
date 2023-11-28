import useSWR from "swr";
// 'swr' 라이브러리에서 'useSWR' 훅을 가져옵니다. 
// 이 훅은 데이터 가져오기, 캐싱 및 재검증을 위한 기능을 제공합니다.

export interface IDashboardResponse {
  visitor: {
    value: number;
    rate: number;
  };
  order: {
    value: number;
    rate: number;
  };
  income: {
    value: number;
    rate: number;
  };
}
// 'IDashboardResponse' 인터페이스를 정의합니다. 
// 대시보드 응답 데이터의 구조를 나타내며, 방문자(visitor), 주문(order), 수입(income)과 각각의 값(value) 및 비율(rate)을 포함합니다.

export const useDashboard = () => {
  return useSWR<IDashboardResponse>(`/api/sample/dashboard`);
};
// 'useDashboard' 훅을 정의합니다. 
// 'useSWR'을 사용하여 '/api/sample/dashboard' 경로에서 대시보드 데이터를 가져옵니다. 
// 이 데이터는 'IDashboardResponse' 인터페이스 형식을 따릅니다.
