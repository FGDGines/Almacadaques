import './Home.css'
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import Description from '../Description/Description';
const Home = ()=>{
    return <div className="Home">
        <Navbar />
        <Welcome />
        <Description />
    </div>
}

export default Home