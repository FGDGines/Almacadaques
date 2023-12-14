
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