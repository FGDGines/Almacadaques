import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Description from "../Description/Description";
import ComoYDonde from "../ComoYDonde/ComoYDonde";
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Welcome />
      <Description />
      <ComoYDonde />
    </div>
  );
};

export default Home;
