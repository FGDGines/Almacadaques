import './Login.css'


import logoImg from "../../../src/assets/Dashboard-almacadaques/Logo/bro.svg"
import { fetchForm } from '../../helpers/Server'
import { mostrarAlerta } from '../../helpers/MostrarAlerta'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
// import { mostrarAlerta } from '../../helpers/MostrarAlerta';



const Login = () => {

  const { setLayoutID } = useContext(GlobalContext)
  const LogearUsuario = (arg: React.FormEvent<HTMLFormElement>) => {
    arg.preventDefault()
    arg.stopPropagation()

    if (arg.target instanceof HTMLFormElement) {
      const bag = new FormData(arg.target)
      fetchForm('/auth/login', bag, (arg) => {
        switch (arg.status) {
          case 200:
            setLayoutID(17)
            mostrarAlerta(arg)
            break;
          default:
            mostrarAlerta(arg)
        }
      })
    }

  }
  // const { setLayoutID } = useContext(GlobalContext);

  return (

    <div className="todoContainerLogin">
      {/* <Toaster /> */}

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
            <form className="formularioAdmin" onSubmit={(arg: React.FormEvent<HTMLFormElement>) => LogearUsuario(arg)}>
              <div className="form__group field">
                <input type="text" name="correo" className="form__field" placeholder="Correo electrónico" required />
                <label htmlFor="name" className="form__label">Correo electrónico </label>
              </div>
              <div className="form__group field">
                <input type="password" name="password" className="form__field" placeholder="Contraseña" required />
                <label htmlFor="name" className="form__label">Contraseña</label>
              </div>

              <div className="buttonLogin">
                <button type='submit' className='enlaceLogin'>Iniciar sesión</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;