import React from 'react'

export const UserInfo = () => {
  return (
    <div className="h-[755px] px-[100px] py-[50px] flex-col justify-start items-center inline-flex"> 
  <div className="w-[1200px] justify-start items-start gap-[100px] inline-flex">
    <div className="flex flex-col items-start p-6 gap-6 w-[222px] h-[246px] bg-white rounded-none flex-none order-0 grow-0"> 
      {/* Frame 14: Información */}
      <div className="flex flex-row items-center gap-4 w-[160px] h-4 flex-none order-0 grow-0">
        {/* Icono Usuario */}
        <i className="fas fa-user text-[#23262F] w-4 h-4"></i>
        {/* Texto Información */}
        <span className="font-poppins font-bold text-[13px] leading-4 text-[#23262F]">
          Información
        </span>
      </div>

      {/* Frame 15: Acceso y seguridad */}
      <div className="flex flex-row items-center gap-4 w-[172px] h-4 flex-none order-1 grow-0">
        {/* Icono Lock */}
        <i className="fas fa-lock text-[#777E91] w-4 h-4"></i>
        {/* Texto Acceso y seguridad */}
        <span className="font-poppins font-bold text-[13px] leading-4 text-[#777E91]">
          Acceso y seguridad
        </span>
      </div>

      {/* Frame 16: Historial de pedidos */}
      <div className="flex flex-row items-center gap-4 w-[160px] h-8 flex-none order-2 grow-0">
        {/* Icono Tarjeta */}
        <i className="fas fa-credit-card text-[#777E91] w-4 h-4"></i>
        {/* Texto Historial de pedidos */}
        <span className="font-poppins font-bold text-[13px] leading-4 text-[#777E91]">
          Historial de pedidos
        </span>
      </div>

      {/* Frame 19: Mis favoritos */}
      <div className="flex flex-row items-center gap-4 w-[160px] h-4 flex-none order-3 grow-0">
        {/* Icono Corazón */}
        <i className="fas fa-heart text-[#777E91] w-4 h-4"></i>
        {/* Texto Mis favoritos */}
        <span className="font-poppins font-bold text-[13px] leading-4 text-[#777E91]">
          Mis favoritos
        </span>
      </div>

      {/* Frame 20: Mi blog */}
      <div className="flex flex-row items-center gap-4 w-[160px] h-4 flex-none order-4 grow-0">
        {/* Icono Lápiz */}
        <i className="fas fa-pen text-[#777E91] w-4 h-4"></i>
        {/* Texto Mi blog */}
        <span className="font-poppins font-bold text-[13px] leading-4 text-[#777E91]">
          Mi blog
        </span>
      </div>
    </div>
    <div className="h-[655px] flex-col justify-start items-start gap-5 inline-flex">
      <div className="w-[736px] h-[749px] flex-col justify-start items-start gap-[25px] flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-black text-xl font-semibold font-['Public Sans'] leading-[48px]">Información</div>
          <div className="px-3 py-1 bg-white rounded border border-[#aaaaaa] justify-center items-center gap-2.5 flex">
            <div className="text-center text-black text-xs font-medium font-['Poppins']">Ver perfil</div>
          </div>
        </div>
        <div className="self-stretch h-[568px] flex-col justify-start items-start gap-[25px] flex">
          <div className="self-stretch h-72 flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch text-[#22262e] text-base font-medium font-['Poppins'] leading-normal">Información personal</div>
            <div className="self-stretch justify-start items-start gap-5 inline-flex">
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="w-[280px] px-1.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-xs font-normal font-['Poppins'] leading-tight">Nombre de usuario</div>
                </div>
                <div className="px-3 py-3.5 bg-white rounded-lg border border-[#aaaaaa] flex-col justify-center items-start gap-2.5 flex">
                  <div className="w-64 justify-between items-center inline-flex">
                    <div className="text-[#aaaaaa] text-xs font-medium font-['Poppins'] leading-tight">Ingresa tu nombre usuario</div>
                  </div>
                </div>
                <div className="w-[280px] px-1.5 justify-end items-center gap-2.5 inline-flex" />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="w-[280px] px-1.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-xs font-normal font-['Poppins'] leading-tight">Nombre completo</div>
                </div>
                <div className="px-3 py-3.5 bg-white rounded-lg border border-[#aaaaaa] flex-col justify-center items-start gap-2.5 flex">
                  <div className="w-64 justify-between items-center inline-flex">
                    <div className="text-[#aaaaaa] text-xs font-medium font-['Poppins'] leading-tight">Ingresa tu nombre completo</div>
                  </div>
                </div>
                <div className="w-[280px] px-1.5 justify-end items-center gap-2.5 inline-flex" />
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-5 inline-flex">
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="w-[280px] px-1.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-xs font-normal font-['Poppins'] leading-tight">Teléfono</div>
                </div>
                <div className="px-3 py-3.5 bg-white rounded-lg border border-[#aaaaaa] flex-col justify-center items-start gap-2.5 flex">
                  <div className="w-64 justify-between items-center inline-flex">
                    <div className="text-[#aaaaaa] text-xs font-medium font-['Poppins'] leading-tight">Ingresa tu número teléfono</div>
                  </div>
                </div>
                <div className="w-[280px] px-1.5 justify-end items-center gap-2.5 inline-flex" />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="w-[280px] px-1.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-xs font-normal font-['Poppins'] leading-tight">Email </div>
                </div>
                <div className="px-3 py-3.5 bg-white rounded-lg border border-[#aaaaaa] flex-col justify-center items-start gap-2.5 flex">
                  <div className="w-64 justify-between items-center inline-flex">
                    <div className="text-[#aaaaaa] text-xs font-medium font-['Poppins'] leading-tight">Ingresa tu email</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[156px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch text-[#22262e] text-base font-medium font-['Poppins'] leading-normal">Redes</div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-[72px]" />
              <div className="w-[736px] self-stretch justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="w-[280px] px-1.5 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-xs font-normal font-['Poppins'] leading-tight">Instragram</div>
                  </div>
                  <div className="px-3 py-3.5 bg-white rounded-lg border border-[#aaaaaa] flex-col justify-center items-start gap-2.5 flex">
                    <div className="w-64 justify-between items-center inline-flex">
                      <div className="text-[#aaaaaa] text-xs font-medium font-['Poppins'] leading-tight">Ingresa tu usuario de instagram</div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="w-[280px] px-1.5 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-xs font-normal font-['Poppins'] leading-tight">Facebook</div>
                  </div>
                  <div className="px-3 py-3.5 bg-white rounded-lg border border-[#aaaaaa] flex-col justify-center items-start gap-2.5 flex">
                    <div className="w-64 justify-between items-center inline-flex">
                      <div className="text-[#aaaaaa] text-xs font-medium font-['Poppins'] leading-tight">Ingresa tu usuario de Facebook</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[72px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
