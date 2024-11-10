import React from 'react';

export default function Title({ title }) {
  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-4">
          <div className="col-span-12">
            <nav>
              <ul className="flex items-center justify-center font-sans space-x-4 m-4 text-base">
                <li className="text-gray-500 cursor-pointer">Inicio</li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 w-3.5 rotate-90 transform"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li className="text-gray-800 font-bold cursor-pointer">{title || ""}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
