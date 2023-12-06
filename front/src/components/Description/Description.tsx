import './Description.css'
import Carousel from '../Carousel/Carousel';
import Propuesta from '../Propuesta/Propuesta';
import { textos } from '../../data/textos';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
// import { carouselDescription } from '../../data/carousel';
import { formDataToObject } from '../../helpers/Forms';
import { tpCarouelItem, tpDtmResponse } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';
const Description = () => {
    const [caorusels, setCarousels] = useState<tpCarouelItem[]>([]);
    const { languageFlag } = useContext(GlobalContext)
    const l = languageFlag.toLowerCase() 
    const da = new FormData()
    da.set("lang", l)
    const data = {body: JSON.stringify(formDataToObject(da))}
    
    
    useEffect(() => {
        const api = async () => {
            const carousel: tpCarouelItem[] = []
            fetchDefault("/carousel/read", data, (d: tpDtmResponse) => {
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: {id: number , autor: string  , link_autor: string, src:string, data_carousel: {es: string, en: string , cat: string} } = d.bag[index];
                    const r = "src/carousel/";
                    carousel.push({ id: element.id, autor: element.autor, link_autor: element.link_autor, src: r + element.src, title: element.data_carousel.es || element.data_carousel.en || element.data_carousel.cat });
                }
                setCarousels(carousel);
                console.log(carousel, caorusels)
            }) 
        };
        api();
        // eslint-disable-next-line
    }, [l]); 
    return <>
        <div className='Description'>
            <div className='ctDefault'>
                <div className='ctTitle'>
                    <span style={{ color: "#75151E" }}> ❝ </span>
                    {textos[languageFlag].textDesthome1}<span style={{ color: "#75151E" }}> ❞ </span>
                </div>
            </div>
            <div className='ctCarousel'>
                <Carousel  items={caorusels} />
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