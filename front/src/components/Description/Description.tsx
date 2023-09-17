import './Description.css'
import Carousel from '../Carousel/Carousel';
const Description = ()=>{
    return <div className='Description'>
        <div className='ctDefault'>
            <div className='ctTitle'>
                <span style={{color: "#75151E"}}> ❝ </span>
                Almacadaqués es un espacio de bienestar<br/>
                dirigido a todos aquellos que queremos vivir<br/> una vida llena y con sentido. <span style={{color: "#75151E"}}> ❞ </span>
            </div>
        </div>
        <div className='ctDefault'>
            <div className='ctDescription'>
                El proyecto nace en Cadaqués, un pueblecito precioso del Alt Empordà en el que paso temporadas, donde me lleno el<br/> 
                alma de buena energía, me nutro de naturaleza y mar y me inspiro. Y esta vibra es la que compartimos aquí.
            </div>
        </div>
        <Carousel />

    </div>
}


export default Description