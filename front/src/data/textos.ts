import { enLanguageFlag } from "../types/typesContext";

type TextosType<T extends string> = {
    [key in enLanguageFlag]: {
        [subkey in T]: string;
    };
};

export const textos: TextosType<
    //nav
    "inicio" |
    "sobreMi" |
    "coaching" |
    "agenda" |
    "expBienestar" |
    "expDeMedida" |
    "colabrador" |
    "testimonios" |
    "blog" |
    "blogPost" |
    "blogRetiro" |
    "podcast" |
    "contactar" |
    //footer
    "textfooteraviso" |
    "textfooterpolitica" |
    "textfootercoockies" |
    "textfooteraviso2" |
    "textfooterInfo" |
    "textfooteremail" |
    "textfooteremail2" |
    "textfooterregistro" |
    //home
    "textDesthome1"|
    "textDesthome2" |
    "textDesthome3" |
    "textDesthome4" |
    "textDesthome5" |
    "textDesthome50" |
    "textDesthome51" |
    "textDesthome6" |
    "textDesthome60" |
    "textDesthome61" |
    //about me
    "textsobremi1" |
    "titleparrafo" |
    "parrafosobremi1" |
    "parrafosobremi2" |
    "parrafosobremi3" |
    "parrafosobremi4" |
    "parrafosobremi5" |
    "parrafosobremi6" |
    "parrafosobremi7" |
    "parrafosobremi8" |
    "parrafosobremi9" |
    "parrafosobremi10" |
    "titleparrafo3" |
    "parrafosobremi11" |
    "parrafosobremi12" |
    "parrafosobremi13" |
    "parrafosobremi14" |
    "parrafosobremi15" |
    "parrafosobremi16" |
    "parrafosobremi17" |
    "parrafosobremi18" |
    //Coaching para el Bienestar
    "textcoaching1" |
    "textcoachingParrafo1" |
    "textcoaching2" |
    "textcoachingtitle2" |
    "textcoaching3" |
    "textcoaching4" |
    "textcoaching5" |
    "textcoachingpide" |
    //formulario coaching para el bienestar
    "textnombre" |
    "textplaceholdescribe" |
    "textemail" |
    "textplaceholemail" |
    "textcomentario" |
    "textplaceholcoment" |
    "textaceptar" |

    //Textos carrousel 
    "TitleCarrousel1"|
    "TitleCarrousel2"|
    "TitleCarrousel3"|
    "TitleCarrousel4"|
    "TitleCarrousel5"|
    "TitleCarrousel6"|
    //cocaching & mentoring internacional
    "textcoachingtitleInternacional" |
    "textcoachinginterna1" |
    "textcoachinginterna2" |
    "textcoachinginterna3" |
    "textcoachinginterna4" |
    "textcoachinginterna5" |
    "textcoachinginternatitle2" |
    "textcoachinginterna6" |
    "textcoachinginterna7" |
    "textcoachinginterna8" |
    "textcoachinginternaTestimonio" |
    "textcoachinginternatitle9" |
    "textcoachinginterna9" |
    "textcoachinginterna10" |
    "textcoachinginterna11" |
    "textcoachinginterPideinfo" |


    //Agenda Experiencias de bienestar
    "textosinviertebienestar" |
    "textostalleresyretiros" |
    "textosretirosanteriores" |
    //Agenda experiencias a medida
    "textoeresunaempersa" |
    "textotrabajemosjuntos" |
    //colaborador
    "textoColaboradores" |
    "textoeducadora" |
    "textcolaborcontact"|
    //blog( Tips de bienestar)
    "textostipsabundancia" |
    "textoqueeslaabundancia" |
    "textoenfunciondequien" |
    "textoscuandosientoabundancia" |
    "textosllenatumente" |
    "textosamenudoconectamos" |
    "textoslarealidadesneutra" |
    "textospontedellado" |
    "textossabiasquelaoportunidad" |
    "textossabiasquetumiedo" |
    "textosestasatisfaccion" |
    "textosentrenalacompresion" |
    "textoscomprensioneslocontrario" |
    "textosagradececadamañana" |
    "textosrecuerdaquesi" |
    "textosdehechoelagradecimiento" |
    "textosmueveteactuaprueba" |
    "textoslaabundanciaparavalientes" |
    "textosdescubreelverdadero" |
    "textosenconclusionbusca" |
    "textostipsparar" |
    "tipsabundancia" |
    "tipsemociones" |
    "textostipslidiardiadia" |
    "textostipsparafluir" |
    //podcast
    //blog retiros
    //Contactar
    "textocontactar1" | 
    "textocontactar2" |
    "textocontactarjuntoscrearemos" |
    "textocontactartelf" |
    "textocontactarformulariotexto1" |
    //politica de privacidad
    "textospoliticaprivacidad" |
    "textosI" |
    "textosparrafoI" |
    "textosII" |
    "textosparrafoII" |
    "textosparrafoIItextoII" |
    "textosparrafoIItextoIII" |
    "textosparrafoIItextoIIII" |
    "textosIII" |
    "textosparrafoIIItextoI" |
    "textosparrafoIIItextoII" |
    "textosparrafoIIItextoIII" |
    "textosparrafoIIItextoIV" |
    "textosparrafoIIItextoV" |
    "textosIV" |
    "textosparrafoIVtextoI" |
    "textosV" |
    "textosparrafoVtextoI" |
    "textosparrafoVtextoII" |
    "textosparrafoVtextoIII" |
    "textosparrafoVtextoIV" |
    "textosparrafoVtextoV" |
    "textosparrafoVtextoVI" |
    "textosparrafoVtextoVII" |
    "textosparrafoVtextoVIII" |
    "textosVI" |
    "textosparrafVItextosI" |
    "textosparrafVItextosII" |
    "textosparrafVItextosIII" |
    "textosparrafVItextosIV" |
    "textosparrafVItextosV" |
    "textosVII" |
    "textosparrafoVIItextoI" |
    "textosparrafoVIItextoII" |
    "textosparrafoVIItextoIII" |
    "textosVIII" |
    "textosparrafoVIIItextosI" |
    "textosparrafoVIIItextosII" |
    "textosparrafoVIIItextosIII" |
    "textosparrafoVIIItextosIV" |
    "textosparrafoVIIItextosV" |
    "textosIX" |
    "textosparrafoIXtextoI" |
    "textosparrafoIXtextoII" |
    "textosparrafoIXtextoIII" |
    "textosparrafoIXtextoIV" |
    "textosparrafoIXtextoV" |
    "textosparrafoIXtextoVI" |
    "textosX" |
    "textosparrafoXtexto1" |
    "textosparrafoXtexto2" |
    "textosparrafoXtexto3" |
    "textosparrafoXtexto4" |
    "textosparrafoXtexto5" |
    "textosparrafoXtexto6" |
    "textosparrafoXtexto7" |
    "textosparrafoXtexto8" |
    "textosparrafoXtexto9" |
    "textosparrafoXtexto10" |
    "textosparrafoXtexto11" |
    "textosparrafoXtexto12" |
    "textosparrafoXtexto13" |
    "textosparrafoXtexto14" |
    "textosparrafoXtexto15" |
    "textosparrafoXtexto16" |
    "textosparrafoXtexto17" |
    "textosXI" |
    "textosparrafoXItexto1" |
    "textosparrafoXItexto2" |
    "textosparrafoXItexto3" |
    "textosXII" |
    "textosparrafoXIItexto1" |
    "textosparrafoXIItexto2" |
    "textosparrafoXIItexto3" |
    "textosparrafoXIItexto4"
    //--------------------------REVISION-------------------------------------------"TODO:"
    //---------------------------------------------------------------------
    
    
> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Experiencias de Bienestar",
        expDeMedida: "Experiencias a Medida",
        colabrador: "Colaborad@r",
        testimonios: "Testominio",
        blog: "Blog",
        blogPost: "Tips de Bienestar",
        blogRetiro: "Blog Retiros",
        podcast: "Podcast",
        contactar: "Contactar",
        // Fin del Navbar
        //footer 
        textfooteraviso: "Cláusulas Legales",
        textfooterpolitica: "Politica de Privacidad",
        textfootercoockies: "Politica de coockies",
        textfooteraviso2:"Aviso legal",
        textfooterInfo: "Info Contacto",
        textfooteremail: "Direccion de correo electrónico",
        textfooteremail2: "Tu direccion de correo aqui",
        textfooterregistro: "Registro",
        // home
        textDesthome1: "El proyecto nace en Cadaqués, un pueblecito precioso del donde me lleno el alma de buena energía, me nutro de naturaleza y mar y me inspiro. Y esta vibra es la que compartimos aquí. ",
        textDesthome2: "Te proponemos parar para reconectar contigo, soltar lo que ya no necesitas y vibrar con la energía positiva para atraer lo que quieres.",
        textDesthome3: "En definitiva, se trata de avanzar en tu proceso de transformación y bienestar para ser tu mejor versión.",
        textDesthome4: "¿ Como y Donde ?",
        textDesthome5: "1. Sesiones individuales de ",
        textDesthome50: "coaching",
        textDesthome51: "(Cadaqués/ Barcelona/ On line)",
        textDesthome6: "2. Experiencias de ",
        textDesthome60: "bienestar",
        textDesthome61: "(lugares con encanto).",
        
        // seccion about me
        titleparrafo: "Algunas cosas sobre mi",
        textsobremi1: "Te ayudo a vivir en plenitud, encontrar tu bienestar  y tu paz interior.",
        parrafosobremi1: "Desde siempre he sentido la inquietud de entender la vida, el mundo que me rodea y el ser humano. Tengo un interés genuino por las personas, sus biografías, las relaciones personales y la diversidad cultural.",
        parrafosobremi2: "Mi trayectoria como consultora internacional viajando por todo el mundo me ha permitido conocer distintas culturas y relacionarme con personas con diferentes valores e intereses, lo que me ha llevado a profundizar estudiando sobre autoconocimiento, crecimiento personal y liderazgo.",
        parrafosobremi3: "Las crisis me han llevado a indagar dentro de mi para conocerme. Y todos los baches han sido oportunidades para conocerme mejor y crecer, minimizando el sufrimiento y encontrando más paz y armonía.",
        parrafosobremi4: "Con lo aprendido, lo que ofrezco es facilitarte herramientas para ayudarte a reencontrar tu bienestar y tu paz interior, trabajando las emociones, los sentimientos, los valores y como gestionar los cambios de manera amable para llegar a los objetivos que quieres en tu vida.",
        parrafosobremi5: "Soy una apasionada del crecimiento personal y de trabajar el despertar de la consciencia de las personas y la sociedad.",
        parrafosobremi6: "Disfruto de la música y a menudo escucho música en directo.",
        parrafosobremi7: "La belleza y la armonía son importantes y rodeo mi vida de ellas.",
        parrafosobremi8: "Me encanta aprender cada día y siempre tengo retos.",
        parrafosobremi9: "Me gusta cuidarme y es muy importante mi bienestar. Cuando yo estoy bien mi entorno también.",
        parrafosobremi10: "Mis hobbies favoritos son: leer, escribir, arte, nadar en el mar, cantar, bailar, viajar, descubrir otras culturas, senderismo.",
        titleparrafo3: "Bibliografía personal",
        parrafosobremi11:"Licenciada en Psicología (Universidad Oberta de Catalunya).",
        parrafosobremi12:"Máster en Coaching Teleológico (Universidad de Barcelona).",
        parrafosobremi13:"Posgrado en Liderazgo y Desarrollo personal (Instituto Borja Vilaseca).",
        parrafosobremi14:"Licenciada en Ciencias Económicas y Empresariales (UAB).",
        parrafosobremi15:"Posgrado y Máster en comercio internacional (Universidad Pompeu Fabra).",
        parrafosobremi16:"Doing Business Globally (ESADE).",
        parrafosobremi17:"Postgrado en Licitaciones Internacionales (Universidad La Salle).",
        parrafosobremi18:"Formación continuada en el ámbito de empresa y crecimiento personal.",

        TitleCarrousel1:"¿Te sientes estresad@?",
        TitleCarrousel2: "¿Quieres un cambio de aires?",
        TitleCarrousel3: "¿Sientes que estás bloquead@?",
        TitleCarrousel4: "¿Quieres hacer un cambio y no sabes por dónde empezar?",
        TitleCarrousel5: "¿Necesitas inspiración?",
        TitleCarrousel6: "¿Quieres ser tu mejor versión?",

        //Coaching para el Bienestar
        textcoaching1: "¿Sientes que existe una brecha entre la vida que llevas y la que quieres llevar?¿Quieres convertirte en tu mejor versión?",
        textcoachingParrafo1:"Un proceso de coaching, respetuoso, amable y profesional, te ayudará a alcanzar tu objetivo. ¿Te acompaño?",
        textcoachingtitle2:"¿Como te puedo ayudar?",
        textcoaching2: "Definiremos un objetivo claro de cambio y con las sesiones personalizadas darás un empujón y romperás los bloqueos actuales que no te permiten avanzar.",
        textcoaching3: "Te escucharé sin juzgar, te haré preguntas y te daré feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.",
        textcoaching4: "Como coach acompaño a la persona a través de un viaje de exploración interior. Empezamos desde donde empieza su conflicto o malestar hasta la resolución del mismo logrando así tu bienestar.",
        textcoaching5: "Cuando uno toma la determinación de liderar su vida, posiblemente después  de alguna crisis o desajuste, el acompañamiento de un coach lo puede ayudar a acelerar y lograr mejores resultados.",
        textcoachingpide:"Pide más información sin compromiso",
        //formulario coaching para el bienestar
        textnombre:"Nombre",
        textplaceholdescribe: "Escribe tu nombre aquí",
        textemail:"Correo electrónico",
        textplaceholemail: "Dejame saber como contactarte",
        textcomentario:"Comentario",
        textplaceholcoment: "Que te gustaría decir",
        textaceptar:"Enviar",
        //cocaching & mentoring internacional
        textcoachingtitleInternacional: "Coaching & mentoring internacional",
        textcoachinginterna1:"¿Quieres incrementar tu facturación de ventas en internacional?",
        textcoachinginterna2:"¿Quieres mejorar el rendimiento de tu equipo internacional?",
        textcoachinginterna3:"¿Eres un export manager y te planteas un cambio profesional?",
        textcoachinginterna4:"¿Eres un expat y estás experimentando un vaivén en tu adaptación?",
        textcoachinginterna5:"Ya seas export manager o CEO de la empresa el proceso de crecimiento internacional puede ser más que retador y conllevar algún desajuste. Un proceso de coaching y mentoring te ayudará a gestionar los cambios de manera amable para llegar a los objetivos que te plantees.",
        textcoachinginternatitle2:"¿Como te puedo ayudar?",  
        textcoachinginterna6: "Como coach te escucho sin juzgar, te hago preguntas y te doy feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.",      
        textcoachinginterna7: "Como mentora internacional te comparto mis propias experiencias y con mucha empatía y sensibilidad te acompaño a alcanzar los objetivos que quieres lograr, logrando así mayor bienestar.",
        textcoachinginterna8: "Contácta sin compromiso para definir juntos como te puedo ayudar a conseguir los resultados que buscas.",
        textcoachinginternaTestimonio: "Testimonios",
        textcoachinginternatitle9: "¿Como te puedo ayudar?",
        textcoachinginterna10: "Como mentora internacional te comparto mis propias experiencias y con mucha empatía y sensibilidad te acompaño a alcanzar los objetivos que quieres lograr, logrando así mayor bienestar.",
        textcoachinginterna9: "Como coach te escucho sin juzgar, te hago preguntas y te doy feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.",
        textcoachinginterna11: "Contácta  para definir juntos como te puedo ayudar a conseguir los resultados que buscas.",
        textcoachinginterPideinfo: "Pide más información sin compromiso",
        //Agenda Experiencias de bienestar
        textosinviertebienestar: "¡Invierte en tu bienestar!",
        textostalleresyretiros: " Talleres y retiros con colaboradores expertos en distintas disciplinas.",
        textosretirosanteriores: " Retiros Anteriores ",
        //Agenda experiencias a medida
        textoeresunaempersa: "¿Eres una empresa consciente que invierte en el bienestar de sus trabajadores? Contáctanos para organizarte la experiencia a medida que mejor se adapte a tu perfil!.",
        textotrabajemosjuntos: "Trabajemos Juntos",
        //colaborador
        textoColaboradores :"Colaborador@s",
        textoeducadora: "Educadora de Masaje Infantil",
        textcolaborcontact: "Contactame",
        //blog( Tips de bienestar)
        textostipsabundancia: "5 Tips Abundancia", 
        textoqueeslaabundancia: "¿Qué es la abundancia?¿Qué es la abundancia?", 
        textoenfunciondequien: "En función de a quien le preguntes la respuesta será una u otra.Según los estoicos, la abundancia no se basa en la posesión de bienes materiales, sino en la virtud y vivir de acuerdo a la naturaleza Para ellos, la verdadera abundancia está en tener una mente tranquila, estar en armonía con el universo y ser autosuficiente emocionalmente. Hay quien dice que la abundancia es un estado de plenitud y cercanía en todas las áreas de tu vida. Para mí, la abundancia me conecta con la felicidad. ", 
        textoscuandosientoabundancia: "cuando siento abundancia me siento feliz. Y aquí quiero proponerte 5 claves para atraer a Abundancia.", 
        textosllenatumente: "1. Llena tu mente de creencias positivas y expansivas",
        textosamenudoconectamos: "A menudo nos conectamos con creencias absorbidas en la infancia y otras experiencias que han dejado una impronta que sólo tiene que ver con una vivencia personal e individual y no con la realidad",
        textoslarealidadesneutra: "La realidad es neutra, observa cómo la interpretas y descubrirás el sesgo de tu mente y de tus emociones.", 
        textospontedellado: "2. Ponte del lado de la oportunidad", 
        textossabiasquelaoportunidad: " ¿Sabías que la oportunidad está al otro lado del miedo?.  ", 
        textossabiasquetumiedo: "¿Sabías que tus miedos esconden tu mayor potencial?, ¿Sabías que el despliegue de tu potencial y tus dones son el camino a la abundancia Enfrentar nuestros miedos nos sitúa instantáneamente a la superación. Seguro que has experimentado más de una vez esa sensación después de haber conseguido algo que al principio te generaba temor. ",
        textosestasatisfaccion: "Esta satisfacción te da confianza y empoderamiento, porque sabes que, si lo has hecho una vez, puedes hacerlo más veces en otros ámbitos.", 
        textosentrenalacompresion: "3. Entrena la comprensión", 
        textoscomprensioneslocontrario: " La comprensión es lo contrario a la envidia y se refiere al sentimiento de felicidad genuina y alegría por la felicidad del otro, en un sentido auténtico, íntegro y total, sin condicionamientos", 
        textosagradececadamañana: " 4. Agradece cada mañana y cada noche lo que tienes, lo que eres y la vida que vives", 
        textosrecuerdaquesi: "Recuerda que, si no eres feliz con lo que tienes, tampoco serás feliz con lo que no tienes. Agradecer es verte abundante ahora, en este momento, y la vida te ofrece más de lo que tienes y valoras. ", 
        textosdehechoelagradecimiento: "De hecho, el agradecimiento es una de las energías y actitudes más poderosas. Numerosos estudios de investigación sobre la felicidad detectan que uno de los pilares básicos de un sentimiento es así el agradecimiento.", 
        textosmueveteactuaprueba: "5. Muévete, actúa, prueba, acierta y equivócate", 
        textoslaabundanciaparavalientes: "¡La Abundancia es para los valientes que se mueven, se lanzan, se atreven y vibran! Las personas más exitosas son las que han abierto las puertas y han salido fuera, las que se han paseado entre dificultades, retos, obstáculos, logros y pérdidas.", 
        textosdescubreelverdadero: "Descubre el verdadero origen de tus bloqueos personales y abordarlo desde la raíz para desplegar todo tu potencial y alcanzar por fin la autoconfianza, la paz mental y el sentido de vida que anhelas.", 
        textosenconclusionbusca: "En conclusión, busca siempre una mejor versión de ti y la vida entenderá que ante algo mejor lo que le corresponde es lo excelente, entenderá que vives sintonizado con la abundancia.",
        textostipsparar: "5 Tips Parar",
        tipsabundancia: "5 Tips Abundancia",
        tipsemociones: "5 tips Emociones",
        textostipslidiardiadia: "5 tips lidiar dia a dia ",
        textostipsparafluir: "5 tips para fluir",
        //podcast
        //blog retiros
        //Contactar
        textocontactar1: "Contacto",
        textocontactar2: "¿Estás realmente comprometid@ en transformarte para cambiar tu vida?",
        textocontactarjuntoscrearemos: "Juntos crearemos el plan de acción que necesitas para dar el giro que te llevará al siguiente nivel en tu vida, logrando un mayor bienestar.",
        textocontactartelf: "Teléfono:",
        textocontactarformulariotexto1: "Ponerse en contacto",
        //politica de privacidad 
        textospoliticaprivacidad: "POLÍTICA DE PRIVACIDAD",
        textosI:"I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS",
        textosparrafoI: "Respetando lo establecido en la legislación vigente, Coaching y experiencias de bienestar (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.",
        textosII: "II. IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO DE LOS DATOS PERSONALES",
        textosparrafoII: "El responsable del tratamiento de los datos personales recogidos en Coaching y experiencias de bienestar es: Elisabet Coll-Vinent Puig,  con NIF: 46132263J (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes.",
        textosparrafoIItextoII:"Dirección: Paseo Sant Gervasi, 59, 08022 Barcelona",
        textosparrafoIItextoIII:"Teléfono de contacto: +34 660 30 54 21",
        textosparrafoIItextoIIII:"Email de contacto: hola@almacadaques.com",
        textosIII: "III. LEYES QUE INCORPORA ESTA POLÍTICA DE PRIVACIDAD",
        textosparrafoIIItextoI: "Esta política de privacidad está adaptada a la normativa española y  europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:",
        textosparrafoIIItextoII: "El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas   físicas en lo que respecta al tratamiento de datos personales y a  la libre circulación de estos datos (RGPD).",
        textosparrafoIIItextoIII: "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).",
        textosparrafoIIItextoIV: "El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).",
        textosparrafoIIItextoV: "La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).",
        textosIV: "IV. REGISTRO DE DATOS DE CARÁCTER PERSONAL",
        textosparrafoIVtextoI:"En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le  informamos que los datos personales recabados por Coaching y  experiencias de bienestar, mediante los formularios extendidos en  sus páginas quedarán incorporados y serán tratados en nuestro  fichero con el fin de poder facilitar, agilizar y cumplir los  compromisos establecidos entre Coaching y experiencias de bienestar  y el Usuario o el mantenimiento de la relación que se establezca en  los formularios que este rellene, o para atender una solicitud o  consulta del mismo. Asimismo, de conformidad con lo previsto en el  RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción  prevista en el artículo 30.5 del RGPD, se mantiene un registro de  actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás  circunstancias establecidas en el RGPD.",
        textosV:"V. PRINCIPIOS APLICABLES AL TRATAMIENTO DE LOS DATOS PERSONALES",
        textosparrafoVtextoI:"El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:",
        textosparrafoVtextoII:"Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.",
        textosparrafoVtextoIII:"Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.",
        textosparrafoVtextoIV:"Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.",
        textosparrafoVtextoV:"Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.",
        textosparrafoVtextoVI:"Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.",
        textosparrafoVtextoVII:"Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.",
        textosparrafoVtextoVIII:"Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.",
        textosVI: "VI. CATEGORÍAS DE DATOS PERSONALES",
        textosparrafVItextosI: "Las categorías de datos que se tratan en Coaching y experiencias de bienestar son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD." ,
        textosparrafVItextosII: "Base legal para el tratamiento de los datos personales" ,
        textosparrafVItextosIII: "La base legal para el tratamiento de los datos personales es el consentimiento. Coaching y experiencias de bienestar se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos." ,
        textosparrafVItextosIV: "El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web." ,
        textosparrafVItextosV: "En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada." ,
        textosVII: "VII. FINES DEL TRATAMIENTO A QUE SE DESTINAN LOS DATOS PERSONALES.",
        textosparrafoVIItextoI: "Los datos personales son recabados y gestionados por Coaching y experiencias de bienestar con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta." ,
        textosparrafoVIItextoII: "Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de Coaching y experiencias de bienestar, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web." ,
        textosparrafoVIItextoIII: "En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada." ,
        textosVIII: "VIII. PERÍODOS DE RETENCIÓN DE LOS DATOS PERSONALES.",
        textosparrafoVIIItextosI: "Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: 36, o hasta que el Usuario solicite su supresión." ,
        textosparrafoVIIItextosII: "En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo." ,
        textosparrafoVIIItextosIII: "Destinatarios de los datos personales." ,
        textosparrafoVIIItextosIV: "Los datos personales del Usuario no serán compartidos con terceros." ,
        textosparrafoVIIItextosV: "En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca de los destinatarios o las categorías de destinatarios de los datos personales." ,
        textosIX: "IX. DATOS PERSONALES DE MENORES DE EDAD",
        textosparrafoIXtextoI: "Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por Coaching y experiencias de bienestar. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado." ,
        textosparrafoIXtextoII: "Secreto y seguridad de los datos personales" ,
        textosparrafoIXtextoIII: "Coaching y experiencias de bienestar se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos." ,
        textosparrafoIXtextoIV: "El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada." ,
        textosparrafoIXtextoV: "Sin embargo, debido a que Coaching y experiencias de bienestar no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos." ,
        textosparrafoIXtextoVI: "Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información." ,
        textosX: "X.DERECHOS DERIVADOS DEL TRATAMIENTO DE LOS DATOS PERSONALES",
        textosparrafoXtexto1: "El Usuario tiene sobre Coaching y experiencias de bienestar y podrá,por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:" ,
        textosparrafoXtexto2: "Derecho de acceso: Es el derecho del Usuario a obtener confirmación de si Coaching y experiencias de bienestar está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que Coaching y experiencias de bienestar haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos." ,
        textosparrafoXtexto3: "Derecho de rectificación: Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos." ,
        textosparrafoXtexto4: "Derecho de supresión (\"el derecho al olvido\"): Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales." ,
        textosparrafoXtexto5: "Derecho a la limitación del tratamiento: Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento." ,
        textosparrafoXtexto6: "Derecho a la portabilidad de los datos: En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el responsable del tratamiento transmitirá directamente los datos a ese otro responsable." ,
        textosparrafoXtexto7: "Derecho de oposición: Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de Coaching y experiencias de bienestar." ,
        textosparrafoXtexto8: "Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles: Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario." ,
        textosparrafoXtexto9: "Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia \"RGPD-https://almacadaques.com/\", especificando:" ,
        textosparrafoXtexto10: "Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad." ,
        textosparrafoXtexto11: "Petición con los motivos específicos de la solicitud o información a la que se quiere acceder." ,
        textosparrafoXtexto12: "Domicilio a efecto de notificaciones." ,
        textosparrafoXtexto13: "Fecha y firma del solicitante." ,
        textosparrafoXtexto14: "Todo documento que acredite la petición que formula." ,
        textosparrafoXtexto15: "Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:" ,
        textosparrafoXtexto16: "Dirección postal: Paseo Sant Gervasi, 59, 08022 Barcelona" ,
        textosparrafoXtexto17: "Correo electrónico: hola@almacadaques.com" ,
        textosXI: "XI. ENLACES A SITIOS WEB DE TERCEROS",
        textosparrafoXItexto1: "El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de Coaching y experiencias de bienestar, y que por tanto no son operados por Coaching y experiencias de bienestar. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad." ,
        textosparrafoXItexto2: "Reclamaciones ante la autoridad de control" ,
        textosparrafoXItexto3: "En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (https://www.aepd.es/)." ,
        textosXII: "XII. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD",
        textosparrafoXIItexto1: "Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo." ,
        textosparrafoXIItexto2: "Coaching y experiencias de bienestar se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones" ,
        textosparrafoXIItexto3: "Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales." ,
        textosparrafoXIItexto4: "Este documento de Política de Privacidad de un sitio web ha sido creado mediante el generador de plantilla de política de privacidad web gratis online el día 09/10/2023." ,
    },
    [enLanguageFlag.EN]: {
        inicio: "Home",
        sobreMi: "About Me",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Well-being Experiences",
        expDeMedida: "Customizd well-being experiences",
        colabrador: "Collaborators",
        testimonios: "Testominio EN",
        blog: "Blog",
        blogPost: "Tips de Bienestar",
        blogRetiro: "Blog Retiros",
        podcast: "Podcast",
        contactar: "Contact",
        // Fin del Navbar
        //footer 
        textfooteraviso: "AVISO LEGAL",
        textfooterpolitica: "Privacy Policy",
        textfootercoockies: "Cookie policy",
        textfooteraviso2:"Legal warning",
        textfooterInfo: "Contact Info",
        textfooteremail: "Email address",
        textfooteremail2: "Your email address here",
        textfooterregistro: "register",
        // home
        textDesthome1: "The project was born in Cadaqués, a beautiful little town in Alt Empordà where I fill my soul with good energy, I am nourished by nature and the sea and I am inspired. And this vibe is what we share here.",
        textDesthome2: "We suggest you stop to reconnect with yourself, let go what you no longer need and vibrate with positive energy to attract what you want.",
        textDesthome3: "In short, it is about advancing your transformation and well-being process to become the best of yourself.",
        textDesthome4: "How and where?",
        textDesthome5: "1.Individual ",
        textDesthome50: "coaching",
        textDesthome51: "sessions (Cadaqués/ Barcelona/ On line)",
        textDesthome6: "2.Well-being ",
        textDesthome60: "experiences",
        textDesthome61: "(in charming places).",
        // seccion about me
        textsobremi1: "I help you to find your well-being and to live a full life",
        titleparrafo: "Some things about me",
        parrafosobremi1:"I have always felt the desire to understand life, the world around me and human beings. I have a genuine interest in people, their lives, personal relationships and cultural diversity.",
        parrafosobremi2: "My professional career as an international consultant traveling around the world has allowed me to learn about different cultures and interact with people with different values ​​and interests, which has led me to deepen my study of self-knowledge, personal growth and leadership",
        parrafosobremi3: "Crises have helped me to know myself better. Difficulties have become opportunities to know myself better and grow, minimizing suffering and finding more peace and harmony.",
        parrafosobremi4: "What I offer is to provide you with tools to help you rediscover your well-being and inner peace, working on emotions, feelings, values ​​and how to manage to kindly change your way of life and to reach your goals.",
        parrafosobremi5: "I am passionate about personal growth and working to awaken the consciousness of people and society.",
        parrafosobremi6: "I enjoy music and often listen to live music.",
        parrafosobremi7: "Beauty and harmony are important and I surround my life with them.",
        parrafosobremi8: "I love learning every day and I always have challenges.",
        parrafosobremi9: "I like to take care of myself and my well-being is very important. When I am well, so is my environment.",
        parrafosobremi10: "My favorite hobbies are: reading, writing, art, swimming in the sea, singing, dancing, traveling, discovering other cultures, hiking.",
        titleparrafo3: "Personal bibliography",
        parrafosobremi11:"Graduate in Psychology (Open University of Catalonia).",
        parrafosobremi12:"Master in Teleological Coaching (University of Barcelona).",
        parrafosobremi13:"Postgraduate in Leadership and Personal Development (Borja Vilaseca Institute).",
        parrafosobremi14:"Graduate in Economics and Business Sciences (UAB)",
        parrafosobremi15:"Postgraduate and Master in International Trade (Pompeu Fabra University)",
        parrafosobremi16:"Doing Business Globally (ESADE)",
        parrafosobremi17:"Postgraduate in International Tenders (La Salle University)",
        parrafosobremi18:"Continuing training in the field of business and personal growth.",
        //Coaching para el Bienestar
        textcoaching1: "Do you feel like there is a gap between the life you lead and the life you want to lead? Do you want to become the best of yourself?",
        textcoachingParrafo1:"A respectful, kind and professional coaching process will help you achieve your goal. Shall I accompany you?",
        textcoachingtitle2:"How can I help you?",
        textcoaching2: "We will define a clear objective for change and with personalized sessions I will help to push and break the current blocks that do not allow you to move forward.",
        textcoaching3: "I will listen to you without judging, ask you questions and give you feedback, so that you will clarify and organize your ideas as well as increase your self-knowledge and leadership capacities.",
        textcoaching4: "I help he person through a journey of inner exploration. We will start from where your conflict or discomfort begins and go through to achieve your goals.",
        textcoaching5: "When you make the determination to lead your life, possibly after some crisis or imbalance, the support of a coach can help you accelerate and achieve better results",
        textcoachingpide:"Request more information without obligation",

        TitleCarrousel1: "Feeling stressed?",
        TitleCarrousel2: "Need a change of scenery?",
        TitleCarrousel3: "Feeling stuck?",
        TitleCarrousel4: "Want to make a change but don't know where to start?",
        TitleCarrousel5: "Need inspiration?",
        TitleCarrousel6: "Want to be your best self?",


        //formulario coaching para el bienestar
        textnombre:"Name",
        textplaceholdescribe: "Enter your name here",
        textemail:"email",
        textplaceholemail: "Let me know how to contact you",
        textcomentario:"comment",
        textplaceholcoment: "What would you like to say?",
        textaceptar:"Send",
        //cocaching & mentoring internacional
        textcoachingtitleInternacional: "international coaching & mentoring ",
        textcoachinginterna1:"Do you want to increase your international sales turnover?",
        textcoachinginterna2:"Do you want to improve the performance of your international team?",
        textcoachinginterna3:"Are you an export manager and are you considering a professional change",
        textcoachinginterna4:"Are you an expat and are you experiencing a swing in your adaptation?",
        textcoachinginterna5:"Whether you are an export manager or the CEO of the company, the process of international growth can be more than challenging and sometimes you might feel imbalanced. ",
        textcoachinginternatitle2: "How can I help you",
        textcoachinginterna6: "As a coach, I listen to you without judging, ask questions and give feedback, so you will clarify and organize your ideas and increase your self-knowledge and leadership to discover new approaches and achieve your goals.",      
        textcoachinginterna7: "As an international mentor I share my own experiences with you and with a lot of empathy and sensitivity I help you achieve your goals as well as feeling greater well-being.",
        textcoachinginterna8: "I encourage you to contact me to define together  how I can help you achieve your goals.",
        textcoachinginternaTestimonio: "Testimonials",
        textcoachinginternatitle9: "¿How can I help you?",
        textcoachinginterna9: "As a coach, I listen to you without judging, ask you questions and give you feedback, and with this you will clarify and organize your ideas and increase your self-knowledge and leadership to discover new approaches and achieve what you want to achieve.",
        textcoachinginterna10: "As an international mentor I share my own experiences with you and with a lot of empathy and sensitivity I help you achieve the objectives you want to achieve, thus achieving greater well-being.",
        textcoachinginterna11: "Contact us to define together how I can help you achieve the results you are looking for.",
        textcoachinginterPideinfo: "Request more information without obligation",
        //Agenda Experiencias de bienestar
        textosinviertebienestar: "Invest in your well-being!",
        textostalleresyretiros: " Workshops and retreats with expert collaborators in different disciplines.",
        textosretirosanteriores: " Previous Withdrawals ",
        //Agenda experiencias a medida
        textoeresunaempersa: "Are you a conscious company that invests in the well-being of its workers? Contact us to organize the experience as it best suits your profile!.",
        textotrabajemosjuntos: "Let's work together",
        //colaborador
        textoColaboradores :"Collaborators",
        textoeducadora: "Infant Massage Educator",
        textcolaborcontact: "Contact me",
        //blog( Tips de bienestar)
        textostipsabundancia: "5 Abundance Tips", 
        textoqueeslaabundancia: "What is abundance?What is abundance?", 
        textoenfunciondequien: "Depending on who you ask, the answer will be one or the other. According to the Stoics, abundance is not based on the possession of material goods, but on virtue and living according to nature. For them, true abundance lies in having a calm mind, being in harmony with the universe, and being emotionally self-sufficient. There are those who say that abundance is a state of fullness and closeness in all areas of your life. For me, abundance connects me with happiness.", 
        textoscuandosientoabundancia: "When I feel abundance I feel happy. And here I want to propose 5 keys to attract Abundance.", 
        textosllenatumente: "1. Fill your mind with positive and expansive beliefs",
        textosamenudoconectamos: "We often connect with beliefs absorbed in childhood and other experiences that have left an imprint that only has to do with a personal and individual experience and not with reality.",
        textoslarealidadesneutra: "Reality is neutral, observe how you interpret it and you will discover the bias of your mind and your emotions.", 
        textospontedellado: "2. Take the side of opportunity", 
        textossabiasquelaoportunidad: "Did you know that opportunity is on the other side? Did you know that opportunity is on the other side of fear? side of fear?", 
        textossabiasquetumiedo: "Did you know that your fears hide your greatest potential? Did you know that the deployment of your potential and your gifts are the path to abundance. Facing our fears instantly puts us on the path to improvement. Surely you have experienced that feeling more than once after having achieved something that initially scared you.",
        textosestasatisfaccion: "This satisfaction gives you confidence and empowerment, because you know that, if you have done it once, you can do it more times in other areas.", 
        textosentrenalacompresion: "3. Train understanding", 
        textoscomprensioneslocontrario: "Understanding is the opposite of envy and refers to the feeling of genuine happiness and joy for the happiness of another, in an authentic, complete and total sense, without conditioning.", 
        textosagradececadamañana: "4. Be grateful every morning and every night for what you have, what you are and the life you live. Be grateful every morning and every night for what you have, what you are and the life you live", 
        textosrecuerdaquesi: "Remember that if you are not happy with what you have, you will not be happy with what you do not have. To be grateful is to see yourself abundant now, in this moment, and life offers you more of what you have and value.", 
        textosdehechoelagradecimiento: "In fact, gratitude is one of the most powerful energies and attitudes. Numerous research studies on happiness detect that one of the basic pillars of a feeling is gratitude.", 
        textosmueveteactuaprueba: "5. Move, act, try, be right and wrong", 
        textoslaabundanciaparavalientes: "Abundance is for the brave who move, launch, dare and vibrate! The most successful people are those who have opened the doors and gone outside, those who have walked through difficulties, challenges, obstacles, achievements and losses.", 
        textosdescubreelverdadero: "Discover the true origin of your personal blocks and address it from the root to unfold your full potential and finally achieve the self-confidence, peace of mind and the meaning of life you long for.", 
        textosenconclusionbusca: "In conclusion, always look for a better version of yourself and life will understand that when faced with something better, what corresponds to excellence, it will understand that you live in tune with abundance.",
        textostipsparar: "5 Tips to Stop",
        tipsabundancia: "5 Abundance Tips",
        tipsemociones: "5 tips Emotions",
        textostipslidiardiadia: "5 tips to deal with day by day",
        textostipsparafluir: "5 tips to flow",
        //podcast
        //blog retiros
        //Contactar
        textocontactar1: "Contact",
        textocontactar2: "Are you really committed to transforming yourself to change your life?",
        textocontactarjuntoscrearemos: "Together we will create the action plan you need to take the turn that will take you to the next level in your life, achieving greater well-being.",
        textocontactartelf: "Telephone:",
        textocontactarformulariotexto1: "Contact us",
        //politica de privacidad 
        textospoliticaprivacidad: "PRIVACY POLICY",
        textosI:"I. PRIVACY AND DATA PROTECTION POLICY",
        textosparrafoI: "Respecting the provisions of current legislation, Coaching and wellness experiences (hereinafter also Website) undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected.",
        textosII: "II. IDENTITY OF THE RESPONSIBLE FOR THE PROCESSING OF PERSONAL DATA",
        textosparrafoII: "The person responsible for the processing of personal data collected in Coaching and wellness experiences is: Elisabet Coll-Vinent Puig, with NIF: 46132263J (hereinafter, Data Controller). Her contact information is as follows:" ,
        textosparrafoIItextoII:"Address: Paseo Sant Gervasi, 59, 08022 Barcelona",
        textosparrafoIItextoIII:"Contact telephone number: +34 660 30 54 21",
        textosparrafoIItextoIIII:"Contact email: hola@almacadaques.com",
        textosIII: "III. LAWS INCORPORATED IN THIS PRIVACY POLICY",
        textosparrafoIIItextoI: "This privacy policy is adapted to current Spanish and European regulations regarding the protection of personal data on the internet. Specifically, it respects the following rules:",
        textosparrafoIIItextoII: "Regulation (EU) 2016/679 of the European Parliament and of the Council, of April 27, 2016, on the protection of natural persons with regard to the processing of personal data and the free circulation of these data (GDPR).",
        textosparrafoIIItextoIII: "Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights (LOPD-GDD).",
        textosparrafoIIItextoIV: "Royal Decree 1720/2007, of December 21, which approves the Regulations for the development of Organic Law 15/1999, of December 13, on the Protection of Personal Data (RDLOPD).",
        textosparrafoIIItextoV: "Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE).",
        textosIV: "IV. REGISTRE DE DADES DE CARÀCTER PERSONAL",
        textosparrafoIVtextoI:"In compliance with the provisions of the RGPD and the LOPD-GDD, we inform you that the personal data collected by Coaching and Wellness Experiences, through the forms extended on its pages, will be incorporated and processed in our file in order to facilitate, expedite and fulfill the commitments established between Coaching and wellness experiences and the User or the maintenance of the relationship established in the forms that the user fills out, or to respond to a request or query from the same. Likewise, in accordance with the provisions of the RGPD and the LOPD-GDD, unless the exception provided for in article 30.5 of the RGPD applies, a record of processing activities is maintained that specifies, according to its purposes, the processing activities. carried out and the other circumstances established in the RGPD.",
        textosV:"V. PRINCIPLES APPLICABLE TO THE PROCESSING OF PERSONAL DATA",
        textosparrafoVtextoI:"The processing of the User's personal data will be subject to the following principles included in article 5 of the RGPD and in article 4 and following of Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of the digital rights:",
        textosparrafoVtextoII:"Principle of legality, loyalty and transparency: the User's consent will be required at all times following completely transparent information about the purposes for which personal data is collected.",
        textosparrafoVtextoIII:"Purpose limitation principle: personal data will be collected for specific, explicit and legitimate purposes.",
        textosparrafoVtextoIV:"Data minimization principle: the personal data collected will only be strictly necessary in relation to the purposes for which they are processed.",
        textosparrafoVtextoV:"Accuracy principle: personal data must be accurate and always up to date.",
        textosparrafoVtextoVI:"Principle of limitation of the conservation period: personal data will only be maintained in a way that allows the identification of the User for the time necessary for the purposes of its processing.",
        textosparrafoVtextoVII:"Principle of integrity and confidentiality: personal data will be treated in a way that guarantees its security and confidentiality.",
        textosparrafoVtextoVIII:"Principle of proactive responsibility: the Data Controller will be responsible for ensuring that the above principles are met.",
        textosVI: "VI. CATEGORIES OF PERSONAL DATA",
        textosparrafVItextosI: "The categories of data discussed in Coaching and Wellness Experiences are identifying data only. Under no circumstances are special categories of personal data processed within the meaning of Article 9 of the GDPR." ,
        textosparrafVItextosII: "Legal basis for the processing of personal data" ,
        textosparrafVItextosIII: "The legal basis for the processing of personal data is consent. Coaching and wellness experiences undertakes to obtain the express and verifiable consent of the User for the processing of their personal data for one or more specific purposes." ,
        textosparrafVItextosIV: "The User will have the right to withdraw their consent at any time. It will be as easy to withdraw consent as it is to give it. As a general rule, withdrawal of consent will not condition the use of the Website." ,
        textosparrafVItextosV: "On occasions in which the User must or can provide their data through forms to make queries, request information or for reasons related to the content of the Website, they will be informed if the completion of any of them is mandatory. because they are essential for the correct development of the operation carried out." ,
        textosVII: "VII. PURPOSES OF THE PROCESSING FOR WHICH PERSONAL DATA ARE INTENDED",
        textosparrafoVIItextoI: "Personal data is collected and managed by Coaching and wellness experiences in order to facilitate, expedite and fulfill the commitments established between the Website and the User or the maintenance of the relationship established in the forms that the latter fills out or to respond to a request or query." ,
        textosparrafoVIItextoII: "Likewise, the data may be used for commercial purposes of personalization, operational and statistical purposes, and activities specific to the corporate purpose of Coaching and well-being experiences, as well as for the extraction, storage of data and marketing studies to adapt the Content offered to the User, as well as improve the quality, operation and navigation of the Website." ,
        textosparrafoVIItextoIII: "At the time the personal data is obtained, the User will be informed about the specific purpose or purposes of the processing for which the personal data will be used; that is, the use or uses that will be given to the information collected." ,
        textosVIII: "VIII. PERIODS OF RETENTION OF PERSONAL DATA",
        textosparrafoVIIItextosI: "Personal data will only be retained for the minimum time necessary for the purposes of its processing and, in any case, only for the following period: 36, or until the User requests its deletion." ,
        textosparrafoVIIItextosII: "At the time the personal data is obtained, the User will be informed of the period for which the personal data will be retained or, where this is not possible, the criteria used to determine this period." ,
        textosparrafoVIIItextosIII: "Recipients of personal data" ,
        textosparrafoVIIItextosIV: "The User's personal data will not be shared with third parties." ,
        textosparrafoVIIItextosV: "In any case, at the time the personal data is obtained, the User will be informed about the recipients or categories of recipients of the personal data." ,
        textosIX: "IX. PERSONAL DATA OF MINORS",
        textosparrafoIXtextoI: "Respecting the provisions of articles 8 of the RGPD and 7 of Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights, only those over 14 years of age may grant their consent for the processing of your personal data lawfully for Coaching and wellness experiences. If it is a minor under 14 years of age, the consent of the parents or guardians will be necessary for the treatment, and this will only be considered lawful to the extent that they have authorized it." ,
        textosparrafoIXtextoII: "Secrecy and security of personal data" ,
        textosparrafoIXtextoIII: "Coaching and well-being experiences undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected, so as to guarantee the security of personal data and prevent destruction, loss or accidental or unlawful alteration of personal data transmitted, preserved or otherwise processed, or unauthorized communication or access to such data." ,
        textosparrafoIXtextoIV: "The Website has an SSL (Secure Socket Layer) certificate, which ensures that personal data is transmitted securely and confidentially, as the transmission of data between the server and the User, and in feedback, is fully encrypted or encrypted. ." ,
        textosparrafoIXtextoV: "However, because Coaching and well-being experiences cannot guarantee the impregnability of the Internet or the total absence of hackers or others who fraudulently access personal data, the person responsible for the treatment undertakes to inform the User without undue delay when a breach of personal data security occurs that is likely to entail a high risk to the rights and freedoms of natural persons. Following the provisions of Article 4 of the GDPR, a breach of personal data security is understood to be any breach of security that causes the accidental or unlawful destruction, loss or alteration of personal data transmitted, preserved or otherwise processed, or unauthorized communication or access to said data." ,
        textosparrafoIXtextoVI: "The personal data will be treated as confidential by the Data Controller, who undertakes to inform and guarantee through a legal or contractual obligation that said confidentiality is respected by its employees, associates, and any person to whom the data is made accessible. information." ,
        textosX: "X. RIGHTS DERIVED FROM THE PROCESSING OF PERSONAL DATA",
        textosparrafoXtexto1: "The User has Coaching and well-being experiences and may, therefore, exercise against the Data Controller the following rights recognized in the RGPD and Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of the digital rights:" ,
        textosparrafoXtexto2: "Right of access: It is the User's right to obtain confirmation of whether Coaching and well-being experiences is processing their personal data or not and, if so, obtain information about their specific personal data and the treatment that Coaching and well-being experiences has been made or carried out, as well as, among other things, the information available on the origin of said data and the recipients of the communications made or planned thereof." ,
        textosparrafoXtexto3: "Right to rectification: It is the User's right to have their personal data modified that turns out to be inaccurate or, taking into account the purposes of the processing, incomplete." ,
        textosparrafoXtexto4: "Right to deletion (\"the right to be forgotten\"): It is the User's right, provided that current legislation does not establish otherwise, to obtain the deletion of their personal data when they are no longer necessary for the purposes for which were collected or treated; The User has withdrawn his or her consent to the treatment and this does not have another legal basis; the User opposes the treatment and there is no other legitimate reason to continue with it; the personal data have been processed unlawfully; personal data must be deleted in compliance with a legal obligation; or the personal data have been obtained as a result of a direct offer of information society services to a minor under 14 years of age. In addition to deleting the data, the data controller, taking into account the available technology and the cost of its application, must take reasonable measures to inform those responsible who are processing the personal data of the interested party's request to delete any link to the data. those personal data." ,
        textosparrafoXtexto5: "Right to limitation of processing: It is the User's right to limit the processing of their personal data. The User has the right to obtain the limitation of processing when he challenges the accuracy of his personal data; the treatment is illicit; the data controller no longer needs the personal data, but the User needs it to make claims; and when the User has opposed the treatment." ,
        textosparrafoXtexto6: "Right to data portability: In the event that the treatment is carried out by automated means, the User will have the right to receive from the person responsible for the treatment their personal data in a structured, commonly used and machine-readable format, and to transmit them to another person in charge. of the treatment. Whenever technically possible, the data controller will directly transmit the data to that other controller." ,
        textosparrafoXtexto7: "Right to object: It is the User's right not to have their personal data processed or to cease their processing by Coaching and Wellness Experiences." ,
        textosparrafoXtexto8: "Right not to be subject to a decision based solely on automated processing, including profiling: This is the User's right not to be subject to an individualized decision based solely on the automated processing of their personal data, including profiling. , existing unless current legislation establishes otherwise." ,
        textosparrafoXtexto9: "Thus, the User may exercise their rights by written communication addressed to the Data Controller with the reference \"RGPD-https://almacadaques.com/\", specifying:" ,
        textosparrafoXtexto10: "Name, surname of the User and copy of the DNI. In cases where representation is admitted, identification by the same means of the person representing the User will also be necessary, as well as the document accrediting the representation. The photocopy of the DNI may be replaced by any other legally valid means that proves identity." ,
        textosparrafoXtexto11: "Request with the specific reasons for the request or information you want to access." ,
        textosparrafoXtexto12: "Address for notification purposes." ,
        textosparrafoXtexto13: "Date and signature of the applicant." ,
        textosparrafoXtexto14: "Any document that proves the request you make." ,
        textosparrafoXtexto15: "This application and any other attached document may be sent to the following address and/or email:" ,
        textosparrafoXtexto16: "Postal address: Paseo Sant Gervasi, 59, 08022 Barcelona" ,
        textosparrafoXtexto17: "Email: hola@almacadaques.com" ,
        textosXI: "XI. LINKS TO THIRD PARTY WEBSITES",
        textosparrafoXItexto1: "The Website may include hyperlinks or links that allow access to web pages of third parties other than Coaching and Wellness Experiences, and which are therefore not operated by Coaching and Wellness Experiences. The owners of these websites will have their own data protection policies, being themselves, in each case, responsible for their own files and their own privacy practices." ,
        textosparrafoXItexto2: "Claims before the supervisory authority" ,
        textosparrafoXItexto3: "In the event that the User considers that there is a problem or violation of current regulations in the way in which their personal data is being processed, they will have the right to effective judicial protection and to file a claim with a supervisory authority, in particular, in the State in which you have your habitual residence, place of work or place of the alleged infringement. In the case of Spain, the control authority is the Spanish Data Protection Agency (https://www.aepd.es/)." ,
        textosXII: "XII. ACCEPTANCE AND CHANGES TO THIS PRIVACY POLICY",
        textosparrafoXIItexto1: "It is necessary that the User has read and agrees with the conditions on the protection of personal data contained in this Privacy Policy, as well as that he accepts the processing of his personal data so that the Data Controller can proceed with it in the form, during the deadlines and for the purposes indicated. The use of the Website will imply acceptance of its Privacy Policy." ,
        textosparrafoXIItexto2: "Coaching and wellness experiences reserves the right to modify its Privacy Policy, according to its own criteria, or motivated by a legislative, jurisprudential or doctrinal change of the Spanish Data Protection Agency. Changes or updates to this Privacy Policy will not be explicitly notified to the User. The User is recommended to consult this page periodically to be aware of the latest changes or updates." ,
        textosparrafoXIItexto3: "This Privacy Policy was updated to adapt to Regulation (EU) 2016/679 of the European Parliament and of the Council, of April 27, 2016, regarding the protection of natural persons with regard to the processing of personal data and the freedom circulation of these data (RGPD) and Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights." ,
        textosparrafoXIItexto4: "This website Privacy Policy document has been created using the free online web privacy policy template generator on 10/09/2023." ,
    
    },
    [enLanguageFlag.CAT]: {
        inicio: "Inici",
        sobreMi: "Sobre mi",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Experiències de benestar",
        expDeMedida: "Experiències a mida",
        colabrador: "Colaborad@rs",
        testimonios: "Testomini",
        blog: "Blog",
        blogPost: "Tips de Bienestar",
        blogRetiro: "Blog Retiros",
        podcast: "Podcast",
        contactar: "Contacte",
        // Fin del Navbar
        //footer 
        textfooteraviso: "AVÍS LEGAL",
        textfooterpolitica: "Política de privacitat",
        textfootercoockies: "Política de galetes",
        textfooteraviso2:"Avís legal",
        textfooterInfo: "Info Contacto",
        textfooteremail: "Adreça de correu electrònic",
        textfooteremail2: "La teva adreça de correu aquí",
        textfooterregistro: "Registre",
        // home
        textDesthome1: "El projecte neix a Cadaqués, un poblet preciós de l'Alt Empordà on m'omplo l'ànima de bona energia, em nodreixo de natura i mar i m'inspiro. I aquesta vibra és la que compartim aquí.",
        textDesthome2: "Et proposem parar per reconnectar amb tu, deixar anar el que ja no necessites i vibrar amb l'energia positiva per atraure el que vols.",
        textDesthome3: "En definitiva, es tracta d'avançar en el teu procés de transformació i benestar per ser la teva millor versió.",
        textDesthome4: "Com i on?",
        textDesthome5: "1.Sessions individuals de",
        textDesthome50: "coaching",
        textDesthome51: "(Cadaqués/ Barcelona/ On line)",
        textDesthome6: "2.Experiències de ",
        textDesthome60: "benestar",
        textDesthome61: "(llocs amb  encant).",
        // seccion about me
        textsobremi1: "T'ajudo a viure en plenitud, trobar el teu benestar i la teva pau interior.",
        titleparrafo: "Algunas cosas sobre mi catalan",
        parrafosobremi1:"Des de sempre he sentit la inquietud d'entendre la vida, el món que m'envolta i l'ésser humà. Tinc un interès genuí per les persones, les biografies, les relacions personals i la diversitat cultural.",
        parrafosobremi2: "La meva trajectòria com a consultora internacional viatjant per tot el món m'ha permès conèixer diferents cultures i relacionar-me amb persones amb diferents valors i interessos, i m'ha dut a aprofundir i estudiar sobre autoconeixement, creixement personal i lideratge",
        parrafosobremi3: "Les crisis m'han portat a indagar dins meu per conèixer-me. I tots els sotracs han estat oportunitats per conèixer-me millor i créixer, minimitzant el patiment i trobant més pau i harmonia.",
        parrafosobremi4: "El que ofereixo és facilitar-te eines per ajudar-te a retrobar el teu benestar i la teva pau interior, treballant les emocions, els sentiments, els valors i com gestionar els canvis de manera amable per arribar als objectius que vols a la teva vida.",
        parrafosobremi5: "Sóc una apassionada del creixement personal i de treballar el despertar de la consciència de les persones i la societat.",
        parrafosobremi6: "Gaudeixo de la música i sovint escolto música en directe.",
        parrafosobremi7: "La bellesa i l'harmonia són importants a la meva vida .",
        parrafosobremi8: "M'encanta aprendre cada dia i sempre tinc reptes.",
        parrafosobremi9: "M'agrada cuidar-me i és molt important el meu benestar. Quan jo estic bé el meu entorn també.",
        parrafosobremi10: "ls meus hobbies preferits són: llegir, escriure, art, nedar al mar, cantar, ballar, viatjar, descobrir altres cultures, senderisme.",
        titleparrafo3: "Bibliografia personal",
        parrafosobremi11:"Llicenciada en Psicologia (Universitat Oberta de Catalunya).",
        parrafosobremi12:"Màster en Coaching Teleològic (Universitat de Barcelona).",
        parrafosobremi13:"Postgrau en Lideratge i Desenvolupament personal (Institut Borja Vilaseca).",
        parrafosobremi14:"Llicenciada en Ciències Econòmiques i Empresarials (UAB).",
        parrafosobremi15:"Postgrau i Màster en comerç internacional (Universitat Pompeu Fabra).",
        parrafosobremi16:"Doing Business Globally (ESADE).",
        parrafosobremi17:"Postgrau en Licitacions Internacionals (Universitat La Salle).",
        parrafosobremi18:"Formació continuada a l'àmbit d'empresa i creixement personal.",
        //Coaching para el Bienestar
        textcoaching1: "Sents que hi ha una escletxa entre la vida que portes i la que vols portar? Vols convertir-te en la teva millor versió?",
        textcoachingParrafo1:"Un procés de coaching, respectuós, amable i professional, us ajudarà a assolir el vostre objectiu. T'hi acompanyo?",
        textcoachingtitle2:"Com et puc ajudar?",
        textcoaching2: "Definirem un objectiu clar de canvi i amb les sessions personalitzades donaràs una empenta i trencaràs els bloquejos actuals que no et permeten avançar.",
        textcoaching3: "T'escoltaré sense jutjar, et faré preguntes i et donaré feedback, i amb això aclariràs i ordenaràs les teves idees i incrementaràs el teu autoconeixement i lideratge per descobrir nous enfocaments i aconseguir allò que vols.",
        textcoaching4: "Com a coach acompanyo la persona mitjançant un viatge d'exploració interior. Comencem des d'on comença el seu conflicte o malestar fins a la seva resolució aconseguint així el teu benestar.",
        textcoaching5: "Quan una persona pren la determinació de liderar la seva vida, possiblement després d'alguna crisi o desajust, l'acompanyament d'un coach el pot ajudar a accelerar el canvi i aconseguir millors resultats",
        textcoachingpide:"Demana més informació sense compromís",
        //formulario coaching para el bienestar
        textnombre: "Nom",
        textplaceholdescribe: "Escriu el teu nom aquí",
        textemail: "correu electrònic",
        textplaceholemail: "Deixa'm saber com contactar-te",
        textcomentario: "Comentari",
        textplaceholcoment: "que t'agradaria dir",
        textaceptar: "Enviar",
        //cocaching & mentoring internacional
        textcoachingtitleInternacional: "Coaching & mentoring internacional",
        textcoachinginterna1:"¿vols incrementar la facturació de vendes en internacional?",
        textcoachinginterna2:"¿vols millorar el rendiment del teu equip internacional?",
        textcoachinginterna3:"¿ets un export manager i et planteges un canvi professional?",
        textcoachinginterna4:"¿ets un expat i sents algún neguit en la teva adaptació?",
        textcoachinginterna5:"Ja siguis export manager o CEO de l'empresa, el procés de creixement internacional pot ser més que desafiador i comportar algun desajust. ",
        textcoachinginternatitle2: "Com et puc ajudar?",
        textcoachinginterna6: "Com que coach t'escolto sense jutjar, et faig preguntes i et dono feedback, i amb això aclariràs i ordenaràs les teves idees i incrementaràs el teu autoconeixement i lideratge per descobrir nous enfocaments i aconseguir allò que vols aconseguir.",      
        textcoachinginterna7: "Com a mentora internacional et comparteixo les meves pròpies experiències i amb molta empatia i sensibilitat t'acompanyo a assolir els objectius que vols assolir, aconseguint així més benestar.",
        textcoachinginterna8: "Contacta sense compromís per definir junts com et puc ajudar a aconseguir els resultats que cerques",
        textcoachinginternaTestimonio: "Testimonis",
        textcoachinginternatitle9: "Com et puc ajudar",
        textcoachinginterna9: "Com que coach t'escolto sense jutjar, et faig preguntes i et dono feedback, i amb això aclariràs i ordenaràs les teves idees i incrementaràs el teu autoconeixement i lideratge per descobrir nous enfocaments i aconseguir allò que vols aconseguir.",
        textcoachinginterna10: "Com a mentora internacional et comparteixo les meves pròpies experiències i amb molta empatia i sensibilitat t'acompanyo a assolir els objectius que vols assolir, aconseguint així més benestar.",
        textcoachinginterna11: "Contacta per definir junts com et puc ajudar a aconseguir els resultats que cerques.",
        textcoachinginterPideinfo: "Demana més informació sense compromís",

        TitleCarrousel1: "Et sents estressat/da?",
        TitleCarrousel2: "Vols un canvi d'aires?",
        TitleCarrousel3: "Et sents bloquejat/da?",
        TitleCarrousel4: "Vols fer un canvi i no saps per on començar?",
        TitleCarrousel5: "Necessites inspiració?",
        TitleCarrousel6: "Vols ser la teva millor versió?",


        //Agenda Experiencias de bienestar
        textosinviertebienestar: "Inverteix en el teu benestar!",
        textostalleresyretiros: " Tallers i recessos amb col·laboradors experts en diferents disciplines.",
        textosretirosanteriores: "Retirs Anteriors",
        //Agenda experiencias a medida
        textoeresunaempersa: "Ets una empresa conscient que inverteix en el benestar dels treballadors? Contacta'ns per organitzar-te l'experiència a mesura que millor s'adapti al teu perfil!.",
        textotrabajemosjuntos: "Treballem Junts",
        //colaborador
        textoColaboradores :"Col·laborador@s",
        textoeducadora: "Educadora de Massatge Infantil",
        textcolaborcontact: "Contacta'm",
        //blo( Tips de bienestar)
        textostipsabundancia: "5 Tips Abundància", 
        textoqueeslaabundancia: "Què és l'abundància? Què és l'abundància?", 
        textoenfunciondequien: "En funció de qui li preguntis la resposta serà una o una altra. Segons els estoics, l'abundància no es basa en la possessió de béns materials, sinó en la virtut i la vida d'acord amb la naturalesa. Per a ells, la veritable abundància és tenir una ment tranquil·la, estar en harmonia amb l'univers i ser autosuficient emocionalment. Hi ha qui diu que l'abundància és un estat de plenitud i proximitat a totes les àrees de la teva vida. Per mi, l'abundància em connecta amb la felicitat.", 
        textoscuandosientoabundancia: "Quan sento abundància em sento feliç. I aquí vull proposar-te 5 claus per atraure Abundància.", 
        textosllenatumente: "1. Omple la teva ment de creences positives i expansives",
        textosamenudoconectamos: "Sovint ens connectem amb creences absorbides a la infància i altres experiències que han deixat una empremta que només té a veure amb una vivència personal i individual i no amb la realitat.",
        textoslarealidadesneutra: "La realitat és neutra, observa com la interpretes i descobriràs el biaix de la teva ment i de les teves emocions.", 
        textospontedellado: "2. Posa't del costat de l'oportunitat", 
        textossabiasquelaoportunidad: "Sabies que l'oportunitat està a l'altra banda de la por?", 
        textossabiasquetumiedo: "Sabies que les teves pors amaguen el teu major potencial? Sabies que el desplegament del teu potencial i els teus dons són el camí a l'abundància Enfrontar les nostres pors ens situa instantàniament a la superació. Segur que has experimentat més d'una vegada aquesta sensació després d'haver aconseguit una cosa que al principi et generava por.",
        textosestasatisfaccion: "Aquesta satisfacció et dóna confiança i empoderament, perquè saps que, si ho has fet una vegada, ho pots fer més vegades en altres àmbits.", 
        textosentrenalacompresion: "3. Entrena la comprensió", 
        textoscomprensioneslocontrario: "La comprensió és el contrari a l'enveja i fa referència al sentiment de felicitat genuïna i alegria per la felicitat de l'altre, en un sentit autèntic, íntegre i total, sense condicionaments", 
        textosagradececadamañana: "4. Agraeix cada matí i cada nit allò que tens, allò que ets i la vida que vius", 
        textosrecuerdaquesi: "Recorda que, si no ets feliç amb allò que tens, tampoc seràs feliç amb allò que no tens. Agrair és veure't abundant ara, en aquest moment, i la vida t'ofereix més del que tens i valores.", 
        textosdehechoelagradecimiento: "De fet, l'agraïment és una de les energies i les actituds més poderoses. Nombrosos estudis de recerca sobre la felicitat detecten que un dels pilars bàsics d'un sentiment és així l'agraïment.", 
        textosmueveteactuaprueba: "5. Mou-te, actua, prova, encerta i equivoca't", 
        textoslaabundanciaparavalientes: "¡L'Abundància és per als valents que es mouen, es llancen, s'atreveixen i vibren! Les persones més reeixides són les que han obert les portes i n'han sortit fora, les que s'han passejat entre dificultats, reptes, obstacles, èxits i pèrdues.", 
        textosdescubreelverdadero: "Descobreix el veritable origen dels teus bloquejos personals i abordar-lo des de l'arrel per desplegar tot el teu potencial i assolir per fi l'autoconfiança, la pau mental i el sentit de vida que anheles.", 
        textosenconclusionbusca: "En conclusió, busca sempre una millor versió de tu i la vida entendrà que davant una cosa millor el que li correspon és l'excel·lent, entendrà que vius sintonitzat amb l'abundància.",
        textostipsparar: "5 Tips Aturar",
        tipsabundancia: "5 Tips Abundància",
        tipsemociones: "5 tips Emocions",
        textostipslidiardiadia: "5 tipus bregar dia a dia",
        textostipsparafluir: "5 tips to flow",
        //podcast
        //blog retiros
        //Contactar
        textocontactar1: "Contacte",
        textocontactar2: "Estàs realment compromès a transformar-te per canviar la teva vida?",
        textocontactarjuntoscrearemos: "Junts crearem el pla d'acció que necessites per fer el gir que et portarà al següent nivell a la teva vida, aconseguint un benestar més gran.",
        textocontactartelf: "Telèfon:",
        textocontactarformulariotexto1: "Poseu-vos en contacte",
        //politica de privacidad 
        textospoliticaprivacidad: "POLÍTICA DE PRIVACITAT",
        textosI:"I. POLÍTICA DE PRIVACITAT I PROTECCIÓ DE DADES",
        textosparrafoI: "Respectant el que estableix la legislació vigent, Coaching i experiències de benestar (d'ara endavant, també Lloc Web) es compromet a adoptar les mesures tècniques i organitzatives necessàries, segons el nivell de seguretat adequat al risc de les dades recollides",
        textosII: "II. IDENTITAT DEL RESPONSABLE DEL TRACTAMENT DE LES DADES PERSONALS",
        textosparrafoII: "El responsable del tractament de les dades personals recollides a Coaching i experiències de benestar és: Elisabet Coll-Vinent Puig, amb NIF: 46132263J (d'ara endavant, Responsable del tractament). Les vostres dades de contacte són les següents:" ,
        textosparrafoIItextoII:"Adreça: Passeig Sant Gervasi, 59, 08022 Barcelona",
        textosparrafoIItextoIII:"Telèfon de contacte: +34 660 30 54 21",
        textosparrafoIItextoIIII:"Email de contacte: hola@almacadaques.com",
        textosIII: "III. LLEIS QUE INCORPORA AQUESTA POLÍTICA DE PRIVACITAT",
        textosparrafoIIItextoI: "Aquesta política de privadesa està adaptada a la normativa espanyola i europea vigent en matèria de protecció de dades personals a internet. En concret, aquesta respecta les següents normes:" ,
        textosparrafoIIItextoII: "El Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d'abril del 2016, relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals ia la lliure circulació d'aquestes dades (RGPD)." ,
        textosparrafoIIItextoIII: "La Llei Orgànica 3/2018, del 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals (LOPD-GDD)." ,
        textosparrafoIIItextoIV: "El Reial decret 1720/2007, de 21 de desembre, pel qual saprova el Reglament de desplegament de la Llei Orgànica 15/1999, de 13 de desembre, de Protecció de Dades de Caràcter Personal (RDLOPD)." ,
        textosparrafoIIItextoV: "La Llei 34/2002, de 11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE)." ,
        textosIV: "IV. REGISTRE DE DADES DE CARÀCTER PERSONAL",
        textosparrafoIVtextoI:"En compliment del que estableix el RGPD i la LOPD-GDD, us informem que les dades personals demanades per Coaching i experiències de benestar, mitjançant els formularis estesos a les vostres pàgines quedaran incorporats i seran tractats al nostre fitxer per tal de poder facilitar, agilitzar i complir els compromisos establerts entre Coaching i experiències de benestar i l'Usuari o el manteniment de la relació que s'estableixi als formularis que aquest empleni, o per atendre'n una sol·licitud o consulta. Així mateix, de conformitat amb el que preveu el RGPD i la LOPD-GDD, llevat que sigui aplicable l'excepció prevista a l'article 30.5 del RGPD, es manté un registre d'activitats de tractament que especifica, segons les seves finalitats, les activitats de tractament dutes a terme i les altres circumstàncies establertes al RGPD.",
        textosV:"V. PRINCIPIOS APLICABLES AL TRATAMIENTO DE LOS DATOS PERSONALES",
        textosparrafoVtextoI:"El tractament de les dades personals de l'Usuari se sotmetrà als següents principis recollits a l'article 5 del RGPD ia l'article 4 i següents de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals:",
        textosparrafoVtextoII:"Principi de licitud, lleialtat i transparència: es requerirà en tot moment el consentiment de l'Usuari prèvia informació completament transparent de les finalitats per a les quals es recullen les dades personals.",
        textosparrafoVtextoIII:"Principi de limitació de la finalitat: les dades personals seran recollides amb fins determinats, explícits i legítims.",
        textosparrafoVtextoIV:"Principi de minimització de dades: les dades personals recollides seran únicament les estrictament necessàries en relació amb les finalitats per a les quals són tractades.",
        textosparrafoVtextoV:"Principi d'exactitud: les dades personals han de ser exactes i estar sempre actualitzades.",
        textosparrafoVtextoVI:"Principi de limitació del termini de conservació: les dades personals només seran mantingudes de manera que es permeti la identificació de l'Usuari durant el temps necessari per als fins del tractament.",
        textosparrafoVtextoVII:"Principi d'integritat i confidencialitat: les dades personals seran tractades de manera que se'n garanteixi la seguretat i confidencialitat.",
        textosparrafoVtextoVIII:"Principi de responsabilitat proactiva: el responsable del tractament serà responsable d'assegurar que els principis anteriors es compleixen.",
        textosVI: "VI. CATEGORIES DE DADES PERSONALS",
        textosparrafVItextosI: "Les categories de dades que es tracten a Coaching i experiències de benestar són únicament dades identificatives. En cap cas, no es tracten categories especials de dades personals en el sentit de l'article 9 del RGPD." ,
        textosparrafVItextosII: "Base legal per al tractament de les dades personals" ,
        textosparrafVItextosIII: "La base legal per al tractament de les dades personals és el consentiment. Coaching i experiències de benestar es compromet a demanar el consentiment exprés i verificable de l'Usuari per al tractament de les seves dades personals per a un o diversos fins específics." ,
        textosparrafVItextosIV: "L'Usuari tindrà dret a retirar el consentiment en qualsevol moment. Serà tan fàcil retirar el consentiment com donar-ho. Com a regla general, la retirada del consentiment no condicionarà lús del Lloc Web." ,
        textosparrafVItextosV: "En les ocasions en què l'Usuari hagi o pugui facilitar les seves dades a través de formularis per fer consultes, sol·licitar informació o per motius relacionats amb el contingut del Lloc Web, se us informarà en cas que l'emplenament d'algun d'ells sigui obligatòria pel fet que aquests siguin imprescindibles per al correcte desenvolupament de l'operació realitzada." ,
        textosVII: "VII. FINS DEL TRACTAMENT A què ES DESTINEN LES DADES PERSONALS",
        textosparrafoVIItextoI: "Les dades personals són recollides i gestionades per Coaching i experiències de benestar amb la finalitat de poder facilitar, agilitzar i complir els compromisos establerts entre el Lloc Web i l'Usuari o el manteniment de la relació que s'estableixi als formularis que aquest últim empleni o per atendre una sol·licitud o consulta." ,
        textosparrafoVIItextoII: "Igualment, les dades podran ser utilitzades amb una finalitat comercial de personalització, operativa i estadística, i activitats pròpies de l'objecte social de Coaching i experiències de benestar, així com per a l'extracció, emmagatzematge de dades i estudis de màrqueting per adequar el contingut ofert al Usuari, així com millorar la qualitat, funcionament i navegació pel Lloc Web." ,
        textosparrafoVIItextoIII: "En el moment en què s'obtinguin les dades personals, s'informarà l'Usuari sobre la finalitat o les finalitats específiques del tractament a què es destinaran les dades personals; és a dir, de l'ús o els usos que es donarà a la informació recopilada." ,
        textosVIII: "VIII. PERÍODES DE RETENCIÓ DE LES DADES PERSONALS",
        textosparrafoVIIItextosI: "Les dades personals només seran retingudes durant el temps mínim necessari per als fins del seu tractament i, en tot cas, únicament durant el termini següent: 36, o fins que l'Usuari sol·licite la supressió." ,
        textosparrafoVIIItextosII: "En el moment en què s'obtinguin les dades personals, s'informarà l'usuari sobre el termini durant el qual es conservaran les dades personals o, quan això no sigui possible, els criteris utilitzats per determinar aquest termini." ,
        textosparrafoVIIItextosIII: "Destinataris de les dades personals" ,
        textosparrafoVIIItextosIV: "Les dades personals de l'usuari no seran compartides amb tercers." ,
        textosparrafoVIIItextosV: "En qualsevol cas, en el moment en què s'obtinguin les dades personals, s'informarà l'usuari sobre els destinataris o les categories de destinataris de les dades personals." ,
        textosIX: "IX. DADES PERSONALS DE MENORS D'EDAT",
        textosparrafoIXtextoI: "Respectant allò establert als articles 8 del RGPD i 7 de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals, només els majors de 14 anys podran atorgar el seu consentiment per al tractament de les vostres dades personals de forma lícita per Coaching i experiències de benestar. Si es tracta d'un menor de 14 anys, caldrà el consentiment dels pares o tutors per al tractament, i aquest només es considerarà lícit en la mesura que aquests ho hagin autoritzat." ,
        textosparrafoIXtextoII: "Secret i seguretat de les dades personals" ,
        textosparrafoIXtextoIII: "Coaching i experiències de benestar es compromet a adoptar les mesures tècniques i organitzatives necessàries, segons el nivell de seguretat adequat al risc de les dades recollides, de manera que es garanteixi la seguretat de les dades de caràcter personal i s'eviti la destrucció, pèrdua o alteració accidental o il·lícita de dades personals transmeses, conservades o tractades d'una altra manera, o la comunicació o accés no autoritzats a aquestes dades." ,
        textosparrafoIXtextoIV: "El Lloc Web compta amb un certificat SSL (Secure Socket Layer), que assegura que les dades personals es transmeten de manera segura i confidencial, en ser la transmissió de les dades entre el servidor i l'Usuari, i en retroalimentació, totalment xifrada o encriptada ." ,
        textosparrafoIXtextoV: "Tot i això, pel fet que Coaching i experiències de benestar no pot garantir la inexpugnabilitat d'internet ni l'absència total de hackers o altres que accedeixin de manera fraudulent a les dades personals, el responsable del tractament es compromet a comunicar a l'Usuari sense dilació indeguda quan ocorri una violació de la seguretat de les dades personals que sigui probable que comporti un alt risc per als drets i llibertats de les persones físiques. Seguint el que estableix l'article 4 del RGPD, s'entén per violació de la seguretat de les dades personals tota violació de la seguretat que ocasioni la destrucció, pèrdua o alteració accidental o il·lícita de dades personals transmeses, conservades o tractades d'una altra manera, o la comunicació o accés no autoritzats a aquestes dades." ,
        textosparrafoIXtextoVI: "Les dades personals seran tractades com a confidencials pel Responsable del tractament, qui es compromet a informar de i garantir per mitjà d'una obligació legal o contractual que aquesta confidencialitat sigui respectada pels seus empleats, associats, i tota persona a qui li faci accessible la informació." ,
        textosX: "X.DRETS DERIVATS DEL TRACTAMENT DE LES DADES PERSONALS",
        textosparrafoXtexto1: "L'Usuari té sobre Coaching i experiències de benestar i, per tant, podrà exercir davant del Responsable del tractament els següents drets reconeguts en el RGPD i la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals:" ,
        textosparrafoXtexto2: "Dret d'accés: És el dret de l'Usuari a obtenir confirmació de si Coaching i experiències de benestar està tractant o no les vostres dades personals i, en cas afirmatiu, obtenir informació sobre les vostres dades concretes de caràcter personal i del tractament que Coaching i experiències de benestar hagi realitzat o realitzi, així com, entre una altra, de la informació disponible sobre l'origen de les dades esmentades i els destinataris de les comunicacions realitzades o previstes." ,
        textosparrafoXtexto3: "Dret de rectificació: És el dret de l'Usuari al fet que es modifiquin les seves dades personals que resultin ser inexactes o, tenint en compte els fins del tractament, incomplets." ,
        textosparrafoXtexto4: "Dret de supressió (\"el dret a l'oblit\"): És el dret de l'Usuari, sempre que la legislació vigent no estableixi el contrari, a obtenir la supressió de les seves dades personals quan aquestes ja no siguin necessàries per als fins per als quals van ser recollits o tractats; l'Usuari hagi retirat el consentiment al tractament i aquest no compti amb una altra base legal; l'Usuari s'oposi al tractament i no hi hagi cap altre motiu legítim per continuar amb aquest; les dades personals hagin estat tractades il·lícitament; les dades personals s'han de suprimir en compliment d'una obligació legal; o les dades personals hagin estat obtingudes producte duna oferta directa de serveis de la societat de la informació a un menor de 14 anys. A més de suprimir les dades, el responsable del tractament, tenint en compte la tecnologia disponible i el cost de la seva aplicació, haurà d'adoptar mesures raonables per informar els responsables que estiguin tractant les dades personals de la sol·licitud de l'interessat de supressió de qualsevol enllaç a aquestes dades personals." ,
        textosparrafoXtexto5: "Dret a la limitació del tractament: És el dret de l'Usuari a limitar el tractament de les vostres dades personals. L'Usuari té dret a obtenir la limitació del tractament quan impugni l'exactitud de les dades personals; el tractament sigui il·lícit; el responsable del tractament ja no necessiti les dades personals, però l'usuari ho necessiti per fer reclamacions; i quan l'usuari s'hagi oposat al tractament." ,
        textosparrafoXtexto6: "Dret a la portabilitat de les dades: En cas que el tractament s'efectuï per mitjans automatitzats, l'Usuari tindrà dret a rebre del responsable del tractament les dades personals en un format estructurat, d'ús comú i lectura mecànica, ia transmetre'ls a un altre responsable del tractament. Sempre que sigui tècnicament possible, el responsable del tractament transmetrà directament les dades a aquest altre responsable." ,
        textosparrafoXtexto7: "Dret d'oposició: És el dret de l'Usuari que no es dugui a terme el tractament de les vostres dades de caràcter personal o se'n cessi el tractament per part de Coaching i experiències de benestar." ,
        textosparrafoXtexto8: "Dret a no ser objecte d'una decisió basada únicament en el tractament automatitzat, inclosa l'elaboració de perfils: És el dret de l'Usuari a no ser objecte d'una decisió individualitzada basada únicament en el tractament automatitzat de les vostres dades personals, inclosa l'elaboració de perfils , existent llevat que la legislació vigent estableixi el contrari." ,
        textosparrafoXtexto9: "Així doncs, l'Usuari podrà exercitar els seus drets mitjançant comunicació escrita adreçada al Responsable del tractament amb la referència \"RGPD-https://almacadaques.com/\", especificant:" ,
        textosparrafoXtexto10: "Nom, cognoms de l'usuari i còpia del DNI. En els casos en què s'admeti la representació, també serà necessària la identificació pel mateix mitjà de la persona que representa l'Usuari, així com el document acreditatiu de la representació. La fotocòpia del DNI podrà ser substituïda per qualsevol altre mitjà vàlid en dret que acrediti la identitat." ,
        textosparrafoXtexto11: "Petició amb els motius específics de la sol·licitud o informació a què es vol accedir." ,
        textosparrafoXtexto12: "Domicili a efectes de notificacions." ,
        textosparrafoXtexto13: "Data i signatura del sol·licitant." ,
        textosparrafoXtexto14: "Tot document que acrediti la petició que formula." ,
        textosparrafoXtexto15: "Aquesta sol·licitud i qualsevol altre document adjunt podrà enviar-se a la següent adreça i/o correu electrònic:" ,
        textosparrafoXtexto16: "Adreça postal: Passeig Sant Gervasi, 59, 08022 Barcelona" ,
        textosparrafoXtexto17: "Correu electrònic: hola@almacadaques.com" ,
        textosXI: "XI. ENLLAÇOS A LLOCS WEB DE TERCERS",
        textosparrafoXItexto1: "El Lloc Web pot incloure hipervincles o enllaços que permeten accedir a pàgines web de tercers diferents de Coaching i experiències de benestar, i que per tant no són operats per Coaching i experiències de benestar. Els titulars d'aquests llocs web disposaran de les seves pròpies polítiques de protecció de dades, i ells mateixos seran, en cada cas, responsables dels seus propis fitxers i de les seves pròpies pràctiques de privadesa." ,
        textosparrafoXItexto2: "Reclamacions davant de l'autoritat de control" ,
        textosparrafoXItexto3: "En cas que l'Usuari consideri que hi ha un problema o infracció de la normativa vigent en la forma com s'estan tractant les dades personals, tindrà dret a la tutela judicial efectiva ia presentar una reclamació davant d'una autoritat de control, en particular, a l'Estat on tingui la residència habitual, el lloc de treball o el lloc de la suposada infracció. En el cas dEspanya, lautoritat de control és lAgència Espanyola de Protecció de Dades (https://www.aepd.es/)." ,
        textosXII: "XII. ACCEPTACIÓ I CANVIS EN AQUESTA POLÍTICA DE PRIVACITAT",
        textosparrafoXIItexto1: "Cal que l'Usuari hagi llegit i estigui conforme amb les condicions sobre la protecció de dades de caràcter personal contingudes en aquesta Política de Privadesa, així com que accepti el tractament de les seves dades personals perquè el Responsable del tractament pugui procedir-hi a la forma, durant els terminis i per a les finalitats indicades. L'ús del Lloc Web implicarà l'acceptació de la Política de Privadesa del mateix." ,
        textosparrafoXIItexto2: "Coaching i experiències de benestar es reserva el dret a modificar la seva Política de Privadesa, d'acord amb el seu propi criteri, o motivat per un canvi legislatiu, jurisprudencial o doctrinal de l'Agència Espanyola de Protecció de Dades. Els canvis o actualitzacions d'aquesta Política de Privadesa no seran notificats de manera explícita a l'Usuari. Es recomana a l'Usuari consultar aquesta pàgina de forma periòdica per estar al corrent dels darrers canvis o actualitzacions." ,
        textosparrafoXIItexto3: "Aquesta Política de Privadesa va ser actualitzada per adaptar-se al Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d'abril de 2016, relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals ia la lliure circulació d'aquestes dades (RGPD) ia la Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals." ,
        textosparrafoXIItexto4: "Aquest document de Política de Privadesa d'un lloc web ha estat creat mitjançant el generador de plantilla de política de privadesa web gratis online el dia 09/10/2023." ,

    }

};
