import { IDashboardResponse } from "@/client/sample/dashboard"; // 대시보드 응답 데이터 타입을 가져옵니다.
import { ArrowDown, ArrowUp } from "lucide-react"; // lucide-react 라이브러리에서 상하 화살표 아이콘을 가져옵니다.
import React from "react"; // React 라이브러리를 가져옵니다.
import CountUp from "react-countup"; // 숫자가 증가하는 애니메이션을 표시하는 라이브러리를 가져옵니다.

interface IStatisticSampleProps {
  data: IDashboardResponse; // 대시보드 데이터를 나타내는 프롭스를 정의합니다.
}

const renderChangeRate = (value: number) => {
  // 변화율을 표시하는 함수입니다.
  if (value > 0) {
    // 변화율이 양수일 경우
    return (
      // 상승을 나타내는 UI를 반환합니다.
      <span className="flex items-center px-2 py-1 text-sm text-white rounded-full bg-emerald">
        <ArrowUp className="w-5 h-4" />
        {value}%
      </span>
    );
  } else if (value < 0) {
    // 변화율이 음수일 경우
    return (
      <span className="flex items-center px-2 py-1 text-sm text-white rounded-full bg-alizarin">
        <ArrowDown className="w-5 h-4" />
        {value}%
      </span>
    );
  }
};

const StatisticSample = ({ data }: IStatisticSampleProps) => {
   // 대시보드 통계를 표시하는 컴포넌트입니다.
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 border rounded-lg ">
          <div>방문자</div>
          <div className="mt-3">
            <div className="flex items-center mt-3">
              <div className="text-2xl font-semibold grow">
                <CountUp end={data.visitor.value} separator="," />명
              </div>
              <div>{renderChangeRate(data.visitor.rate)}</div>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-lg ">
          <div>주문</div>
          <div className="flex items-center mt-3">
            <div className="text-2xl font-semibold grow">
              <CountUp end={data.order.value} separator="," />건
            </div>
            <div>{renderChangeRate(data.order.rate)}</div>
          </div>
        </div>
        <div className="p-5 border rounded-lg ">
          <div>매출</div>
          <div className="flex items-center mt-3">
            <div className="text-2xl font-semibold grow">
              <CountUp end={data.income.value} separator="," />원
            </div>
            <div>{renderChangeRate(data.income.rate)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(StatisticSample); // React.memo를 사용하여 StatisticSample 컴포넌트를 최적화합니다.

