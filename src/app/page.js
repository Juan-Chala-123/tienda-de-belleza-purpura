import Image from "next/image";
import Form from "next/form";
import Bolsa from "@/app/components/icons/bolsa";
import Person from "@/app/components/icons/person";
import Slide from "@/app/components/slide/page";
import Categories_Img from '@/app/components/categorias/page';

export default function Home() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="navbar-top">
            <div className="logo">
              <Image className="img" src="/images/favicon.ico" alt="" width={32} height={32} />
              <a href="/" id="inicio" className="purpura">PURPURA</a>
            </div>
            <div>
              <Form action="/buscador">
                <input type="text" className="buscador" placeholder="¿Qué estas buscando?" name="buscar" />
              </Form>
            </div>
            <div className="iconos">
              <Bolsa />
              <Person />
            </div>
          </div>
          <div className="navbar-bottom">
            <div className="enlaces-centro">
              <a href="/" className="active" id="inicio">Inicio</a>
              <a href="/productos" id="productos">Productos</a>
              <a href="/ofertas" id="ofertas">Ofertas</a>
              <a href="/catalogos" id="nosotros">Catalogos</a>
              <a href="/lo-nuevo" id="contacto">¡Lo nuevo!</a>
            </div>
            <div className="enlaces-derecha">
              <a href="/mayorista" className="mayorista">Hazte Mayorista</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="imagen-fondo">
            <h1>Descubre tu <span className="belleza">Belleza</span> <span className="natural">Natural</span></h1>
            <a href="/productos">Explora nuestros productos</a>
        </div>

        <div className="container">
          <h1>Nuestros Productos Destacados</h1>
        </div>
        <div className="container">
          <div><h1>Categorias</h1></div>
          <div>
            <Categories_Img />
          </div>
        </div>
        <div className="container">
          <div>
            <h1>Nuestras Marcas</h1>
          </div>
          <div>
            <Slide />
          </div>
        </div>
      </main>
    </>
  );
}