// import CodeMirror from "@uiw/react-codemirror"; // CodeMirror는 이 예제에서 사용되지 않으므로 주석 처리되었습니다.
import ReactQuill from "react-quill"; // react-quill 라이브러리에서 ReactQuill 컴포넌트를 가져옵니다. 이는 리치 텍스트 에디터를 제공합니다.

// IQuillEditorCoreProps 인터페이스 정의
interface IQuillEditorCoreProps {
  value?: string; // 에디터의 현재 값
  onChange?: (value: string) => void; // 에디터의 내용이 변경될 때 호출될 함수
  placeholder?: string; // 에디터의 플레이스홀더 텍스트
}

// 에디터의 모듈 설정
const modules = {
  toolbar: {
    container: [
      // 툴바에 포함될 기능들을 정의합니다.
      // 예: 헤더 스타일, 굵게, 기울임꼴, 밑줄, 인용문, 목록, 들여쓰기 등
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
    ],
  },
};

// 에디터에서 지원할 포맷 목록
const formats = [
  
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const QuillEditorCore = ({ value, onChange, placeholder }: IQuillEditorCoreProps) => {
  return (
    <>
      <ReactQuill
        theme="snow"
        value={value || ""}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default QuillEditorCore;
