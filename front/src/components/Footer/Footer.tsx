import './Footer.css';
import { textos } from '../../data/textos';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { fetchDefault } from '../../helpers/Server';
import { formDataToObject } from '../../helpers/Forms';
import { tpDtmResponse, RedesProps, RedProps } from '../../types/typesComponents';


import telImg from "../../../src/assets/images/mensaje-de-telefono.png"
import { iconRedByName, splitUrlRedesWatsap } from '../../helpers/RedesHelp';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
// import w from "../../../src/assets/images/whatsapp.png"                            
// import facebook from "../../../src/assets/images/facebook.png"
// import linkedin from "../../../src/assets/images/linkedin.png"
// import em from "../../../src/assets/images/email.png"
// import instagram from "../../../src/assets/images/instagram.png"


const Footer = () => {
    const { languageFlag } = useContext(GlobalContext)
    const { setLayoutID } = useContext(GlobalContext);
    const [ redes, setRedes ] = useState<RedesProps>([])
    const [ email, setEmail ] = useState("")
    const [ wats, setWats ] = useState<RedProps | null>(null)
    const [ watsNumber, setWatsNumber ] = useState<string>("")

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target; 
        setEmail(value);
      };

    const send = (event: React.FormEvent) => { 
        event.preventDefault() 
        const bag  = new FormData()
        bag.set('nombre', "NewsLetterUser"); 
        bag.set('correo', email); 
        bag.set('msg', 'Este usuario quere Unirse a tu newsletter')
        bag.set('fragment', 'Newsletter Footer') 
        // console.log(bag.get("email"))
        // const res = fetchDefault('/mail/create', {body: JSON.stringify(formDataToObject(bag))})
        // console.log({body: JSON.stringify(formDataToObject(bag))})
        fetchDefault('/mail/create', {body: JSON.stringify(formDataToObject(bag))}, (d: tpDtmResponse) => {
            if (d.status == 200) {
                setEmail("")
            }
            mostrarAlerta(d)
        }) // override
    
    }


    useEffect(() => {
        const api = async () => {
            const red: RedesProps = []
            fetchDefault("/red/read", {}, (d: tpDtmResponse) => {
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: {id: number , archivo: string, url: string, cuenta:string } = d.bag[index];
                    // const r = "src/red/"
                    const url = element.url
                    const value = { 
                        index: element.id, 
                        // archivo: r + element.archivo, 
                        archivo: iconRedByName(element.cuenta),
                        url: url, 
                        cuenta: element.cuenta
                    }
                    if (url.startsWith("https://wa.me/" || element.cuenta == "whatsapp")) {
                        
                        // console.log(url, splitUrlRedesWatsap(url)[0])
                        setWatsNumber("+34" + splitUrlRedesWatsap(url)[0])
                        setWats({
                            index: element.id,
                            archivo: iconRedByName(element.cuenta),
                            url: splitUrlRedesWatsap(url)[2], 
                            cuenta: element.cuenta
                        })
                        // console.log(url)
                        // for (let index = init + 1; index < url.length; index++) {
                        //     const element = url[index];
                        //     const regex = /^\d$/;
                        //     if (!regex.test(element)) {
                        //         break
                        //     }
                        //     taken += element
                        // }
                        // setWats(value)
                        // console.log(taken)
                        // if (taken.length > 5) {
                        //     console.log(taken, url)
                        //     setWatsNumber(taken)
                        // }
                    } else { 
                        red.push(value);
                    }
                   
                }
                setRedes(red);
            }) 
        };
        api();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="Footer">
            <div className="container1">
                <div className="contTablet">
                    <div className="containerRight">
                        <h3 className='titleFooter'>{textos[languageFlag].textfooteraviso}</h3>
                        <div className="span1"></div>
                        <p className='subtitlefooter'>
                            <a href='#' className='enlaceFooter' onClick={() => setLayoutID(11)}>{textos[languageFlag].textfooterpolitica}</a> </p>
                        <div className="span2"></div>
                        <p className='subtitlefooter'><a href='#' className='enlaceFooter' onClick={() => setLayoutID(12)}>  {textos[languageFlag].textfootercoockies}</a>  </p>
                        <div className="span3"></div>
                        <p className='subtitlefooter'>
                            <a href='#' className='enlaceFooter' onClick={() => setLayoutID(13)}>{textos[languageFlag].textfooteraviso2}</a></p>
                    </div>
                    <div className="containerCenter">
                        <h3 className='titleFooter'>{textos[languageFlag].textfooterInfo}</h3>
                        <div className="span4"></div>
                         {watsNumber != "" ? (
                            <div>
                                <p className="subtitlefooter">
                                    <img src={telImg} alt="Telefono" className='whatsapp ' />
                                    <a href={wats?.url} target='_blank' className='enlaceFooter'>
                                        {/* +34 660 30 54 21*/}
                                        {watsNumber}
                                    </a> 
                                </p>
                            </div>
                        ) : <></>}
                        <div className="span5"></div>
                        <p className='subtitlefooter' >
                            <a href='#' target='_blank' className='enlaceFooter'> hola@almacadaques.com</a> </p>
                        <div className="span6"></div>
                        <p className='subtitlefooter'>
                            <a href='mailto:hola@almacadaques.com' target='_blank' className='enlaceFooter'> Almacadaques.com </a> </p>
                    </div>

                </div>

                <div className="containerLeft">
                    <h3 className='titleFooter'>Newsletter</h3>
                    <div className="span7"></div>
                    <form onSubmit={send}>
                        <p className='correo'>{textos[languageFlag].textfooteremail}</p>
                        <div className="input-group">
                            <input required type="email" value={email} onChange={handleInputChange} name="correo"  placeholder={`${textos[languageFlag].textfooteremail2}`} autoComplete="on" className="input1" />
                            {/* <label className="user-label">{textos[languageFlag].textfooteremail2}</label> */}
                        </div>
                        <button className='buttonFooter' type='submit'>{textos[languageFlag].textfooterregistro}</button>
                    </form>
                </div>

                
            </div>
            
            <div className="container2">
                <div className="infofooter">
                    <div className="redes">
                        <div className="socialRed">
                        {
                            redes.map((red) => {
                                return <div key={`red-${red.index}`}>
                                    <a href={red.url} target='_blank'><img className=" " width={32} height={32}  src={red.archivo} alt={red.cuenta} /></a>
                                </div>
                            })
                        }

                        {/* <a href="https://www.facebook.com/almacadaques?locale=es_LA" target='_blank'><img className=" " width={32} height={32}  src={facebook} alt="Facebook" /></a>
                        <a href="https://www.linkedin.com/in/elisabet-coll-vinent-b9765530" target='_blank'><img className=" " width={32} height={32} src={linkedin} alt="Linkedin" /></a>
                        <a href="mailto:hola@almacadaques.com" target='_blank'><img className=" email" width={32} height={32} src={em} alt="Email" /></a>
                        <a href="https://www.instagram.com/almacadaques" target='_blank'><img className=" " width={32} height={32} src={instagram} alt="Instagram" /></a> 
                             */}
                            {/* <a href=g"https://www.facebook.com/almacadaques?locale=es_LA" target='_blank'><img className="" width={17} height={17} src="../../../src/assets/images/facebook.png" alt="Facebook" /></a> */}
                            {/* <a href="https://www.linkedin.com/in/elisabet-coll-vinent-b9765530" target='_blank'><img className="img " src="../../../src/assets/images/linkedin.png" alt="Linkedin" /></a>
                            <a href="mailto:hola@almacadaques.com" target='_blank'><img className="img email" src="../../../src/assets/images/email.png" alt="Email" /></a>
                            <a href="https://www.instagram.com/almacadaques" target='_blank'><img className="img " src="../../../src/assets/images/instagram.png" alt="Instagram" /></a> */}
                        </div>


                        {wats ? (<div className="whats">
                            <a href={wats.url} target='_blank'><img className="img1 " src={wats.archivo} alt={wats.cuenta} /></a>
                        </div>) : <></>}

                        {/* <div className="whats">
                            <a href="https://wa.me/+34660305421?text=Hola Almacadaques" target='_blank'><img className="img1 " src={w} alt="whatsapp" /></a>
                        </div> */}
                        
                    </div>
                    
                    <h4 className='textFooteer'>© 2023 Almacadaques {textos[languageFlag].footerRight} <a href="https://www.fgddesarrolloweb.es/" target='_blank'><span className='diseño'>Diseño: FGD Desarrollo Web</span></a> </h4>
                    
                </div>
                

            </div>
        </div>

    );
}


export default Footer