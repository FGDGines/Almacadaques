import './Coaching.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import TestimonyBar from "../TestimonyBar/TestimonyBar";
import { testimonies } from '../../data/testimonies';

const Coaching = () => {
    const {languageFlag} = useContext(GlobalContext)
    return <div className="Coaching">
        <Navbar />
        <Franja text="Coaching" />
        <br />
        <br />
        <div className='ctTitle1'>
        {textos[languageFlag].textcoaching1}
        </div>
        <div className='ctMain'>
            <div className='timeLineContainer'>
                <p>{textos[languageFlag].textcoaching2}</p>
                <p>{textos[languageFlag].textcoaching3}</p>
                <p>{textos[languageFlag].textcoaching4}</p>
                <p>{textos[languageFlag].textcoaching5}</p>
            </div>
            <div className='ctPhoto'>
                <img className='Picture' src="./src/assets/background/unnamed (5).jpg" alt="" />
            </div>
        </div>
        <TestimonyBar
            quantityPerLayout={3}
            testimonies={testimonies}
        />

        <Footer />
    </div>
}

export default Coaching