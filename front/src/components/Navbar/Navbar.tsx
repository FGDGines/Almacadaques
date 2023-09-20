import './Navbar.css'
import './Navbar.css'
import logo from '../../assets/logo/logo.png'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalConext'
const Navbar = ()=>{
    const {setLayoutID} = useContext(GlobalContext)
    return <div className='Navbar'>
        <div className='ctLogo'>
            <img className='logo' src={logo} alt="" />
        </div>

        <div className='ctTabs'>

            <div className='tab' onClick={()=>setLayoutID(1)}>Inicio 
                <div className='borderFade'></div>
            </div>
            <div className='tab' onClick={()=>setLayoutID(2)}>Sobre mi 
                <div className='borderFade'></div>
            </div>
            <div className='tab'>Coaching 
                <div className='borderFade'></div>
            </div>

            <div className='tab tabDrd'>
                <span className='title'>Colaboradores</span>
                <div className='tabDrdMenu'>
                    <div className="tab">Colaborador 1</div>
                    <div className="tab">Colaborador 2</div>
                    <div className="tab">Colaborador 3</div>
                </div>
            </div>
        </div>

        <div className='ctContacto'>
            <div className='btContacto' onClick={()=>setLayoutID(3)}>
                * Contactar
            </div>

        </div>
    </div>
}


export default Navbar