import './Footer.css'


const Footer = () => {
    return (
        <div className="Footer">
            <div className="container1">
                <div className="containerRight">
                    <h3 className='titleFooter'>AVISO LEGAL</h3>
                    <div className="span1"></div>

                    <p className='subtitlefooter'><a href='#' className='enlaceFooter'> Politica de Privacidad</a> </p>
                    <div className="span2"></div>
                    <p className='subtitlefooter'><a href='#' className='enlaceFooter'> Politica de coockies</a>  </p>
                    <div className="span3"></div>
                    <p className='subtitlefooter'><a href='#' className='enlaceFooter'> Aviso legal </a> </p>
                </div>
                <div className="containerCenter">
                    <h3 className='titleFooter'>Info Contacto </h3>
                    <div className="span4"></div>
                    <p className='subtitlefooter'><img src="../../../src/assets/images/whatsapp.png" alt="Telefono" className='whatsapp '/><a href='https://wa.me/+34660305421?text=Hola Almacadaques' target='_blank' className='enlaceFooter'> +34 660 30 54 21</a> </p>
                    <div className="span5"></div>
                    <p className='subtitlefooter' ><a href='#' target='_blank' className='enlaceFooter'> hola@almacadaques</a> </p>
                    <div className="span6"></div>
                    <p className='subtitlefooter'><a href='mailto:hola@almacadaques.com' target='_blank' className='enlaceFooter'> Almacadaques.com </a> </p>
                </div>
                <div className="containerLeft">
                    <h3 className='titleFooter'>Newlester </h3>
                    <div className="span7"></div>
                    <form action="#">
                        <p className='correo'>Direccion de correo electrónico</p>
                        <div className="input-group">
                            <input required type="email" name="email" autoComplete="on" className="input" />
                            <label className="user-label">Tu direccion de correo aqui</label>
                        </div>
                    </form>
                    <button className='buttonFooter' type='button'>Registro</button>
                </div>
            </div>
            <div className="container2">
                <div className="infofooter">
                    <div className="redes">
                        <div className="socialRed">
                            <a href="https://www.facebook.com/almacadaques?locale=es_LA" target='_blank'><img className="img " src="../../../src/assets/images/facebook.png" alt="Facebook" /></a>
                            <a href="https://www.linkedin.com/in/elisabet-coll-vinent-b9765530" target='_blank'><img className="img " src="../../../src/assets/images/linkedin.png" alt="Linkedin" /></a>
                            <a href="mailto:hola@almacadaques.com" target='_blank'><img className="img email" src="../../../src/assets/images/email.png" alt="Email" /></a>
                            <a href="https://www.instagram.com/almacadaques" target='_blank'><img className="img " src="../../../src/assets/images/instagram.png" alt="Instagram" /></a>
                        </div>
                        <div className="whats">
                            <a href="https://wa.me/+34660305421?text=Hola Almacadaques" target='_blank'><img className="img1 " src="../../../src/assets/images/whatsapp.png" alt="whatsapp"  /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}


export default Footer