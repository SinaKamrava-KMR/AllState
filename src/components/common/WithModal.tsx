import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalPropsType = {
  children: ReactNode;
};

const WithModal = ({ children }: ModalPropsType) => {
  const modalWrapper = (
    <div className="fixed inset-0 z-50 bg-slate-800 bg-opacity-80">
      <div className="absolute inset-0  flex items-center justify-center">
        {children}
      </div>
    </div>
  );

  return createPortal(modalWrapper, document.body);
};

export default WithModal;
