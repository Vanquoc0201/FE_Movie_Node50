import React from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalWrapper = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-black"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
