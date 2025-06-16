import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative animate-fade-in">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Fechar"
        >
          &times;
        </button>
        {title && <h2 className="text-xl font-bold mb-4 text-yellow-700">{title}</h2>}
        <div className="text-black text-sm max-h-[60vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
