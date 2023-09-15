import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import styles from '../styles/Libro.module.css';
import NavBar from './NavBar';
import Footer from './Footer';
import bandera from '../assets/bandera.svg';
import sp from '../assets/spotify.png';
import librosMock from '../assets/mock';

function Libro() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  console.log(id)
  useEffect(() => {
    const libroSeleccionado = librosMock.find((libro) => libro.id === parseInt(id));
    setLibro(libroSeleccionado);
  }, [id])

  if (!libro) {
    return <div>Cargando libro...</div>;
  }

  return (
    <div className={styles.detalles_container}>
      <NavBar />
      <div className={styles.detalles_content}>
        {libro.english ? (
          <div className={styles.english}>
            <a href="/loveyouless"><img src={bandera} alt="" /></a>  
            <span className={styles.btnleermas}><a href="/lelectura">LEER MÁS</a></span>
          </div>
        ) : (<div className={styles.english}></div>)}
        <div className={styles.detalles_principal}>
          <div className={styles.detalles_titulo}>
            <h2>{libro.titulo.toUpperCase()}</h2>
          </div>
          <div className={libro.imagen.length < 3 ? styles.detalles_imagen : styles.detalles_masdetres}>
            {libro.imagen.map((portada, index) => (
              <img src={portada} key={index} alt="" />
            ))}
          </div>
        </div>
        {libro.spotify ? (
          <div className={styles.playlist}>
            <img src={sp} alt="" />
            <p>PLAYLIST</p>
          </div>
        ) : libro.prologo ? (
          <div className={styles.btnprologo}>
            <a href="/prologoimp">
              <p>LEER</p>
              <p>PRÓLOGO</p>
            </a>
          </div>
        ) : (<div className={styles.playlist} />)}
        <div className={styles.detalles_resenas}>
          <div className={styles.detalles_textos}>
            {libro.resenas?.map((resena, index) => (
              <div className={styles.resena} key={index}>
                <p dangerouslySetInnerHTML={{ __html: resena.cita }}></p>
                <h3>{resena.medio}</h3>
              </div>
            ))}
          </div>
          {libro.sinopsis ? (
            <div className={styles.sinopsis_container}>
              <div className={styles.sinopsis}>
                <h2>SINOPSIS</h2>
                <p dangerouslySetInnerHTML={{ __html: libro.sinopsis }}></p>
                {libro.nominada ? (<p className={styles.nominada}>{libro.nominada ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: libro.nominada.replace(
                        new RegExp(libro.titulo, 'g'),
                        `<i>${libro.titulo}</i>`
                      ),
                    }}
                  />
                ) : null}</p>) : null}
              </div>
            </div>
          ) : null}
          {libro.disponible ? (
            <div className={styles.disponible}>
              {libro.disponible.papel ? (<span><p>DISPONIBLE EN PAPEL</p></span>) : null}
              {libro.disponible.ebook ? (<span><p>DISPONIBLE EN E-BOOK</p></span>) : null}
              {libro.disponible.descarga ? (<span><p>DESCARGAR LIBRO GRATIS</p></span>) : null}
            </div>
          ) : null}
          {libro.nota ? (
            <div className={styles.nota}>
              <img src={libro.nota.imagen[0]} alt="" />
            </div>
          ) : null}
          <div className={styles.links}>
            <h2>ALGUNAS RESEÑAS</h2>
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
      <Footer />
    </div>
  );
}

export default Libro;