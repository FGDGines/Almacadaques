import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogRetiro.css";

function BlogRetiro() {
    return (
        <>

            <div className="BlogRetiros">
                <Navbar />
                <Franja text="Blog Retiros" />
               

                <Footer />
            </div>
        </>
    )
}

export { BlogRetiro }