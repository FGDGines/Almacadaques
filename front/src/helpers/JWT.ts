import { tpDtmResponse } from "../types/typesComponents"
import { formDataToObject } from "./Forms"
import { fetchDefault } from "./Server"

export const generateJwt = ()=> {
    const da = new FormData()
    da.set("correo", "deivistm@gmail.com")
    da.set("password", "Deivis31892*")

    const data = {body: JSON.stringify(formDataToObject(da))}
    fetchDefault("/auth/login", data, (d: tpDtmResponse) => {
        if (d.bag && typeof d.bag === 'object' && 'token' in d.bag) {
            // const element:{token: string} = d.bag as {token: string};
            return 
        }
    })
}

export const getToken = () => {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAwMjUxNDM2LCJleHAiOjE3MzE3ODc0MzZ9.pFXywksoFcJB1Eg0TDlNvSpKCXYmf57PcWOvqvpaJZI"
}