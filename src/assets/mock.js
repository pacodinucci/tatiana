import lulupe1 from './libro1.png';
import cantante1 from './libro2.png';
import cantante2 from './libro2b.png';
import cantante3 from './libro2c.png';
import cantante4 from './libro2d.png';
import agua1 from './dondelagua.png';
import ballboy from './ballboy.png';
import fadeout1 from './libro6.png';
import fadeout2 from './fadeout.png';
import mujer from './mujerpocoprobable.png';
import quisiera1 from './quisieraamartemenos.png';
import quisiera2 from './quisieraamartemenos2.png';

const librosMock = [
    {
        id: 1,
        titulo: 'Lulúpe María T.',
        imagen: [lulupe1],
        resenas: [
            {
                cita: '“Nada parecido en el mundo literario como para establecer comparaciones y, por eso mismo un libro recomandable”.',
                medio: 'Rolling Stone'
            },
            {
                cita: '“Lulúpe María T es una rareza en la nueva narrativa argentina digna de destacar”.',
                medio: 'Rayando los Confines.'
            },
            {
                cita: '“La historia de Lulúpe está narrada en la antigua tradición de la novela de aprendizaje que, con un sutil cruce con el género erótico, crea una deforme y seductora prosa”.',
                medio: 'Radar Libros, Página 12.'
            },
            {
                cita: '“Primera obra de esta prometedora escritora novel, esta excelente fábula sin moraleja sobre los deseos –en tanto sexuales y como anhelos-, no hace más que demostrarnos la pobreza de nuestros mundos interiores y de nuestras lúgubres comarcas”.',
                medio: 'Hernan Sassi'
            },
            {
                cita: '“En el saturado pero alegre universo de Lulúpe María T., tanto el personaje como la novela seducen desde una ingenuidad maliciosa, polimorfa, no exenta de inteligencia, ambigua y atractiva en su ambigüedad”.',
                medio: 'Suplemento Cultura, Diario Perfil'
            }
        ],
        sinopsis: 'En el comienzo el planteo narrativo parece simple: el libro promete la vida de Lulú en cálidas viñetas y un humor ligero sin excluir alguna que otra cuota de violencia. Rápidamente, sin embargo, Tatiana Goransky enrarece forma y contenido haciéndolos dialogar y fusionarse. Lulú, después de un trágico inicio sexual y habiendo probado el mecanismo de la venganza, emprenderá un viaje arbitrario que se repetirá en paralelo con la persecución de Benito, su atípico pretendiente. Mientras tanto la promesa de un avance cronológico en la vida de Lulú empezara resquebrajarse para luego simplemente estallar.',
        links: [
            {
                titulo: 'Rayando los Confines',
                link: 'http://rayandolosconfines.com/critica_sexyfant.html'
            },
            {
                titulo: 'Página 12',
                link: 'https://www.pagina12.com.ar/diario/suplementos/libros/10-2017-2006-04- 04.html'
            },
            {
                titulo: 'El remisero Absoluto',
                link: 'http://elremiseroabsoluto.blogspot.com.ar/2006/02/diferentes-matices-del-rojo.html'
            }
        ]
    },
    {
        id: 2,
        titulo: '¿Quién mató a la cantante de jazz?',
        imagen: [cantante1, cantante2, cantante3, cantante4],
        resenas: [
            {
                cita: '“¿Quién mató a la Cantante de Jazz? es un libro inspirado, inteligente y divertido Goransky inventó el policial jazzero, un género que es, sobre todo lo demás, el mapa de una pasión”.',
                medio: 'Gabriela Cabezón Cáamara.'
            },
            {
                cita: '“Una novela enorme a pesar de su breve extensión”.',
                medio: 'Revista Culturamas, España.'
            },
            {
                cita: '“…la lógica del mundo que presenta Goransky es una lógica musical y no discursiva. Plagada de variaciones, citas encubiertas, melodías que se repiten y, sobre todo, ritmo”.',
                medio: 'Página 12'
            },
            {
                cita: '“Como juego cortazariano, la brevísima novela de Tatiana Goransky se lee como se bebe un buen whisky, paladeándolo; va de atrás a adelante y, libérrima, pasa de la primera persona a la tercera, sin perder en ningún momento su ritmo, como una buena pieza de jazz, anárquica pero con un melodía interna”.',
                medio: 'José Luis Muñoz, Letralia. España.'
            },
            {
                cita: '“¿Quién mató a la Cantante de Jazz?  y los otros libros de Tatiana Goransky operan por transgresión. Cuestionan las formas de escritura y las formas del relato, manteniendo una mirada aguda y a la vez perpleja de la sociedad argentina. La propuesta es desafiante y de talla: reflexionar sobre la ficción y sus formas, sobre sus implicancias tanto locales como universales, interrogarse acerca de los lazos entre la realidad y la escritura. Goransky promueve el desafío, las formas elípticas, barrocas, espiraladas. Escoge el zapping y la fragmentación como forma narrativa, pero construye historias sólidas y provocadoras, historias de vida –marcadas por los grandes mitos populares, el deporte, el jazz, el sueño del viaje a Europa-, grandes y diminutas, historias de todos los días. Las que se encuentran a cada vuelta de página, sorprendentes”.',
                medio: 'Néstor Ponce, Variaciones sobre una historia policial. Acerca de “¿Quién mató a la cantante de jazz?” (2008) de Tatiana Goransky. Hispanistes. Francia.'
            }
        ],
        sinopsis: 'La Cantante de Jazz ha muerto, y no de muerte natural. Su asesinato le dará vida. Acrecentará su fama, la convertirá en amante de todos los hombres que la escucharon cantar. Sus temas inéditos serán tesoros, y las anécdotas de sus conciertos se magnificarán hasta convertirla en mito. Su partida, también, sacará del letargo a un viejo músico que encerró su mejor nota en una caja para convertirse en el investigador de este caso. Martínez, el policía, hará su lista de sospechosos seguro de una cosa: si hubiesen matado a un bandoneonista, en una semana tendrían al culpable engayolado, pero como la víctima es una intérprete de ”música tan poco ciudadana”, la realidad es otra. Esta es la introducción a la novela en papel, pero Tatiana Goransky cuenta otra historia que transciende el formato y genera la necesidad de leer su texto escuchando jazz. Goransky, con voz de cantante y pulso de escritora, maneja con soltura los dos mundos, nos dice qué música leer y qué historia escuchar con el tono, la luz y la precisión que el relato necesita.',
        links: [
            {
                titulo: 'El Mundo, España.',
                link: 'http://www.elmundo.es/cultura/2015/08/11/55c8d5af46163f0a688b458e.html'
            },
            {
                titulo: 'Rumbo Sur TV',
                link: 'https://www.youtube.com/watch?v=_4Hvfn-1KDE'
            },
            {
                titulo: 'Periodista Digital',
                link: 'https://www.youtube.com/watch?v=SgxdOixi_Xs'
            },
            {
                titulo: 'Página 12',
                link: 'https://www.pagina12.com.ar/diario/suplementos/las12/13-4261-2008-07-19.html'
            },
            {
                titulo: 'Cierta Distancia Blog',
                link: 'http://ciertadistancia.blogspot.com.ar/2015_10_01_archive.html'
            },
            {
                titulo: 'Letralia',
                link: 'https://letralia.com/lecturas/2016/04/16/quien-mato-a-la-cantante-de-jazz-de-tatiana-goransky/'
            },
            {
                titulo: 'Cultura Más, España.',
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
                titulo: 'Jordi Valero Interrobang',
                link: 'http://jordivalerointerrobang.blogspot.com.ar/2015/04/quien-mato-la-cantante-de-jazz-de.html'
            },
            {
                titulo: 'El Mono Lector',
                link: 'http://elmonolector.blogspot.com.ar/2013/07/quien-mato-la-cantante-de- jazz.html#.WlZH1pQZNt0'
            },
            {
                titulo: 'La Soledad del Corredor de Fondo Blog',
                link: 'http://lasoledaddelcorredordefondo.blogspot.com.ar/2015/02/literatura_21.html?m=0'
            },
            {
                titulo: 'Hispanistes, Francia.',
                link: 'http://www.hispanistes.org/index.php/component/booklibrary/11718/view_bl/5/chapitre -d-ouvrage/12501/variaciones-sobre-una-historia-policial-acerca-de-quien-mato-a-la- cantante-de-jazz-2008-de-tatiana- goransky?tab=getmybooksTab&amp;is_show_data=1&amp;Itemid=11718 https://www.senalc.com/2020/03/01/scats-y-musica-de-trompeta-en-el-campo-de-batalla-quien-mato-a-la-cantante-de-jazz-de-tatiana-goransky/'
            },
            {
                titulo: 'Editorial Universitaria, México.',
                link: 'http://editorialuniversitaria.uanl.mx/index.php/2019/10/07/tatiana-goransky-cantante-de-jazz/'
            }
        ]
    },
    {
        id: 3,
        titulo: 'Don del agua',
        imagen: [agua1],
        resenas: [
            {
                cita: '“La historia de Don del agua no puede escribirse con un solo registro, de una sola manera. Tatiana Goransky se vale para narrarla de los diarios de viaje o de las novelas de enigma; del discurso de investigación del periodismo, de la magia difusa de las fábulas o de la precisión racional de los estudios antropológicos. Las supersticiones y los métodos conviven y se disputan en una historia que transcurre tanto en la realidad reconocible como en el mundo fantástico de los tesoros escondidos. Porque lo narrado se multiplica en las formas de narrar y la literatura al fin de cuentas es lo único que importa”.',
                medio : 'Martín Kohan'
            },
            {
                cita: '“La cristalina fluidez de la prosa de Goransky y el estilo impecable invita a pensar en autores como Marcelo Cohen o César Aira”.',
                medio: 'El Mundo, España'
            },
            {
                cita: '“El tempo, el manejo de la cadencia, las estructuras que dan lugar a los solos, los silencios y los textos corales se entretejen armando melodías y estructuras narrativas, claro ejemplo de escribir explorando el mundo como si se desentrañara parte de su misteriosa partitura”.',
                medio: 'Diario de Girona, España.'
            },
            {
                cita: '“Antes que nada, Don del agua es una novela de aventuras, con todas las letras como pide el pueblo y escasea últimamente, como si la más mínima gota de realismo desencadenara, necesariamente, el gobierno absoluto de la verosimilitud y el aburrimiento. Acá, sin embargo, hay bastante de maravilloso, pero de la mejor tradición, la de los cuentos juveniles entre la fantasía y el terror, aunque dejarla en ese lugar sería encasillar una novela que tiene mucho más para dar, sobre todo porque está atravesada no sólo por la tragedia, esa mezcla de destino divino y maldición humana, sino por una serie de lenguajes y discursos que suman, la agrandan y la convierten en una historia emocionante”.',
                medio: 'Página 12, Argentina'
            },
            {
                cita: '“Don del agua es una novela hermosa. Húmeda por donde se la lea. Tiene palabras que conjuran el aburrimiento: rabdomante y zahorí. Aunque Don del agua podría ser la historia de un barco, de una familia o del mar, es la historia de dos hermanos, de uno que tenía buena suerte y de otro que necesitaba ser supersticioso”.',
                medio: 'Sebastián Chilano'
            }
        ],
        sinopsis: 'Don del agua narra la historia de una saga maldita, la de un rabdomante albino y sus dos hijos varones: un capitán de barco empecinado en dominar la respiración subacuática y un buzo obsesionadopor encontrar un tesoro imposible. La autora entreteje con maestría varios registros discursivos que van desde la novela de misterio y el cuaderno de bitácora, hasta la crónica periodística y el género fantástico. Situadas entre la física y la superstición, estas páginas se expanden con pulso firme y certero. Goransky traza un universo masculino de conquistadores acuáticos que se valen de todo para tener el don del agua.',
        links: [
            {
                titulo: 'Página 12, Argentina',
                link: 'https://www.pagina12.com.ar/diario/suplementos/libros/10-4201-2011-03-13.html'
            },
            {
                titulo: 'Golosina Canibal Blog',
                link: 'http://golosinacanibal.blogspot.com.ar/2010/11/presentacion-don-del-agua-de- tatiana.html'
            },
            {
                titulo: 'InfoBae, Argentina',
                link: 'https://www.infobae.com/grandes-libros/2018/08/23/una-novela-que-reflexiona-sobre- los-usos-del-agua/'
            },
            {
               titulo: 'Revista Kundura',
               link: 'https://revistakundra.wordpress.com/2018/09/13/resena-don-del-agua-de-tatiana- goransky/' 
            },
            {
                titulo: 'Solo Tempestad',
                link: 'http://www.solotempestad.com/goranskyxvidal/'
            }
        ]
    },
    {
        id: 4,
        titulo: 'Ball Boy',
        imagen: [ballboy],
        resenas: [
            {
                cita: '“A lo largo de los diecisiete días que atraviesa esta crónica imaginaria, acompañando los avatares del Roland Garros del 2009 y compartiendo paso a paso, con el lector, el descenso al infierno de Manuel, Tatiana Goransky nos muestra –con un implacable sentido de la disposición narrativa y un dominio absoluto del desarrollo argumental– lo que sucede cuando colapsa el mundo de un obsesivo.”',
                medio: 'Revista Kundra'
            },
            {
                cita: '“Con la publicación de esta nouvelle Tatiana Goransky reafirma que es una de las escritoras más originales de la narrativa latinoamericana actual. Llena de sorpresas inquietantes y de un humorismo que se baña en lo perturbador, Ball boy es sin duda un sitcom malvado y una dislocación de las expectativas más tradicionales, donde la frase «Piensen tenis» se repite constantemente como si no hubiera otra forma de vivir en el mundo concreto”.',
                medio: 'Suburbano, Estados Unidos.'
            },
            {
                cita: '“Un relato hiperrealista, sincopado y seco, que se mueve a la velocidad de la pelota en un match de Grand Slam”.',
                medio: 'El Mundo, España.'
            },
            {
                cita: '“Ball boy de Tatiana Goransky es una muestra de cómo contar, en pocas páginas, una efectiva historia de obsesiones en un clima trágico-apocalíptico, sin perder de vista la trama y evitando el costumbrismo.”',
                medio: 'Golosina Canibal'
            }
        ],
        sinopsis: 'Todos los viernes a la noche desde hace dos meses y medio Manuel sueña con Federer. Federer va 5-3 arriba 40-30 en el último set de la final del Roland Garros. Manuel le alcanza una pelota para el saque. Federer sirve a la derecha con slice, el saque es afortunado. Ace... Manuel nunca quiso ser tenista. “Tenista puede ser cualquiera”, pero “para ser el mejor ball boy hay que dejar el ego de lado y convertirse en un ser invisible e impecable”, ésas son sus máximas. La historia de Manuel, una suerte de negativo fotográfico del Bartleby el escribiente de Melville, que prefiere hacerlo mejor, siempre mejor, y por eso sustituye la competición deportiva por el tardío oficio de recogepelotas, porque ese humilde arte sí le permitiría acaso alcanzar la perfección. Una historia que, conviene decirlo, su autora, Tatiana Goransky, resuelve con la contundencia y la eficacia de un jugador de Grand Slam.',
        links: [
            {
                titulo: 'Suburbano',
                link: 'http://suburbano.net/piensen-tenis-ball-boy-tragedia-en-polvo-de-ladrillo/'
            },
            {
                titulo: 'Golosina Canibal Blog',
                link: 'http://golosinacanibal.blogspot.com.ar/2013/12/polvo-de-estrellas-sobre-boy-de- tatiana.html'
            },
            {
                titulo: 'Revista Kundra',
                link: 'https://revistakundra.wordpress.com/2014/04/30/ball-boy-tg/'
            }
        ]
    },
    {
        id: 5,
        titulo: 'Fade Out',
        imagen: [fadeout1, fadeout2],
        resenas: [
            {
                cita: '“…el estilo de Goransky es delicado, meticuloso, pero a la vez se amolda a los distintos narradores y personajes construyendo situaciones que pueden llegar a ser desopilantes. Una vez más, la pluma de esta escritora atrapa al (la) lector(a) como una telaraña tejida con encanto y sutileza, y al terminar el libro él o ella sentirán un vacío, un silencio (un fade out) que perdurará por días.”',
                medio: 'El país de la bruma'
            },
            {
                cita: '“…para Goransky el pudor es todo un tema, es complejo, hasta el punto de terminar el libro con una suerte de reflexiones sobre la traición que supone escribir, un acto en el que conjuramos toda nuestra memoria. Pero el pudor no es lo mismo que la confidencialidad. Y de esa línea difusa, permeable, incómoda y musical, trata esta bella novela que nos trae, una vez más, un descubrimiento desde el otro lado del Atlántico.”',
                medio: 'Cultura Más, España.'
            },
            {
                cita: '“En estos tiempos de música descartable y libros insensibles, la escritora y cantante de jazz Tatiana Goransky presenta Fade out, una novela que expone el universo femenino desde canciones que atraviesan a la protagonista, Kumiku, una mujer que nació con el don/maldición de emitir durante las 24 horas temas desde sus oídos. Las páginas de Fade out pasan con una sonoridad tan particular, uno agarra con dos dedos la hoja y la pasa, apurado para saber qué sucederá luego, pero disfrutando a la vez el momento, ese ritual tan particular que se genera con una novela que conmueve mientras uno en la mente procesa las palabras y busca en la banda de sonido de la vida las canciones que emite Kumiku, los tangos de Renata y ese fade out  entre los temas, el silencio, que tanta falta nos hace a todos en estos días”.',
                medio: 'Dentro del Monolito, España.'
            }
        ],
        sinopsis: 'Desde su nacimiento los oídos de Kumiku emiten música. «Vino al mundo con el poder del sonido, con la habilidad de producir ondas melódicas y rítmicas. Kumiku nació cajita de música infinita.» También su hija Renata, y de distinta forma Ester, la nieta, en una línea genética que Tatiana Goransky narra a partir de diarios íntimos y de ambiguas observaciones de un negro literario. Temas de Caetano Veloso, Stevie Wonder o Charly García, entre otros, dan el tono a las páginas de Fade out, apasionante novela en que tres generaciones de mujeres trazan su vida a través de la música y la búsqueda del silencio. El amor es una constante también que las protagonistas habrán de resolver entre las ciudades de Buenos Aires, San Juan y Barcelona. Fade out estuvo nominada a la Mejor Novela Argentina del año 2016.',
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
                link: 'https://revistakundra.wordpress.com/2016/12/05/resena-fade-out-de-tatiana-goransky-por-luis-alexis-leiva/ http://quedigital.com.ar/cultura/fade-la-busqueda-de-ese-lujo-llamado-silencio/'
            },
            {
                titulo: 'Revista Colofon',
                link: 'http://revistacolofon.com.ar/tatiana-goransky-no-podria-posponer-la-escritura-hasta- encontrar-el-verdadero-silencio-sino-no-escribiria-casi-nunca/'
            },
            {
                titulo: 'El País de la Bruma',
                link: 'https://elpaisdelabruma.blogspot.com/2018/06/fade-out.html'
            },
            {
                titulo: 'La Fábrica',
                link: 'https://www.lafabrica.com/festivalene/actualidad/fade-out-de-tatiana-goransky-una-lectura-de-franco-chiaravalloti/'
            }
        ]
    },
    {
        id: 6,
        titulo: 'La mujer poco probable',
        imagen: [mujer],
        resenas: [
            {
                cita: '“Goransky consigue imprimir realidad a sus personajes con una narrativa reflexiva, serena y pausada, alejada de estridencias, demostrando que la sencillez y la sensibilidad son las mejores armas de la autora. Una novela breve, potente, que demuestra el talento de Goransky para conmovernos una vez más”.',
                medio: 'Moon Magazine, España.'
            },
            {
                cita: '“La obra podría haberse dado por concluida con las cien primeras páginas y hubiera quedado una contundente novela breve. Sin embargo, la autora va más allá y añade un “Epílogo familiar” que bien podría haberse titulado “Daños colaterales” y en el que aborda las consecuencias de esa relación a tres que supone el argumento principal y en cómo afectan a los seres más cercanos que también son familia: padres, hijos, etc… Un epílogo que, según avanza, se llena de emociones y de sorpresas para constituir, en su conjunto, una novela aparte, tan contundente y arrebatadora como la primera”.',
                medio: 'Estado Crítico, España.'
            },
            {
                cita: '“Goransky maneja el tiempo de un relato que apunta al ojo interno, a la introspección, a la abstracción misma. La mujer poco probable es un libro lleno de vida pese a la tragedia”.',
                medio: 'Evaristo Cultural'
            },
            {
                cita: '“La prosa de Tatiana Goransky es delicada pero incisiva. Ya lo habíamos descubierto en sus obras anteriores. También es infrecuente, reflexiva y original; un aire vivo y refrescante en los tiempos que corren”.',
                medio: 'Mercedes Giuffré'
            },
            {
                cita: '“La mujer poco probable proyecta una prosa ágil y verosímil, el libro no solo complace por la fluidez de sus ciclos, sino también por la prolijidad con la que autora ata el bucle trágico. Goransky, en este sentido, es sumamente hábil al exponer y al disimular la crisis amorosa de sus protagonistas, reiterándonos página a página que el destino, seamos conscientes o no de ello, es en realidad un extraordinario conjunto de escenarios muy poco probables”.',
                medio: 'Panoptista, Estados Unidos.'
            },
            {
                cita: '“Tatiana Goransky es una autora de prosa ágil, que dota a sus historias de gran ritmo y consigue atrapar al lector desde la primera página. Capítulos cortos, descripciones sugerentes y la justa dosis de diálogo son los elementos a partir de los cuales se asientan sus historias. En esta ocasión, vuelve sobre uno de los temas predilectos de su obra, la traición y sus consecuencias en forma de secretos y mentiras.  La mujer poco probable es un libro ágil, provocador y por momentos, reflexivo. La obra se convierte en un relato notable sobre las decisiones que marcan nuestro devenir y los secretos que nos marcan como individuos”.',
                medio: 'Fondo de Lectura, España.'
            },
            {
                cita: '“Esta es una novela de personajes, ellos son la trama y la atmósfera; lo suponen todo. La autora traza fronteras tan difusas como realistas entre el amor y el desamor, con sus tiempos, que conllevan soledad, obsesión, violencia, desespero, felicidad fugaz o absoluta, y fantasía perpetua. Tatiana Goransky, dueña de su propio estilo que deriva en tsunami”.',
                medio: 'Dentro del Monolito, España.'
            }
        ],
        sinopsis: 'Martina y Leo celebran sus veinticinco años de casados con un viaje en busca de sus orígenes. Será un vuelo vertiginoso, crucial, que pondrá en peligro sus vidas y los empujará a examinar el pasado y el presente de su relación. Si estuviéramos a punto de morir, ¿cómo nos contaríamos nuestra propia historia? ¿Volveríamos a elegir a la persona que tenemos al lado? ¿Seríamos capaces de revelar nuestros secretos a los que más queremos? Y, sobre todo, ¿de qué nos arrepentiríamos? Una novela ágil y cautivadora que nos invita a reflexionar sobre las decisiones que construyen y condicionan nuestra vida.',
        links: [
            {
                titulo: 'Radio Mitre',
                link: 'https://www.youtube.com/watch?v=TMektL4sP5Y'
            },
            {
                titulo: 'Editorial Ateneo',
                link: 'https://www.instagram.com/tv/CDFKBCpF6-I/?igshid=1g29qe76p6q6d'
            },
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
                titulo: 'El País de la Bruma',
                link: 'https://elpaisdelabruma.blogspot.com/2021/04/la-mujer-poco-probable.html'
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
                titulo: 'Critico Estado, España',
                link: 'http://www.criticoestado.es/secretos-de-familia/'
            }
        ]
    },
    {
        id: 7,
        titulo: 'Quisiera amarte menos',
        imagen: [quisiera1, quisiera2],
        resenas: [
            {
                cita: '“Un libro que excita y abofetea, corto como polvo de zaguán, profundo como amor sellado a sangre y saliva, inmenso como nombre gritado en el duermevela”.',
                medio: 'Revista de Letras, España.'
            },
            {
                cita: '“Brutal, explícita, desaforada, en seis monólogos y una confesión la nouvelle “Quisiera amarte menos” cierra una trilogía involuntaria; una tragedia a la vera del policial que interpela la definición de femicidio”.',
                medio: 'La Nación, Argentina.'
            },
            {
                cita: '“Tatiana Goransky explora con maestría los límites del deseo y las pasiones humanas”.',
                medio: 'Revista Quimera, España.'
            },
            {
                cita: '“Goransky exprime las posibilidades del relato coral para ofrecer a los lectores todas las aristas del drama: la pasión, los deseos, la lujuria, la locura, el fracaso. El resultado es esta estupenda nouvelle, debajo de cuya superficie tersa se retrata un verdadero cúmulo de miserias humanas”.',
                medio: 'Revista Kundra'
            },
            {
                cita: '“La autora no usa eufemismos, llama a las cosas por su nombre, el sexo es explícito, el lenguaje directo, la única forma de que la escritura sea auténtica, emocione y nos haga reflexionar”.',
                medio: 'Moon Magazine'
            },
            {
                cita: '“Siempre que leo un libro de Tatiana Goransky quedo maravillado de su sentido del ritmo, su capacidad por mantener la narración con habilidad y oficio. En poco más de cien páginas, construye un relato sobre el amor y sus complejas variaciones, creando un universo propio de personajes llenos de frustraciones, cansados de su destino y de naturaleza oscura”.',
                medio: 'Fondo de Lectura, España.'
            },
            {
                cita: '“La textura de la narrativa de Goransky nos transporta a un mundo cruel, intenso y extremadamente nítido donde toda la maquinaria literaria está puesta para que el lector encuentre, en estas voces, un eco: tal vez el de la sociedad, tal vez el del mundo íntimo de muchas mujeres, parejas y amantes”.',
                medio: 'Somos Berlín, Alemania.'
            },
            {
                cita: '“Tatiana Goransky escribe descarnado, sin zonas de descanso y al ritmo que exigen los encuentros sexuales (clandestinos, quizás) de zaguán. Un tono duro, al hueso y sin preámbulos podría conformar el mapa de atributos de Quisiera amarte menos, en una fina línea entre lo políticamente incorrecto y la apuesta por un relato erótico que por momentos encuentra destellos en la intención de correrse de los marcos habituales para pensar los vínculos entre amor, sexo y violencia.”',
                medio: 'Página 12, Argentina.'
            }
        ],
        sinopsis: 'Detrás de un deseo, un cuerpo; detrás del cuerpo, un relato. Detrás del amor, en ocasiones, el odio. ¿Se puede amar sin conocer? ¿Cómo construimos al otro? ¿Hay alguna fuerza más poderosa que la del deseo? Julia, Clara, Juan, la Turca, Vera y Ricardo narran sus propias historias y al hacerlo cuentan las de los demás. Seis personajes enredados en una trama polifónica, violenta, amorosa, sexual. Con humor ácido e irreverencia, Tatiana Goransky construye una novela brutal y polémica que rompe con cualquier estereotipo sobre la sexualidad, y que muestra cuán fácilmente ese territorio de placer que es el cuerpo puede convertirse en un campo de batalla.',
        links: [
            {
                titulo: 'Ril Editores',
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
                link: ' https://revistakundra.com/2020/06/15/resena-goransky-vazquez/'
            },
            {
                titulo: 'Dentro del Monolito',
                link: 'https://dentrodelmonolito.com/2020/06/ritual-roman-xxix-quisiera-amarte-menos-tatiana-goransky.html'
            },
            {
                titulo: 'Moon Magazine',
                link: 'https://www.moonmagazine.info/quisiera-amarte-menos-tatiana-goransky-mil-caras- del-amor/'
            },
            {
                titulo: 'Rumiar La Bibloteca Blog',
                link: 'http://rumiarlabiblioteca.blogspot.com/2020/06/tatiana-goransky-o-como-amarte- menos.html https://revistadeletras.net/goransky-el-cuerpo-ajeno-territorio-de-guerra-o-de-deseo/'
            },
            {
                titulo: 'Viceversa Noticias',
                link: 'http://viceversanoticias.com/2020/09/12/grafografxs-en-vcv-5/'
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
                titulo: 'Grafografxs',
                link: 'http://grafografxs.uaemex.mx/?p=e_tatiana',
            },
            {
                titulo: 'Grafografxs',
                link: 'http://grafografxs.uaemex.mx/vista/numeros/pdf/Grafografxs_5.pdf',
            }
        ]
    }
]

export default librosMock;