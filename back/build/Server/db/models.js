"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCarousel = exports.Carousel = exports.DataTestimonio = exports.Testimonio = exports.User = exports.Rol = exports.Mensaje = exports.DataUser = void 0;
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("./conexion"));
const Mensaje = conexion_1.default.define('mensaje', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    msg: {
        type: sequelize_1.DataTypes.STRING
    },
    fragment: {
        type: sequelize_1.DataTypes.STRING
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true
});
exports.Mensaje = Mensaje;
const User = conexion_1.default.define('user', {
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    id_data_user: {
        type: sequelize_1.DataTypes.NUMBER
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true
});
exports.User = User;
const DataUser = conexion_1.default.define('data_user', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    src: {
        type: sequelize_1.DataTypes.STRING
    },
    id_rol: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
exports.DataUser = DataUser;
const Rol = conexion_1.default.define('role', {
    label: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.Rol = Rol;
const Testimonio = conexion_1.default.define('testimonio', {
    witness: {
        type: sequelize_1.DataTypes.STRING
    },
    id_data: {
        type: sequelize_1.DataTypes.STRING
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true
});
exports.Testimonio = Testimonio;
const DataTestimonio = conexion_1.default.define("data_testimonys", {
    es: {
        type: sequelize_1.DataTypes.STRING
    },
    en: {
        type: sequelize_1.DataTypes.STRING
    },
    cat: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.DataTestimonio = DataTestimonio;
const Carousel = conexion_1.default.define("carousels", {
    src: {
        type: sequelize_1.DataTypes.STRING
    },
    autor: {
        type: sequelize_1.DataTypes.STRING
    },
    link_autor: {
        type: sequelize_1.DataTypes.STRING
    },
    id_data_carousel: {
        type: sequelize_1.DataTypes.NUMBER
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: false
});
exports.Carousel = Carousel;
const DataCarousel = conexion_1.default.define('data_carousels', {
    es: {
        type: sequelize_1.DataTypes.STRING
    },
    en: {
        type: sequelize_1.DataTypes.STRING
    },
    cat: {
        type: sequelize_1.DataTypes.STRING
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: false
});
exports.DataCarousel = DataCarousel;
User.belongsTo(DataUser, { foreignKey: 'id_data_user' });
DataUser.belongsTo(Rol, { foreignKey: 'id_rol' });
Testimonio.belongsTo(DataTestimonio, { foreignKey: 'id_data' });
Carousel.belongsTo(DataCarousel, { foreignKey: 'id_data_carousel' });
