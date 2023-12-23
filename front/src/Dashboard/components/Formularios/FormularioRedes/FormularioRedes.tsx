import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioRedes/FormularioRedes.css';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';
import { GlobalContext } from '../../../../contexts/GlobalContext';


import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.jpg'
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';
import { splitUrlRedesWatsap } from '../../../../helpers/RedesHelp';


interface FormData {
    url: string;
    archivo: File | null;
    cuenta: string;
    numero: string;
    mensaje: string;
}


// ahora si el nombre es watsapp sale un formulario para llenar el numero y el mensaje
export const FormularioRedes = () => {
    const { indexRed, dataRed } = useContext(GlobalContext)
    const [formData, setFormData] = useState<FormData>({
        url: dataRed?.url || '',
        archivo:  null,
        cuenta: dataRed?.cuenta || '',
        numero: dataRed?.cuenta == "whatsapp" ? splitUrlRedesWatsap(dataRed.url)[0] : "",
        mensaje: dataRed?.cuenta == "whatsapp" ? splitUrlRedesWatsap(dataRed.url)[1] : ""
    });
    // const [imageURL, setImageURL] = useState<string | null>(dataRed?.archivo || null);
// console.log(dataRed?.url)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = event.target.files?.[0] as File;

    //     if (selectedFile) {
    //         setFormData({
    //             ...formData,
    //             archivo: selectedFile,
    //         });
    //     }
    //     setImageURL(URL.createObjectURL(selectedFile));
    // };
    const clear = () => {
        setFormData({
            url: '',
            archivo: null,
            cuenta: '',
            numero: "",
            mensaje: ""
        })
        // setImageURL("")
    }
    const handleSubmit = () => {
        const da = new FormData()
        if (formData.url) {
            da.append("url", formData.url)
        }
        if (formData.cuenta) {
            da.append("cuenta", formData.cuenta)
        }
        if (formData.cuenta == "whatsapp") {
           da.set("url", `https://wa.me/${formData.numero}?text=${formData.mensaje}`) 
        }
        da.append("token", getToken()) 
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexRed != -1) {
            da.append("id", `${indexRed}`)
            fetchForm("/red/update", da, (d: tpDtmResponse) => {
                if (d.status == 200) {
                    clear()
                }
                mostrarAlerta(d)
            })
    
        } else {
            fetchForm("/red/create", da, (d: tpDtmResponse) => {
                if (d.status == 200) {
                    clear()
                }
                mostrarAlerta(d)
            })
        }
    };

    const isWatsapp = () => {
        return formData.cuenta.toLocaleLowerCase() == "whatsapp" ? 1 : 0
    }

    return (
        <div className='formularioRedes'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormRedes">
                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Redes' nombre='Elisabeth' img={userImg} />


                <form className='formRedes'>
                    {/* <div className="subirArchivos">
                        <label htmlFor="File" className='labelArchivo'>
                            <img src={imageURL || ""} className="img" alt="Selected" />
                            <span className='arrastra'>Arrastra y suelta o <span>sube</span> </span>
                            <span className='formatos'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</span>
                        </label>
                        <input id='File' className='cargarArchivo'
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div> */}
                    <div className="restInputs">
                        <label className='labelsRedes' form='URL'>Nombre de la red:</label>
                        <input className='inputsFormRedes'
                            type="text"
                            name="cuenta"
                            value={formData.cuenta}
                            onChange={handleInputChange}
                        />
                        {!isWatsapp() ?
                            <div>
                                <label className='labelsRedes' form='URL'>URL:</label>
                                <input className='inputsFormRedes'
                                    type="text"
                                    name="url"
                                    value={formData.url}
                                    onChange={handleInputChange}
                                />
                            </div>
                        : 
                            <div>
                                <label className='labelsRedes' form='URL'>Numero:</label>
                                <input className='inputsFormRedes'
                                    type="number"
                                    name="numero"
                                    value={formData.numero}
                                    onChange={handleInputChange}
                                />
                                <label className='labelsRedes' form='URL'>Mensaje:</label>
                                <input className='inputsFormRedes'
                                    type="text"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                />
                            </div>
                        }

                        
                        
                        <div className="btnGuardarRedes">
                            <a href="#" onClick={handleSubmit} className='GuardarRedesSocialesAdmin'>Guardar</a>
                        </div>
                    </div>
                </form>


                <div className="botonesFormRedes">

                </div>
            </div>
        </div>
    );
};
