import ky from "ky-universal";
// 'ky-universal' 라이브러리를 가져옵니다. 
// 이 라이브러리는 서버와 브라우저 모두에서 사용할 수 있는 간단하고 우아한 HTTP 클라이언트입니다.

export const fetcher = (input: URL | RequestInfo, init?: RequestInit | undefined) =>
  ky(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${input}`, init).then((res) => res.json());
// 'fetcher' 함수를 정의합니다. 
// 이 함수는 주어진 URL 또는 RequestInfo와 초기 설정을 받아, API 요청을 보내고 응답을 JSON 형식으로 변환합니다.

export const fetchApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
// 'fetchApi' 객체를 생성합니다.
// 'ky.create'를 사용하여 API 요청을 위한 기본 설정을 정의합니다. 
// 'prefixUrl'로 API 엔드포인트의 기본 URL을 설정하고, 'Content-Type' 헤더를 'application/json'으로 설정합니다.
