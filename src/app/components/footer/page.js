import Image from "next/image";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Form from "next/form";

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                    <div className="purple">
                        <Image className="img" src="/images/favicon.ico" alt="" width={32} height={32} />
                        <a href="/" id="inicio" className="purple">PURPURA</a>
                    </div>
                    <div className="icons">
                        <a href="" className="icono"><Instagram /></a>
                        <a href="" className="icono"><Facebook /></a>
                    </div>
                </div>
                <div className="col">
                    <div>Productos</div>
                    <div>
                        <a href="/cosmeticos">Maquillaje</a>
                    </div>
                    <div>
                        <a href="/skincare">Cuidado Facial</a>
                    </div>
                    <div>
                        <a href="/lo-nuevo">Nuevos Productos</a>
                    </div>
                </div>
                <div className="col">
                    <div>Enlaces de Interes</div>
                    <div>
                        <a href="/nosotros">Nosotros</a>
                    </div>
                    <div>
                        <a href="/contacto">Contacto</a>
                    </div>
                    <div>
                        <a href="/mayorista">Ser Mayorista</a>
                    </div>
                </div>
                <div className="col">
                    <div>Newsletter</div>
                    <Form action="/newsletter">
                        <input type="email" className="email" placeholder="Tu email" name="email" /> 
                    </Form>
                </div>
            </div>
            <div className="linea-final"></div>
            <div className="final">
                <p>&copy; 2025 PURPURA - Todos los derechos reservados</p>
            </div>
        </div>
    )
}