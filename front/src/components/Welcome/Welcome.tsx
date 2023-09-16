import './Welcome.css'
import BtNice from '../BtNice/BtNice';
const Welcome = ()=>{
    return <div className='Welcome'>
        <div className='ctConent'>
            <div className='title'>
                Almacadaques es un espacio de bienestar,<br/>
                dirigido a mujeres que quieren<br/>
                vivir una vida llena y con sentido.
            </div>
            <div className='ctButtons'>
                <BtNice handler={()=>0 } text={'Mas sobre mi'} />
                <BtNice handler={()=>0 } text={'Consulta Gratis'} />
            </div>
        </div>
    </div>
}

export default Welcome