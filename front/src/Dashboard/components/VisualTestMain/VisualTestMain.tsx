import './VisualTestMain.css'
import { PreviwTestimonios } from '../PreviwTestimonios/PreviwTestimonios'

function VisualTestMain() {
  return (
    <div className='VisualTestMain'>
        <div className="titletext">
            {/* <p className="titlephoto">Foto</p> */}
            <p className="titlephoto">Frase</p>
            <p className="titlephoto">Acciones</p>
        </div>
        <div className="containerdeTestimoniosAdmin">
            <PreviwTestimonios/>
        </div>
        
    </div>
  )
}

export  {VisualTestMain}