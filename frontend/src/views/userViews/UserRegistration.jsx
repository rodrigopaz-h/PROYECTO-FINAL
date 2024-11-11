import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Button from '../../components/layouts/Button';


const UserRegistration = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext); // Obtiene la función registerUser del contexto

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obtén los datos del formulario
    const userData = {
      firstName: e.target['first-name'].value,
      lastName: e.target['last-name'].value,
      email: e.target['email'].value,
    };

    // Guarda el usuario en el contexto
    registerUser(userData);

    // Redirige a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <div id='form-registro' className="flex justify-center items-center min-h-screen py-20">
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>

        {/* Botón de Registro */}
        <div className="mt-6 flex justify-center">
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
