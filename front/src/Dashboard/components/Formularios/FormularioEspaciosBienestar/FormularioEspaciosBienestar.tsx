import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import '../FormularioEspaciosBienestar/FormularioEspaciosBienestar.css';
import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { tpDtmResponse } from '../../../../types/typesComponents';
import { fetchForm } from '../../../../helpers/Server';


interface FormData {
    Frase: string;
}

export const FormularioEspaciosBienestar = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase: '',
    });
    const { indexEspacio } = useContext(GlobalContext)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    const handleSubmit = () => {
        const da = new FormData()
        da.append("text_es", formData.Frase)
        da.append("text_en", formData.Frase)
        da.append("text_cat", formData.Frase)
        da.append("token", getToken()) 
        
        if (indexEspacio != -1) {
            da.append("id", `${indexEspacio}`)
            fetchForm("/espacio/update", da, (d: tpDtmResponse) => {
                console.log(d)
            }, (d: tpDtmResponse) => {
               console.log(d) 
            })
    
        } else {
            fetchForm("/espacio/create", da, (tp: tpDtmResponse) => {
                console.log(tp)
            })
        }
    };

    return (
        <div className='formularioEspaciosBienestar'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormEspaciosBienestar">

                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Espacios de Bienestar' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />



                <form className='formEspaciosBienestar' >


                    <div className="restInputs">
                        <label className='labelsEspaciosBienestar' form='Frase'>Frase</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="Frase"
                            value={formData.Frase}
                            onChange={handleInputChange}
                        />


                    </div>
                    
                </form>
                <div className="GuardarEspaciosBienestar">
                        <a href="#" onClick={handleSubmit} className='btnGuardarEspaciosBienestarAdmin'>Guardar</a>
                    </div>
            </div>
        </div>
    );
};
