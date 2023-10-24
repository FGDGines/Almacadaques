import { tpObjectStringToStrig } from "../types/typesComponents";

export const  formDataToObject = (formData: FormData)=> {
    const object: tpObjectStringToStrig = {};
    formData.forEach((value, key) => {
      object[String(key)] = String(value);
    });
    return object;
  }