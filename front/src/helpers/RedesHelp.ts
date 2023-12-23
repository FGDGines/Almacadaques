
import w from "../../src/assets/images/whatsapp.png"     
import facebook from "../../src/assets/images/facebook.png"
import linkedin from "../../src/assets/images/linkedin.png"
import em from "../../src/assets/images/email.png"
import instagram from "../../src/assets/images/instagram.png"
export const iconRedByName = (name: string) => {
    const key = name.toLowerCase()
    switch (key) {
        case "whatsapp":
            return w
        case "facebook":
            return facebook
        case "linkedin":
            return linkedin
        case "email":
            return em
        case "instagram":
            return instagram
                                            
        default:
            return em
    }
}


export const splitUrlRedesWatsap = (url: string) => {
    let num: string = ""
    let msg: string = ""
    console.log(url)
    if (url.startsWith("https://wa.me/")) {
        let init = "https://wa.me/".length
        let index = init 
        for (index; index < url.length; index++) {
            const element = url[index];
            console.log(element)
            if (element != "+") {
                break
            }
        }
        for (index; index < url.length; index++) {
            const element = url[index];
            const regex = /^\d$/;
            // console.log(element)
            if (!regex.test(element)) {
                break
            }
            num += element
        }
        if (index < url.length && url[index] == "?") {
            const comp: string = "?text="
            let indexC: number = 0
            // console.log(url[index])
            while (index < comp.length && index < url.length) {
                const element = url[index];
                // console.log(index, indexC,element, comp[indexC])
                if(element == comp[indexC]) {
                    indexC++
                    index++
                } else {
                    // console.log(element, comp[indexC])
                    return [num, ""]
                }
            }
            index += comp.length
            console.log(url[index])
            for (index + 1; index < url.length; index++) {
                const element = url[index];
                msg += element
            }
            console.log(msg)
        }
    } else {
        return ""
    }
    return [num, msg, `https://wa.me/+34${num}?text=${msg}`]
}