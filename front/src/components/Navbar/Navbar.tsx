import './Navbar.css'
import './Navbar.css'
import logo from '../../assets/logo/logo.png'
const Navbar = ()=>{
    return <div className='Navbar'>
        <div className='ctLogo'>
            <img className='logo' src={logo} alt="" />
        </div>

        <div className='ctTabs'>

            <div className='tab'>Inicio 
                <div className='borderFade'></div>
            </div>
            <div className='tab'>Sobre mi 
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
            <div className='btContacto'>
                * Contactar
            </div>

        </div>
    </div>
}


export default Navbar