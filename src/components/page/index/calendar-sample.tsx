import { Badge, BadgeProps, Calendar, CalendarProps } from "antd"; // Ant Design 라이브러리에서 필요한 컴포넌트와 타입을 가져옵니다.
import { Dayjs } from "dayjs"; // dayjs 라이브러리에서 Dayjs 타입을 가져옵니다.
import React from "react"; // React 라이브러리를 가져옵니다.

// 특정 날짜에 대한 이벤트 데이터를 반환하는 함수입니다.
const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "외부 미팅" },
        { type: "success", content: "내부 미팅" },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "외부 미팅" },
        { type: "success", content: "내부 미팅" },
        { type: "error", content: "미팅 1" },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "외부 미팅" },
        { type: "success", content: "내부 미팅" },
        { type: "error", content: "미팅 1." },
        { type: "error", content: "미팅 2." },
        { type: "error", content: "미팅 3." },
        { type: "error", content: "미팅 4." },
      ];
       // 각 날짜에 해당하는 이벤트 데이터를 정의합니다.
      // 예시로 8, 10, 15일에 다양한 이벤트를 설정합니다.
      break;
    default:
            // 기본값은 빈 배열입니다.

  }
  return listData || [];
};

// 특정 월에 대한 데이터를 반환하는 함수입니다.
const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarSample = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
            // 월 셀에 표시될 내용입니다.
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

        // 날짜 셀에 표시될 이벤트 리스트입니다.
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
       // 날짜 셀에 표시될 이벤트 리스트입니다.
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps["status"]} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

// 캘린더의 셀을 렌더링하는 함수입니다.
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};
export default React.memo(CalendarSample); // React.memo를 사용하여 CalendarSample 컴포넌트를 최적화합니다.

