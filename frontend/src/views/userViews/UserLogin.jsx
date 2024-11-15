import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// Importar la URL base del servidor
const urlBaseServer = import.meta.env.VITE_URL_BASE_SERVER;

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función UserLogin para manejar el envío del formulario
  const UserLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${urlBaseServer}/api/users/login`, {
        email,
        password,
      });
      
      // Si el inicio de sesión es exitoso, guarda el token y redirige
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        navigate('/todos');
      } else {
        setError("Error de autenticación: token no recibido");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Credenciales incorrectas o problema con el servidor");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={UserLogin} className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">Accede a tu cuenta</h2>
        
        {/* Mostrar mensaje de error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
