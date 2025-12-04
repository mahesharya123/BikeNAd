"use client";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="bg-white w-full max-w-lg md:max-w-md rounded-xl shadow-lg relative p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl hover:text-black"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
