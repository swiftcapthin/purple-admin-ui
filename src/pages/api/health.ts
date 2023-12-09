import type { NextApiRequest, NextApiResponse } from "next"; // Next.js의 API 요청 및 응답 타입을 임포트합니다.

// 응답 데이터의 타입을 정의합니다.
type Data = {
  status: string;
};

// API 핸들러 함수를 정의합니다.
export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  // 클라이언트의 요청에 대해 JSON 형식의 응답을 반환합니다.
  res.status(200).json({ status: "ok" });
  // 상태 코드 200과 함께 { status: "ok" } 객체를 반환합니다.
}
