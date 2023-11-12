import { DataTypes } from "sequelize"
import DB from "./conexion"

const Mensaje = DB.define('mensaje', {
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    msg: {
        type: DataTypes.STRING
    },
    fragment: {
        type: DataTypes.STRING
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true
})


const User = DB.define('user', {
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    id_data_user: {
        type: DataTypes.NUMBER
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true
})

const DataUser = DB.define('data_user', {
    nombre: {
        type: DataTypes.STRING
    },
    src: {
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.NUMBER
    }
})

const Rol = DB.define('role', {
    label: {
        type: DataTypes.STRING
    }
})

const Testimonio = DB.define('testimonio', {
    witness: {
        type: DataTypes.STRING
    },
    id_data: {
        type: DataTypes.STRING
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true
})


const DataTestimonio = DB.define("data_testimonys", {
    es: {
        type: DataTypes.STRING
    },
    en: {
        type: DataTypes.STRING
    },
    cat: {
        type: DataTypes.STRING
    }
})

const BlogRetiro = DB.define("blog_retiro", {
    indice: {
        type: DataTypes.INTEGER
    },
    day: {
        type: DataTypes.JSON
    },
    month: {
        type: DataTypes.INTEGER
    },
    year: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.JSON
    },
    id_title_lang: {
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    id_description_lang: {
        type: DataTypes.INTEGER
    }
}) 


const Carousel = DB.define("carousels", {
    src: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.STRING
    },
    link_autor: {
        type: DataTypes.STRING
    },
    id_data_carousel: {
        type: DataTypes.NUMBER
    }, 
    deletedAt:{
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    paranoid: false
})


const Podcast = DB.define("podcast", {
    url: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.TEXT
    },
    imagen: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    }
}) 
 
const Colaborador = DB.define("colaborador", {
    nombre: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    imagen: {
        type: DataTypes.STRING
    },
    contacto: {
        type: DataTypes.STRING
    }
}) 

const Espacio = DB.define("espacio", {
    es: {
        type: DataTypes.STRING
    },
    en: {
        type: DataTypes.STRING
    },
    cat: {
        type: DataTypes.STRING
    }
}) 

const TitleLang = DB.define("title_lang", {
    es: {
        type: DataTypes.STRING
    },
    en: {
        type: DataTypes.STRING
    },
    cat: {
        type: DataTypes.STRING
    }
}) 

const DescriptionLang = DB.define("description_lang", {
    es: {
        type: DataTypes.TEXT
    },
    en: {
        type: DataTypes.TEXT
    },
    cat: {
        type: DataTypes.TEXT
    }
}) 

const DataCarousel = DB.define('data_carousels', {
    es: {
        type: DataTypes.STRING
    },
    en: {
        type: DataTypes.STRING
    },
    cat: {
        type: DataTypes.STRING
    },
    deletedAt:{
        type: DataTypes.DATE, 
        allowNull: true 
    }
}, {
    paranoid: false
})

User.belongsTo(DataUser, { foreignKey: 'id_data_user' })
DataUser.belongsTo(Rol, { foreignKey: 'id_rol' })
Testimonio.belongsTo(DataTestimonio, { foreignKey: 'id_data' })
Carousel.belongsTo(DataCarousel , {foreignKey: 'id_data_carousel'})
BlogRetiro.belongsTo(TitleLang, {foreignKey: "id_title_lang"})
BlogRetiro.belongsTo(DescriptionLang, {foreignKey: "id_description_lang"})

export {
    DataUser,
    Mensaje,
    Rol,
    User,
    Testimonio,
    DataTestimonio, 
    BlogRetiro,
    TitleLang,
    DescriptionLang,
    Podcast,
    Colaborador,
    Carousel,
    Espacio,
    DataCarousel 
}
