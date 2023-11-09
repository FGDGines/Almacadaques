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
    correo:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    id_data_user:{
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
    src:{
        type: DataTypes.STRING
    }, 
    id_rol: {
        type: DataTypes.NUMBER
    }
})

const Rol = DB.define('role', {
    label:{
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
    deletedAt:{
        type: DataTypes.DATE, 
        allowNull: true
    }
}, {
    paranoid: true
})


const DataTestimonio = DB.define("data_testimonys", {
    es:{
        type: DataTypes.STRING
    },
    en:{
        type: DataTypes.STRING
    },
    cat:{
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

User.belongsTo(DataUser,{foreignKey: 'id_data_user'})
DataUser.belongsTo(Rol,{foreignKey: 'id_rol'})
Testimonio.belongsTo(DataTestimonio , {foreignKey: 'id_data'})


export {
    DataUser, 
    Mensaje,
    Rol, 
    User,
    Testimonio,
    DataTestimonio,
    Colaborador
}
