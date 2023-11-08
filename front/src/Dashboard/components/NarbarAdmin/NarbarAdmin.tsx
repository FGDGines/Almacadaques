import './NarbarAdmin.css'
import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext'; 

function NarbarAdmin() {
    const { setLayoutID } = useContext(GlobalContext);
    return (
        <div className='narbarAdmin'>
            <div className="buttonSessionesAdmin">
                <div className="incioAdmin" onClick={() => setLayoutID(17)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (0).svg" alt="" className='ImgIconHeaderAdmin' />
                        <p className='NombreButtonAdmin'>Inicio</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(18)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (1).svg" alt="" className='ImgIconHeaderAdmin' />
                        <p className='NombreButtonAdmin'>Sobre mi</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(19)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (2).svg" alt="" className='ImgIconHeaderAdmin' />
                        <p className='NombreButtonAdmin'>Agenda</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(20)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (3).svg" alt="" className='ImgIconHeaderAdmin' />
                        <p className='NombreButtonAdmin'>Colaboradores</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(21)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (4).svg" alt="" className='ImgIconHeaderAdmin' />
                        <p className='NombreButtonAdmin'>Blog</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(22)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (5).svg" alt="" className='ImgIconHeaderAdmin' />
                        <p className='NombreButtonAdmin'>Retiros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { NarbarAdmin }