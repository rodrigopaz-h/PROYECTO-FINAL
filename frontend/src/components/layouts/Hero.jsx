import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <section className="bg-naranjal py-5 lg:py-10">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        
            {/* Texto de la promoción */}
            <div className="order-2 lg:order-1 flex flex-col lg:justify-center lg:items-center lg:text-center text-left">
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-negro-600 leading-relaxed lg:leading-snug">
                Degusta el mejor café
              </h1>
              <p className="mt-2 text-xs md:text-sm lg:text-lg leading-tight lg:leading-normal">
                ¡Solo para ti!
              </p>
              <Button text="Ver productos" to="/todos" />
            </div>


            {/* Imagen de la promoción */}
            <div className="order-1 lg:order-2">
              <img
                className="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]"
                src="../images/cafes.png"
                alt="Plantacion"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
