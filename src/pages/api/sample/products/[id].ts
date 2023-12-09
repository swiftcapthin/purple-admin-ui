import type { NextApiRequest, NextApiResponse } from "next"; // Next.js 타입을 가져옵니다.
import { productSampleItems } from "."; // 상품 샘플 데이터를 가져옵니다.

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // API 요청을 처리하는 핸들러 함수

  if (req.method === "POST") {
    // POST 요청 처리: 새로운 데이터 생성
    return res.status(204).json({
      code: 0,
      message: "OK",
    });
  } else if (req.method === "PUT") {
    // PUT 요청 처리: 기존 데이터 수정
    return res.status(200).json({
      code: 0,
      message: "OK",
    });
  } else if (req.method === "DELETE") {
    // DELETE 요청 처리: 데이터 삭제
    return res.status(200).json({
      code: 0,
      message: "OK",
    });
  } else {
    // GET 요청 처리 (그 외의 경우): 데이터 조회
    const item = productSampleItems.find((data) => String(data.id) === req.query.id);
    // 요청된 id에 해당하는 상품을 찾음

    if (!item) {
      // 상품이 존재하지 않는 경우
      return res.status(400).json({
        code: -1,
        message: "상품 정보를 찾을 수 없습니다.",
        data: {},
      });
    }

    // 상품이 존재하는 경우
    return res.status(200).json({
      code: 0,
      message: "OK",
      data: item,
    });
  }
}
