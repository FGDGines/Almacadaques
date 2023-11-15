import {FormData} from "formdata-node"
require('dotenv').config()
export const SendMail= (init: {[key: string]: string})=>{
    const bag  = new FormData()
    bag.set('req', 'gmail_send')
    bag.set('topic',   '')
    bag.set('body' ,   '')
    bag.set('reciver', String(process.env.MAIL_RECIBER))
    Object.keys(init).forEach(item=>{
        bag.set(String(item) ,String(init[item]) )
    })
        console.log(1)
    fetch(String(process.env.API_MAIL) , {
        method: 'POST', 
        body: bag
    })
    .then(res => res.json())
    .then(data => {
        data
        // Baneo en las sombras
    })
    .catch(err=>{
        err
        // Baneo en las sombras
    })
}