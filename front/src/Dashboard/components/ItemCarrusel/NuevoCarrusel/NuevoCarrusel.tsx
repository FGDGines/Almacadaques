import './NuevoCarrusel.css'
import { useContext } from 'react';
import { GlobalContext } from '../../../../contexts/GlobalContext'; 

function NuevoCarrusel() {
  const { setLayoutID } = useContext(GlobalContext);
  const { setIndexCarrousel } = useContext(GlobalContext);

  const add = () => {
    setIndexCarrousel(-1)
    setLayoutID(29)
  }

  return (
    <div className="NuevoCarrusel">
            <div  className="items">
                <div className="AgregarNuevoItem"  onClick={add}>
                    <h4><div className="colorFondoBtnMas">‎
                        </div></h4>
                </div>
            </div>
    </div>
  )
}

export  {NuevoCarrusel}