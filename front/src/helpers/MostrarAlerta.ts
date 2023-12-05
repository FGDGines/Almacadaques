import Swal, { SweetAlertIcon } from 'sweetalert2';
import { tpDtmResponse } from '../types/typesComponents';



export const mostrarAlerta = (arg: tpDtmResponse , toast = true) => {
  if(!window.sessionStorage.getItem('alertQueue') ||  Number(window.sessionStorage.getItem('alertQueue')) == 0){
    window.sessionStorage.setItem('alertQueue' , String(1))
    lanzarAlerta(arg, toast)
    setTimeout(()=>{
      window.sessionStorage.setItem('alertQueue' , String(Number(window.sessionStorage.getItem('alertQueue'))-1))
    }, 2010 )

  }else{
      setTimeout(()=>{
        lanzarAlerta(arg, toast)
        window.sessionStorage.setItem('alertQueue' , String(Number(window.sessionStorage.getItem('alertQueue'))-1))
      }, 2010 *  Number(window.sessionStorage.getItem('alertQueue')))
      window.sessionStorage.setItem('alertQueue' , String(Number(window.sessionStorage.getItem('alertQueue'))+1))
      lanzarAlerta(arg, toast)}
}


const lanzarAlerta = (arg: tpDtmResponse , toast = true) => {
  const {msg , status} = arg
  let tipo: SweetAlertIcon = 'info'
  switch(status){
    case 200:
      tipo='success' 
    break; 
    case 400:
      tipo = 'warning'
      break; 
    case 401:
      tipo = 'info'
      break ; 
    case 500:
      tipo ='error'
      break ;
    default: 
    tipo = 'info'
  }
  
  
  Swal.fire({
    icon: tipo,
    title: msg,
    showConfirmButton: false,
    timer: 2000,
    toast ,
    position: 'top-right' 
  });
};

