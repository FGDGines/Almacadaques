import "./ContainerRetiro.css"
// import retiroInfo from "../../../data/blogRetiro"
import { useContext, useEffect, useState } from "react";
import { tpBlogInfo, tpDtmResponse } from "../../../types/typesComponents";
import { formDataToObject } from "../../../helpers/Forms";
import { fetchDefault } from "../../../helpers/Server";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { getToken } from "../../../helpers/JWT";

function formatFecha(day: number[], month: number, year: number) {
    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }; 
    const startDate = new Date(year, month - 1, day[0]).toLocaleDateString('es-ES', options);
    // const endDate = new Date(year, month - 1, d[1]).toLocaleDateString('es-ES', options);
    return `Del ${day[0]} al ${day[1]} ${startDate}`;
}
function ContainerRetiro() {
    const [ data, setData ] = useState<tpBlogInfo[]>([])
    const { languageFlag, setIndexBlogRetiro, setLayoutID, setDataRetiro } = useContext(GlobalContext)
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

    const edit = (id: number, item: tpBlogInfo) => {
        setDataRetiro(item)
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
                const element: {id: number , day: string, month: number, year: number, author: string, image: string, title_lang: {es: string, en: string , cat: string},  description_lang: {es: string, en: string , cat: string}, estado: string } = d.bag[index];
                const r = "src/blog_retiro/";
                console.log(element.image[0])
                let image: string[] =  JSON.parse(element.image)
                for (let i = 0; i < image.length; i++) {
                    image[i] = r + image[i]
                }
                const day: number[] = JSON.parse(JSON.parse(element.day))
                const value = { 
                    index: element.id,
                    day: day,
                    month: element.month,
                    year: element.year,
                    autor: element.author,
                    image: image,
                    title: element.title_lang.es || element.title_lang.en || element.title_lang.cat,
                    description: element.description_lang.es || element.description_lang.en || element.description_lang.cat,
                    estado: element.estado
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
                    <div className="paddinIcono" onClick={() => edit(retiro.index, retiro)}>
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
                        <p className="fechaRetiroAdmin">
                        {Array.isArray(retiro.day) && retiro.month !== undefined && retiro.year !== undefined ? formatFecha(retiro.day, retiro.month, retiro.year) : 'Invalid date'}
                        </p>
                        <p className="textBienestarAdmin"><span className="TitleBienestarAdmin">Estado: </span>{retiro.estado}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export { ContainerRetiro }