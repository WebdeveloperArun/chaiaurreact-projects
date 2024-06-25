import React, { useId, forwardRef } from "react";

const Input = ({ type = "text", label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1 text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
};

export default forwardRef(Input);
