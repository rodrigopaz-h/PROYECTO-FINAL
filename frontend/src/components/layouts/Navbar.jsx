const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 bg-naranjal">
        <img src="/images/logo cafe.png" alt="Logo" />
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Cafes</a>
          <a className="btn btn-ghost text-xl">Accesorios</a>
          <a className="btn btn-ghost text-xl">Equipos</a>
          <a className="btn btn-ghost text-xl">Ofertas</a>
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
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
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
            <a className="btn btn-ghost text-xl">Acceder</a>
            <span className="text-xl">/</span>
            <a className="btn btn-ghost text-xl">Registrarse</a>
          </div>

          {/* Carrito de compras */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                <span className="badge badge-sm indicator-item">0</span>
                {/* Número de items en el carrito */}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Checkout</a>
              </li>
            </ul>
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
            <div className="bg-white text-naranja rounded-full p-2">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="bg-white text-naranja rounded-full p-2">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="bg-white text-naranja rounded-full p-2">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
