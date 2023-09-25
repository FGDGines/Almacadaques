import './Coaching.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import AlternateTimeline from '../TimeLine/TimeLine';
import { tlCoaching } from '../../data/tlCoaching';

const Coaching = ()=>{
    return <div className="Coaching">
        <Navbar />
        <Franja text="Coaching" />
        <br />
        <br />
        <div className='ctTitle1'>
            ¿Sientes que existe una brecha entre la vida que llevas y la que quieres llevar?<br />
             ¿Quieres convertirte en tu mejor versión?
        </div>
        <div className='ctMain'>
            <div className='timeLineContainer'>
                <AlternateTimeline data={tlCoaching} />         
            </div>
            <div className='ctPhoto'>
                <img className='Picture' src="./src/assets/background/unnamed (5).jpg" alt="" />
            </div>
        </div>
        
        <Footer />
    </div>   
}

export default Coaching