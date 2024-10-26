import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica de registro, como enviar los datos a tu backend.
    
    // Una vez registrado, redirigir a UserLogin
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">Crea tu cuenta</h2>
        
        {/* Campo de Primer Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
            Nombre *
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            type="text"
            id="first-name"
            placeholder="Ingresa tu nombre"
          />
        </div>

        {/* Campo de Apellido */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
            Apellido *
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            type="text"
            id="last-name"
            placeholder="Ingresa tu apellido"
          />
        </div>

        {/* Campo de Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email *
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            type="email"
            id="email"
            placeholder="Ingresa tu email"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña *
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            type="password"
            id="password"
            placeholder="Ingresa contraseña"
          />
          <p className="text-xs text-gray-500 mt-1">
            La contraseña debe contener caracteres en mayúsculas y minúsculas, números y símbolos.
          </p>
        </div>

        {/* Campo de Confirmación de Contraseña */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Vuelve a ingresar contraseña *
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            type="password"
            id="confirm-password"
            placeholder="Ingresa contraseña"
          />
        </div>

        {/* Botón de Registro */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
