
export default function Title({ title, text }) {
  return (
    <div className="py-4 bg-gray-100"> {/* Fondo gris claro */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-4">
          <div className="col-span-12">
            <nav>
              <ul className="flex flex-wrap items-center justify-center">
                {/* Enlace "Home" */}
                <li className="text-gray-800 font-medium text-base uppercase">
                    Inicio /
                </li>
                {/* Enlace "About Us" o el título */}
                <li className="text-gray-800 font-medium text-base uppercase ">
                  {title || ""}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Texto adicional debajo del título */}
      {text && (
        <div className="text-center mt-8 text-gray-700 text-lg font-medium">
          {text}
        </div>
      )}
    </div>
  );
}
