import { IProduct, useProducts } from "@/client/sample/product"; // IProduct 인터페이스와 useProducts 훅을 가져옴. 상품 데이터 관련 기능 제공.
import DefaultTable from "@/components/shared/ui/default-table"; // DefaultTable 컴포넌트를 가져옴. 표준 테이블 레이아웃을 제공.
import DefaultTableBtn from "@/components/shared/ui/default-table-btn"; // DefaultTableBtn 컴포넌트를 가져옴. 테이블에서 사용할 버튼 UI 제공.
import { ISO8601DateTime } from "@/types/common"; // ISO8601DateTime 타입을 가져옴. 날짜와 시간 형식을 정의.
import { Alert, Button, Dropdown, MenuProps, Popconfirm } from "antd"; // Ant Design 라이브러리에서 여러 컴포넌트를 가져옴. UI 구성에 사용.
import { ColumnsType } from "antd/es/table"; // Ant Design의 table에서 사용되는 컬럼 타입 정의를 가져옴.
import dayjs from "dayjs"; // dayjs 라이브러리를 가져옴. 날짜 처리에 사용.
import { Download } from "lucide-react"; // lucide-react에서 Download 아이콘을 가져옴. 다운로드 관련 UI 아이콘 제공.
import Link from "next/link"; // Next.js의 Link 컴포넌트를 가져옴. 클라이언트 사이드 내비게이션 제공.
import { useRouter } from "next/router"; // Next.js의 useRouter 훅을 가져옴. 라우팅 관련 기능 제공.
import numeral from "numeral";
import React, { useCallback, useMemo, useState } from "react";

const ProductList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const router = useRouter();

  const { data, error, isLoading } = useProducts({ page: router.query.page ? Number(router.query.page) : 1 });

  const handleChangePage = useCallback(
    (pageNumber: number) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: pageNumber },
      });
    },
    [router]
  );

  const onSelectChange = useCallback((newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  }, []);

  const modifyDropdownItems: MenuProps["items"] = useMemo(
    () => [
      {
        key: "statusUpdate",
        label: <a onClick={() => console.log(selectedRowKeys)}>상태수정</a>,
      },
    ],
    [selectedRowKeys]
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const columns: ColumnsType<IProduct> = [
    {
      key: "action",
      width: 120,
      align: "center",
      render: (_value: unknown, record: IProduct) => {
        return (
          <span className="flex justify-center gap-2">
            <Link href={`/sample/product/edit/${record.id}`} className="px-2 py-1 text-sm btn">
              수정
            </Link>
            <Popconfirm
              title="상품을 삭제하시겠습니까?"
              onConfirm={() => alert("삭제")}
              okText="예"
              cancelText="아니오"
            >
              <a className="px-2 py-1 text-sm btn">삭제</a>
            </Popconfirm>
          </span>
        );
      },
    },
    {
      title: "상품코드",
      dataIndex: "code",
      width: 100,
    },
    {
      title: "상품명",
      dataIndex: "name",
      render: (value: string, record: IProduct) => {
        return (
          <span>
            <span className="px-2 py-1 mr-1 bg-gray-100 rounded">{record.brand}</span>
            <span>{value}</span>
          </span>
        );
      }, 
    },
    {
      title: "금액",
      dataIndex: "price",
      align: "center",
      width: 100,
      render: (value: number) => {
        return <p>{numeral(value).format("0,0")}원</p>;
      },
    },
    {
      title: "판매상태",
      dataIndex: "status",
      align: "center",
      width: 100,
    },
    {
      title: "주문일시",
      dataIndex: "createdAt",
      align: "center",
      width: 120,
      render: (value: ISO8601DateTime) => {
        return (
          <div className="text-sm">
            <span className="block">{dayjs(value).format("YYYY/MM/DD")}</span>
            <span className="block">{dayjs(value).format("hh:mm")}</span>
          </div>
        );
      },
    },
    {
      title: "수정일시",
      dataIndex: "updatedAt",
      align: "center",
      width: 120,
      render: (value: ISO8601DateTime) => {
        return (
          <div className="text-sm">
            <span className="block">{dayjs(value).format("YYYY/MM/DD")}</span>
            <span className="block">{dayjs(value).format("hh:mm")}</span>
          </div>
        );
      },
    },
  ];

  if (error) {
    return <Alert message="데이터 로딩 중 오류가 발생했습니다." type="warning" />;
  }

  return (
    <>
      <DefaultTableBtn className="justify-between">
        <div>
          <Dropdown disabled={!hasSelected} menu={{ items: modifyDropdownItems }} trigger={["click"]}>
            <Button>일괄수정</Button>
          </Dropdown>

          <span style={{ marginLeft: 8 }}>{hasSelected ? `${selectedRowKeys.length}건 선택` : ""}</span>
        </div>

        <div className="flex-item-list">
          <Button className="btn-with-icon" icon={<Download />}>
            엑셀 다운로드
          </Button>
          <Button type="primary" onClick={() => router.push("/sample/product/new")}>
            상품등록
          </Button>
        </div>
      </DefaultTableBtn>

      <DefaultTable<IProduct>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data?.data.items || []}
        loading={isLoading}
        pagination={{
          current: Number(router.query.page || 1),
          defaultPageSize: 5,
          total: data?.data.page.totalCount || 0,
          showSizeChanger: false,
          onChange: handleChangePage,
        }}
        className="mt-3"
        countLabel={data?.data.page.totalCount}
      />
    </>
  );
};

export default React.memo(ProductList);
