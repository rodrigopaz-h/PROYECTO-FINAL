import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { useContext, useState } from "react";
import Logo from "../../../public/images/logo.svg";

const Navbar = () => {
  const { Carrito } = useContext(ProductContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar principal */}
      <div className="navbar bg-base-100 bg-naranjal px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-20 md:h-25" />
          </Link>
          {/* Menú de enlaces */}
          <div className="hidden md:flex flex-1 space-x-4">
            <Link to="cafes" className=" font-medium hover:text-naranja">
              Cafés
            </Link>
            <Link to="accesorios" className=" font-medium hover:text-naranja">
              Accesorios
            </Link>
            <Link to="todos" className=" font-medium hover:text-naranja">
              Todos
            </Link>
            <Link to="blog" className=" font-medium hover:text-naranja">
              Blog
            </Link>
          </div>
        </div>

        {/* Botón de menú para móvil */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className=""
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Barra de búsqueda y opciones de usuario/carrito (oculto en móviles) */}
        <div className="hidden md:flex flex-none gap-2 items-center">
          <input
            type="text"
            placeholder="Buscar"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <Link to="/profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </Link>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <Link to="/login" className="btn btn-ghost  text-xl">
            Acceder
          </Link>
          <span className=" text-xl">/</span>
          <Link to="/register" className="btn btn-ghost  text-xl">
            Registrarse
          </Link>
          <div className="dropdown dropdown-end">
            <Link to="carrito" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l1.35-6.45A1 1 0 0 0 17.4 5H6.6a1 1 0 0 0-.99.85L4.2 12H7zm5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {Carrito.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-naranja p-4 space-y-2 text-center">
          <Link to="cafes" className="block  font-medium hover:text-white">
            Cafés
          </Link>
          <Link to="accesorios" className="block  font-medium hover:text-white">
            Accesorios
          </Link>
          <Link to="todos" className="block  font-medium hover:text-white">
            Todos
          </Link>
          <Link to="/login" className="block  font-medium hover:text-white">
            Acceder
          </Link>
          <Link to="/register" className="block  font-medium hover:text-white">
            Registrarse
          </Link>
          <Link to="carrito" className="block  font-medium hover:text-white">
            Carrito ({Carrito.length})
          </Link>
        </div>
      )}

      {/* Contenedor negro debajo del navbar */}
      <div className="w-full bg-naranja text-white text-center p-4 hidden md:block">
        <div className="w-full px-4 md:px-8 flex justify-between items-center">
          <div className="text-white text-2xl">
            <i className="fas fa-coins"></i>
          </div>
          <span className="">¡ENVÍO GRATIS A PARTIR DE 30.000 CLP!</span>
          <div className="flex gap-4">
            <div className="bg-negro text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="bg-negro text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="bg-negro text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
