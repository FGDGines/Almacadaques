import './Podcast.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
const Podcast = ()=>{
    return <div className="Podcast">
        <Navbar/>
        <Franja text='Podcast' />
        <Footer />
    </div>

}

export default Podcast 