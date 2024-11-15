import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/layouts/Button";

export const PasswordResetRequest = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center p-6 gap-6 w-[330px] bg-white shadow-lg rounded-lg">
        <div className="flex flex-row flex-wrap justify-center items-start content-center p-0 gap-[10px_25px] w-[280px] h-[105px]">
          <h2 className="font-public-sans font-semibold text-[15px] leading-[48px]">
            RESTABLECER CONTRASEÑA
          </h2>
          <p className="font-poppins font-medium text-[14px] leading-[21px] text-center">
            Le enviaremos un correo electrónico para restablecer su contraseña.
          </p>
        </div>
        <div className="flex flex-col items-start p-0 gap-2 w-[280px] ">
          <label className="font-poppins font-normal text-[12px] leading-[20px]">
            Email *
          </label>
            <input
              type="email"
              className="w-full h-full bg-transparent text-black "
              placeholder="Ingresa tu email"
              required
            />
        </div>
        <div className="flex justify-center items-start p-0 gap-6 w-[280px]">
          {/* Botón Enviar */}
          <Button to="/enviar" text="Enviar"/> 

          {/* Botón Cancelar */}
          <Button to="/cancelar" text=" Cancelar" bg="bg-verde"/> 
        </div>
      </div>
    </div>
  );
};
