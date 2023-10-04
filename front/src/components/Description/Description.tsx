import './Description.css'
import Carousel from '../Carousel/Carousel';
import Propuesta from '../Propuesta/Propuesta';
import { carouselDescription } from '../../data/carousel';
const Description = () => {

    return <>
        <div className='Description'>
            <div className='ctDefault'>
                <div className='ctTitle'>
                    <span style={{ color: "#75151E" }}> ❝ </span>
                    El proyecto nace en Cadaqués, un pueblecito precioso del Alt Empordà en el que paso temporadas, donde me lleno el
                    alma de buena energía, me nutro de naturaleza y mar y me inspiro. Y esta vibra es la que compartimos aquí. <span style={{ color: "#75151E" }}> ❞ </span>
                </div>
            </div>
            <div className='ctCarousel'>
                <Carousel  items={carouselDescription} />
            </div>
            <div className='ctDefault'>
                <div className='ctTitle2'>  
                    <span style={{ color: "#75151E" }}> ❝ </span>
                        Te proponemos parar para reconectar contigo, soltar lo que ya no necesitas <br /> y vibrar con la energía positiva para atraer lo que quieres.
                    <span style={{ color: "#75151E" }}> ❞ </span>
                </div>
            </div>

            <Propuesta />

            
        </div>
        <div className='Horizonte'>

        </div>
    </>
}


export default Description