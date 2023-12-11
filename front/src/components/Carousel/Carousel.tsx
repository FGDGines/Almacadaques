import './Carousel.css';
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { tpCarouelItem, tpCarouselData, tpDtmResponse } from '../../types/typesComponents'
import { GrLinkPrevious as FcPrevious, GrLinkNext as FcNext } from 'react-icons/gr'
import { fetchDefault } from '../../helpers/Server';

import { GlobalContext } from '../../contexts/GlobalContext';
import { formDataToObject } from '../../helpers/Forms';
  
const Carousel: FC<tpCarouselData> = ({ items }) => {
    const [sheets, setSheets] = useState(items);
    setSheets
    const ctPicture = useRef<HTMLDivElement>(null);
    
    const changeSheet = (forward: boolean) => {
        const children = ctPicture.current?.children;
        if (!children) return

        for (let i = 0; i < children?.length; i++) {
            children[i].classList.remove('slide-out')
            children[i].classList.remove('slide-in')
        }

        if (forward) {
            children[children.length - 1].classList.toggle("slide-out");
            setTimeout(() => {
                const dave: tpCarouelItem[] = []
                const buff = dave.concat(sheets)
                buff.unshift(buff[buff.length - 1])
                buff.pop()
                setSheets(buff)
            }, 300)
        }
        else {
            children[0].classList.toggle("slide-in")
            setTimeout(() => {
                const buff = sheets.slice(1, sheets.length)
                buff.push(sheets[0])
                setSheets(buff)
            }, 300)
        }
    }

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
                setSheets(carousel);
            }) 
        };
        api();
        // eslint-disable-next-line
    }, []);

    return !sheets.length? '' : <div className='Carousel'>
        <div className='ctPicture' ref={ctPicture}>
            {
                sheets.map((sheet) => {
                    return <div key={sheet.title}>
                        <a href={sheet.link_autor} target='_blank' className='Autor'>
                            {sheet.autor}
                        </a>
                        <img src={sheet.src} alt=""  />
                    </div>
                })
            }
        </div>
        <div className='ctTextController'>
            <button className='btnCarousel btLeft' onClick={() => changeSheet(false)}>
                <FcPrevious />
            </button>
            <button className='btnCarousel btLeft' onClick={() => changeSheet(true)}>
                <FcNext />
            </button>
            <h2>
                {sheets[sheets.length-1].title}
            </h2 >
        </div>
    </div>
}


export default Carousel