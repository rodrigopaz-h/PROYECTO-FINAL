import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica de autenticación, como verificar el email y contraseña.
    
    // Una vez autenticado correctamente, redirigir a la vista principal
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">Accede a tu cuenta</h2>
        
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

        {/* Enlace para crear una cuenta */}
        <div className="text-sm text-gray-500 mb-4">
          Si aún no tienes una cuenta, créala <a href="/register" className="text-black font-semibold underline">aquí</a>
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
        </div>

        {/* Enlace para recuperar contraseña */}
        <div className="text-sm text-gray-500 mb-6">
          <a href="/forgot-password" className="text-black font-semibold underline">Olvidaste tu contraseña?</a>
        </div>

        {/* Botón de Inicio de Sesión */}
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
