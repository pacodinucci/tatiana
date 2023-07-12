import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import styles from '../styles/Libro.module.css';
import NavBar from './NavBar';
import imagenPortada from '../assets/libro1.png';
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';

function Libro() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  // useEffect(() => {
  //   // Realiza la petición HTTP para obtener los datos del libro según el ID
  //   axios.get(`ruta-a-tu-api/libros/${id}`)
  //     .then(response => {
  //       setLibro(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener los datos del libro:', error);
  //     });
  // }, [id]);

  // if (!libro) {
  //   return <div>Cargando...</div>;
  // }

  return (
    <div className={styles.detalles_container}>
      <NavBar/>
      <div className={styles.detalles_content}>
        <div className={styles.detalles_principal}>
          <div className={styles.detalles_titulo}>
              <h2>LULÚPE MARÍA T.</h2>
          </div>
          <div className={styles.detalles_imagen}>
            <img src={imagenPortada} alt="" />
          </div>
        </div>
        <div className={styles.detalles_resenas}>
            <div className={styles.detalles_textos}>
              <div className={styles.resena}>
                  <p>“Nada parecido en el mundo literario como para establecer comparaciones y, por eso mismo, un libro recomendable”.</p>
                  <h3>Rolling Stone</h3>
              </div>
              <div className={styles.resena}>
                <p>“Lulúpe María T es una rareza en la nueva narrativa Argentina digna de destacar.”</p>
                <h3>Rayando los Confines. Argentina.</h3>
              </div>
              <div className={styles.resena}>
                <p>“Primera obra de esta prometedora escritora novel, esta excelente fábula sin moraleja sobre los
                    deseos -en tanto sexuales y como anhelos-, no hace más que demostrarnos la pobreza de
                    nuestros mundos interiores y de nuestras lúgubres comarcas”.</p>
                <h3>Hernán Sassi.</h3>
              </div>
              <div className={styles.resena}>
                <p>“La historia de Lulúpe está narrada en la antigua tradición de la novela de aprendizaje que, con
                    un sutil cruce con el género erótico, crea una deforme y seductora prosa”.</p>
                <h3>Radar Libros, Página 12. Argentina.</h3>
              </div>
              <div className={styles.resena}>
                <p>“En el saturado pero alegre universo de Lulúpe María T., tanto el personaje como la novela
                    seducen desde una ingenuidad maliciosa, polimorfa, no exenta de inteligencia, ambigua y
                    atractiva en su ambigüedad.”.</p>
                <h3>Suplemento Cultura, Diario Perfil. Argentina.</h3>
              </div>
            </div>
            <div className={styles.sinopsis}>
              <h2>SINOPSIS</h2>
              <p>En el comienzo el planteo narrativo parece simple: el libro promete la vida de Lulú en cálidas
                viñetas y un humor ligero sin excluir alguna que otra cuota de violencia. 
                Rápidamente, sin
                embargo, Tatiana Goransky enrarece forma y contenido haciéndolos dialogar y fusionarse. 
                Lulú,
                después de un trágico inicio sexual y habiendo probado el mecanismo de la venganza,
                emprenderá un viaje arbitrario que se repetirá en paralelo con la persecución de Benito, su
                atípico pretendiente. Mientras tanto la promesa de un avance cronológico en la vida de Lulú
                empezara resquebrajarse para luego simplemente estallar.</p>
            </div> 
            <div className={styles.links}>
              <h2>RESEÑAS</h2>
              <div className={styles.links_container}>
                <a href="">http://rayandolosconfines.com/critica_sexyfant.html</a>
                <a href="">https://www.pagina12.com.ar/diario/suplementos/libros/10-2017-2006-04- 04.html</a>
                <a href="">http://elremiseroabsoluto.blogspot.com.ar/2006/02/diferentes-matices-del-rojo.html</a>
              </div>
            </div>
        </div>
      </div>
      <footer className={styles.footer} id="footer">
          <div className={styles.footer_container}>
              <div className={styles.social_footer}>
                  <a href=""><img src={tw} alt=""/></a>
                  <a href=""><img src={ig} alt=""/></a>
              </div>
              <div className={styles.textos_footer}>
                  <h3>Tatiana Goransky</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default Libro;