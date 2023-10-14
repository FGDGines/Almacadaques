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
    "textDesthome6" |
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
    //Coaching
    "textcoaching1" |
    "textcoaching2" |
    "textcoaching3" |
    "textcoaching4" |
    "textcoaching5" 
    
    

> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        coaching: "Coaching",
        agenda: "Agenda es ",
        expBienestar: "Experiencias de Bienestar",
        expDeMedida: "Expeiencias de Medida",
        colabrador: "Colaborador",
        testimonios: "Testominio",
        blog: "blog",
        blogPost: "Blog Post",
        podcast: "Podcast",
        contactar: "Contactar",
        // Fin del Navbar
        //footer 
        textfooteraviso: "AVISO LEGAL",
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
        textDesthome5: "1. Sesiones individuales de coaching (Cadaqués/ Barcelona/ On line)",
        textDesthome6: "2. Experiencias de bienestar (lugares con encanto).",
        // seccion about me
        titleparrafo: "Algunas cosas sobre mi",
        textsobremi1: "Te ayudo a vivir en plenitud, encontrar tu bienestar  y tu paz interior.",
        parrafosobremi1: "Desde siempre he sentido la inquietud de entender la vida, el mundo que me rodea y el ser humano. Tengo un interés genuino por las personas, sus biografías, las relaciones personales y la diversidad cultural.",
        parrafosobremi2: "Mi trayectoria como consultora internacional viajando por todo el mundo me ha permitido conocer distintas culturas y relacionarme con personas con diferentes valores e intereses, lo que me ha llevado a profundizar estudiando sobre autoconocimiento, crecimiento personal y liderazgo.",
        parrafosobremi3: "Las crisis me han llevado a indagar dentro de mi para conocerme. Y todos los baches han sido oportunidades para conocerme mejor y crecer, minimizando el sufrimiento y encontrando más paz y armonía.",
        parrafosobremi4: "Con lo aprendido, lo que ofrezco es facilitarte herramientas para ayudarte a reencontrar tu bienestar y tu paz interior, trabajando las emociones, los sentimientos, los valores y como gestionar los cambios de manera amable para llegar a los objetivos que quieres en tu vida.",
        parrafosobremi5: "Soy una apasionada del crecimiento personal y de trabajar el despertar de la consciencia de las personas y la sociedad.",
        parrafosobremi6: "Disfruto de la música y a menudo escucho música en directo.",
        parrafosobremi7: "La belleza y la armonía son importantes y rodeo mi vida de ellas.",
        parrafosobremi8: "Me encanta aprender cada día y siempre tengo retos.",
        parrafosobremi9: "Me gusta cuidarme y es muy importante mi bienestar. Cuando yo estoy bien mi entorno también.",
        parrafosobremi10: "Mis hobbies favoritos son: leer, escribir, arte, nadar en el mar, cantar, bailar, viajar, descubrir otras culturas, senderismo.",
        titleparrafo3: "Bibliografía personal :",
        parrafosobremi11:"Licenciada en Psicología (Universidad Oberta de Catalunya).",
        parrafosobremi12:"Máster en Coaching Teleológico (Universidad de Barcelona).",
        parrafosobremi13:"Posgrado en Liderazgo y Desarrollo personal (Instituto Borja Vilaseca).",
        parrafosobremi14:"Licenciada en Ciencias Económicas y Empresariales (Universidad Autónoma de Barcelona).",
        parrafosobremi15:"Posgrado y Máster en comercio internacional (Universidad Pompeu Fabra).",
        parrafosobremi16:"Doing Business Globally (ESADE).",
        parrafosobremi17:"Postgrado en Licitaciones Internacionales (Universidad La Salle).",
        parrafosobremi18:"Formación continuada en el ámbito de empresa y crecimiento personal.",
        //Coaching
        textcoaching1: "¿Sientes que existe una brecha entre la vida que llevas y la que quieres llevar?<br/> ¿Quieres convertirte en tu mejor versión?",
        textcoaching2: "Definiremos un objetivo claro de cambio y con las sesiones personalizadas darás un empujón y romperás los bloqueos actuales que no te permiten avanzar.",
        textcoaching3: "Te escucharé sin juzgar, te haré preguntas y te daré feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.",
        textcoaching4: "Como coach acompaño a la persona a través de un viaje de exploración interior. Empezamos desde donde empieza su conflicto o malestar hasta la resolución del mismo logrando así tu bienestar.",
        textcoaching5: "Cuando uno toma la determinación de liderar su vida, posiblemente después  de alguna crisis o desajuste, el acompañamiento de un coach lo puede ayudar a acelerar y lograr mejores resultados.",


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
        blogPost: "Blog Post",
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
        textDesthome5: "1.Individual coaching sessions (Cadaqués/ Barcelona/ On line)",
        textDesthome6: "2.Well-being experiences (in charming places).",
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
        parrafosobremi14:"Graduate in Economics and Business Sciences (Autonomous University of Barcelona)",
        parrafosobremi15:"Postgraduate and Master in International Trade (Pompeu Fabra University)",
        parrafosobremi16:"Doing Business Globally (ESADE)",
        parrafosobremi17:"Postgraduate in International Tenders (La Salle University)",
        parrafosobremi18:"Continuing training in the field of business and personal growth.",
        //Coaching
        textcoaching1: "",
        textcoaching2: "",
        textcoaching3: "",
        textcoaching4: "",
        textcoaching5: "",
    
    
    
    },
    [enLanguageFlag.CAT]: {
        inicio: "Inici",
        sobreMi: "Sobre mi",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Experiències de benestar",
        expDeMedida: "Experiències a mida",
        colabrador: "COLABORAD@RS",
        testimonios: "Testomini",
        blog: "Blog",
        blogPost: "Blog Post",
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
        textDesthome5: "1.Sessions individuals de coaching (Cadaqués/ Barcelona/ On line)Saber més",
        textDesthome6: "2.Experiències de benestar (llocs amb  encant). Saber més",
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
        parrafosobremi14:"Llicenciada en Ciències Econòmiques i Empresarials (Universitat Autònoma de Barcelona).",
        parrafosobremi15:"Postgrau i Màster en comerç internacional (Universitat Pompeu Fabra).",
        parrafosobremi16:"Doing Business Globally (ESADE).",
        parrafosobremi17:"Postgrau en Licitacions Internacionals (Universitat La Salle).",
        parrafosobremi18:"Formació continuada a l'àmbit d'empresa i creixement personal.",
        //Coaching
        textcoaching1: "",
        textcoaching2: "",
        textcoaching3: "",
        textcoaching4: "",
        textcoaching5: "",



    }

};
