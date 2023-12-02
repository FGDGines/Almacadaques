import './Login.css'
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';


import logoImg from "../../../src/assets/Dashboard-almacadaques/Logo/bro.svg"


const Login = () => {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className="todoContainerLogin">


      <div className="login">


        <div className="containerLeftLogin">
          <div className="logoAdmin">
            <img src={logoImg} alt="" className='imgLoginadmin' />
          </div>
        </div>
        <div className="containerRightLogin">
          <div className="formuAdmin">
            <div className="titleAdmin">
              <p className="textAdmin">Inicia Sesión</p>
            </div>
            <div className="formularioAdmin">
              <div className="form__group field">
                <input type="text" className="form__field" placeholder="Correo electrónico" required />
                <label htmlFor="name" className="form__label">Correo electrónico </label>
              </div>
              <div className="form__group field">
                <input type="text" className="form__field" placeholder="Contraseña" required />
                <label htmlFor="name" className="form__label">Contraseña</label>
              </div>
              <div className="resetPasswordAdmin">
                <p className='reset'>¿olvidaste tu contraseña?</p>
              </div>
            </div>
          </div>
          <div className="buttonLogin">
            <a href="#" className='enlaceLogin' onClick={() => setLayoutID(17)}>Iniciar sesión</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;