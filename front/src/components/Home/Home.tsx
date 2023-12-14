import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Description from "../Description/Description";
import ComoYDonde from "../ComoYDonde/ComoYDonde";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="Home">
      <div className="foto-inicio">
        <div className="as-inner">

          <Navbar />
          <Welcome />
          <Description />
          <ComoYDonde />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
