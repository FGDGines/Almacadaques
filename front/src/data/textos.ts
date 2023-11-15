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
    //Agenda experiencias a medida
    //colaborador
    "textoColaboradores" |
    "textoeducadora" |
    "textcolaborcontact"
    //blo( Tips de bienestar)
    //podcast
    //blog retiros
    

    
> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Experiencias de Bienestar",
        expDeMedida: "Expeiencias de Medida",
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
        parrafosobremi14:"Licenciada en Ciencias Económicas y Empresariales (Universidad Autónoma de Barcelona).",
        parrafosobremi15:"Posgrado y Máster en comercio internacional (Universidad Pompeu Fabra).",
        parrafosobremi16:"Doing Business Globally (ESADE).",
        parrafosobremi17:"Postgrado en Licitaciones Internacionales (Universidad La Salle).",
        parrafosobremi18:"Formación continuada en el ámbito de empresa y crecimiento personal.",
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
        //Agenda experiencias a medida
        //colaborador
        textoColaboradores :"Colaborador@s",
        textoeducadora: "Educadora de Masaje Infantil",
        textcolaborcontact: "Contactame",
        //blo( Tips de bienestar)
        //podcast
        //blog retiros
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
        parrafosobremi14:"Graduate in Economics and Business Sciences (Autonomous University of Barcelona)",
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
        //Agenda experiencias a medida
        //colaborador
        textoColaboradores :"Collaborators",
        textoeducadora: "Infant Massage Educator",
        textcolaborcontact: "Contact me",
        //blo( Tips de bienestar)
        //podcast
        //blog retiros
    
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
        parrafosobremi14:"Llicenciada en Ciències Econòmiques i Empresarials (Universitat Autònoma de Barcelona).",
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
        //Agenda Experiencias de bienestar
        //Agenda experiencias a medida
        //colaborador
        textoColaboradores :"Col·laborador@s",
        textoeducadora: "Educadora de Massatge Infantil",
        textcolaborcontact: "Contacta'm",
        //blo( Tips de bienestar)
        //podcast
        //blog retiros
    }

};
