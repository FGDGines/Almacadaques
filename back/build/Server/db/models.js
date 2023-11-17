"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCarousel = exports.Espacio = exports.Carousel = exports.TextLibro = exports.Colaborador = exports.Podcast = exports.DescriptionLang = exports.TitleLang = exports.BlogRetiro = exports.DataTestimonio = exports.Testimonio = exports.User = exports.Rol = exports.Mensaje = exports.DataUser = void 0;
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
const BlogRetiro = conexion_1.default.define("blog_retiro", {
    indice: {
        type: sequelize_1.DataTypes.INTEGER
    },
    day: {
        type: sequelize_1.DataTypes.JSON
    },
    month: {
        type: sequelize_1.DataTypes.INTEGER
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER
    },
    image: {
        type: sequelize_1.DataTypes.JSON
    },
    id_title_lang: {
        type: sequelize_1.DataTypes.INTEGER
    },
    author: {
        type: sequelize_1.DataTypes.STRING
    },
    id_description_lang: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.BlogRetiro = BlogRetiro;
const TextLibro = conexion_1.default.define("text_libro", {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    subtitle: {
        type: sequelize_1.DataTypes.STRING
    },
    content: {
        type: sequelize_1.DataTypes.JSON
    },
    imagen_src: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.TextLibro = TextLibro;
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
const Podcast = conexion_1.default.define("podcast", {
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING
    },
    autor: {
        type: sequelize_1.DataTypes.TEXT
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.Podcast = Podcast;
const Colaborador = conexion_1.default.define("colaborador", {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    contacto: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.Colaborador = Colaborador;
const Espacio = conexion_1.default.define("espacio", {
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
exports.Espacio = Espacio;
const TitleLang = conexion_1.default.define("title_lang", {
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
exports.TitleLang = TitleLang;
const DescriptionLang = conexion_1.default.define("description_lang", {
    es: {
        type: sequelize_1.DataTypes.TEXT
    },
    en: {
        type: sequelize_1.DataTypes.TEXT
    },
    cat: {
        type: sequelize_1.DataTypes.TEXT
    }
});
exports.DescriptionLang = DescriptionLang;
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
BlogRetiro.belongsTo(TitleLang, { foreignKey: "id_title_lang" });
BlogRetiro.belongsTo(DescriptionLang, { foreignKey: "id_description_lang" });
