import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import Home from "../Home/Home"
import AboutMe from "../AboutMe/AboutMe"
import Contactar from "../Contactar/Contactar"
import Coaching from "../Coaching/Coaching"
import Navbar from '../Navbar/Navbar';
import ExperienciasDeBienestar from "../ExperienciasDeBienestar/ExperienciasDeBienestar"

const HandlerLayout = ()=>{
    const {layoutID} = useContext(GlobalContext)
    
    let screen = <div></div>
    switch (layoutID) {
        case 0:
            screen = <div>
                <Navbar />
            </div>
            break;
        case 1:
            screen = <Home />
            break  ; 
        case 2:
            screen = <AboutMe/>
            break ; 
        case 3:
            screen = <Contactar />
            break ; 
        case 4:
            screen = <Coaching />
            break ; 
        case 5:
            screen = <ExperienciasDeBienestar />
            break ; 
        default:
            screen = <div>
                <Navbar />
            </div>
            break;
    }
    return <div>
        {screen}
    </div>
}

export default HandlerLayout

