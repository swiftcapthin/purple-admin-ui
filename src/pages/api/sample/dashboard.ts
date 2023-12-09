import type { NextApiRequest, NextApiResponse } from "next"; // Next.js의 타입을 가져옵니다.

// 응답 데이터 타입을 정의합니다.
type Data = {
  visitor: {
    value: number;
    rate: number;
  };
  order: {
    value: number;
    rate: number;
  };
  income: {
    value: number;
    rate: number;
  };
};

// 임의의 정수를 반환하는 함수를 정의합니다.
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// 임의의 소수점 한 자리 수를 반환하는 함수를 정의합니다.
const getRandomRate = (min: number, max: number) => {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
};

// API 핸들러 함수를 정의합니다.
export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  // 요청에 대해 임의의 데이터를 생성하고 JSON 형태로 응답합니다.
  res.status(200).json({
    visitor: {
      value: getRandomInt(1000, 10000), // 방문자 수
      rate: getRandomRate(-10, 50), // 방문자 변화율
    },
    order: {
      value: getRandomInt(10, 1000), // 주문 수
      rate: getRandomRate(-10, 50), // 주문 변화율
    },
    income: {
      value: getRandomInt(1000000, 10000000), // 수입
      rate: getRandomRate(-10, 50), // 수입 변화율
    },
  });
}
