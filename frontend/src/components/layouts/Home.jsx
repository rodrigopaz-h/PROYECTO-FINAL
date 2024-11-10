import Hero from "./Hero"
import Carousel from "./Sliderbar"
import SectionsHome from "../../views/generalViews/SectionsHome"
import BlogSection from "../../views/generalViews/BlogSection"

export default function Home() {
  return (
    <div>
      <Hero/>
      <SectionsHome titulo="Nuestros productos" descripcion="¡Granos de selección de todo el mundo!" tipoSeccion="productos" fondo="bg-naranja"/>
      <SectionsHome titulo="Categorias" descripcion="¡Vive la experiencia del café!" tipoSeccion="categoria" fondo="bg-negro" colortexto="text-white"/>
      <BlogSection/>
    </div>
  )
}
