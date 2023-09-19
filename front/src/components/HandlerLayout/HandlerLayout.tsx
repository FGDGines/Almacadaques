import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalConext"
import Home from "../Home/Home"
import AboutMe from "../AboutMe/AboutMe"

const HandlerLayout = ()=>{
    const {layoutID} = useContext(GlobalContext)
    
    let screen = <div></div>
    switch (layoutID) {
        case 0:
            screen = <div>Hola</div>
            break;
        case 1:
            screen = <Home />
            break  ; 
        case 2:
            screen = <AboutMe/>
            break ; 
        default:
            break;
    }
    return <div>
        {screen}
    </div>
}

export default HandlerLayout

