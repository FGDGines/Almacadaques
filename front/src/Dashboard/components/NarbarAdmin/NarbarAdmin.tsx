import './NarbarAdmin.css'
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';

function NarbarAdmin() {
    const [selectedIcons, setSelectedIcons] = useState(Array(7).fill(false));
    const { setLayoutID } = useContext(GlobalContext);

    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => {
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        setShowSubMenu(false);
    };

    const handleSubMenuClick = () => {
        // Alternar el estado del submenú al hacer clic en el ícono del blog
        setShowSubMenu((prev) => !prev);
    };

    const handleSubMenuLinkClick = (layoutId: number) => {
        // Navegar a la sección correspondiente y cerrar el submenú
        setLayoutID(layoutId);
        setShowSubMenu(false);
    };

    const handleIconClick = (index: number) => {
        const newSelectedIcons = [...selectedIcons];
        newSelectedIcons[index] = !newSelectedIcons[index];
        setSelectedIcons(newSelectedIcons);
    };

    



    return (
        <div className='narbarAdmin'>
            <div className="buttonSessionesAdmin">
                <div className="incioAdmin" onClick={() => setLayoutID(17)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (0).svg" alt=""  className={`ImgIconHeaderAdmin ${selectedIcons[0] ? 'selected' : ''}`}
                        onClick={() => handleIconClick(0)} />
                        <p className="NombreButtonAdmin">Inicio</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(18)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (1).svg" alt=""  className={`ImgIconHeaderAdmin ${selectedIcons[6] ? 'selected' : ''}`}
                        onClick={() => handleIconClick(6)} />
                        <p className='NombreButtonAdmin'>Sobre mi</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(19)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (2).svg" alt=""  className={`ImgIconHeaderAdmin ${selectedIcons[2] ? 'selected' : ''}`}
                        onClick={() => handleIconClick(2)}/>
                        <p className='NombreButtonAdmin'>Agenda</p>
                    </div>
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(20)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (3).svg" alt=""  className={`ImgIconHeaderAdmin ${selectedIcons[3] ? 'selected' : ''}`}
                        onClick={() => handleIconClick(3)} />
                        <p className='NombreButtonAdmin'>Colaboradores</p>
                    </div>
                </div>
                <div
                    className={`incioAdmin ${showSubMenu ? 'subMenu' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="iconadmin" onClick={handleSubMenuClick}>
                        <img
                            src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (4).svg"
                            alt=""
                            className={`ImgIconHeaderAdmin ${selectedIcons[4] ? 'selected' : ''}`}
                            onClick={() => handleIconClick(4)}
                        />
                        <p className="NombreButtonAdmin">Blog</p>
                    </div>
                    {showSubMenu && (
                        <div className="subMenuRetiro">
                            {/* Contenido del submenú */}
                            <a href="#" className="DireccionSubmenu" onClick={() => handleSubMenuLinkClick(25)}>
                                Blog Bienestar
                            </a>
                            <a href="#" className="DireccionSubmenu" onClick={() => handleSubMenuLinkClick(26)}>
                                Blog Podcast
                            </a>
                        </div>
                    )}
                </div>
                <div className="incioAdmin" onClick={() => setLayoutID(22)}>
                    <div className="iconadmin">
                        <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (5).svg" alt=""  className={`ImgIconHeaderAdmin ${selectedIcons[5] ? 'selected' : ''}`}
                        onClick={() => handleIconClick(5)} />
                        <p className='NombreButtonAdmin'>Retiros</p>
                    </div>
                </div>
            </div>
            <img src="../../../../src/assets/Dashboard-almacadaques/IconNarbar/iconos (6).svg" alt="" className='ImgIconHeaderAdmin' onClick={() => setLayoutID(1)} />

        </div>
    )
}

export { NarbarAdmin }   