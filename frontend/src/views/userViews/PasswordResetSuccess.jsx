import React from 'react';
import Button from '../../components/layouts/Button';

export const PasswordResetSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-6 w-[330px] bg-white shadow-lg rounded-lg">
        {/* Título de Restablecer Contraseña */}
        <h2 className="font-public-sans font-semibold text-[15px] leading-[48px] text-center">
          RESTABLECER CONTRASEÑA
        </h2>
        
        {/* Mensaje informativo */}
        <p className="font-poppins font-medium text-[14px] leading-[21px] text-center mb-4">
          Te hemos enviado un correo para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada y sigue las instrucciones.
        </p>

        {/* Botón Iniciar Sesión*/}
        <Button to="/login" text="Iniciar sesión"/>
      </div>
    </div>
  );
};
