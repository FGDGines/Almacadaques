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

            <div className="containerSobremi_1">
                
                <div className="infoSobremi_1">
                    <p>Algunas cosas sobre mi</p>
                    <ul>
                        <li>Desde siempre he sentido la inquietud de entender la vida, el mundo que
                            me rodea y el ser humano. Tengo un interés genuino por las personas, sus
                            biografías, las relaciones personales y la diversidad cultural.</li>
                        <li>Mi larga trayectoria como consultora internacional viajando por todo el mundo
                            me ha permitido conocer distintas culturas y relacionarme con
                            personas con diferentes valores e intereses, lo que me ha llevado
                            a profundizar estudiando sobre autoconocimiento, crecimiento personal y liderazgo.</li>

                        <li>Las crisis me han llevado a indagar dentro de mi para conocerme. Y todos
                            los baches han sido oportunidades para conocerme mejor y crecer, minimizando
                            el sufrimiento y encontrando más paz y armonía.</li>

                        <li>Con lo aprendido, lo que ofrezco es facilitarte herramientas para ayudarte a
                            reencontrar tu bienestar y tu paz interior, trabajando las emociones, los
                            sentimientos, los valores y como gestionar los cambios de manera amable para
                            llegar a los objetivos que quieres en tu vida.</li>
                    </ul>
                    
                </div>
                <div className="photo_1">
                    <img src="/src/assets/background/unnamed (2).jpg" alt="Foto sobre mi" />                
                </div>
            </div>

            <div className="containerSobremi_2">
            <div className="photo_2">
                    <img src="../../../src/assets/images/no-foto.png" alt="Foto sobre mi" />
                </div>
                <div className="infoSobremi_2">
                    <ul>
                        <li>Soy una apasionada del conocimiento personal y de trabajar el despertar de la consciencia de las personas y la sociedad.</li>
                        <li>Disfruto de la música y a menudo escucho música en directo.</li>
                        <li>La belleza y la armonía son importante y rodeo mi vida de ellas.</li>
                        <li>Me encanta aprender cada día y siempre tengo retos.</li>
                        <li>Me gusta cuidarme y es muy importante mi bienestar. Cuando yo estoy bien mi entrono también.</li>
                        <li>Mis hobbies favoritos sonÑ Leer, Escribir, Arte, Nadar en el mar, Cantar, Bailar, Viajar, Descubrir otras culturas, senderismo</li>
                    </ul>
                </div>
                
            </div>

            <div className="containerSobremi_1">
                
                <div className="infoSobremi_1">
                    <p>Bibliografía personal</p>
                    <ul>
                        <li>Licenciada en psicología (Universidad Oberta de Catalunya).</li>
                        <li>Máster en Coaching Teleológico (Universidad de Barcelona).</li>
                        <li>Posgrado en Liderazgo y Desarrollo personal (Instítuto Barja Vilaseca).</li>
                        <li>Licenciada en ciencias Económicas y Empresariales (Universidad Autónoma de Barcelona).</li>
                        <li>Posgrado y Máster en comercio internacional (Universidad Pompeu Fabra).</li>
                        <li>Doing Business Globally (ESADE).</li>
                        <li>Postgrado en licitaciones Internacionales (Universidad la Salle).</li>
                        <li>Formación continuada en el ambito de la empresa y crecimiento personal.</li>
                    </ul>
                </div>
                <div className="photo_1">
                    <img src="../../../src/assets/images/no-foto.png" alt="Bibliografía" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}


export default AboutMe