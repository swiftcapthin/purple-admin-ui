import { Table, TableProps } from "antd"; // Ant Design에서 Table 컴포넌트와 TableProps 타입을 가져옵니다.
import numeral from "numeral"; // numeral 라이브러리를 가져옵니다. 숫자 포맷팅에 사용됩니다.
import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.

interface IDefaultTableProps<T> extends TableProps<T> {
  countLabel?: number; // 테이블의 항목 수를 나타내는 레이블 (선택적).
}

// DefaultTable 컴포넌트 정의
const DefaultTable = <T extends object>({
  children,
  countLabel,
  ...tableProps
}: PropsWithChildren<IDefaultTableProps<T>>) => {
  return (
    <Table<T>
      size="small" // 테이블의 크기를 작게 설정합니다.
      rowKey="id" // 각 행의 고유 키를 'id'로 지정합니다.
      tableLayout="fixed" // 테이블 레이아웃을 고정합니다.
      scroll={{ x: 800 }} // 수평 스크롤을 설정합니다.
      bordered // 테이블에 테두리를 추가합니다.
      {...(countLabel && { title: () => <p>{numeral(countLabel).format("0,0")}건</p> })}
      // countLabel이 있으면 테이블 타이틀로 항목 수를 포맷하여 표시합니다.
      {...tableProps} // 나머지 테이블 프롭스를 적용합니다.
    >
      {children}
      {/* children으로 전달된 테이블 컬럼들을 렌더링합니다. */}
    </Table>
  );
};

export default React.memo(DefaultTable) as typeof DefaultTable;
// React.memo를 사용하여 DefaultTable 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
