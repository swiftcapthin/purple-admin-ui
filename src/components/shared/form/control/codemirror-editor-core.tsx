import CodeMirror from "@uiw/react-codemirror"; // "@uiw/react-codemirror" 라이브러리에서 CodeMirror 컴포넌트를 가져옵니다. 이 컴포넌트는 코드 편집기의 UI를 제공합니다.
import React from "react"; // React 라이브러리를 가져옵니다.
import style from "./codemirror-editor.module.css"; // CSS 모듈 스타일을 가져옵니다.

// ICodemirrorEditorCoreProps 인터페이스 정의
interface ICodemirrorEditorCoreProps {
  value?: string; // 편집기에 표시할 코드 내용
  onChange?: (value: string) => void; // 코드 내용 변경 시 호출될 함수
  height?: string; // 편집기의 높이
}

// CodemirrorEditorCore 컴포넌트 정의
const CodemirrorEditorCore = ({ value, onChange, height }: ICodemirrorEditorCoreProps) => {
  return (
    <CodeMirror
      value={value || ""} // 편집기의 초기 내용을 설정합니다. 값이 없으면 빈 문자열을 사용합니다.
      width="100%" // 편집기의 너비를 100%로 설정합니다.
      height={height || "200px"} // 편집기의 높이를 설정합니다. 값이 없으면 기본값 "200px"을 사용합니다.
      onChange={onChange} // 코드 내용이 변경되었을 때 실행할 함수를 설정합니다.
      className={style.container} // CSS 클래스를 적용합니다.
    />
  );
};

export default React.memo(CodemirrorEditorCore); // React.memo를 사용하여 CodemirrorEditorCore 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
