import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClasses =
    "w-full p-1 rounded-sm bg-brown-100 border-b-2 border-b-brown-300 text-brown-900 focus:outline-none focus:border-brown-600";

  return (
    <div className="py-5">
      <label className="uppercase font-semibold text-md md:text-lx text-brown-900">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={inputClasses} {...props}></textarea>
      ) : (
        <input ref={ref} className={inputClasses} {...props} />
      )}
    </div>
  );
});

export default Input;
