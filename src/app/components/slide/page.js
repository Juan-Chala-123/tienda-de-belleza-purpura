import Image from 'next/image';
import styles from './images_marcas.css';

const images_marcas = [
    {
        page: '/marcas/bioaqua',
        src: '/images/marcas/bioaqua.jpg', alt: 'Bioaqua'
    },
    {
        page: '/marcas/karite',
        src: '/images/marcas/karite.png', alt: 'Karite'
    },
    {
        page: '/marcas/kiss-beauty',
        src: '/images/marcas/kiss_beauty.jpg', alt: 'Kiss Beauty'
    },
    {
        page: '/marcas/ruby-face',
        src: '/images/marcas/ruby_face.jpg', alt: 'Ruby Face'
    },
    {
        page: '/marcas/sfr-color',
        src: '/images/marcas/s.f.r_color.jpg', alt: 'S.F.R Color'
    },
    {
        page: '/marcas/trendy',
        src: '/images/marcas/trendy.jpg', alt: 'Trendy'
    }
]

export default function Slide () {
    const slides = [...images_marcas, ...images_marcas];
    return (
        <div className="slider">
            <div className="slide-track">
                {
                    slides.map(({src, alt, page}, index) => (
                        <div className='slide' key={index}>
                            <a href={page}><Image src={src} alt={alt} width={250} height={200} /></a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}