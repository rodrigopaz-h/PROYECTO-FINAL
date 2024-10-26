import { Link } from "react-router-dom";

export default function Button({ text, onClick, to }) {
  return (
    <Link   to={to}
            onClick={onClick}
            className="bg-verde text-center text-white py-2 px-4 mt-5 mb-5 inline-block"
        >
            {text}
        </Link>
   
  );
}