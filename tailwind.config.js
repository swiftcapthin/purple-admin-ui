/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // 여기는 Tailwind CSS가 적용될 파일들의 위치예요.
    "./src/components/**/*.{js,ts,jsx,tsx}", // 이 파일들은 우리 웹사이트의 여러 부분이에요.
    "./src/app/**/*.{js,ts,jsx,tsx}", // 예를 들어, 페이지와 컴포넌트들이 있어요.
  ],
  theme: {
    fontFamily: {
      sans: [
        "var(--font-pretendard)", // 여기에는 글씨체들의 목록이 있어요.
        "Helvetica Neue", // 이 글씨체들은 웹사이트에서 사용될 거예요.
        // 여러 글씨체가 나열되어 있어요. 컴퓨터가 이해할 수 있게 적혀 있죠.
        "Apple SD Gothic Neo",
        "Malgun Gothic",
        "맑은고딕",
        "Dotum",
        "돋움",
        "Gulim",
        "굴림",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: [
        "ui-monospace", // 이것도 또 다른 글씨체 목록이에요.
        "Consolas", // 이 글씨체들은 주로 코드를 보여줄 때 사용돼요.
         // 마찬가지로 여러 글씨체가 나열되어 있어요.
        "SFMono-Regular",
        "Liberation Mono",
        "Menlo",
        "Monaco",
        "Courier",
        "Apple SD Gothic Neo",
        "Nanum Gothic",
        "나눔고딕",
        "Malgun Gothic",
        "맑은고딕",
        "monospace",
        "NerdFontsSymbols Nerd Font",
      ],
    },
    extend: {
       padding: {
        '28': '7rem', // 7rem은 예시입니다. 실제 필요한 크기에 맞게 조정하세요.
      },
      colors: {
        "antd-form": "#d9d9d9", // 여기서는 색깔들을 설정해요.
        brand: "#63489a", // 예를 들어, 'brand'라는 이름으로 어떤 색깔을 정할 수 있어요.
        // 이런 식으로 다양한 색깔들이 정의되어 있어요.
        turquoise: "#1abc9c",
        greensea: "#16a085",
        emerald: "#2ecc71",
        nephritis: "#27ae60",
        peterriver: "#3498db",
        belizehole: "#2980b9",
        amethyst: "#9b59b6",
        wisteria: "#8e44ad",
        wetasphalt: "#34495e",
        midnightblue: "#2c3e50",
        sunflower: "#f1c40f",
        orange: "#f39c12",
        carrot: "#e67e22",
        pumpkin: "#d35400",
        alizarin: "#e74c3c",
        pomegranate: "#c0392b",
        clouds: "#ecf0f1",
        silver: "#bdc3c7",
        concrete: "#95a5a6",
        asbestos: "#7f8c8d",
      },
    },
  },
  plugins: [], // 여기에는 추가적인 기능을 넣을 수 있는데, 지금은 비어있어요.
  corePlugins: {
    preflight: false, // 'preflight'는 기본적인 스타일을 설정하는데, 여기서는 사용하지 않기로 했어요.
  },
};
