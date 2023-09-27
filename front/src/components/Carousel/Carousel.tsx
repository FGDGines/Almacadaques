import './Carousel.css'
import { FC, useEffect, useState } from 'react'
import { tpCarouselData } from '../../types/typesComponents'

const Carousel: FC<tpCarouselData> = ({ items }) => {
    const [itemActive, setItemActive] = useState<number[]>([])

    useEffect(() => {
        activarItem(0)
    }, [])

    const activarItem = (target: number) => {
        const array = items.map((arg, index) => {
            return (index == target) ? 1 : 0
        })
        setItemActive(array)
    }

    const activarSiguiente = () => {
        itemActive.forEach((arg, index) => {
            if (arg == 1) {
                if (index == itemActive.length - 1) activarItem(0)
                else activarItem(index + 1)
            }
        });
    }

    const activarAnterior = () => {
        itemActive.forEach((arg, index) => {
            if (arg == 1) {
                if (index == 0) activarItem(itemActive.length - 1)
                else activarItem(index - 1)
            }
        })
    }

    return <div className='ctCarousel'>
        <section className="carrousel">
            {items.map((arg, index) => {
                const { title, src } = arg
                return <div key={index} className={`${itemActive[index] ? 'current' : ''} slide `}>
                    <img src={src} className="img-fluid" alt="" />
                    <div className="textoSlider">
                        {title}
                    </div>
                </div>
            })}

        </section>

        <div className="controls d-flex align-items-center" >
            <button className="prev" onClick={activarAnterior}>
                <span >
                    {"<"}
                </span>
            </button>
            <div className="circles">
                {itemActive.map((arg, index) => {
                    return <div key={index} onClick={() => activarItem(index)} className={`circle ${arg == 1 ? 'active' : ''}`}>

                    </div>
                })}

            </div>
            <button onClick={activarSiguiente} className="next"><span> {">"} </span></button>
        </div>
    </div>
}


export default Carousel