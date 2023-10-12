import './CoachingBienestar.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';

const CoachingBienestar = () => {
    return <div className="CoachingBienestar">
        <Navbar />
        <Franja text="Coaching" />
        Bienestar
        <Footer />
    </div>
}

export default CoachingBienestar