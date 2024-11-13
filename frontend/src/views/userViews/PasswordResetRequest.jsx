import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/layouts/Button";

export const PasswordResetRequest = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col  p-6 w-[330px] bg-white shadow-lg rounded-lg">
        <div className="flex flex-row flex-wrap items-start content-center p-0 gap-[10px_25px] w-[280px] h-[105px]">
          <h2 className=" font-semibold text-[15px] leading-[48px]">
            RESTABLECER CONTRASEÑA
          </h2>
          <p className=" font-medium text-[14px] leading-[21px]">
            Le enviaremos un correo electrónico para restablecer su contraseña.
          </p>
        </div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-negro-900">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                    placeholder="tu.email@mail.com"
                    required
                  />
       
        <div className="flex justify-between items-start p-0 gap-6 w-[280px]">
          {/* Botón Enviar */}
          <Button to="/enviar" text="Enviar"/> 

          {/* Botón Cancelar */}
          <Button to="/cancelar" text=" Cancelar" bg="bg-verde"/> 
        </div>
      </div>
    </div>
  );
};
