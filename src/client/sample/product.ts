import { ISO8601DateTime } from "@/types/common"; // 공통 타입 모듈에서 ISO8601 형식의 날짜와 시간 타입을 가져옵니다.
import qs from "qs"; // 쿼리스트링을 다루기 위한 라이브러리를 가져옵니다.
import useSWR from "swr"; // 데이터 패칭을 위한 React 훅 라이브러리인 SWR을 가져옵니다.
import { fetchApi } from "../base"; // 설정된 API 요청 함수를 가져옵니다.

export interface IProduct {
  // 상품 데이터를 나타내는 인터페이스입니다.
  // 각 필드와 타입을 정의합니다.
  id: number; // 상품 ID
  code: string; // 상품 코드
  brand: string; // 상품 브랜드
  name: string; // 상품 이름
  price: number; // 가격
  status: string; // 상태 (예: 판매중, 품절 등)
  description?: string; // 설명 (옵션)
  css?: string; // CSS 코드 (옵션)
  js?: string; // JS 코드 (옵션)
  createdAt: ISO8601DateTime; // 생성 일시
  updatedAt: ISO8601DateTime; // 업데이트 일시
}

export interface IProductFormValue extends Omit<IProduct, "id" | "createdAt" | "updatedAt"> {}
// IProduct 인터페이스에서 id, createdAt, updatedAt을 제외한 타입을 상속받습니다.
// 주로 상품 생성이나 업데이트 양식에서 사용됩니다.

interface IProductsParams {
  page?: number; // 페이지 번호 (옵션)
}

export interface IProductsResponse {
  // API 응답 데이터의 구조를 정의합니다.
  code: number; // 응답 코드
  message: string; // 메시지
  data: {
    items: IProduct[]; // 상품 배열 
    page: {
      // 페이징 정보
      currentPage: number; // 현재 페이지 번호
      pageSize: number; // 페이지 당 상품 수
      totalPage: number; // 전체 페이지 수
      totalCount: number; // 전체 상품 수
    };
  };
}

export interface IProductResponse {
  // 단일 상품에 대한 API 응답 데이터의 구조를 정의합니다.
  code: number; // 응답 코드
  message: string; // 메시지
  data: IProduct; // 상품 데이터
}

export const useProducts = (params: IProductsParams = {}) => {
  // 상품 목록을 가져오는 훅입니다.
  // 주어진 페이지 파라미터를 기반으로 상품 목록을 요청합니다.
  return useSWR<IProductsResponse>(`api/sample/products?${qs.stringify(params)}`);
};

export const useProduct = (id: string | number) => {
  // 단일 상품을 가져오는 훅입니다.
  // 상품 ID를 기반으로 상품 정보를 요청합니다.
  return useSWR<IProductResponse>(`api/sample/products/${id}`);
};

export const createProduct = (value: IProductFormValue) => {
  // 새로운 상품을 생성하는 함수입니다.
  // 주어진 상품 정보로 POST 요청을 합니다.
  return fetchApi.post(`api/sample/products`, { body: JSON.stringify(value) });
};

export const updateProduct = (id: string, value: IProductFormValue) => {
  // 기존 상품을 업데이트하는 함수입니다.
  // 상품 ID와 변경할 정보를 기반으로 PUT 요청을 합니다.
  return fetchApi.put(`api/sample/products/${id}`, { body: JSON.stringify(value) });
};
