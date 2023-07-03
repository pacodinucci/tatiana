import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import styles from '../styles/Libro.module.css';
import NavBar from './NavBar';
import imagenPortada from '../assets/libro1.png';

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
      <div className={styles.detalles_titulo}>
        <span></span>
        <h2>LULÚPE MARÍA T.</h2>
      </div>
      <div className={styles.detalles_content}>
        <div className={styles.detalles_imagen}>
          <div className={styles.framelibro}>
            <img src={imagenPortada} alt="" />
          </div>
          <p>(Año 2005)</p>
        </div>
        <div className={styles.detalles_textos}>
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
      </div>
    </div>
  );
}

export default Libro;