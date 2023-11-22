import "./ContainerRetiro.css"
import retiroInfo from "../../../data/blogRetiro"
import { useContext, useEffect, useState } from "react";
import { tpBlogInfo, tpDtmResponse } from "../../../types/typesComponents";
import { formDataToObject } from "../../../helpers/Forms";
import { fetchDefault } from "../../../helpers/Server";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { getToken } from "../../../helpers/JWT";

function formatFecha(day: string, month: number, year: number) {
    const options = { month: 'short', year: 'numeric' };
    const d = JSON.parse(day)
    const startDate = new Date(year, month - 1, d[0]).toLocaleDateString('es-ES', options);
    const endDate = new Date(year, month - 1, d[1]).toLocaleDateString('es-ES', options);
    return `Del ${d[0]} al ${d[1]} ${startDate}`;
}
function ContainerRetiro() {
    const [ data, setData ] = useState<tpBlogInfo[]>([])
    const { languageFlag, setIndexBlogRetiro, setLayoutID } = useContext(GlobalContext)
    const lf = languageFlag.toLowerCase()


    const handleDelete = (id:number) => {
        // elimina de la base de datos
        const da = new FormData()
        da.set("id", `${id}`)
        da.set("token", getToken())
        const dat = {body: JSON.stringify(formDataToObject(da))}
    
        fetchDefault("/blog_retiro/delete", dat, (d: tpDtmResponse) => {
          if (d.status != 200) return
          const updatedData = data.filter((item) => item.index !== id);
          setData(updatedData);
        })
      }

    const edit = (id: number) => {
        setIndexBlogRetiro(id)
        setLayoutID(38)
    }

    useEffect(() => {
        const api = async () => {
          const da = new FormData()
          da.set("lang", lf)
          const dat = {body: JSON.stringify(formDataToObject(da))}
          
          const blog: tpBlogInfo[] = []
          fetchDefault("/blog_retiro/read", dat, (d: tpDtmResponse) => {
              if(!d.bag) return 
              for (let index = 0; index < d.bag.length; index++) {
                  const element: {id: number , day: string, month: number, year: number, author: string, image: string[], title_lang: {es: string, en: string , cat: string},  description_lang: {es: string, en: string , cat: string} } = d.bag[index];
                  const r = "src/blog_retiro/";
                  const day = JSON.parse(element.day)
                  console.log(day, element.day, JSON.stringify(element.day))
                  const value = { 
                    index: element.id,
                    day : day,
                    month: element.month,
                    year: element.year,
                    autor: element.author,
                    image: element.image,
                    title: element.title_lang.es || element.title_lang.en || element.title_lang.cat,
                    description: element.description_lang.es || element.description_lang.en || element.description_lang.cat
                  }
                  blog.push(value)
              }
              setData(blog);
          }) 
        };
        api();
        // eslint-disable-next-line
    }, []);


    return (
        <div className="OrdenarItem">
        {data.map((retiro) => (
            <div key={retiro.index} className="ContainerRetiro">
                <div className="titleContainerRetiro">
                    <p className="titleRetiro">{retiro.title}</p>
                    <div className="paddinIcono" onClick={() => edit(retiro.index)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="BtnEditarEvento" />
                    </div>
                    <div className="paddinIcono" onClick={() => handleDelete(retiro.index)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" className="BtnEditarEvento" />
                    </div>
                </div>
                <img src={retiro.image[0]} alt="" className="ImgFondoRetiro" />
                <div className="infoRetiroAdmin">
                    <div className="infoRetiro">
                        <p className="parraforetiroAdmin">{retiro.description}</p>
                        <p className="fechaRetiroAdmin">{formatFecha(retiro.day, retiro.month, retiro.year)}</p>
                        <p className="textBienestarAdmin"><span className="TitleBienestarAdmin">Estado: </span>{retiro.estado}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export { ContainerRetiro }