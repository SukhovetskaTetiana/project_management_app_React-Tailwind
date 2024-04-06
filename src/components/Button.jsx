export default function Button({ children, ...props }) {
  const buttonClasses =
    "px-6 py-2 bg-brown-900 text-lg text-brown-100 rounded-md font-medium  hover:text-brown-900 hover:bg-brown-300 focus:ring focus:ring-brown-500";

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
