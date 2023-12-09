import DefaultModal from "@/components/shared/ui/default-modal";
import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useState } from 'react';

interface ILoginFormValue {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [form] = useForm<ILoginFormValue>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleFinish = useCallback(async (value: ILoginFormValue) => {
    setIsLoading(true);

    try {
      console.log(value);
      
      await signIn("login-credentials", { username: value.username, password: value.password });
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  function handleSignup(values: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      {router?.query.error && router?.query.error !== "CredentialsSignin" ? (
        <div className="mb-3">
          <Alert message={`로그인 중 오류가 발생했습니다. ${router?.query.error}`} type="warning" />
        </div>
      ) : null}
      
      <Form<ILoginFormValue>
        form={form}
        layout="vertical"
        initialValues={{ username: "", password: "" }}
        onFinish={handleFinish}
      >
        <div className="mb-3">
          {router?.query.error === "CredentialsSignin" ? (
            <>
              <Alert message="로그인을 실패했습니다. 아이디 또는 비밀번호를 다시 확인해주세요." type="error" />
            </>
          ) : (
            <></>
          )}
        </div>
        <Form.Item name="username" rules={[{ required: true, message: "아이디를 입력해주세요" }]}>
          <Input size="large" placeholder="아이디" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}>
          <Input placeholder="비밀번호" type="password" size="large" />
        </Form.Item>


        <Button size="large" type="primary" htmlType="submit" className="w-full" loading={isLoading}>
         로그인
        </Button>

        <div className="flex justify-between mt-2">
         <a className="text-gray-400" onClick={() => setShowPasswordModal(true)}>
           아이디/비밀번호 찾기
         </a>
         <a className="text-gray-400" onClick={() => setShowPasswordModal(true)}>
           회원가입
         </a>
       </div>
      </Form>

      {/* 비밀번호 찾기 모달 */}
      <DefaultModal title="회원가입" open={showPasswordModal} handleHide={() => setShowPasswordModal(false)}>
      <div>
        안녕하세요 셀러님! 스위프트를 찾아주셔서 감사합니다! <br/><br/>
        팀 스위프트는 셀러님의 최고의 파트너가 되어, 풍부하고 만족스러운 고객경험을 만들기 위해 끊임없이 노력하고 있습니다. <br/><br/>
        스위프트가 셀러님의 성장을 도와드릴 것을 약속드립니다.
        <br/><br/>
        <p className="mt-4 mb-2 font-semibold">회원가입</p>
        <Form layout="vertical" onFinish={handleSignup}>
          <Form.Item label="업체명" name="companyName" rules={[{ required: true, message: "업체명을 입력해주세요" }]}>
            <Input placeholder="업체명(쇼핑몰)" />
          </Form.Item>
          <Form.Item label="사업자번호" name="businessNumber" rules={[{ required: true, message: "사업자번호를 입력해주세요" }]}>
            <Input placeholder="사업자번호" />
          </Form.Item>
          <Form.Item label="로그인 아이디" name="loginId" rules={[{ required: true, message: "로그인 아이디를 입력해주세요" }]}>
            <Input placeholder="로그인 아이디" />
          </Form.Item>
          <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}>
            <Input placeholder="비밀번호" type="password" />
          </Form.Item>
          <Form.Item 
            label="비밀번호 확인" 
            name="confirmPassword" 
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: "비밀번호 확인을 입력해주세요" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('비밀번호가 일치하지 않습니다'));
                },
              }),
            ]}
          >
            <Input placeholder="비밀번호 확인" type="password" />
          </Form.Item>
          <Form.Item label="이메일" name="email" rules={[{ required: true, message: "이메일을 입력해주세요" }]}>
            <Input placeholder="이메일" />
          </Form.Item>
          <Form.Item label="사용자 이름" name="username" rules={[{ required: true, message: "사용자 이름을 입력해주세요" }]}>
            <Input placeholder="사용자 이름" />
          </Form.Item>
          <Form.Item label="담당자 연락처" name="contactNumber" rules={[{ required: true, message: "담당자 연락처를 입력해주세요" }]}>
            <Input placeholder="담당자 연락처" />
          </Form.Item>
          <Form.Item label="은행명" name="bankName" rules={[{ required: true, message: "은행명을 입력해주세요" }]}>
            <Input placeholder="은행명" />
          </Form.Item>
          <Form.Item label="계좌번호" name="accountNumber" rules={[{ required: true, message: "계좌번호를 입력해주세요" }]}>
            <Input placeholder="계좌번호" />
          </Form.Item>
          <Form.Item label="예금주" name="accountHolder" rules={[{ required: true, message: "예금주를 입력해주세요" }]}>
            <Input placeholder="예금주" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form>
      </div>
    </DefaultModal>
    </>
  );
};

export default React.memo(LoginForm);
