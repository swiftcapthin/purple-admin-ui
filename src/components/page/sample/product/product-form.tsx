import { IProductFormValue, createProduct, updateProduct } from "@/client/sample/product";
import CodemirrorEditor from "@/components/shared/form/control/codemirror-editor";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import { Button, Divider, Form, Input, Select, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";

  interface IProductFormProps {
    id?: string;
    initialValues?: Partial<IProductFormValue>;
  }

  const ProductForm = ({ id, initialValues }: IProductFormProps) => {
    const [form] = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleFinish = async (formValue: IProductFormValue) => {
      try {
        setIsLoading(true);

        if (id) {
          await updateProduct(id, formValue);
          messageApi.success("수정되었습니다");
        } else {
          await createProduct(formValue);
          messageApi.success("생성되었습니다");
        }
      } catch (e: unknown) {
        messageApi.error("에러가 발생했습니다");
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    return (
      <>
        {contextHolder}
        <DefaultForm<IProductFormValue> form={form} initialValues={initialValues} onFinish={handleFinish}>
            
            <FormSection title="매장정보" description="상품 기본 정보를 입력해주세요">
            <FormGroup title="상가*">
              <Form.Item name="brand" rules={[{ required: true, message: "필수값입니다" }]}>
                <Select style={{ maxWidth: 200 }} placeholder="브랜드를 선택하세요">
                  <Select.Option value="디오트">디오트</Select.Option>
                    <Select.Option value="청평화">청평화</Select.Option>
                    <Select.Option value="테크노">테크노</Select.Option>
                    <Select.Option value="DWP(동원)">DWP(동원)</Select.Option>
                    <Select.Option value="동평화">동평화</Select.Option>
                    <Select.Option value="신평화">신평화</Select.Option>
                    <Select.Option value="남평화">남평화</Select.Option>
                    <Select.Option value="제일평화">제일평화</Select.Option>
                    <Select.Option value="뉴존">뉴존</Select.Option>
                    <Select.Option value="디자이너클럽">디자이너클럽</Select.Option>
                    <Select.Option value="APM">APM</Select.Option>
                    <Select.Option value="APM 럭스">APM 럭스</Select.Option>
                    <Select.Option value="APM 플레이스">APM 플레이스</Select.Option>
                    <Select.Option value="상상(SANG SANG)">상상(SANG SANG)</Select.Option>
                    <Select.Option value="W">W</Select.Option>
                    <Select.Option value="혜양(엘리시움)">혜양(엘리시움)</Select.Option>
                    <Select.Option value="아트프라자">아트프라자</Select.Option>
                    <Select.Option value="광휘(퀸즈)">광휘(퀸즈)</Select.Option>
                    <Select.Option value="벨포스트">벨포스트</Select.Option>
                    <Select.Option value="DDP(유어스)">DDP(유어스)</Select.Option>
                    <Select.Option value="팀204">팀204</Select.Option>
                    <Select.Option value="맥스타일">맥스타일</Select.Option>
                    <Select.Option value="신발상가A">신발상가A</Select.Option>
                    <Select.Option value="신발상가B">신발상가B</Select.Option>
                    <Select.Option value="신발상가C">신발상가C</Select.Option>
                    <Select.Option value="신발상가D">신발상가D</Select.Option>

                </Select>
              </Form.Item>
            </FormGroup>

            <Divider />

            <FormGroup title="호수*(영수증/신상마켓)">
              <Form.Item name="name" rules={[{ required: true, message: "필수값입니다" }]}>
                <Input placeholder="상품명을 입력하세요" />
              </Form.Item>
            </FormGroup>

            <Divider />

            <FormGroup title="상품코드*">
              <Form.Item name="code" rules={[{ required: true, message: "필수값입니다" }]}>
                <Input placeholder="상품코드를 입력하세요" />
              </Form.Item>
            </FormGroup>

            <Divider />

            <FormGroup title="금액*">
              <Form.Item name="price" rules={[{ required: true, message: "필수값입니다" }]}>
                <Input placeholder="금액을 입력하세요" />
              </Form.Item>
            </FormGroup>
          </FormSection>
          <FormSection title="상품 정보" description="상품 상세 정보를 입력해주세요">

            
          </FormSection>
          <FormSection title="상품상세" description="상품 상세 정보를 입력해주세요">
            <FormGroup title="상품상세">
              <Form.Item name="description">
                <QuillEditor />
              </Form.Item>
            </FormGroup>

            <Divider />

            <FormGroup title="CSS/JS">
              <Form.Item name="css">
                <CodemirrorEditor />
              </Form.Item>
              <Form.Item name="js">
                <CodemirrorEditor />
              </Form.Item>
            </FormGroup>
          </FormSection>

          <div className="text-center">
            <Button htmlType="submit" type="primary" loading={isLoading}>
              저장
            </Button>
          </div>
        </DefaultForm>
      </>
    );
  };

  export default React.memo(ProductForm);
