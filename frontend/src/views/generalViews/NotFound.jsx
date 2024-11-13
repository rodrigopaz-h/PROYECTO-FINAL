import Button from "../../components/layouts/Button"

export default function NotFound() {
  return (
    <div>
      <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-negro">404</p>
        <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-negro mt-2">Página no encontrada</p>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Disculpa, no encontramos lo que buscas.</p>
        <Button text="Regresar al home" to="/"/>
    </div>
    <div class="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
    <img
                className="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]"
                src="../images/cafecito.png"
                alt="404"
              />
    </div>
</div>
    </div>
  )
}
