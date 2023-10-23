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
export {
    Mensaje
}
