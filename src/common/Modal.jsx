import { createPortal } from "react-dom";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/60  z-50 backdrop-blur-sm"
    >
      <button onClick={onClose} className="absolute top-2 right-2 text-white text-lg">
        ✕
      </button>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
