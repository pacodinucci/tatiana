import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import styles from '../styles/Libro.module.css';
import NavBar from './NavBar';
import imagenPortada from '../assets/libro1.png';
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';
import sp from '../assets/spotify.png';
import librosMock from '../assets/mock';

function Libro() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  console.log(id)
  useEffect(()=>{
    const libroSeleccionado = librosMock.find((libro) => libro.id === parseInt(id));
    setLibro(libroSeleccionado);
  }, [id])

  if(!libro){
    return <div>Cargando libro...</div>;
  }

  return (
    <div className={styles.detalles_container}>
      <NavBar/>
      <div className={styles.detalles_content}>
        <div className={styles.detalles_principal}>
          <div className={styles.detalles_titulo}>
              <h2>{libro.titulo.toUpperCase()}</h2>
          </div>
          <div className={styles.detalles_imagen}>
            {libro.imagen.map((portada, index)=>(
              <img src={portada} alt="" />
            ))}
          </div>
        </div>
        {libro.spotify ? (
            <div className={styles.playlist}>
              <img src={sp} alt="" />
              <p>PLAYLIST</p>
            </div>
          ) : null}
        <div className={styles.detalles_resenas}>
            <div className={styles.detalles_textos}>
              {libro.resenas.map((resena, index) => (
                <div className={styles.resena} key={index}>
                  <p>{resena.cita}</p>
                  <h3>{resena.medio}</h3>
                </div>
              ))}
            </div>
            <div className={styles.sinopsis_container}>
              <div className={styles.sinopsis}>
                <h2>SINOPSIS</h2>
                <p>{libro.sinopsis}</p>
              </div> 
            </div>
            {libro.disponible ? (
              <div className={styles.disponible}>
                {libro.disponible.papel ? (<span><p>DISPONIBLE EN PAPEL</p></span>) : null}
                {libro.disponible.ebook ? (<span><p>DISPONIBLE EN E-BOOK</p></span>) : null}
                {libro.disponible.descarga ? (<span><p style={{fontSize: "1rem"}}>DESCARGAR LIBRO GRATIS</p></span>) : null}
            </div>
            ) : null}
            {libro.nota ? (
                <div className={styles.nota}>
                  <img src={libro.nota.imagen[0]} alt="" />
                </div>
            ) : null}
            <div className={styles.links}>
              <h2>RESEÑAS</h2>
              <div className={styles.links_container}>
                {libro.links && libro.links.length > 0 ? (
                  libro.links.map((enlace, index) => (
                    <a href={enlace.link} target="_blank" rel="noopener noreferrer" key={index}>
                      {enlace.titulo}
                    </a>
                  ))
                  ) : (
                  <p>No hay enlaces disponibles</p>
                )}
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