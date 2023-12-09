import { Modal, ModalProps } from "antd"; // Ant Design에서 Modal 컴포넌트와 ModalProps 타입을 가져옵니다.
import { X } from "lucide-react"; // lucide-react 라이브러리에서 X(닫기) 아이콘을 가져옵니다.
import React, { PropsWithChildren } from "react"; // React 라이브러리와 PropsWithChildren 타입을 가져옵니다.
import style from "./default-modal.module.css"; // CSS 모듈 스타일을 가져옵니다.

interface IDefaultModalProps extends ModalProps {
  handleHide: () => void; // 모달을 숨기는 함수
}

// DefaultModal 컴포넌트 정의
const DefaultModal = ({ children, handleHide, title, ...modalProps }: PropsWithChildren<IDefaultModalProps>) => {
  return (
    <Modal 
      footer={null} // 모달의 푸터(하단 버튼 영역) 제거
      closable={false} // 기본 닫기 버튼 비활성화
      className={style["default-popup"]} // 모달에 스타일 적용
      {...modalProps} 
      onCancel={handleHide} // 모달 외부 클릭 시 handleHide 함수 호출
    >
      <button className={style["default-popup-close-btn"]} onClick={handleHide}>
        <X className="w-7 h-7" /> {/* 닫기 버튼 */}
      </button>
      <h3 className={style["default-popup-title"]}>{title}</h3> {/* 제목 */}
      <div className={style["default-popup-content"]}>{children}</div> {/* 모달 내용 */}
    </Modal>
  );
};

export default React.memo(DefaultModal);
// React.memo를 사용하여 DefaultModal 컴포넌트를 최적화합니다.
// 이는 props가 변경되지 않는 한 컴포넌트의 불필요한 렌더링을 방지합니다.
