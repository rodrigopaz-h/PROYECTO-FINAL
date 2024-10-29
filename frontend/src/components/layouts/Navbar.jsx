import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { useContext } from "react";
import Logo from "../../../public/images/logo.svg";

const Navbar = () => {
  const { Carrito } = useContext(ProductContext);
  return (
    <>
      <div className="navbar bg-base-100 bg-naranjal space-x-4">
        <Link to="">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="flex-1 space-x-4">
          <Link to="cafes">Cafés</Link>
          <Link to="accesorios">Accesorios</Link>
          <Link to="todos">Todos</Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Link to="/profile">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </Link>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
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

          {/* Botones de Acceder y Registrarse */}
          <div className="flex items-center space-x-1">
            <Link to="/login" className="btn btn-ghost text-xl">
              Acceder
            </Link>
            <span className="text-xl">/</span>
            <Link to="/register" className="btn btn-ghost text-xl">
              Registrarse
            </Link>
          </div>

          {/* Carrito de compras */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <Link to="carrito">
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
                  {/* Número de items en el carrito */}
                </div>
              </Link>
            </label>
          </div>
        </div>
      </div>

      {/* Contenedor negro debajo del navbar */}
      <div className="w-full bg-naranja text-white text-center py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl">
            <i className="fas fa-coins"></i>
          </div>
          <span>¡ENVÍO GRATIS A PARTIR DE 30.000 CLP!</span>
          <div className="flex gap-4">
            <div className="bg-amarillo text-white rounded-full p-2 w-10 rounded-full">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="bg-amarillo text-white rounded-full p-2 w-10 rounded-full">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="bg-amarillo text-white rounded-full p-2 w-10 rounded-full">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
