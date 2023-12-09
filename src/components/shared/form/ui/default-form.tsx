import { Form, FormProps } from "antd"; // Ant Design에서 Form 컴포넌트와 FormProps 타입을 가져옵니다.
import React, { PropsWithChildren, useCallback } from "react"; // React 라이브러리와 필요한 훅을 가져옵니다.
import style from "./form.module.css"; // CSS 모듈 스타일을 가져옵니다.

interface IDefaultFormProps extends FormProps {} // FormProps를 확장하는 인터페이스를 정의합니다.

// DefaultForm 컴포넌트 정의
const DefaultForm = <T,>({ children, ...formProps }: PropsWithChildren<IDefaultFormProps>) => {
    // 폼 제출 실패 시 처리하는 함수
  const handleFormFailed = useCallback(
    ({ errorFields }: any) => {
      // 첫 번째 에러 필드로 스크롤합니다.
      formProps.form?.scrollToField(errorFields[0].name);
    },
    [formProps.form]// 의존성 배열에 formProps.form을 추가합니다.
  );

  return (
    <Form<T>
      className={style["default-form"]} // CSS 클래스를 적용합니다.
      layout="vertical" // 폼의 레이아웃을 세로(Vertical)로 설정합니다.
      requiredMark={false} // 필수 마크를 표시하지 않습니다.
      onFinishFailed={handleFormFailed} // 폼 제출 실패 시 handleFormFailed 함수를 호출합니다.
      {...formProps} // 나머지 폼 프롭스를 적용합니다.
    >
      {children}
    </Form>// 자식 컴포넌트를 렌더링합니다.
  );
};

export default React.memo(DefaultForm) as typeof DefaultForm;
