import './Description.css'
import Carousel from '../Carousel/Carousel';
import Propuesta from '../Propuesta/Propuesta';
import { textos } from '../../data/textos';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { carouselDescription } from '../../data/carousel';
const Description = () => {
    const {languageFlag} = useContext(GlobalContext)
    return <>
        <div className='Description'>
            <div className='ctDefault'>
                <div className='ctTitle'>
                    <span style={{ color: "#75151E" }}> ❝ </span>
                    {textos[languageFlag].textDesthome1}<span style={{ color: "#75151E" }}> ❞ </span>
                </div>
            </div>
            <div className='ctCarousel'>
                <Carousel  items={carouselDescription} />
            </div>
            <div className='ctDefault'>
                <div className='ctTitle2'>  
                    <span style={{ color: "#75151E" }}> ❝ </span>
                    {textos[languageFlag].textDesthome2}
                        {/* Te proponemos <b>parar</b> para <b>reconectar</b> contigo, <b>soltar</b> lo que ya no necesitas <br /> 
                        y vibrar con la <b>energía positiva</b> para <b> atraer</b> lo que quieres. */}
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