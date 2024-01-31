import React, { forwardRef } from "react";

const className =
  "w-full p-2 border-b-4 rounded-md border-stone-400 bg-stone-200 text-stone-600 focus:outline-none focus:border-blue-400";

const Input = forwardRef(function Input({ isTextArea, label, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 mt-20">
      <label className="text-sm font-bold uppercase text-stone-600">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={className} {...props} />
      ) : (
        <input ref={ref} {...props} className={className} />
      )}
    </p>
  );
});

export default Input;
