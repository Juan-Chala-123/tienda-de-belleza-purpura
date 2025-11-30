import Image from 'next/image';

export default function Contacto() {
    return (
        <>
            <header>
                <nav className="nav">
                    <div className="logo">
                        <Image className="img" src="/images/favicon.ico" alt="" width={32} height={32} />
                        <a href="/" id="inicio" className="purpura">PURPURA</a>
                    </div>                      
                    <div className="enlaces-centro">
                        <a href="/" id="inicio">Inicio</a>
                        <a href="/productos" id="productos">Productos</a>
                        <a href="/nosotros" id="nosotros">Nosotros</a>
                        <a href="/contacto" className="active" id="contacto">Contacto</a>
                    </div>
                    <div className="enlaces-derecha">
                        <a href="/iniciar-sesion" className="iniciar-sesion">Iniciar Sesion</a>
                    </div>
                </nav>
            </header>
            <h1>Contacto</h1>
        </>
    )
}