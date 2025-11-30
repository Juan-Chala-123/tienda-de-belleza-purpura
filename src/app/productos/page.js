async function getProductos() {
    const [rows] = await db.execute('SELECT nombre, descripcion,  precio, imagen_principal FROM productos');
    return rows;
}

import Image from 'next/image';

export default function Productos() {
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
                        <a href="/productos" className="active" id="productos">Productos</a>
                        <a href="/nosotros" id="nosotros">Nosotros</a>
                        <a href="/contacto" id="contacto">Contacto</a>
                    </div>
                    <div className="enlaces-derecha">
                        <a href="/iniciar-sesion" className="iniciar-sesion">Iniciar Sesion</a>
                    </div>
                </nav>
            </header>
            <main>

            </main>
        </>
    )
}