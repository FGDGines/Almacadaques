import BlogInfo from "../BlogInfo/BlogInfo";
import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogRetiro.css";

function BlogRetiro() {
    return (
        <>

            
                <Navbar />
                <Franja text="Blog Retiros" />
            <div className="BlogRetiros">
                <BlogInfo
                    index={0}
                    tags={["Salud", "Fitness", "Nutrición", "Mente"]}
                    image="./src/assets/images/blog-line-1-620x464.jpg"
                    title="Playa"
                    abstract="Reúnete en la playa con expertos del coaching, para alinear tus chakras y que el bienestar fluya con las mejores compañias"
                />
                <BlogInfo
                    index={0}
                    tags={["Salud", "Fitness", "Nutrición", "Mente"]}
                    image="./src/assets/images/blog-line-1-771x515.jpg"
                    title="Playa"
                    abstract="Reúnete en la playa con expertos del coaching, para alinear tus chakras y que el bienestar fluya con las mejores compañias"
                />
                <BlogInfo
                    index={0}
                    tags={["Salud", "Fitness", "Nutrición", "Mente"]}
                    image="./src/assets/images/blog-line-2-770x433.jpg"
                    title="Playa"
                    abstract="Reúnete en la playa con expertos del coaching, para alinear tus chakras y que el bienestar fluya con las mejores compañias"
                />
                
            </div>
            <Footer />
        </>
    )
}

export { BlogRetiro }