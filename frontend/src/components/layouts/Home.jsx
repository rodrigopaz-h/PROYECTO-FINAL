import Hero from "./Hero"
import Carousel from "./Sliderbar"
import SectionsHome from "../../views/generalViews/SectionsHome"
import BlogSection from "../../views/generalViews/BlogSection"

export default function Home() {
  return (
    <div>
      <Hero/>
      <SectionsHome titulo="Nuestros productos" descripcion="Esta es una descripción" tipoSeccion="productos" fondo="bg-naranja"/>
      <SectionsHome titulo="Categorias" descripcion="vive la experiencia del café" tipoSeccion="categoria"fondo="bg-limon"/>
      <BlogSection/>
    </div>
  )
}
