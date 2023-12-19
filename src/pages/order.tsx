import { Column, useTable } from 'react-table';

// 데이터 타입 정의 예시 (데이터 구조에 맞게 수정해야 함)
interface MyDataType {
  id: number;
  title: string;
}

// Props 타입 정의
interface MyTableProps {
  columns: Column<MyDataType>[];
  data: MyDataType[];
}

function MyTable({ columns, data }: MyTableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<MyDataType>({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, columnIndex) => (
              <th {...column.getHeaderProps()} key={columnIndex}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td {...cell.getCellProps()} key={cellIndex}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
