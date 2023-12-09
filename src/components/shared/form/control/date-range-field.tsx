import { DatePicker, Radio, RadioChangeEvent } from "antd"; // Ant Design에서 DatePicker와 Radio 컴포넌트를 가져옵니다.
import dayjs from "dayjs"; // dayjs 라이브러리를 가져옵니다. 날짜 처리를 위해 사용됩니다.
import React from "react"; // React 라이브러리를 가져옵니다.

interface IDateRangeFieldProps {
  value?: (dayjs.Dayjs | null)[]; // 컴포넌트의 값으로 사용될 날짜 범위 배열 (시작 및 종료 날짜)
  onChange?: (value: (dayjs.Dayjs | null)[]) => void; // 값이 변경될 때 호출될 함수
}


const dateRangeOptions = [
   // 미리 정의된 날짜 범위 옵션들
  // 각 옵션은 라디오 버튼으로 선택할 수 있습니다.
  { label: "오늘", value: "today" },
  { label: "1주일", value: "1week" },
  { label: "1개월", value: "1month" },
  { label: "3개월", value: "3months" },
  { label: "6개월", value: "6months" },
  { label: "1년", value: "1year" },
];

const DateRangeField = ({ value, onChange }: IDateRangeFieldProps) => {
  const handleDateRangeChange = (e: RadioChangeEvent) => {
    // 라디오 버튼의 값이 변경될 때 호출될 함수
    // 선택된 옵션에 따라 날짜 범위를 계산하고 onChange 함수를 호출합니다.
    if (e.target.value === "today") {
      onChange?.([dayjs(), dayjs()]);
    } else if (e.target.value === "1week") {
      onChange?.([dayjs().subtract(1, "week"), dayjs()]);
    } else if (e.target.value === "1month") {
      onChange?.([dayjs().subtract(1, "month"), dayjs()]);
    } else if (e.target.value === "3months") {
      onChange?.([dayjs().subtract(3, "months"), dayjs()]);
    } else if (e.target.value === "6months") {
      onChange?.([dayjs().subtract(6, "months"), dayjs()]);
    } else if (e.target.value === "1year") {
      onChange?.([dayjs().subtract(1, "year"), dayjs()]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* 시작 날짜를 선택하는 DatePicker */}
      <DatePicker
        placeholder="시작 날짜"
        onChange={(v: dayjs.Dayjs | null) => {
          // 시작 날짜가 변경될 때의 로직
          onChange?.([v, value?.[1] || null]);
        }}
        value={value?.[0]}// 현재 선택된 시작 날짜
      />
      <span>~</span>
      {/* 종료 날짜를 선택하는 DatePicker */}
      <DatePicker
        placeholder="종료 날짜"
        onChange={(v: dayjs.Dayjs | null) => {
          // 종료 날짜가 변경될 때의 로직
          onChange?.([value?.[0] || null, v]);
        }}
        value={value?.[1]}
      />
      <div className="flex items-center gap-1">
        {/* 미리 정의된 날짜 범위를 선택하는 라디오 그룹 */}
        <Radio.Group
          size="small"
          options={dateRangeOptions}
          optionType="button"
          buttonStyle="solid"
          onChange={handleDateRangeChange}
        />
      </div>
    </div>
  );
};

export default React.memo(DateRangeField);
