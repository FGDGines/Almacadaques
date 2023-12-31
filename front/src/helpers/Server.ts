import { portApi, urlApi } from "../data/env"
import { tpDtmResponse } from "../types/typesComponents"
import { mostrarAlerta } from "./MostrarAlerta"

export const fetchDefault = (endpoint: string , init:{[key: string]: unknown} , resolve = (arg: tpDtmResponse )=>mostrarAlerta(arg) , reject = (arg: tpDtmResponse )=>mostrarAlerta(arg) )=>{
    fetch(`${urlApi}:${portApi}/api${endpoint}`, {
        'method':'POST', 
        'headers': {
            'Content-Type': 'application/json',
        }, 
        ...init,
    })
    .then(async (res) => {
        switch(res.status){
            case 200:
                return res.json()
            break ;
            default: 
                throw new Error("Respuesta desconocida del Servidor" + JSON.stringify({status: res.status, text: await res.text()}))                
            break 
        }
    })
    .then(data=>{
        resolve(data)
    })
    .catch(err=>{
        console.log(err)
        reject({msg: 'No disponible' , status: 500})
    })
}