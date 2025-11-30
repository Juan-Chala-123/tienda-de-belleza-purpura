import Image from 'next/image';

export default function Nosotros() {
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
                        <a href="/nosotros" className="active" id="nosotros">Nosotros</a>
                        <a href="/contacto" id="contacto">Contacto</a>
                    </div>
                    <div className="enlaces-derecha">
                        <a href="/iniciar-sesion" className="iniciar-sesion">Iniciar Sesion</a>
                    </div>
                </nav>
            </header>
            <main>
                <div className="imagen-fondo-nosotros">
                    
                </div>
                <div>
                    <h1>NOSOTROS</h1>
                    <p>Nosotros ...</p>
                </div>
            </main>
        </>
    )
}