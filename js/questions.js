// Datos de preguntas - 200 preguntas organizadas
const questionsData = {
  "categories": [
    "Primera Cita",
    "Pareja",
    "Amigos",
    "Mejores Amigos",
    "Familia",
    "Videojuegos",
    "Películas",
    "Series",
    "Literatura",
    "Música",
    "Viajes",
    "Comida",
    "Infancia",
    "Metas y Sueños",
    "Humor",
    "Filosofía",
    "Ciencia",
    "Deportes",
    "Tecnología",
    "Naturaleza"
  ],
  
  "questions": [
    // PRIMERA CITA (1-10)
    {
      "id": 1,
      "category": "Primera Cita",
      "question": "¿Cuál es la película que más veces has visto y por qué te gusta tanto?",
      "context": "Esta pregunta revela sus gustos cinematográficos y qué tipo de historias le conectan emocionalmente."
    },
    {
      "id": 2,
      "category": "Primera Cita",
      "question": "Si pudieras viajar a cualquier lugar del mundo mañana, ¿a dónde irías?",
      "context": "Revela sus sueños viajeros y te da pistas sobre sus intereses."
    },
    {
      "id": 3,
      "category": "Primera Cita",
      "question": "¿Cómo describirías tu domingo perfecto?",
      "context": "Muestra su estilo de vida y qué disfruta hacer en su tiempo libre."
    },
    {
      "id": 4,
      "category": "Primera Cita",
      "question": "¿Qué serie te ha enganchado tanto que no podías parar de ver?",
      "context": "Perfecto para descubrir gustos en común y compartir recomendaciones."
    },
    {
      "id": 5,
      "category": "Primera Cita",
      "question": "¿Tienes mascotas? ¿Te gustaría tener alguna?",
      "context": "Revela su lado cariñoso y conexión con los animales."
    },
    {
      "id": 6,
      "category": "Primera Cita",
      "question": "¿Qué canción te pone de buen humor automáticamente?",
      "context": "Descubre sus gustos musicales y qué melodías le alegran el día."
    },
    {
      "id": 7,
      "category": "Primera Cita",
      "question": "Si tuvieras que describirte con tres palabras, ¿cuáles serían?",
      "context": "Una forma divertida de conocer su autopercepción."
    },
    {
      "id": 8,
      "category": "Primera Cita",
      "question": "¿Qué es lo que más te gusta hacer para relajarte?",
      "context": "Conoce sus métodos para manejar el estrés."
    },
    {
      "id": 9,
      "category": "Primera Cita",
      "question": "¿Cuál es el mejor regalo que has recibido?",
      "context": "Revela su lenguaje de amor y qué valora."
    },
    {
      "id": 10,
      "category": "Primera Cita",
      "question": "Si fueras un sabor de helado, ¿cuál serías?",
      "context": "Pregunta divertida que invita a la creatividad."
    },
    
    // PAREJA (11-20)
    {
      "id": 11,
      "category": "Pareja",
      "question": "¿Cuál es tu recuerdo favorito de nuestros primeros meses juntos?",
      "context": "Fortalece la conexión recordando momentos especiales."
    },
    {
      "id": 12,
      "category": "Pareja",
      "question": "¿Qué es lo que más valoras de nuestra relación?",
      "context": "Ayuda a identificar los aspectos positivos de la relación."
    },
    {
      "id": 13,
      "category": "Pareja",
      "question": "Si pudiéramos tomar unas vacaciones de ensueño, ¿cómo serían?",
      "context": "Permite soñar juntos y planear futuras aventuras."
    },
    {
      "id": 14,
      "category": "Pareja",
      "question": "¿Qué canción describe mejor nuestra historia?",
      "context": "Una forma romántica de conectar a través de la música."
    },
    {
      "id": 15,
      "category": "Pareja",
      "question": "¿Qué actividad nueva te gustaría probar juntos?",
      "context": "Mantiene la relación fresca con nuevas experiencias."
    },
    {
      "id": 16,
      "category": "Pareja",
      "question": "¿Cuál ha sido nuestro momento más divertido?",
      "context": "Revivir momentos de humor fortalece la complicidad."
    },
    {
      "id": 17,
      "category": "Pareja",
      "question": "¿Qué es algo que aprendiste de mí que no sabías al principio?",
      "context": "Reflexiona sobre cómo se han conocido más profundamente."
    },
    {
      "id": 18,
      "category": "Pareja",
      "question": "Si nuestra relación fuera una película, ¿qué género sería?",
      "context": "Una pregunta creativa que genera risas."
    },
    {
      "id": 19,
      "category": "Pareja",
      "question": "¿Qué tradición te gustaría crear juntos?",
      "context": "Construir tradiciones fortalece la identidad de la pareja."
    },
    {
      "id": 20,
      "category": "Pareja",
      "question": "¿Qué es lo que más admiras de mí?",
      "context": "Fomenta la apreciación mutua."
    },
    
    // AMIGOS (21-30)
    {
      "id": 21,
      "category": "Amigos",
      "question": "¿Cuál es tu recuerdo favorito de nuestra amistad?",
      "context": "Celebra los momentos especiales que han compartido."
    },
    {
      "id": 22,
      "category": "Amigos",
      "question": "¿Qué película recomiendas siempre a tus amigos?",
      "context": "Descubre sus recomendaciones infalibles."
    },
    {
      "id": 23,
      "category": "Amigos",
      "question": "Si ganaras la lotería, ¿qué harías con tus amigos?",
      "context": "Revela su generosidad y cómo disfruta compartir."
    },
    {
      "id": 24,
      "category": "Amigos",
      "question": "¿Cuál ha sido tu peor cita para contar?",
      "context": "Compartir anécdotas embarazosas crea confianza."
    },
    {
      "id": 25,
      "category": "Amigos",
      "question": "¿Qué habilidad inútil pero impresionante tienes?",
      "context": "Descubre talentos ocultos que hacen única a la persona."
    },
    {
      "id": 26,
      "category": "Amigos",
      "question": "Si fueras un superhéroe, ¿cuál sería tu poder?",
      "context": "Una pregunta lúdica que revela fantasías."
    },
    {
      "id": 27,
      "category": "Amigos",
      "question": "¿Cuál es el mejor consejo que has recibido?",
      "context": "Comparte sabiduría y experiencias de vida."
    },
    {
      "id": 28,
      "category": "Amigos",
      "question": "¿Qué comida nunca probarías?",
      "context": "Descubre aversiones culinarias divertidas."
    },
    {
      "id": 29,
      "category": "Amigos",
      "question": "¿Cuál fue tu juguete favorito de niño?",
      "context": "Conecta con la nostalgia de la infancia."
    },
    {
      "id": 30,
      "category": "Amigos",
      "question": "Si pudieras tocar un instrumento, ¿cuál sería?",
      "context": "Explora aspiraciones musicales."
    },
    
    // MEJORES AMIGOS (31-40)
    {
      "id": 31,
      "category": "Mejores Amigos",
      "question": "¿Qué es lo que más valoras de nuestra amistad?",
      "context": "Fortalece el vínculo reconociendo lo que aprecian."
    },
    {
      "id": 32,
      "category": "Mejores Amigos",
      "question": "¿Cuál ha sido nuestro momento más loco juntos?",
      "context": "Revivir aventuras fortalece la conexión."
    },
    {
      "id": 33,
      "category": "Mejores Amigos",
      "question": "¿Qué secreto te gustaría contarme?",
      "context": "Crear espacio para confidencias y vulnerabilidad."
    },
    {
      "id": 34,
      "category": "Mejores Amigos",
      "question": "Si fuéramos hermanos, ¿cómo sería nuestra dinámica?",
      "context": "Explorar la amistad desde otra perspectiva."
    },
    {
      "id": 35,
      "category": "Mejores Amigos",
      "question": "¿Qué canción describe nuestra amistad?",
      "context": "Encontrar la banda sonora de su relación."
    },
    {
      "id": 36,
      "category": "Mejores Amigos",
      "question": "¿Qué película define nuestra amistad?",
      "context": "Buscar referentes culturales que los representen."
    },
    {
      "id": 37,
      "category": "Mejores Amigos",
      "question": "Si tuviéramos un negocio, ¿a qué nos dedicaríamos?",
      "context": "Explorar talentos complementarios."
    },
    {
      "id": 38,
      "category": "Mejores Amigos",
      "question": "¿Qué es lo más raro que hemos hecho juntos?",
      "context": "Celebrar la singularidad de su amistad."
    },
    {
      "id": 39,
      "category": "Mejores Amigos",
      "question": "¿En qué somos más parecidos y diferentes?",
      "context": "Reflexión sobre similitudes y complementariedades."
    },
    {
      "id": 40,
      "category": "Mejores Amigos",
      "question": "¿Qué he aprendido de ti que aplico en mi vida?",
      "context": "Reconocer la influencia positiva del amigo."
    },
    
    // FAMILIA (41-50)
    {
      "id": 41,
      "category": "Familia",
      "question": "¿Cuál es tu tradición familiar favorita?",
      "context": "Conoce las costumbres que unen a su familia."
    },
    {
      "id": 42,
      "category": "Familia",
      "question": "¿A quién te sientes más cercano en tu familia?",
      "context": "Explora las dinámicas familiares."
    },
    {
      "id": 43,
      "category": "Familia",
      "question": "¿Qué receta de tu familia te encanta?",
      "context": "Tradiciones culinarias familiares."
    },
    {
      "id": 44,
      "category": "Familia",
      "question": "¿Cómo era la dinámica en tu casa cuando eras niño?",
      "context": "Conoce su entorno familiar durante la infancia."
    },
    {
      "id": 45,
      "category": "Familia",
      "question": "¿Qué celebración familiar esperas con más ganas?",
      "context": "Momentos de unión que valora especialmente."
    },
    {
      "id": 46,
      "category": "Familia",
      "question": "Si tu familia fuera una serie, ¿cómo se titularía?",
      "context": "Forma divertida de describir su dinámica."
    },
    {
      "id": 47,
      "category": "Familia",
      "question": "¿Qué consejo de tus padres siempre llevas contigo?",
      "context": "Sabiduría familiar transmitida."
    },
    {
      "id": 48,
      "category": "Familia",
      "question": "¿Cómo describirías la personalidad de tu familia?",
      "context": "Percepción general de los rasgos familiares."
    },
    {
      "id": 49,
      "category": "Familia",
      "question": "¿Qué te gustaría preguntar a un familiar mayor?",
      "context": "Curiosidad por historias familiares."
    },
    {
      "id": 50,
      "category": "Familia",
      "question": "¿Qué te gusta hacer en las reuniones familiares?",
      "context": "Su rol y disfrute en los encuentros familiares."
    },
    
    // VIDEOJUEGOS (51-60)
    {
      "id": 51,
      "category": "Videojuegos",
      "question": "¿Cuál fue el primer videojuego que recuerdas haber jugado?",
      "context": "Conecta con los orígenes gamers y la nostalgia."
    },
    {
      "id": 52,
      "category": "Videojuegos",
      "question": "¿Qué personaje de videojuego te identifica más?",
      "context": "Revela con qué personalidades se identifican."
    },
    {
      "id": 53,
      "category": "Videojuegos",
      "question": "¿Eres más de juegos single-player o multijugador?",
      "context": "Define su estilo de juego y preferencias sociales."
    },
    {
      "id": 54,
      "category": "Videojuegos",
      "question": "¿Qué juego recomendarías a alguien que nunca ha jugado?",
      "context": "Juegos accesibles para nuevos jugadores."
    },
    {
      "id": 55,
      "category": "Videojuegos",
      "question": "¿Qué boss o nivel te ha hecho más difícil?",
      "context": "Compartir historias de desafíos superados."
    },
    {
      "id": 56,
      "category": "Videojuegos",
      "question": "Si pudieras vivir en cualquier mundo de videojuego, ¿cuál sería?",
      "context": "Universos ficticios que más les atraen."
    },
    {
      "id": 57,
      "category": "Videojuegos",
      "question": "¿Qué juego tiene la mejor banda sonora?",
      "context": "Para amantes de la música de videojuegos."
    },
    {
      "id": 58,
      "category": "Videojuegos",
      "question": "¿Eres team consola, PC o móvil?",
      "context": "La clásica discusión gamer."
    },
    {
      "id": 59,
      "category": "Videojuegos",
      "question": "¿Qué juego te ha hecho emocionarte?",
      "context": "Juegos con narrativas profundas."
    },
    {
      "id": 60,
      "category": "Videojuegos",
      "question": "¿Qué franquicia debería resucitar?",
      "context": "Para nostálgicos de sagas olvidadas."
    },
    
    // PELÍCULAS (61-70)
    {
      "id": 61,
      "category": "Películas",
      "question": "¿Qué película podrías ver mil veces sin cansarte?",
      "context": "Películas de confort y favoritas."
    },
    {
      "id": 62,
      "category": "Películas",
      "question": "¿Quién es tu director favorito?",
      "context": "Para cinéfilos que aprecian el arte del cine."
    },
    {
      "id": 63,
      "category": "Películas",
      "question": "¿Qué película infravalorada recomendarías?",
      "context": "Descubre gemas ocultas y gustos únicos."
    },
    {
      "id": 64,
      "category": "Películas",
      "question": "¿Con qué personaje te identificas más?",
      "context": "Revela personalidad a través de personajes."
    },
    {
      "id": 65,
      "category": "Películas",
      "question": "¿Cuál es la mejor trilogía de la historia?",
      "context": "Debate cinematográfico que nunca falla."
    },
    {
      "id": 66,
      "category": "Películas",
      "question": "¿Qué película te ha hecho pensar más?",
      "context": "Para conversaciones sobre cine reflexivo."
    },
    {
      "id": 67,
      "category": "Películas",
      "question": "¿Prefieres ver películas en casa o en el cine?",
      "context": "Hábitos cinematográficos."
    },
    {
      "id": 68,
      "category": "Películas",
      "question": "¿Qué actor merece más reconocimiento?",
      "context": "Talentos infravalorados."
    },
    {
      "id": 69,
      "category": "Películas",
      "question": "¿Cuál es la mejor adaptación de libro a película?",
      "context": "Para amantes de la literatura y el cine."
    },
    {
      "id": 70,
      "category": "Películas",
      "question": "¿Qué película de tu infancia aún amas?",
      "context": "Conecta con la nostalgia."
    },
    
    // SERIES (71-80)
    {
      "id": 71,
      "category": "Series",
      "question": "¿Qué serie te has visto en un fin de semana?",
      "context": "Descubre series adictivas."
    },
    {
      "id": 72,
      "category": "Series",
      "question": "¿Cuál es el mejor episodio de serie?",
      "context": "Capítulos icónicos e inolvidables."
    },
    {
      "id": 73,
      "category": "Series",
      "question": "¿Qué serie tiene el mejor opening?",
      "context": "Para fans que nunca se saltan la cabecera."
    },
    {
      "id": 74,
      "category": "Series",
      "question": "¿Qué personaje te gustaría tener como amigo?",
      "context": "Conexión con personalidades ficticias."
    },
    {
      "id": 75,
      "category": "Series",
      "question": "¿Qué serie recomiendas a todo el mundo?",
      "context": "Su recomendación estrella."
    },
    {
      "id": 76,
      "category": "Series",
      "question": "¿Qué serie empezó bien pero terminó mal?",
      "context": "Para desahogarse sobre finales decepcionantes."
    },
    {
      "id": 77,
      "category": "Series",
      "question": "¿Eres de maratonear o ver un capítulo por semana?",
      "context": "Hábitos de consumo de series."
    },
    {
      "id": 78,
      "category": "Series",
      "question": "¿Qué serie tiene el mejor vestuario?",
      "context": "Apreciación del diseño de producción."
    },
    {
      "id": 79,
      "category": "Series",
      "question": "¿Qué spin-off te gustaría que existiera?",
      "context": "Creatividad para expandir universos."
    },
    {
      "id": 80,
      "category": "Series",
      "question": "¿Cuál es la pareja con mejor química?",
      "context": "Shipping y relaciones memorables."
    },
    
    // LITERATURA (81-90)
    {
      "id": 81,
      "category": "Literatura",
      "question": "¿Qué libro te cambió la forma de ver la vida?",
      "context": "Lecturas transformadoras."
    },
    {
      "id": 82,
      "category": "Literatura",
      "question": "¿Prefieres libros físicos o digitales?",
      "context": "Hábitos de lectura."
    },
    {
      "id": 83,
      "category": "Literatura",
      "question": "¿Qué género literario disfrutas más?",
      "context": "Preferencias: ficción, misterio, romance..."
    },
    {
      "id": 84,
      "category": "Literatura",
      "question": "¿Qué libro recomendarías a quien no lee?",
      "context": "Libros para enganchar a nuevos lectores."
    },
    {
      "id": 85,
      "category": "Literatura",
      "question": "¿Quién es tu autor favorito?",
      "context": "Referentes literarios."
    },
    {
      "id": 86,
      "category": "Literatura",
      "question": "¿Qué libro te ha hecho reír o llorar?",
      "context": "Lecturas con respuesta emocional."
    },
    {
      "id": 87,
      "category": "Literatura",
      "question": "Si pudieras conocer a un autor, ¿quién sería?",
      "context": "Admiración por escritores."
    },
    {
      "id": 88,
      "category": "Literatura",
      "question": "¿Qué libro dejaste sin terminar?",
      "context": "Experiencias con libros que no engancharon."
    },
    {
      "id": 89,
      "category": "Literatura",
      "question": "¿Lees varios libros a la vez o uno por uno?",
      "context": "Hábitos y disciplina de lectura."
    },
    {
      "id": 90,
      "category": "Literatura",
      "question": "¿Qué libro debería ser lectura obligatoria?",
      "context": "Literatura formativa."
    },
    
    // MÚSICA (91-100)
    {
      "id": 91,
      "category": "Música",
      "question": "¿Qué artista ha marcado etapas de tu vida?",
      "context": "Música como banda sonora vital."
    },
    {
      "id": 92,
      "category": "Música",
      "question": "¿Cuál es tu género musical favorito?",
      "context": "Origen de sus preferencias musicales."
    },
    {
      "id": 93,
      "category": "Música",
      "question": "¿Qué canción te transporta a un momento específico?",
      "context": "Conexión entre música y memorias."
    },
    {
      "id": 94,
      "category": "Música",
      "question": "Si fueras un instrumento, ¿cuál serías?",
      "context": "Metáfora musical sobre personalidad."
    },
    {
      "id": 95,
      "category": "Música",
      "question": "¿Qué concierto te ha marcado más?",
      "context": "Experiencias musicales en directo."
    },
    {
      "id": 96,
      "category": "Música",
      "question": "¿Tocas algún instrumento?",
      "context": "Habilidades musicales."
    },
    {
      "id": 97,
      "category": "Música",
      "question": "¿Qué letra de canción te parece poesía?",
      "context": "Apreciación de la lírica."
    },
    {
      "id": 98,
      "category": "Música",
      "question": "¿Qué disco escuchas de principio a fin?",
      "context": "Álbumes perfectos."
    },
    {
      "id": 99,
      "category": "Música",
      "question": "Si tu vida fuera un musical, ¿qué estilo tendría?",
      "context": "Autopercepción a través de la música."
    },
    {
      "id": 100,
      "category": "Música",
      "question": "¿Cantarías conmigo tu canción favorita?",
      "context": "Para romper el hielo de forma divertida."
    },
    
    // VIAJES (101-110)
    {
      "id": 101,
      "category": "Viajes",
      "question": "¿Cuál es tu destino soñado?",
      "context": "Lugares que despiertan su curiosidad."
    },
    {
      "id": 102,
      "category": "Viajes",
      "question": "¿Qué fue lo más extraño que comiste viajando?",
      "context": "Anécdotas culinarias en el extranjero."
    },
    {
      "id": 103,
      "category": "Viajes",
      "question": "¿Viajas planificado o improvisado?",
      "context": "Estilo de viaje: organizado vs. aventurero."
    },
    {
      "id": 104,
      "category": "Viajes",
      "question": "¿Qué lugar visitarías otra vez?",
      "context": "Destinos que merecen repetición."
    },
    {
      "id": 105,
      "category": "Viajes",
      "question": "¿Cuál ha sido tu peor experiencia viajando?",
      "context": "Anécdotas de viaje desastrosas."
    },
    {
      "id": 106,
      "category": "Viajes",
      "question": "¿Prefieres playa, montaña o ciudad?",
      "context": "Preferencias de entorno vacacional."
    },
    {
      "id": 107,
      "category": "Viajes",
      "question": "¿Qué medio de transporte prefieres?",
      "context": "Team avión, tren, coche o barco."
    },
    {
      "id": 108,
      "category": "Viajes",
      "question": "¿Qué coleccionas de tus viajes?",
      "context": "Souvenirs y recuerdos materiales."
    },
    {
      "id": 109,
      "category": "Viajes",
      "question": "¿Viajas para relajarte o para aventurar?",
      "context": "Filosofía viajera."
    },
    {
      "id": 110,
      "category": "Viajes",
      "question": "¿Qué app usas más cuando viajas?",
      "context": "Tecnología aplicada a viajes."
    },
    
    // COMIDA (111-120)
    {
      "id": 111,
      "category": "Comida",
      "question": "Si fueras un plato, ¿cuál serías?",
      "context": "Personalidad a través de la comida."
    },
    {
      "id": 112,
      "category": "Comida",
      "question": "¿Qué comida te recuerda a tu infancia?",
      "context": "Sabores con memorias familiares."
    },
    {
      "id": 113,
      "category": "Comida",
      "question": "¿Eres aventurero culinario?",
      "context": "Relación con la comida: arriesgado o cauteloso."
    },
    {
      "id": 114,
      "category": "Comida",
      "question": "¿Qué plato cocinas mejor?",
      "context": "Habilidades culinarias."
    },
    {
      "id": 115,
      "category": "Comida",
      "question": "¿Qué comida poco saludable te encanta?",
      "context": "Pecados culinarios favoritos."
    },
    {
      "id": 116,
      "category": "Comida",
      "question": "¿Eres team dulce o salado?",
      "context": "Preferencias fundamentales."
    },
    {
      "id": 117,
      "category": "Comida",
      "question": "¿Qué ingrediente no soportas?",
      "context": "Aversiones alimenticias."
    },
    {
      "id": 118,
      "category": "Comida",
      "question": "Si tuvieras un restaurante, ¿qué servirías?",
      "context": "Restaurante soñado."
    },
    {
      "id": 119,
      "category": "Comida",
      "question": "¿Qué desayuno es perfecto para ti?",
      "context": "Comienzo de día ideal."
    },
    {
      "id": 120,
      "category": "Comida",
      "question": "¿Qué comida extranjera te sorprendió?",
      "context": "Descubrimientos culinarios internacionales."
    },
    
    // INFANCIA (121-130)
    {
      "id": 121,
      "category": "Infancia",
      "question": "¿Cuál fue tu programa favorito de niño?",
      "context": "Nostalgia televisiva."
    },
    {
      "id": 122,
      "category": "Infancia",
      "question": "¿Qué querías ser de mayor?",
      "context": "Sueños infantiles."
    },
    {
      "id": 123,
      "category": "Infancia",
      "question": "¿Cuál fue tu mejor cumpleaños?",
      "context": "Recuerdos felices de celebraciones."
    },
    {
      "id": 124,
      "category": "Infancia",
      "question": "¿Tenías un juguete favorito?",
      "context": "Objetos preciados de la niñez."
    },
    {
      "id": 125,
      "category": "Infancia",
      "question": "¿Qué asignatura te gustaba más?",
      "context": "Intereses académicos tempranos."
    },
    {
      "id": 126,
      "category": "Infancia",
      "question": "¿Fuiste niño tranquilo o travieso?",
      "context": "Personalidad infantil."
    },
    {
      "id": 127,
      "category": "Infancia",
      "question": "¿Qué deseabas hacer de niño y no has hecho?",
      "context": "Sueños pendientes."
    },
    {
      "id": 128,
      "category": "Infancia",
      "question": "¿Cuál fue tu primer concierto?",
      "context": "Primeras experiencias culturales."
    },
    {
      "id": 129,
      "category": "Infancia",
      "question": "¿Tenías algún miedo irracional?",
      "context": "Fobias infantiles."
    },
    {
      "id": 130,
      "category": "Infancia",
      "question": "¿Quién fue tu mejor amigo de niño?",
      "context": "Amistades tempranas."
    },
    
    // METAS Y SUEÑOS (131-140)
    {
      "id": 131,
      "category": "Metas y Sueños",
      "question": "¿Qué quieres lograr en 5 años?",
      "context": "Metas a mediano plazo."
    },
    {
      "id": 132,
      "category": "Metas y Sueños",
      "question": "Si el dinero no importara, ¿a qué te dedicarías?",
      "context": "Pasiones vocacionales."
    },
    {
      "id": 133,
      "category": "Metas y Sueños",
      "question": "¿Qué habilidad quieres dominar?",
      "context": "Aspiraciones de aprendizaje."
    },
    {
      "id": 134,
      "category": "Metas y Sueños",
      "question": "¿Dónde te ves en 10 años?",
      "context": "Visiones de futuro."
    },
    {
      "id": 135,
      "category": "Metas y Sueños",
      "question": "¿Qué legado quieres dejar?",
      "context": "Impacto y huella personal."
    },
    {
      "id": 136,
      "category": "Metas y Sueños",
      "question": "¿Qué libro te gustaría escribir?",
      "context": "Historias por compartir."
    },
    {
      "id": 137,
      "category": "Metas y Sueños",
      "question": "¿Qué negocio emprenderías?",
      "context": "Ambiciones empresariales."
    },
    {
      "id": 138,
      "category": "Metas y Sueños",
      "question": "¿Qué idioma quieres aprender?",
      "context": "Intereses lingüísticos."
    },
    {
      "id": 139,
      "category": "Metas y Sueños",
      "question": "¿Qué causa social te importa?",
      "context": "Compromiso social."
    },
    {
      "id": 140,
      "category": "Metas y Sueños",
      "question": "¿Qué sueño de infancia conservas?",
      "context": "Conexión con aspiraciones tempranas."
    },
    
    // HUMOR (141-150)
    {
      "id": 141,
      "category": "Humor",
      "question": "¿Cuál es el chiste malo que siempre cuentas?",
      "context": "Humor absurdo y querido."
    },
    {
      "id": 142,
      "category": "Humor",
      "question": "¿Qué video te hace reír siempre?",
      "context": "Humor atemporal."
    },
    {
      "id": 143,
      "category": "Humor",
      "question": "¿Qué comediante te gusta más?",
      "context": "Estilos cómicos preferidos."
    },
    {
      "id": 144,
      "category": "Humor",
      "question": "¿Cuál ha sido tu metida de pata más épica?",
      "context": "Anécdotas embarazosas."
    },
    {
      "id": 145,
      "category": "Humor",
      "question": "¿Qué memes te representan?",
      "context": "Autoidentificación con humor digital."
    },
    {
      "id": 146,
      "category": "Humor",
      "question": "Si tu vida fuera comedia, ¿cómo se llamaría?",
      "context": "Título humorístico para su vida."
    },
    {
      "id": 147,
      "category": "Humor",
      "question": "¿Qué te hace reír en momentos inapropiados?",
      "context": "Humor nervioso."
    },
    {
      "id": 148,
      "category": "Humor",
      "question": "¿Cuál es el mejor apodo que te han puesto?",
      "context": "Sobrenombres divertidos."
    },
    {
      "id": 149,
      "category": "Humor",
      "question": "¿Qué comedia recomiendas para reír?",
      "context": "Series o películas cómicas."
    },
    {
      "id": 150,
      "category": "Humor",
      "question": "¿Tienes alguna imitación graciosa?",
      "context": "Talentos cómicos ocultos."
    },
    
    // FILOSOFÍA (151-160)
    {
      "id": 151,
      "category": "Filosofía",
      "question": "¿Qué significa para ti la felicidad?",
      "context": "Concepto personal de felicidad."
    },
    {
      "id": 152,
      "category": "Filosofía",
      "question": "¿Crees en el destino o el libre albedrío?",
      "context": "Determinismo vs. libertad."
    },
    {
      "id": 153,
      "category": "Filosofía",
      "question": "¿Qué es más importante, la verdad o la felicidad?",
      "context": "Dilema ético."
    },
    {
      "id": 154,
      "category": "Filosofía",
      "question": "¿Las personas pueden cambiar realmente?",
      "context": "Naturaleza humana."
    },
    {
      "id": 155,
      "category": "Filosofía",
      "question": "¿Qué es el amor para ti?",
      "context": "Conceptualización del amor."
    },
    {
      "id": 156,
      "category": "Filosofía",
      "question": "¿Qué consejo darías a la humanidad?",
      "context": "Sabiduría compartida."
    },
    {
      "id": 157,
      "category": "Filosofía",
      "question": "¿Qué misterio debería resolver la ciencia?",
      "context": "Curiosidad científica."
    },
    {
      "id": 158,
      "category": "Filosofía",
      "question": "¿Qué es peor, fracasar o no intentarlo?",
      "context": "Miedo vs. oportunidad."
    },
    {
      "id": 159,
      "category": "Filosofía",
      "question": "¿Somos buenos por naturaleza?",
      "context": "Visión de la esencia humana."
    },
    {
      "id": 160,
      "category": "Filosofía",
      "question": "¿Qué es la integridad para ti?",
      "context": "Valores éticos."
    },
    
    // CIENCIA (161-170)
    {
      "id": 161,
      "category": "Ciencia",
      "question": "¿Qué avance científico te gustaría ver?",
      "context": "Esperanzas en la ciencia."
    },
    {
      "id": 162,
      "category": "Ciencia",
      "question": "¿A qué científico admiras?",
      "context": "Mentes brillantes."
    },
    {
      "id": 163,
      "category": "Ciencia",
      "question": "¿Qué rama de la ciencia te fascina?",
      "context": "Intereses específicos."
    },
    {
      "id": 164,
      "category": "Ciencia",
      "question": "¿Crees en vida extraterrestre?",
      "context": "Opinión sobre el universo."
    },
    {
      "id": 165,
      "category": "Ciencia",
      "question": "¿Qué opinas de la exploración espacial?",
      "context": "Prioridades científicas."
    },
    {
      "id": 166,
      "category": "Ciencia",
      "question": "¿Viajarías al espacio?",
      "context": "Aventura espacial personal."
    },
    {
      "id": 167,
      "category": "Ciencia",
      "question": "¿Qué invento cambiará nuestras vidas?",
      "context": "Tecnologías disruptivas."
    },
    {
      "id": 168,
      "category": "Ciencia",
      "question": "¿Qué opinas de la inteligencia artificial?",
      "context": "IA, oportunidades y riesgos."
    },
    {
      "id": 169,
      "category": "Ciencia",
      "question": "¿Los robots reemplazarán trabajos?",
      "context": "Futuro laboral."
    },
    {
      "id": 170,
      "category": "Ciencia",
      "question": "¿Qué enfermedad debería curarse?",
      "context": "Esperanzas médicas."
    },
    
    // DEPORTES (171-180)
    {
      "id": 171,
      "category": "Deportes",
      "question": "¿Qué deporte practicas o te gusta ver?",
      "context": "Participación vs. espectador."
    },
    {
      "id": 172,
      "category": "Deportes",
      "question": "¿Quién es tu deportista favorito?",
      "context": "Admiración por figuras deportivas."
    },
    {
      "id": 173,
      "category": "Deportes",
      "question": "¿Qué evento deportivo quieres ver en vivo?",
      "context": "Sueños deportivos."
    },
    {
      "id": 174,
      "category": "Deportes",
      "question": "¿Haces deporte regularmente?",
      "context": "Hábitos de ejercicio."
    },
    {
      "id": 175,
      "category": "Deportes",
      "question": "¿Qué equipo sigues con pasión?",
      "context": "Fidelidades deportivas."
    },
    {
      "id": 176,
      "category": "Deportes",
      "question": "¿El deporte une o divide?",
      "context": "Papel social del deporte."
    },
    {
      "id": 177,
      "category": "Deportes",
      "question": "¿Qué momento deportivo histórico te gustaría haber vivido?",
      "context": "Hazañas deportivas."
    },
    {
      "id": 178,
      "category": "Deportes",
      "question": "Si fueras profesional, ¿en qué deporte?",
      "context": "Fantasías deportivas."
    },
    {
      "id": 179,
      "category": "Deportes",
      "question": "¿Qué opinas de los eSports?",
      "context": "Deportes electrónicos."
    },
    {
      "id": 180,
      "category": "Deportes",
      "question": "¿Prefieres deporte al aire libre o gimnasio?",
      "context": "Entorno para actividad física."
    },
    
    // TECNOLOGÍA (181-190)
    {
      "id": 181,
      "category": "Tecnología",
      "question": "¿Sin qué dispositivo no podrías vivir?",
      "context": "Dependencia tecnológica."
    },
    {
      "id": 182,
      "category": "Tecnología",
      "question": "¿Qué tecnología te parece sobrevalorada?",
      "context": "Escepticismo tecnológico."
    },
    {
      "id": 183,
      "category": "Tecnología",
      "question": "¿Cómo será la tecnología en 20 años?",
      "context": "Visiones de futuro."
    },
    {
      "id": 184,
      "category": "Tecnología",
      "question": "¿Impacto de las redes sociales?",
      "context": "Análisis crítico."
    },
    {
      "id": 185,
      "category": "Tecnología",
      "question": "¿Has probado realidad virtual?",
      "context": "Experiencias con VR."
    },
    {
      "id": 186,
      "category": "Tecnología",
      "question": "¿Qué app debería existir?",
      "context": "Necesidades no cubiertas."
    },
    {
      "id": 187,
      "category": "Tecnología",
      "question": "¿Te preocupa la privacidad online?",
      "context": "Seguridad digital."
    },
    {
      "id": 188,
      "category": "Tecnología",
      "question": "¿Qué opinas de las criptomonedas?",
      "context": "Nuevas formas de dinero."
    },
    {
      "id": 189,
      "category": "Tecnología",
      "question": "¿Eres early adopter?",
      "context": "Relación con la innovación."
    },
    {
      "id": 190,
      "category": "Tecnología",
      "question": "¿Qué trabajo no reemplazará la tecnología?",
      "context": "Lo irremplazablemente humano."
    },
    
    // NATURALEZA (191-200)
    {
      "id": 191,
      "category": "Naturaleza",
      "question": "¿Cuál es tu paisaje natural favorito?",
      "context": "Conexión con entornos naturales."
    },
    {
      "id": 192,
      "category": "Naturaleza",
      "question": "¿Qué animal te fascina más?",
      "context": "Interés por la fauna."
    },
    {
      "id": 193,
      "category": "Naturaleza",
      "question": "¿Prefieres montaña, playa o bosque?",
      "context": "Preferencias de ecosistemas."
    },
    {
      "id": 194,
      "category": "Naturaleza",
      "question": "¿Experiencia inolvidable en la naturaleza?",
      "context": "Aventuras al aire libre."
    },
    {
      "id": 195,
      "category": "Naturaleza",
      "question": "¿Qué haces para cuidar el medio ambiente?",
      "context": "Compromiso ecológico."
    },
    {
      "id": 196,
      "category": "Naturaleza",
      "question": "¿Te gusta mirar las estrellas?",
      "context": "Interés por la astronomía."
    },
    {
      "id": 197,
      "category": "Naturaleza",
      "question": "¿Qué fenómeno natural quieres presenciar?",
      "context": "Espectáculos naturales."
    },
    {
      "id": 198,
      "category": "Naturaleza",
      "question": "¿Tienes plantas en casa?",
      "context": "Relación con la jardinería."
    },
    {
      "id": 199,
      "category": "Naturaleza",
      "question": "¿Qué estación del año prefieres?",
      "context": "Preferencias climáticas."
    },
    {
      "id": 200,
      "category": "Naturaleza",
      "question": "Si fueras un árbol, ¿cuál serías?",
      "context": "Metáfora natural."
    }
  ]
};

// Asegurar que questionsData esté disponible globalmente
window.questionsData = questionsData;