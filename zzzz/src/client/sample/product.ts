import { ISO8601DateTime } from "@/types/common";
// 공통 타입 파일에서 ISO8601DateTime 타입 정의를 가져옵니다. 날짜와 시간 형식을 위한 것입니다.

import qs from "qs";
// 쿼리 문자열 파싱 및 문자열화를 위한 'qs' 라이브러리를 가져옵니다.

import useSWR from "swr";
// 데이터 가져오기, 캐싱, 재검증을 위한 React 훅 'useSWR'을 가져옵니다.

import { fetchApi } from "../base";
// API 요청을 위한 사용자 정의 'fetchApi' 함수를 base 모듈에서 가져옵니다.

export interface IProduct {
  id: number;
  code: string;
  brand: string;
  name: string;
  price: number;
  status: string;
  description?: string;
  css?: string;
  js?: string;
  createdAt: ISO8601DateTime;
  updatedAt: ISO8601DateTime;
}
// 'IProduct' 인터페이스를 정의합니다. 제품의 데이터 구조를 나타내며, 여러 속성들을 포함합니다.

export interface IProductFormValue extends Omit<IProduct, "id" | "createdAt" | "updatedAt"> {}
// 'IProductFormValue' 인터페이스를 정의합니다. 'IProduct'에서 'id', 'createdAt', 'updatedAt'을 제외한 나머지 속성을 상속받습니다.

interface IProductsParams {
  page?: number;
}
// 제품 목록을 가져올 때 사용할 쿼리 매개변수를 정의하는 인터페이스입니다. 'page' 속성은 선택적입니다.

export interface IProductsResponse {
  code: number;
  message: string;
  data: {
    items: IProduct[];
    page: {
      currentPage: number;
      pageSize: number;
      totalPage: number;
      totalCount: number;
    };
  };
}
// 제품 목록을 가져올 때의 응답 형식을 정의하는 인터페이스입니다. 상태 코드, 메시지, 제품 데이터 및 페이징 정보를 포함합니다.

export interface IProductResponse {
  code: number;
  message: string;
  data: IProduct;
}
// 단일 제품을 가져올 때의 응답 형식을 정의하는 인터페이스입니다. 상태 코드, 메시지, 제품 데이터를 포함합니다.

export const useProducts = (params: IProductsParams = {}) => {
  return useSWR<IProductsResponse>(`api/sample/products?${qs.stringify(params)}`);
};
// 'useProducts' 훅을 정의합니다. 제품 목록을 가져오기 위해 'useSWR'을 사용하며, 쿼리 매개변수를 받아 API를 호출합니다.

export const useProduct = (id: string | number) => {
  return useSWR<IProductResponse>(`api/sample/products/${id}`);
};
// 'useProduct' 훅을 정의합니다. 단일 제품을 가져오기 위해 'useSWR'을 사용하며, 제품 ID를 받아 API를 호출합니다.

export const createProduct = (value: IProductFormValue) => {
  return fetchApi.post(`api/sample/products`, { body: JSON.stringify(value) });
};
// 'createProduct' 함수를 정의합니다. 새로운 제품을 생성하기 위해 POST 요청을 보냅니다.

export const updateProduct = (id: string, value: IProductFormValue) => {
  return fetchApi.put(`api/sample/products/${id}`, { body: JSON.stringify(value) });
};
// 'updateProduct' 함수를 정의합니다. 기존 제품을 업데이트하기 위해 PUT 요청을 보냅니다.
