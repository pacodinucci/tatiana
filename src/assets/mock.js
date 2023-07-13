import lulupe1 from './libro1.png';
import cantante1 from './libro2.png';
import cantante2 from './libro2b.png';
import cantante3 from './libro2c.png';
import cantante4 from './libro2d.png';

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
        sinopsis: 'La Cantante de Jazz ha muerto, y no de muerte natural. Su asesinato le dará vida. Acrecentará su fama, la convertirá en amante de todos los hombres que la escucharon cantar. Sus temas inéditos serán tesoros, y las anécdotas de sus conciertos se magnificarán hasta convertirla en mito. Su partida, también, sacará del letargo a un viejo músico que encerró su mejor nota en una caja para convertirse en el investigador de este caso. Martínez, el policía, hará su lista de sospechosos seguro de una cosa: si hubiesen matado a un bandoneonista, en una semana tendrían al culpable engayolado, pero como la víctima es una intérprete de ”música tan poco ciudadana”, la realidad es otra. Esta es la introducción a la novela en papel, pero Tatiana Goransky cuenta otra historia que transciende el formato y genera la necesidad de leer su texto escuchando jazz. Goransky, con voz de cantante y pulso de escritora, maneja con soltura los dos mundos, nos dice qué música leer y qué historia escuchar con el tono, la luz y la precisión que el relato necesita.'
    }
]

export default librosMock;