import ky from "ky-universal"; // 'ky-universal' 라이브러리를 가져옴. 서버와 브라우저 양쪽에서 사용할 수 있는 HTTP 클라이언트 라이브러리입니다.

export const fetcher = (input: URL | RequestInfo, init?: RequestInit | undefined) =>
  ky(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${input}`, init).then((res) => res.json());
// 'fetcher' 함수를 내보냅니다. 이 함수는 'input'으로 API 엔드포인트와 요청 정보를 받고, 'init'으로 요청 초기화 객체를 옵션으로 받습니다.
// 'process.env.NEXT_PUBLIC_API_ENDPOINT'는 환경 변수에서 API의 베이스 URL을 가져옵니다. 요청이 성공하면 응답을 JSON으로 파싱하여 반환합니다.

export const fetchApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
// 'fetchApi'는 'ky' 인스턴스를 생성하여 내보냅니다. 'prefixUrl'을 환경 변수에서 가져온 API의 베이스 URL로 설정합니다.
// 이 인스턴스는 'Content-Type'을 'application/json'으로 설정한 헤더를 기본으로 사용합니다. 이를 통해 JSON 형식의 데이터를 처리하는 API 요청을 용이하게 합니다.
