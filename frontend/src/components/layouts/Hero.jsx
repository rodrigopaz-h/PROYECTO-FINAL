import Button from "./Button"

export default function Hero() {
  return (
    <div><section className="px-3 py-5 bg-hero lg:py-10 ">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
      
      {/* Texto de la promoción */}
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
        <p className="text-4xl font-bold md:text-7xl">Venta de cafe</p>
        <p className="mt-2 text-sm md:text-lg">¡Por tiempo limitado!</p>
        <Button text="Ver productos" to="/todos"/>
      </div>

      {/* Imagen de la promoción */}
      <div className="order-1 lg:order-2">
        <img
          className="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]"
          src="../images/elipse.png"
          alt="Plantacion"
        />
      </div>
    </div>
  </section></div>
  )
}
