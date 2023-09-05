import React from 'react'
import NavBar from './NavBar';
import styles from '../styles/EnglishBio.module.css';
import imagenBio from '../assets/foto-1.png';
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';

function EnglishBio() {
  return (
    <>
      <NavBar />
      <section id="biografia">
        <div className={styles.bio_container}>
          <div className={styles.titulo_bio}>
            <h2>BIOGRAFÍA</h2>
          </div>
            <div className={styles.biografia_content}>
              <img src={imagenBio} alt="" />
              {/* <h2>BIOGRAFÍA</h2> */}
              <div className={styles.textosBio}>
                <p>Writer, playwright, and jazz singer Tatiana Goransky was Born in Buenos Aires in 1977.<br />
                  She has published several novels in Argentina, Mexico, Spain, and the USA, including:<br />
                  Quisiera amarte menos, La mujer poco probable, Fade out, Ball boy, Don del agua and <br /> ¿Quién mató a la Cantante de Jazz?
                  ¿Quién mató a la Cantante de Jazz? was selected by <br /> the CONABIP to be distributed in
                  over a thousand public libraries. As a result, Tatiana <br /> has participated at literary festivals
                  in Medellín, Gijón, Montevideo, Acapulco, <br /> Monterrey and Barcelona. Her last two
                  novels were presented in Madrid, Barcelona, <br /> Sevilla, Granada, CDMX, Monterrey,
                  Berlin and Buenos Aires.<br />
                  She has collaborated with the well known newspaper Clarín, as well as other journals <br />
                  and magazines in Argentina, Spain, México and USA, such as Los Noveles, Lugares, El <br />
                  Interpretador, Fiat Lux, Los Bárbaros and El Cuaderno. She has also participated in <br />
                  several literary anthologies, such as La Condición Pornográfica (Bolivia, 2011), <br />
                  Ficciones Súbitas (Argentina, 2014), Hijas del Horizonte (Spain, 2015) and Acapulco <br />
                  Noir (Mexico, 2018). <br />
                  In 2018 she edited Los Bárbaros Noir, a double edition of the New York magazine in <br />
                  which she invited 43 authors (from 8 different countries) to participate. <br />
                  In 2019 Tatiana published in Spain and Argentina the anthology “Barcelona / Buenos <br />
                  Aires, once mil kilómetros”, which she conceived and edited, and which also included <br />
                  one of her short stories. Once mil kilómetros creates a bridge between BCN and Bs. As, <br />
                  and was presented at the very well known Kosmópolis festival in Barcelona and the <br />
                  international book fair of Buenos Aires. <br />
                  Quisiera amarte menos is currently being adapted to the screen.</p>
              </div>
            </div>
        </div>
      </section>
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
    </>
  )
}

export default EnglishBio



