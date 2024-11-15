import { Link } from "react-router-dom";

export default function Button({ text, onClick, to, className = "", bg="bg-negro"  }) {
  const buttonClass = `${className} text-center text-white py-2 px-4 mt-5 mb-5 inline-block boton ${bg}`;
  return (
    <Link   to={to}
            onClick={onClick}
            className={buttonClass}
        >
            {text}
        </Link>
   
  );
}