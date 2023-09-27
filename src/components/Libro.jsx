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

  async function obtenerUbicacionPorIP() {
    try {
      const response = await fetch('http://ip-api.com/json');
      const data = await response.json();
      
      // Extraer el código de país
      const codigoPais = data.countryCode;
      
      // Obtener el URL correspondiente al código de país
      let urlRedireccion = null;
      if (codigoPais === 'ES' || codigoPais === 'CL') {
        urlRedireccion = libro.link_papel_ES;
      } else if (codigoPais === 'MX') {
        urlRedireccion = libro.link_papel_MX;
      } else if (codigoPais === 'US') {
        urlRedireccion = libro.link_papel_US;
      } else {
        urlRedireccion = libro.link_papel_AR;
      }
      
      // Verificar si se obtuvo un URL de redirección
      if (urlRedireccion) {
        // Redirigir al URL correspondiente
        window.open(urlRedireccion, '_blank');
      }
    } catch (error) {
      console.error('Error al obtener la ubicación por IP:', error);
    }
  }
  
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
            <a href="https://open.spotify.com/playlist/0dghbERSKe4JsYAxkg8CrK?si=cRjYs_6tR5K7PO-yVhhROw" target="_blank" rel="noopener noreferrer">
              <img src={sp} alt="" />
              <p>PLAYLIST</p>
            </a>
          </div>
        ) : libro.prologo ? (
          <>
            <div className={styles.btnprologo}>
              <a href="/prologoimp">
                <p>LEER</p>
                <p>PRÓLOGO</p>
              </a>
            </div>
          </>
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
              {libro.disponible.papel ? (<span onClick={obtenerUbicacionPorIP}><p>DISPONIBLE EN PAPEL</p></span>) : null}
              {libro.disponible.ebook ? (<a href=""><span><p>DISPONIBLE EN E-BOOK</p></span></a>) : null}
              {libro.disponible.descarga ? (<a href="/ballboy.pdf" target="_blank" rel="noopener noreferrer"><span><p>DESCARGAR LIBRO GRATIS</p></span></a>) : null}
            </div>
          ) : null}
          {libro.nota ? (
            <div className={styles.nota}>
              <a href=" https://www.lanacion.com.ar/cultura/una-novela-erotico-policial-se-convertira-en-miniserie-la-unica-puesta-en-escena-es-la-de-los-nid25082023/" target="_blank" rel="noopener noreferrer"><img src={libro.nota.imagen[0]} alt="" /></a>
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