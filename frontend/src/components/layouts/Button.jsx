
import { Link } from 'react-router-dom';

export default function Button({ text,className, to}) {
  return (
    <div className={className}>
     <Link
        to={to} 
        className="px-6 py-2 min-w-[120px] text-center text-white bg-verde border border-verde rounded active:text-verde hover:bg-transparent hover:text-verde focus:outline-none focus:ring"
      >
        {text}
      </Link>
    </div>
   
  );
}
