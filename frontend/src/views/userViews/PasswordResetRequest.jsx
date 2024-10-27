import React from 'react'

export const PasswordResetRequest = () => {
  return (
    <div className="flex flex-col items-center p-6 gap-6 w-[330px] h-[305px] bg-white flex-none order-0 grow-0">
    <div className="flex flex-row flex-wrap justify-center items-start content-center p-0 gap-[10px_25px] w-[280px] h-[105px] flex-none order-0 grow-0">
      <h2 className="font-public-sans font-semibold text-[20px] leading-[48px]">
        RESTABLECER CONTRASEÑA
      </h2>
      <p className="font-poppins font-medium text-[14px] leading-[21px]">
        Le enviaremos un correo electrónico para restablecer su contraseña.
      </p>
    </div>
    <div className="flex flex-col items-start p-0 gap-2 w-[280px] h-[74px] flex-none order-1 grow-0">
      <label className="font-poppins font-normal text-[12px] leading-[20px]">
        Email *
      </label>
      <div className="flex flex-col justify-center items-start p-[14px_12px] gap-2 w-[280px] h-[48px] bg-white border border-[#AAAAAA] rounded-[8px] flex-none order-1 grow-0">
        <input
          type="email"
          className="w-full h-full bg-transparent text-black placeholder-gray-400 focus:outline-none"
          placeholder="Ingresa tu email"
          required
        />
      </div>
    </div>
    <div className="flex justify-center items-start p-0 gap-6 w-[280px] h-[26px] flex-none order-2 grow-0">
      {/* Botón Enviar */}
      <button className="flex justify-center items-center p-[4px_12px] gap-2 w-[61px] h-[26px] bg-black rounded-[4px] flex-none order-0 grow-0 text-white">
        Enviar
      </button>
      
      {/* Botón Cancelar */}
      <button className="flex justify-center items-center p-[4px_12px] gap-2 w-[80px] h-[26px] bg-white border border-[#AAAAAA] rounded-[4px] flex-none order-1 grow-0 text-black">
        Cancelar
      </button>
    </div>
  </div>
  )
}
