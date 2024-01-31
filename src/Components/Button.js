import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-3 text-stone-100  bg-slate-500 rounded-lg hover:bg-slate-600 "
      {...props}>
      {children}
    </button>
  );
}

export default Button;
