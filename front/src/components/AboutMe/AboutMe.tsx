import './AboutMe.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
const AboutMe = () => {
    return <div className="AboutMe">
        <Navbar />
        <Franja text='Sobre Mi' />
        <div className='title1'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                Te ayudo a vivir en plenitud, encontrar tu bienestar  y tu paz interior.
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>
        <div className='Contenido'>
            <div className='ctLeft'>
                <br />
                <br />
                <br />
                Desde siempre he sentido la inquietud de entender la vida, el mundo que
                me rodea y el ser humano. Tengo un interés genuino por las personas, sus
                biografías, las relaciones personales y la diversidad cultural.
                <br />
                <br />
                Mi larga trayectoria como consultora internacional viajando por todo el mundo
                me ha permitido conocer distintas culturas y relacionarme con
                personas con diferentes valores e intereses, lo que me ha llevado
                a profundizar estudiando sobre autoconocimiento, crecimiento personal y liderazgo.
                <br />
                <br />
                Las crisis me han llevado a indagar dentro de mi para conocerme. Y todos
                los baches han sido oportunidades para conocerme mejor y crecer, minimizando
                el sufrimiento y encontrando más paz y armonía.
                <br />
                <br />
                Con lo aprendido, lo que ofrezco es facilitarte herramientas para ayudarte a
                reencontrar tu bienestar y tu paz interior, trabajando las emociones, los
                sentimientos, los valores y como gestionar los cambios de manera amable para
                llegar a los objetivos que quieres en tu vida.
            </div>
            <div className='ctRight'>
                <img src="./src/assets/background/unnamed (2).jpg" alt="" />
                <h1 className='titleSoy'>Psicóloga – Mentora – Coach</h1>
            </div>
        </div>
        <Footer />
    </div>
}


export default AboutMe