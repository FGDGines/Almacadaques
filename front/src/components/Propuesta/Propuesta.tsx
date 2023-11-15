import './Propuesta.css'
import AlternateTimeline from '../TimeLine/TimeLine';
import { tlEspacios } from '../../data/tlEspacios';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { fetchDefault } from '../../helpers/Server';
import { formDataToObject } from '../../helpers/Forms';
import { tpDtmResponse, tpTimeLineData } from '../../types/typesComponents';

const Propuesta = ()=>{
    const {languageFlag} = useContext(GlobalContext)
    const [result, setResult] = useState<tpTimeLineData[]>([]);
    const l = languageFlag.toLowerCase() 
    const da = new FormData()
    da.set("lang", l)

    const data = {body: JSON.stringify(formDataToObject(da))}
    const espacios: tpTimeLineData[] = []

    useEffect(() => {
        const api = async () => {
            fetchDefault("/espacio/read", data, (d: tpDtmResponse) => {
                if(!d.bag || !d.bag.length)return  
                for (let index = 0; index < d.bag.length; index++) {
                    const element:{id: number , es:string , en: string , cat: string} = d.bag[index];
                    espacios.push({ id: element.id, text: element.es || element.en || element.cat })
                }
                const t = tlEspacios[languageFlag]
                console.log(espacios[0], t[0])
                setResult(espacios)
            })  
            
        };
        api()
        // eslint-disable-next-line
    }, []);
    return <div className="Propuesta">
        <div className="title">
            Espacios de bienestar en los que podrás:
        </div>
        <br /> 
        <AlternateTimeline data={result} />
         
    </div>
}


export default Propuesta