import lulupe1 from './libro1.png';
import cantante1 from './libro2.png';
import cantante2 from './libro2b.png';
import cantante3 from './libro2c.png';
import cantante4 from './libro2d.png';
import cantante5 from './libro2e.png';
import agua1 from './dondelagua.png';
import agua2 from './libro3.png';
import ballboy from './ballboy.png';
import ballboy2 from './libro4.png';
import fadeout1 from './libro6.png';
import fadeout2 from './fadeout.png';
import mujer from './mujerpocoprobable.png';
import quisiera1 from './quisieraamartemenos.png';
import quisiera2 from './quisieraamartemenos2.png';
import notaquisiera from './nota-quisiera.png';
import mujer2 from './mujer2.png';
import barcelona1 from './barcelona1.png';
import barcelona2 from './barcelona2.png';
import barbaros from './barbarosconmarco.png';
import impecables from './libro5.png';

const librosMock = [
    {
        id: 1,
        titulo: 'Lulúpe María T',
        imagen: [lulupe1],
        resenas: [
            {
                cita: 'Nada parecido en el mundo literario como para establecer comparaciones y, por eso mismo un libro recomandable.',
                medio: 'Rolling Stone'
            },
            {
                cita: 'Lulúpe María T es una rareza en la nueva narrativa argentina digna de destacar.',
                medio: 'Rayando los Confines'
            },
            {
                cita: 'La historia de Lulúpe está narrada en la antigua tradición de la novela de aprendizaje que, con un sutil cruce con el<br /> género erótico, crea una deforme y seductora prosa.',
                medio: 'Radar Libros, Página 12'
            },
            {
                cita: 'Primera obra de esta prometedora escritora novel, esta excelente fábula sin moraleja sobre los deseos –en tanto<br /> sexuales y como anhelos-, no hace más que demostrarnos la pobreza de nuestros mundos interiores y<br /> de nuestras lúgubres comarcas.',
                medio: 'Hernan Sassi'
            },
            {
                cita: 'En el saturado pero alegre universo de Lulúpe María T., tanto el personaje como la novela seducen desde una<br /> ingenuidad maliciosa, polimorfa, no exenta de inteligencia, ambigua y atractiva en su ambigüedad.',
                medio: 'Suplemento Cultura, Diario Perfil'
            }
        ],
        sinopsis: 'En el comienzo el planteo narrativo parece simple: el libro promete la vida de Lulú en cálidas viñetas y un humor<br /> ligero sin excluir alguna que otra cuota de violencia.<br /> Rápidamente, sin embargo, Tatiana Goransky enrarece forma y contenido haciéndolos dialogar y fusionarse.<br /> Lulú, después de un trágico inicio sexual y habiendo probado el mecanismo de la venganza, emprenderá un viaje<br /> arbitrario que se repetirá en paralelo con la persecución de Benito, su atípico pretendiente. Mientras tanto la<br /> promesa de un avance cronológico en la vida de Lulú empezará a resquebrajarse para luego simplemente estallar.',
        links: [
            {
                titulo: 'Rayando los Confines',
                link: 'http://rayandolosconfines.com/critica_sexyfant.html'
            },
            {
                titulo: 'Página 12',
                link: 'https://www.pagina12.com.ar/diario/suplementos/libros/10-2017-2006-04-04.html'
            },
            {
                titulo: 'El remisero Absoluto (Publicado en el suplemento Cultura del Diario Perfil)',
                link: 'http://elremiseroabsoluto.blogspot.com.ar/2006/02/diferentes-matices-del-rojo.html'
            }
        ],
        disponible: {
            papel: true,
            ebook: false,
            descarga: false
        },
        link_papel_AR: 'https://listado.mercadolibre.com.ar/lul%C3%BApe-mar%C3%ADa-t-goransky#D[A:LUL%C3%9APE%20MAR%C3%8DA%20T%20GORANSKY]'
    },
    {
        id: 2,
        titulo: '¿Quién mató a la cantante de jazz?',
        imagen: [cantante1, cantante2, cantante3, cantante4, cantante5],
        resenas: [
            {
                cita: '¿Quién mató a la Cantante de Jazz? es un libro inspirado, inteligente y divertido. Goransky inventó el policial<br /> jazzero, un género que es, sobre todo lo demás, el mapa de una pasión.',
                medio: 'Gabriela Cabezón Cámara'
            },
            {
                cita: 'Una novela enorme a pesar de su breve extensión.',
                medio: 'Revista Culturamas, España'
            },
            {
                cita: 'La lógica del mundo que presenta Goransky es una lógica musical y no discursiva. Plagada de variaciones, citas<br /> encubiertas, melodías que se repiten y, sobre todo, ritmo.',
                medio: 'Página 12'
            },
            {
                cita: 'Como juego cortazariano, la brevísima novela de Tatiana Goransky se lee como se bebe un buen whisky,<br /> paladeándolo; va de atrás a adelante y, libérrima, pasa de la primera persona a la tercera, sin perder en ningún<br /> momento su ritmo, como una buena pieza de jazz, anárquica pero con un melodía interna.',
                medio: 'Letralia, España'
            },
            {
                cita: '¿Quién mató a la Cantante de Jazz?  y los otros libros de Tatiana Goransky operan por transgresión. Cuestionan las<br /> formas de escritura y las formas del relato, manteniendo una mirada aguda y a la vez perpleja de la sociedad<br /> argentina. La propuesta es desafiante y de talla: reflexionar sobre la ficción y sus formas, sobre sus implicancias<br /> tanto locales como universales, interrogarse acerca de los lazos entre la realidad y la escritura. Goransky promueve<br /> el desafío, las formas elípticas, barrocas, espiraladas. Escoge el zapping y la fragmentación como forma narrativa,<br /> pero construye historias sólidas y provocadoras, historias de vida –marcadas por los grandes mitos populares, el<br /> deporte, el jazz, el sueño del viaje a Europa-, grandes y diminutas, historias de todos los días. Las que se<br /> encuentran a cada vuelta de página, sorprendentes.',
                medio: 'Hispanistes, Francia'
            }
        ],
        sinopsis: 'La Cantante de Jazz ha muerto, y no de muerte natural. Su asesinato le dará vida. Acrecentará su fama, la convertirá<br /> en amante de todos los hombres que la escucharon cantar. Sus temas inéditos serán tesoros, y las anécdotas de<br /> sus conciertos se magnificarán hasta convertirla en mito. Su partida, también, sacará del letargo a un viejo músico<br /> que encerró su mejor nota en una caja para convertirse en el investigador de este caso. Martínez, el policía, hará su<br /> lista de sospechosos seguro de una cosa: si hubiesen matado a un bandoneonista, en una semana tendrían al<br /> culpable engayolado, pero como la víctima es una intérprete de ”música tan poco ciudadana”, la realidad es otra.<br /> Esta es la introducción a la novela en papel, pero Tatiana Goransky cuenta otra historia que transciende el formato<br /> y genera la necesidad de leer su texto escuchando jazz. Goransky, con voz de cantante y pulso de escritora, maneja<br /> con soltura los dos mundos, nos dice qué música leer y qué historia escuchar con el tono,<br /> la luz y la precisión que el relato necesita.',
        links: [
            {
                titulo: 'El Mundo, España.',
                link: 'http://www.elmundo.es/cultura/2015/08/11/55c8d5af46163f0a688b458e.html'
            },
            {
                titulo: 'Página 12',
                link: 'https://www.pagina12.com.ar/diario/suplementos/las12/13-4261-2008-07-19.html'
            },
            {
                titulo: 'Letralia',
                link: 'https://letralia.com/lecturas/2016/04/16/quien-mato-a-la-cantante-de-jazz-de-tatiana-goransky/'
            },
            {
                titulo: 'Culturamas, España',
                link: 'http://www.culturamas.es/blog/2016/05/24/quien-mato-a-la-cantante-de-jazz-de-tatiana-goransky/'
            },
            {
                titulo: 'La Tormenta En Un Vaso Blog',
                link: 'http://latormentaenunvaso.blogspot.com.ar/2015/03/quien-mato-la-cantante-de-jazz-tatiana.html'
            },
            {
                titulo: 'Propera Parada: Cultura',
                link: 'http://properaparadacultura.blogspot.com.ar/2015/01/quien-mato-la-cantante-de-jazz-tatiana.html'
            },
            {
                titulo: 'Interrobang',
                link: 'http://jordivalerointerrobang.blogspot.com.ar/2015/04/quien-mato-la-cantante-de-jazz-de.html'
            },
            {
                titulo: 'La Soledad del Corredor de Fondo Blog',
                link: 'http://lasoledaddelcorredordefondo.blogspot.com.ar/2015/02/literatura_21.html?m=0'
            },
            {
                titulo: 'Hispanistes, Francia',
                link: 'http://www.hispanistes.org/index.php/component/booklibrary/11718/view_bl/5/chapitre -d-ouvrage/12501/variaciones-sobre-una-historia-policial-acerca-de-quien-mato-a-la- cantante-de-jazz-2008-de-tatiana- goransky?tab=getmybooksTab&amp;is_show_data=1&amp;Itemid=11718 https://www.senalc.com/2020/03/01/scats-y-musica-de-trompeta-en-el-campo-de-batalla-quien-mato-a-la-cantante-de-jazz-de-tatiana-goransky/'
            },
            {
                titulo: 'Editorial Universitaria, México',
                link: 'http://editorialuniversitaria.uanl.mx/index.php/2019/10/07/tatiana-goransky-cantante-de-jazz/'
            }
        ],
        disponible: {
            papel: true,
            ebook: false,
            descarga: false
        },
        nominada: 'Seleccionada por la CONABIP para ser distribuida en más de mil bibliotecas populares.',
        link_papel_AR: 'https://la-periferica.com.ar/libro/qui%C3%A9n-mat%C3%B3-a-la-cantante-de-jazz-978-987-45435-0-9/',
        link_papel_MX: 'https://nitro-press.com/?quienmatoalacantantedejazz',
        link_papel_US: 'https://shopescritoras.com/products/quien-mato-a-la-cantante-de-jazz'
    },
    {
        id: 3,
        titulo: 'Don del agua',
        imagen: [agua2, agua1],
        resenas: [
            {
                cita: 'La historia de Don del agua no puede escribirse con un solo registro, de una sola manera. Tatiana Goransky se vale<br /> para narrarla de los diarios de viaje o de las novelas de enigma; del discurso de investigación del periodismo, de<br /> la magia difusa de las fábulas o de la precisión racional de los estudios antropológicos. Las supersticiones y los<br /> métodos conviven y se disputan en una historia que transcurre tanto en la realidad reconocible como en el mundo<br /> fantástico de los tesoros escondidos. Porque lo narrado se multiplica en las formas de narrar y la literatura al fin<br /> de cuentas es lo único que importa.',
                medio : 'Martín Kohan'
            },
            {
                cita: 'La cristalina fluidez de la prosa de Goransky y el estilo impecable invita a pensar en autores como<br /> Marcelo Cohen o César Aira.',
                medio: 'El Mundo, España'
            },
            {
                cita: 'El tempo, el manejo de la cadencia, las estructuras que dan lugar a los solos, los silencios y los textos corales se<br /> entretejen armando melodías y estructuras narrativas, claro ejemplo de escribir explorando el mundo como si se<br /> desentrañara parte de su misteriosa partitura.',
                medio: 'Diario de Girona, España'
            },
            {
                cita: 'Antes que nada, Don del agua es una novela de aventuras, con todas las letras como pide el pueblo y escasea<br /> últimamente, como si la más mínima gota de realismo desencadenara, necesariamente, el gobierno absoluto de la<br /> verosimilitud y el aburrimiento. Acá, sin embargo, hay bastante de maravilloso, pero de la mejor tradición, la de los<br /> cuentos juveniles entre la fantasía y el terror, aunque dejarla en ese lugar sería encasillar una novela que tiene<br /> mucho más para dar, sobre todo porque está atravesada no sólo por la tragedia, esa mezcla de destino divino y<br /> maldición humana, sino por una serie de lenguajes y discursos que suman, la agrandan<br /> y la convierten en una historia emocionante.',
                medio: 'Página 12'
            },
            {
                cita: 'Don del agua es una novela hermosa. Húmeda por donde se la lea. Tiene palabras que conjuran el aburrimiento:<br /> rabdomante y zahorí. Aunque Don del agua podría ser la historia de un barco, de una familia o del mar, es la<br /> historia de dos hermanos, de uno que tenía buena suerte y de otro que necesitaba ser supersticioso.',
                medio: 'Sebastián Chilano'
            }
        ],
        sinopsis: 'Don del agua narra la historia de una saga maldita, la de un rabdomante albino y sus dos hijos varones: un<br /> capitán de barco empecinado en dominar la respiración subacuática y un buzo obsesionado por<br /> encontrar un tesoro imposible.<br /> La autora entreteje con maestría varios registros discursivos que van desde la novela de misterio y el cuaderno<br /> de bitácora, hasta la crónica periodística y el género fantástico. Situadas entre la física y la superstición, estas<br /> páginas se expanden con pulso firme y certero.<br /> Goransky traza un universo masculino de conquistadores acuáticos que<br /> se valen de todo para tener el don del agua.',
        links: [
            {
                titulo: 'Página 12',
                link: 'https://www.pagina12.com.ar/diario/suplementos/libros/10-4201-2011-03-13.html'
            },
            {
                titulo: 'InfoBae',
                link: 'https://www.infobae.com/grandes-libros/2018/08/23/una-novela-que-reflexiona-sobre-los-usos-del-agua/'
            },
            {
               titulo: 'Revista Kundura',
               link: 'https://revistakundra.wordpress.com/2018/09/13/resena-don-del-agua-de-tatiana-goransky/' 
            },
            {
                titulo: 'Solo Tempestad',
                link: 'http://www.solotempestad.com/goranskyxvidal/'
            }
        ],
        disponible: {
            papel: true,
            ebook: false,
            descarga: false
        },
        link_papel_AR: 'https://www.mediopanyunlibro.com.ar/productos/don-del-agua-tatiana-goransky-evaristo/',
    },
    {
        id: 4,
        titulo: 'Ball Boy',
        imagen: [ballboy2, ballboy],
        resenas: [
            {
                cita: 'A lo largo de los diecisiete días que atraviesa esta crónica imaginaria, acompañando los avatares del Roland Garros<br /> del 2009 y compartiendo paso a paso, con el lector, el descenso al infierno de Manuel, Tatiana Goransky nos<br /> muestra –con un implacable sentido de la disposición narrativa y un dominio absoluto del desarrollo argumental–<br /> lo que sucede cuando colapsa el mundo de un obsesivo.',
                medio: 'Revista Kundra'
            },
            {
                cita: 'Con la publicación de esta nouvelle Tatiana Goransky reafirma que es una de las escritoras más originales de la<br /> narrativa latinoamericana actual. Llena de sorpresas inquietantes y de un humorismo que se baña en lo<br /> perturbador, Ball boy es sin duda un sitcom malvado y una dislocación de las expectativas más tradicionales,<br /> donde la frase «Piensen tenis» se repite constantemente como si no hubiera otra forma de vivir en el mundo concreto.',
                medio: 'Suburbano, Estados Unidos'
            },
            {
                cita: 'Un relato hiperrealista, sincopado y seco, que se mueve a la velocidad de la pelota en un match de Grand Slam.',
                medio: 'El Mundo, España'
            },
            {
                cita: 'Ball boy de Tatiana Goransky es una muestra de cómo contar, en pocas páginas, una efectiva historia de<br /> obsesiones en un clima trágico-apocalíptico, sin perder de vista la trama y evitando el costumbrismo.',
                medio: 'Golosina Canibal'
            }
        ],
        sinopsis: 'Todos los viernes a la noche desde hace dos meses y medio Manuel sueña con Federer. Federer va 5-3 arriba 40-30<br /> en el último set de la final del Roland Garros. Manuel le alcanza una pelota para el saque. Federer sirve a la derecha con<br /> slice, el saque es afortunado. Ace... Manuel nunca quiso ser tenista. “Tenista puede ser cualquiera”, pero “para ser el<br /> mejor ball boy hay que dejar el ego de lado y convertirse en un ser invisible e impecable”, ésas son sus máximas.<br /> La historia de Manuel, una suerte de negativo fotográfico del Bartleby el escribiente de Melville, que prefiere hacerlo<br /> mejor, siempre mejor, y por eso sustituye la competición deportiva por el tardío oficio de recogepelotas, porque ese<br /> humilde arte sí le permitiría acaso alcanzar la perfección. Una historia que, conviene decirlo, su autora, Tatiana<br /> Goransky, resuelve con la contundencia y la eficacia de un jugador de Grand Slam.',
        links: [
            {
                titulo: 'Suburbano',
                link: 'http://suburbano.net/piensen-tenis-ball-boy-tragedia-en-polvo-de-ladrillo/'
            },
            {
                titulo: 'Revista Kundra',
                link: 'https://revistakundra.wordpress.com/2014/04/30/ball-boy-tg/'
            },
            {
                titulo: 'Golosina Canibal',
                link: 'http://golosinacanibal.blogspot.com/2013/12/polvo-de-estrellas-sobre-boy-de-tatiana.html'
            }
        ],
        disponible: {
            papel: true,
            ebook: true,
            descarga: false
        },
        link_papel_ES: 'https://editorialcomba.com/libros/narrativa/los-impecables/',
        link_ebook: 'https://www.bajalibros.com/AR/Ball-boy-Tatiana-Goransky-eBook-1714023'
    },
    {
        id: 5,
        titulo: 'Fade Out',
        imagen: [fadeout1, fadeout2],
        resenas: [
            {
                cita: 'El estilo de Goransky es delicado, meticuloso, pero a la vez se amolda a los distintos narradores y personajes<br /> construyendo situaciones que pueden llegar a ser desopilantes.<br /> Una vez más, la pluma de esta escritora atrapa al (la) lector(a) como una telaraña tejida con encanto y sutileza, y al<br /> terminar el libro él o ella sentirán un vacío, un silencio (un fade out) que perdurará por días.',
                medio: 'El país de la bruma'
            },
            {
                cita: 'Para Goransky el pudor es todo un tema, es complejo, hasta el punto de terminar el libro con una suerte de<br /> reflexiones sobre la traición que supone escribir, un acto en el que conjuramos toda nuestra memoria. Pero el pudor<br /> no es lo mismo que la confidencialidad. Y de esa línea difusa, permeable, incómoda y musical, trata esta bella<br /> novela que nos trae, una vez más, un descubrimiento desde el otro lado del Atlántico.',
                medio: 'Culturamas, España'
            },
            {
                cita: 'En estos tiempos de música descartable y libros insensibles, la escritora y cantante de jazz Tatiana<br /> Goransky presenta Fade out, una novela que expone el universo femenino desde canciones que atraviesan a la<br /> protagonista, Kumiku, una mujer que nació con el don/maldición de emitir durante las 24 horas temas desde sus<br /> oídos. Las páginas de Fade out pasan con una sonoridad tan particular, uno agarra con dos dedos la hoja y la<br /> pasa, apurado para saber qué sucederá luego, pero disfrutando a la vez el momento, ese ritual tan particular que<br /> se genera con una novela que conmueve mientras uno en la mente procesa las palabras y busca en la banda de<br /> sonido de la vida las canciones que emite Kumiku, los tangos de Renata y ese fade out<br /> entre los temas, el silencio, que tanta falta nos hace a todos en estos días.',
                medio: 'Dentro del Monolito, España'
            }
        ],
        sinopsis: 'Desde su nacimiento los oídos de Kumiku emiten música. “Vino al mundo con el poder del sonido, con la<br /> habilidad de producir ondas melódicas y rítmicas. Kumiku nació cajita de música infinita.” También su hija<br /> Renata, y de distinta forma Ester, la nieta, en una línea genética que Tatiana Goransky narra a partir de diarios<br /> íntimos y de ambiguas observaciones de un negro literario. Temas de Caetano Veloso, Stevie Wonder o Charly<br /> García, entre otros, dan el tono a las páginas de Fade out, apasionante novela en que tres generaciones de<br /> mujeres trazan su vida a través de la música y la búsqueda del silencio.<br /> El amor es una constante también que las protagonistas habrán de resolver entre las ciudades de Buenos Aires,<br /> San Juan y Barcelona.',
        links: [
            {
                titulo: 'Literal Magazine',
                link: 'http://literalmagazine.com/auscultar-el-silencio/'
            },
            {
                titulo: 'Télam',
                link: 'http://www.telam.com.ar/notas/201610/168767-tatiana-goransky-fade-out.html'
            },
            {
                titulo: 'InfoBae',
                link: 'http://www.infobae.com/grandes-libros/2016/12/29/se-puede-encontrar-el-silencio-a-traves-del-amor/'
            },
            {
                titulo: 'Tan Alto El Silencio',
                link: 'http://tanaltoelsilencio.blogspot.com.ar/2017/07/fade-out-de-tatiana-goransky.html'
            },
            {
                titulo: 'Ámbito',
                link: 'http://www.ambito.com/880367-tatiana-goransky-en-los-tiempos-que-vivimos-el-silencio-es-un-lujo'
            },
            {
                titulo: 'Solo Tempestad',
                link: 'http://www.solotempestad.com/goranskyxmartinezburkett/'
            },
            {
                titulo: 'La Capital',
                link: 'http://www.lacapitalmdp.com/no-deberia-ser-preciso-retirarse-del-mundo-para-estar-en-silencio-y-sin-embargo-lo-es/'
            },
            {
                titulo: 'Clarín',
                link: ' https://www.clarin.com/revista-enie/literatura/cuerpos-musicales-par-vidas-pop_0_rJd8NxFD-.html'
            },
            {
                titulo: 'Zenda Libros',
                link: 'https://www.zendalibros.com/entrevista-tatiana-goransky/'
            },
            {
                titulo: 'Revista Kundra',
                link: 'https://revistakundra.wordpress.com/2016/12/05/resena-fade-out-de-tatiana-goransky-por-luis-alexis-leiva/'
            },
            {
                titulo: 'Que Digital',
                link: 'http://quedigital.com.ar/cultura/fade-la-busqueda-de-ese-lujo-llamado-silencio/'
            },
            {
                titulo: 'Revista Colofon',
                link: 'http://revistacolofon.com.ar/tatiana-goransky-no-podria-posponer-la-escritura-hasta-encontrar-el-verdadero-silencio-sino-no-escribiria-casi-nunca/'
            },
            {
                titulo: 'Revista Eñe',
                link: 'https://www.lafabrica.com/festivalene/actualidad/fade-out-de-tatiana-goransky-una-lectura-de-franco-chiaravalloti/'
            }
        ],
        disponible: {
            papel: true,
            ebook: true,
            descarga: false
        },
        link_papel_AR: 'https://www.galernaweb.com/productos/fade-out-tatiana-goransky/',
        link_papel_ES: 'https://editorialcomba.com/libros/narrativa/fade-out/',
        link_ebook: 'https://play.google.com/store/info/name/Tatiana_Goransky?id=11mvwlgtx',
        spotify: true,
        nominada: 'Fade Out estuvo nominada a Mejor Novela Argentina del año 2016.'
    },
    {
        id: 6,
        titulo: 'La mujer poco probable',
        imagen: [mujer, mujer2],
        resenas: [
            {
                cita: 'Goransky consigue imprimir realidad a sus personajes con una narrativa reflexiva, serena y pausada, alejada de<br /> estridencias, demostrando que la sencillez y la sensibilidad son las mejores armas de la autora.<br /> Una novela breve, potente, que demuestra el talento de Goransky para conmovernos una vez más.',
                medio: 'Moon Magazine, España'
            },
            {
                cita: 'La obra podría haberse dado por concluida con las cien primeras páginas y hubiera quedado una contundente<br /> novela breve. Sin embargo, la autora va más allá y añade un “Epílogo familiar” que bien podría haberse titulado<br /> “Daños colaterales” y en el que aborda las consecuencias de esa relación a tres que supone el argumento principal<br /> y en cómo afectan a los seres más cercanos que también son familia: padres, hijos, etc… Un epílogo que, según<br /> avanza, se llena de emociones y de sorpresas para constituir, en su conjunto, una novela aparte,<br /> tan contundente y arrebatadora como la primera.',
                medio: 'Estado Crítico, España'
            },
            {
                cita: 'Goransky maneja el tiempo de un relato que apunta al ojo interno, a la introspección, a la abstracción misma. La<br /> mujer poco probable es un libro lleno de vida pese a la tragedia.',
                medio: 'Evaristo Cultural'
            },
            {
                cita: 'La prosa de Tatiana Goransky es delicada pero incisiva. Ya lo habíamos descubierto en sus obras anteriores.<br /> También es infrecuente, reflexiva y original; un aire vivo y refrescante en los tiempos que corren.',
                medio: 'Mercedes Giuffré'
            },
            {
                cita: 'La mujer poco probable proyecta una prosa ágil y verosímil, el libro no solo complace por la fluidez de sus ciclos,<br /> sino también por la prolijidad con la que autora ata el bucle trágico. Goransky, en este sentido, es sumamente<br /> hábil al exponer y al disimular la crisis amorosa de sus protagonistas, reiterándonos página a página que el<br /> destino, seamos conscientes o no de ello, es en realidad un extraordinario conjunto<br /> de escenarios muy poco probables.',
                medio: 'Panoptista, Estados Unidos'
            },
            {
                cita: 'Tatiana Goransky es una autora de prosa ágil, que dota a sus historias de gran ritmo y<br /> consigue atrapar al lector desde la primera página. Capítulos cortos, descripciones sugerentes y la justa dosis de<br /> diálogo son los elementos a partir de los cuales se asientan sus historias. En esta ocasión, vuelve sobre uno de los<br /> temas predilectos de su obra, la traición y sus consecuencias en forma de secretos y mentiras.<br />  La mujer poco probable es un libro ágil, provocador y por momentos, reflexivo. La obra se convierte en un relato<br /> notable sobre las decisiones que marcan nuestro devenir y los secretos que nos marcan como individuos.',
                medio: 'Fondo de Lectura, España'
            },
            {
                cita: 'Esta es una novela de personajes, ellos son la trama y la atmósfera; lo suponen todo. La autora traza fronteras tan<br /> difusas como realistas entre el amor y el desamor, con sus tiempos, que conllevan soledad, obsesión, violencia,<br /> desespero, felicidad fugaz o absoluta, y fantasía perpetua. Tatiana Goransky, dueña de<br /> su propio estilo que deriva en tsunami.',
                medio: 'Dentro del Monolito, España'
            }
        ],
        sinopsis: 'Martina y Leo celebran sus veinticinco años de casados con un viaje en busca de sus orígenes.<br /> Será un vuelo vertiginoso, crucial, que pondrá en peligro sus vidas y los empujará a examinar el pasado y el<br /> presente de su relación. Si estuviéramos a punto de morir, ¿cómo nos contaríamos nuestra propia historia?<br /> ¿Volveríamos a elegir a la persona que tenemos al lado? ¿Seríamos capaces de revelar nuestros secretos a los<br /> que más queremos? Y, sobre todo, ¿de qué nos arrepentiríamos? Una novela ágil y cautivadora que nos invita a<br /> reflexionar sobre las decisiones que construyen y condicionan nuestra vida.',
        links: [
            {
                titulo: 'Télam',
                link: 'https://www.telam.com.ar/notas/202010/529776-tatiana-goransky-libro.html'
            },
            {
                titulo: 'InfoBae',
                link: 'https://www.infobae.com/cultura/2020/09/18/la-mujer-poco-probable-un-triangulo-amoroso-y-un-avion-a-punto-de-caer/'
            },
            {
                titulo: 'La Nación',
                link: 'https://www.lanacion.com.ar/opinion/resena-la-mujer-poco-probable-de-tatiana-goransky-nid20032021/'
            },
            {
                titulo: 'Panoptista',
                link: 'http://www.panoptista.com/la-mujer-poco-probable-de-tatiana-goransky/'
            },
            {
                titulo: 'Dentro del Monolito',
                link: 'https://dentrodelmonolito.com/2021/08/ritual-roman-78-la-mujer-poco-probable.html'
            },
            {
                titulo: 'Moon Magazine',
                link: 'https://www.moonmagazine.info/la-mujer-poco-probable-tatiana-goransky/'
            },
            {
                titulo: 'Estado Crítico, España',
                link: 'http://www.criticoestado.es/secretos-de-familia/'
            }
        ],
        disponible: {
            papel: true,
            ebook: true,
            descarga: false
        },
        link_papel_AR: 'https://editorialelateneo.com.ar/detalle-libro.php?id_lib=904&amp;libro=La%20mujer%20poco%20probable',
        link_papel_ES: 'https://treshermanaslibros.com/libro/la-mujer-poco-probable/',
        link_ebook: 'https://play.google.com/store/info/name/Tatiana_Goransky?id=11mvwlgtx'
    },
    {
        id: 7,
        titulo: 'Quisiera amarte menos',
        imagen: [quisiera1, quisiera2],
        resenas: [
            {
                cita: 'Un libro que excita y abofetea, corto como polvo de zaguán, profundo como amor sellado a<br /> sangre y saliva, inmenso como nombre gritado en el duermevela.',
                medio: 'Revista de Letras, España'
            },
            {
                cita: 'Brutal, explícita, desaforada, en seis monólogos y una confesión la nouvelle “Quisiera amarte menos” cierra una<br /> trilogía involuntaria; una tragedia a la vera del policial que interpela la definición de femicidio.',
                medio: 'La Nación'
            },
            {
                cita: 'Tatiana Goransky explora con maestría los límites del deseo y las pasiones humanas.',
                medio: 'Revista Quimera, España'
            },
            {
                cita: 'Goransky exprime las posibilidades del relato coral para ofrecer a los lectores todas las aristas del drama: la pasión,<br /> los deseos, la lujuria, la locura, el fracaso. El resultado es esta estupenda nouvelle, debajo de cuya superficie tersa<br /> se retrata un verdadero cúmulo de miserias humanas.',
                medio: 'Revista Kundra'
            },
            {
                cita: 'La autora no usa eufemismos, llama a las cosas por su nombre, el sexo es explícito, el lenguaje directo, la única<br /> forma de que la escritura sea auténtica, emocione y nos haga reflexionar.',
                medio: 'Moon Magazine, España'
            },
            {
                cita: 'Siempre que leo un libro de Tatiana Goransky quedo maravillado de su sentido del ritmo, su capacidad por<br /> mantener la narración con habilidad y oficio. En poco más de cien páginas, construye un relato sobre el amor y sus<br /> complejas variaciones, creando un universo propio de personajes llenos de frustraciones,<br /> cansados de su destino y de naturaleza oscura.',
                medio: 'Fondo de Lectura, España'
            },
            {
                cita: 'La textura de la narrativa de Goransky nos transporta a un mundo cruel, intenso y extremadamente nítido donde<br /> toda la maquinaria literaria está puesta para que el lector encuentre, en estas voces, un eco: tal vez el de la<br /> sociedad, tal vez el del mundo íntimo de muchas mujeres, parejas y amantes.',
                medio: 'Somos Berlín, Alemania'
            },
            {
                cita: 'Tatiana Goransky escribe descarnado, sin zonas de descanso y al ritmo que exigen los encuentros sexuales<br /> (clandestinos, quizás) de zaguán. Un tono duro, al hueso y sin preámbulos podría conformar el mapa de atributos<br /> de Quisiera amarte menos, en una fina línea entre lo políticamente incorrecto y la apuesta por un relato erótico que<br /> por momentos encuentra destellos en la intención de correrse de los marcos<br /> habituales para pensar los vínculos entre amor, sexo y violencia.',
                medio: 'Página 12'
            }
        ],
        sinopsis: 'Detrás de un deseo, un cuerpo; detrás del cuerpo, un relato. Detrás del amor, en ocasiones, el odio. ¿Se puede<br /> amar sin conocer? ¿Cómo construimos al otro? ¿Hay alguna fuerza más poderosa que la del deseo? Julia, Clara,<br /> Juan, la Turca, Vera y Ricardo narran sus propias historias y al hacerlo cuentan las de los demás. Seis personajes<br /> enredados en una trama polifónica, violenta, amorosa, sexual.<br /> Con humor ácido e irreverencia, Tatiana Goransky construye una novela brutal y polémica que rompe con<br /> cualquier estereotipo sobre la sexualidad, y que muestra cuán fácilmente ese territorio de placer que es el<br /> cuerpo puede convertirse en un campo de batalla.',
        links: [
            {
                titulo: 'Revista Quimera',
                link: 'https://rileditores.com/quisiera-amarte-menos-resena-de-martin-lombardo-para-revista-quimera/'
            },
            {
                titulo: 'InfoBae',
                link: 'https://www.infobae.com/cultura/2021/11/17/tatiana-goransky-hace-anos-que-pienso-que-el-amor-es-mucho-mas-pornografico-que-el-sexo/'
            },
            {
                titulo: 'Zenda Libros',
                link: 'https://www.zendalibros.com/esta-dura-condena-de-amor/'
            },
            {
                titulo: 'Página 12',
                link: 'https://www.pagina12.com.ar/390813-quisiera-amarte-menos-breve-novela-erotica-de-tatiana-'
            },
            {
                titulo: 'Pliego Suelto',
                link: 'http://www.pliegosuelto.com/?p=29391'
            },
            {
                titulo: 'Revista Kundra',
                link: 'https://revistakundra.wordpress.com/2020/06/15/resena-goransky-vazquez/'
            },
            {
                titulo: 'Dentro del Monolito',
                link: 'https://dentrodelmonolito.com/2020/06/ritual-roman-xxix-quisiera-amarte-menos-tatiana-goransky.html'
            },
            {
                titulo: 'Moon Magazine',
                link: 'https://www.moonmagazine.info/quisiera-amarte-menos-tatiana-goransky-mil-caras-del-amor/'
            },
            {
                titulo: 'Fondo de Lectura',
                link: 'https://fondodelectura.wordpress.com/2021/01/03/quisiera-amarte-menos-de-tatiana-goransky/'
            },
            {
                titulo: 'Télam',
                link: 'https://www.telam.com.ar/notas/202108/564123-tatiana-goransky-quisiera-amarte-menos-novela.html'
            },
            {
                titulo: 'La Nación',
                link: 'https://www.lanacion.com.ar/cultura/tatiana-goransky-tabues-sexo-y-feminismo-nid21082021/'
            },
            {
                titulo: 'Libros Nocturnidad y Alevosía',
                link: 'https://librosnocturnidadyalevosia.com/tatiana-goransky-no-quiero-que-me-citen-para-ha'
            },
            {
                titulo: 'Grafógrafxs',
                link: 'http://grafografxs.uaemex.mx/?p=e_tatiana',
            },
            {
                titulo: 'Revista Grafógrafxs',
                link: 'http://grafografxs.uaemex.mx/vista/numeros/pdf/Grafografxs_5.pdf',
            }
        ],
        nota: {
            imagen: [notaquisiera]
        },
        disponible: {
            papel: true,
            ebook: true,
            descarga: false
        },
        link_papel_AR: 'https://www.galernaweb.com/productos/quisiera-amarte-menos-tatiana-goransky/',
        link_papel_ES: 'https://www.casadellibro.com/libro-quisiera-amarte-menos/9788418065101/11580502',
        link_ebook: 'https://play.google.com/store/info/name/Tatiana_Goransky?id=11mvwlgtx',
        english: true
    },
    {
        id: 8,
        titulo: 'Barcelona, Buenos Aires / Once mil kilómetros',
        imagen: [barcelona1, barcelona2],
        resenas: [
            {
                cita: 'Este libro no es una guía turística ni un ejercicio de literatura comparada. Es la bitácora de un viaje de ida y vuelta<br /> ―once mil kilómetros, veintidós escritores, mil kilómetros por escritor―; un inventario de lo que dejamos atrás<br /> cuando emigramos, el deber y haber de lo que dejamos de ser y de aquello en lo que nos convertimos, porteños y<br /> barceloneses en tránsito perpetuo. Es también la descripción alucinada, más cerca del sueño que del costumbrismo,<br /> de dos ciudades que se escriben cartas de presentación. La sospecha de que la ciudad que se imagina, sin haber<br /> pisado sus calles, no es tan distinta de aquella que se reconstruye desde la añoranza. Una herida que florece.',
                medio: 'Juan Pablo Villalobos'
            }
        ],
        sinopsis: 'La Reina del Plata y la Ciudad Condal están hermanadas por la humedad, que en verano sofoca y en invierno cala <br /> hasta los huesos. Por las oleadas migratorias, que les dan a ambas ciudades un carácter inquieto, temerario y<br /> audaz. Y por su grandiosa tradición literaria.<br /> Quizás no haya en el mundo otras dos urbes tan alejadas en lo geográfico y tan unidas en lo cultural como Barcelona<br /> y Buenos Aires. Esos once mil kilómetros se trazan y desaparecen en los veintidós cuentos de este<br /> volumen, narraciones escritas por celebrados autores y autoras que residen a ambos lados del charco, voces<br /> contemporáneas que ofrecen su singular visión sobre las ciudades de Pepe Carvalho y La plaza del Diamante o de<br /> Emilio Renzi y El Aleph. Paseo de Gracia se cruza con la Nueve de Julio, la Rambla termina en Plaza de Mayo, y lo<br /> fantástico, lo procaz, lo furibundo, lo amoroso, lo entrañable y lo melancólico confluyen en<br /> este mismo punto mágico donde las distancias se borran.',
        links: [
            {
                titulo: 'Télam',
                link: 'https://www.telam.com.ar/notas/201903/342018-feria-del-libro-barcelona.html'
            },
            {
                titulo: 'InfoBae',
                link: ' https://www.infobae.com/grandes-libros/2019/04/27/un-puente-literario-une-barcelona-y-buenos-aires/'
            },
            {
                titulo: 'Pliego Suelto',
                link: ' http://www.pliegosuelto.com/?p=27303'
            },
        ],
        disponible: {
            papel: true,
            ebook: false,
            descarga: false
        },
        link_papel_AR: 'https://listado.mercadolibre.com.ar/libros-revistas-comics/libros-fisicos/libros-goransky_NoIndex_True',
        link_papel_ES: 'https://trampaediciones.com/catalogo/barcelona-buenos-aires/'
    },
    {
        id: 9,
        titulo: 'Revista los Bárbaros (Edición Noir)',
        imagen: [barbaros],
        resenas: [
            {
                cita: 'En Los Bárbaros cada uno de los estilos de estos 43 cuentos marcan el paso de una narrativa sólida y elocuente,<br /> que converge entre los márgenes más oscuros y los más cálidos de un género que —por su versatilidad— emerge<br /> desde las cenizas más violentas, más oscuras y sórdidas y, justamente, por eso atrapa.',
                medio: 'Somos Berlin, Alemania'
            }
        ],
        links: [
            {
                titulo: 'Propera Parada Cultura',
                link: 'http://properaparadacultura.blogspot.com/2019/02/entrevista-tatiana-goransky.html'
            },
            {
                titulo: 'InfoBae',
                link: ' https://www.infobae.com/grandes-libros/2018/10/30/43-historias-negras-sobre-nueva-york/'
            },
            {
                titulo: 'Somos Berlin',
                link: 'https://somos.berlin/2019/05/07/los-barbaros/'
            },
        ]
    },
    {
        id: 10,
        titulo: 'Los impecables',
        imagen: [impecables],
        sinopsis: 'Un ball boy de veinte años que sueña con Roger Federer y dos hermanos con un extraño don buscando tesoros en<br /> alta mar, Los impecables se construye sobre la intriga en torno a sus protagonistas. El joven Manuel, encerrado en<br /> una rutina segura y reconfortante, se ve amenazado por una compañera más joven con la que rivaliza para ir al<br /> Roland Garros, mientras Juan y Abel, dos hermanos a la caza de tesoros perdidos, experimentan frente a su<br /> tripulación la peligrosidad de las aguas, sin que los meses traigan la ansiada recompensa. “Esta historia<br /> no puede escribirse con un solo registro, de una sola manera. Tatiana Goransky se vale del discurso de investigación,<br /> de la magia difusa de las fábulas o de la precisión antropológica”, destaca Martín Kohan. Un libro «atravesado no<br /> sólo por la tragedia, sino por una serie de lenguajes y discursos que lo agrandan y lo convierten en una historia<br /> emocionante», en palabras de Ezequiel Acuña. Ya sea en el agua o sobre polvo de ladrillo, el terreno en que se mueve<br /> los impecables es uno minado de obsesiones y rivalidades que dan lugar una y otra vez a situaciones límite.',
        links: [
            {
                titulo: 'El Mundo',
                link: 'https://www.elmundo.es/cultura/2016/07/11/5783afec468aeb207d8b45b5.html'
            },
            {
                titulo: 'Diario de Cultura',
                link: 'https://www.diariodecultura.com.ar/columnas/bajo-el-karma-de-la-perfeccion/'
            },
            {
                titulo: 'La Vanguardia',
                link: ' https://www.editorialcomba.com/wp-content/uploads/2020/07/Los-imopecables-por-Flavia-.jpeg'
            },
        ],
        disponible: {
            papel: true,
            ebook: false,
            descarga: false
        },
        link_papel_ES: 'https://editorialcomba.com/libros/narrativa/los-impecables/',
        prologo: true,
    }
]

export default librosMock;