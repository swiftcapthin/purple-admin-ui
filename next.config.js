/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React의 엄격 모드를 활성화해요. 이건 코드의 문제를 찾아내는 데 도움을 줘요.
  transpilePackages: ["antd"], // 'antd'라는 라이브러리를 특별하게 처리해요. 이건 웹사이트가 더 잘 작동하게 도와줘요.
};

module.exports = nextConfig; // 이 설정들을 Next.js에 알려줘요.
