// src/context/UserContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Función para registrar al usuario
  const registerUser = (userData) => {
    setUser(userData); // Guarda la información del usuario en el estado global
  };

  return (
    <UserContext.Provider value={{ user, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
