import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioCarrousel/FormularioCarrousel.css';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { fetchDefault, fetchForm } from '../../../../helpers/Server';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { getToken } from '../../../../helpers/JWT';
import { formDataToObject } from '../../../../helpers/Forms';
import { tpDtmResponse } from '../../../../types/typesComponents';
// import { tpDtmResponse } from '../../../../types/typesComponents';

import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'


interface FormData {
    Frase_es: string;
    Frase_en: string;
    Frase_cat: string;
    Firma: string;
    Url: string;
    archivo: File | null;
}

export const FormularioCarrousel = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase_es: '',
        Frase_en: '',
        Frase_cat: '',
        Firma: '',
        Url: '',
        archivo: null,
    });
    const [imageURL, setImageURL] = useState<string | null>(null);
    const { indexCarrousel, setLayoutID } = useContext(GlobalContext)
    

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] as File;

        if (selectedFile) {
            setFormData({
                ...formData,
                archivo: selectedFile,
            });
        }
        setImageURL(URL.createObjectURL(selectedFile));
    };

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Firma) {
            da.append("autor", formData.Firma)
        }
        if (formData.Url) {
            da.append("link_autor", formData.Url)
        }
        if (formData.Frase_es){
            da.append(`frase_es`, formData.Frase_es)
        }
        if (formData.Frase_en){
            da.append(`frase_en`, formData.Frase_en)
        }
        if (formData.Frase_cat){
            da.append(`frase_cat`, formData.Frase_cat)
        }
        da.append("token", getToken()) 
        
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexCarrousel != -1) {
            da.append("id", `${indexCarrousel}`)
            fetchForm("/carousel/update", da)
    
        } else {
            fetchForm("/carousel/create", da)
        }
        setFormData({
            Frase_es: '',
            Frase_en: '',
            Frase_cat: '',
            Firma: '',
            Url: '',
            archivo: null,
        })
        setImageURL("")
    };


    useEffect(() => {
        const api = async () => {
            if (indexCarrousel == -1) return
            const da = new FormData()
            da.set("id", `${indexCarrousel}`)
            const dat = {body: JSON.stringify(formDataToObject(da))}
            fetchDefault("/carousel/readbyid", dat, (d: tpDtmResponse) => {
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: {id: number , autor: string  , link_autor: string, src:string, data_carousel: {es: string, en: string , cat: string} } = d.bag[index];
                    const r = "src/carousel/";
                    const value = { 
                        Frase_es: element.data_carousel.es,
                        Frase_en: element.data_carousel.en,
                        Frase_cat: element.data_carousel.cat,
                        Firma: element.autor,
                        Url: element.link_autor,
                        archivo: null
                    } 
                    setImageURL(r + element.src)
                    setFormData(value);
                }
            }) 
        };
        api();
            // eslint-disable-next-line
    }, []);
    
    return (
        <div className='formularioCarrousel'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Carrousel' nombre='Kristine' img={userImg} />


                <form className='formCarrousel'>
                    <div className="subirArchivos">
                        <label htmlFor="File" className='labelArchivo'>
                            <img src={imageURL || ""} className="img" alt="Selected" />
                            <span className='arrastra'>Arrastra y suelta o <span>sube</span> </span>
                            <span className='formatos'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</span>
                        </label>
                        <input id='File' className='cargarArchivo'
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="restInputs">
                        <label className='labelsCarrousel' form='Frase'>Frase_es</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Frase_es"
                            value={formData.Frase_es}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Frase'>Frase_en</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Frase_en"
                            value={formData.Frase_en}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Frase'>Frase_cat</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Frase_cat"
                            value={formData.Frase_cat}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Firma'>Firma autor</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Firma"
                            value={formData.Firma}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Url'>Link autor</label>
                        <input className='inputsFormCarrousel'
                            type="url"
                            name="Url"
                            value={formData.Url}
                            onChange={handleInputChange}
                        />
                        

                    </div>
                </form>


                <div className="botonesFormCarrousel">
                    <a href="#" className='CancelarCarousel' onClick={() => setLayoutID(17)}>Cancelar</a>
                    <a href="#" className='AgregarCarousel' onClick={handleSubmit}>Agregar</a>
                </div>
            </div>
        </div>
    );
};
