import Image from 'next/image';
import styles from './images-categories.css';

const images_categories = [
    {
        page: '/categorias/cuidado-de-la-piel',
        src: '', alt: 'Cuidado de la piel'
    },
    {
        page: '/categorias/maquillaje',
        src: 'null', alt: 'Maquillaje'
    },
    {
        page: '/categorias/cabello',
        src: 'null', alt: 'Cabello'
    },
    {
        page: '/categorias/accesorios',
        src: 'null', alt: 'Accesorios'
    }
]

export default function Categories_Img () {
    return (
        <div className="images-categories">
            {
                images_categories.map(({src, alt, page}, index) => (
                    <div className="image" key={index}>
                        <a href={page}><Image src={src} alt={alt} width={250} height={200} /></a>
                    </div>
                ))
            }
        </div>

    )
}