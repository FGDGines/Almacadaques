import './NuevoCarrusel.css'
import { useContext } from 'react';
import { GlobalContext } from '../../../../contexts/GlobalContext'; 

function NuevoCarrusel() {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className="NuevoCarrusel">
            <div  className="items">
                <div className="AgregarNuevoItem"  onClick={() => setLayoutID(29)}>
                    <h4><div className="colorFondoBtnMas">‎
                        </div></h4>
                </div>
            </div>
    </div>
  )
}

export  {NuevoCarrusel}