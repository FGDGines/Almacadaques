import "./BienestarAdmin.css"
import { textLibro } from "../../../../src/data/TextLibro"
import { useContext, useEffect, useState } from "react";
import { fetchDefault } from "../../../helpers/Server";
import { tpDtmResponse, tpTextLibro } from "../../../types/typesComponents";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { getToken } from "../../../helpers/JWT";
import { formDataToObject } from "../../../helpers/Forms";


function BienestarAdmin() {
    const { setLayoutID, setIndexTextLibro } = useContext(GlobalContext);
    const [data, setData] = useState<tpTextLibro[]>([]);


    const handleDelete = (id:number) => {
        // elimina de la base de datos
        const da = new FormData()
        da.set("id", `${id}`)
        da.set("token", getToken())
        const dat = {body: JSON.stringify(formDataToObject(da))}

        fetchDefault("/text_libro/delete", dat, (d: tpDtmResponse) => {
            if (d.status != 200) return
            const updatedData = data.filter((item) => item.id !== id);
            setData(updatedData);
        })
    }

    const edit = (id: number) => {
        setIndexTextLibro(id)
        setLayoutID(32)
    }
     
    useEffect(() => {
        const api = async () => {
        const textLibros: tpTextLibro[] = []
        fetchDefault("/text_libro/read", {}, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
            const element: {id: number , content: string, title: string, subtitle: string, image_src: string} = d.bag[index];
            // const r = "src/blog_retiro/";
            textLibros.push({
                id: element.id,
                title: element.title,
                subtitle: element.title,
                content: element.subtitle,
                imagenSrc: element.image_src
                });
            }
            setData(textLibros);
        }) 
    };
    api();
    // eslint-disable-next-line
  }, []);


    return (
        <div className="OrdenarItem">
        {textLibro.map((item, index) => (
            <div key={index} className='BienestarAdmin'>
                <div className="editarContBienestar">
                    <div className="accionEditar" onClick={() => edit(item.id)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                        <p className="TextAcciones">Editar</p>
                    </div>
                    <div className="accionEliminar" onClick={() => handleDelete(item.id)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" />
                        <p className="TextAcciones">Eliminar</p>
                    </div>
                </div>
                <img src={item.imageSrc} alt="" className="ImgBienestarAdmin" />
                <div className="infoBienestarAdmin">
                    <p className="textBienestarAdmin"><span className="TitleBienestarAdmin">Titulo: </span>{item.title}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export { BienestarAdmin }