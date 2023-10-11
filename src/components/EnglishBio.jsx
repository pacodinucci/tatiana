import React from 'react'
import NavBar from './NavBar';
import styles from '../styles/EnglishBio.module.css';
import imagenBio from '../assets/foto-1.png';
import Footer from './Footer';

function EnglishBio() {
  return (
    <>
      {/* <div className={styles.modal}>
        <div className={styles.name}>
          <h1>TATIANA GORANSKY</h1>
        </div>
        <div className={styles.sign}>
          <h2>VERSIÓN MÓVIL EN DESARROLLO</h2>
          <h2>PUEDES ENTRAR DESDE UNA PC</h2>
        </div>
        <div className={styles.btnvolver}>
          <a href="/">VOLVER</a>
        </div>
      </div> */}
      <NavBar />
      <section id="biografia" className={styles.biografia}>
        <div className={styles.bio_container}>
          <div className={styles.titulo_bio}>
            <h2>THE AUTHOR</h2>
          </div>
          <div className={styles.biografia_content}>
            <img src={imagenBio} alt="" />
            {/* <h2>BIOGRAFÍA</h2> */}
            <div className={styles.textosBio}>
              <p className={styles.textopc}>Writer, playwright, and jazz singer Tatiana Goransky was Born in Buenos Aires in 1977.<br />
                She has published several novels in Argentina, Mexico, Spain, and the USA, including:<br />
                <em>Quisiera amarte menos</em>, <em>La mujer poco probable</em>, <em>Fade out</em>, <em>Ball boy</em>, <em>Don del agua</em> and<br /> <em>¿Quién mató a la Cantante de Jazz?</em><br />
                <em>¿Quién mató a la Cantante de Jazz?</em> was selected by the CONABIP to be distributed in<br />
                over a thousand public libraries. As a result, Tatiana has participated at literary<br /> festivals
                in Medellín, Gijón, Montevideo, Acapulco, Monterrey and Barcelona. Her last<br /> two
                novels were presented in Madrid, Barcelona, Sevilla, Granada, CDMX, Monterrey,<br />
                Berlin and Buenos Aires.<br />
                She has collaborated with the well known newspaper Clarín, as well as other journals <br />
                and magazines in Argentina, Spain, México and USA, such as <em>Los Noveles</em>, <em>Lugares</em>, <em>El</em> <br />
                <em>Interpretador</em>, <em>Fiat Lux</em>, <em>Los Bárbaros</em> and <em>El Cuaderno</em>. She has also participated in <br />
                several literary anthologies, such as <em>La Condición Pornográfica</em> (Bolivia, 2011), <br />
                <em>Ficciones Súbitas</em> (Argentina, 2014), <em>Hijas del Horizonte</em> (Spain, 2015) and <em>Acapulco</em> <br />
                <em>Noir</em> (Mexico, 2018). <br />
                In 2018 she edited <em>Los Bárbaros Noir</em>, a double edition of the New York magazine in <br />
                which she invited 43 authors (from 8 different countries) to participate. <br />
                In 2019 Tatiana published in Spain and Argentina the anthology <em>Barcelona/ Buenos</em> <br />
                <em>Aires, once mil kilómetros</em>, which she conceived and edited, and which also included <br />
                one of her short stories. <em>Once mil kilómetros</em> creates a bridge between BCN and Bs. As, <br />
                and was presented at the very well known Kosmópolis festival in Barcelona and the <br />
                international book fair of Buenos Aires. <br />
                <em>Quisiera amarte menos</em> is currently being adapted to the screen.</p>
              <p className={styles.textomobile}>Writer, playwright, and jazz singer Tatiana Goransky was Born in Buenos Aires in 1977.
                She has published several novels in Argentina, Mexico, Spain, and the USA, including:
                <em>Quisiera amarte menos</em>, <em>La mujer poco probable</em>, <em>Fade out</em>, <em>Ball boy</em>, <em>Don del agua</em> and <em>¿Quién mató a la Cantante de Jazz?</em>
                <em>¿Quién mató a la Cantante de Jazz?</em> was selected by the CONABIP to be distributed in
                over a thousand public libraries. As a result, Tatiana has participated at literary festivals
                in Medellín, Gijón, Montevideo, Acapulco, Monterrey and Barcelona. Her last two
                novels were presented in Madrid, Barcelona, Sevilla, Granada, CDMX, Monterrey,
                Berlin and Buenos Aires.
                She has collaborated with the well known newspaper Clarín, as well as other journals
                and magazines in Argentina, Spain, México and USA, such as <em>Los Noveles</em>, <em>Lugares</em>, <em>El</em>
                <em>Interpretador</em>, <em>Fiat Lux</em>, <em>Los Bárbaros</em> and <em>El Cuaderno</em>. She has also participated in
                several literary anthologies, such as <em>La Condición Pornográfica</em> (Bolivia, 2011),
                <em>Ficciones Súbitas</em> (Argentina, 2014), <em>Hijas del Horizonte</em> (Spain, 2015) and <em>Acapulco</em>
                <em>Noir</em> (Mexico, 2018).
                In 2018 she edited <em>Los Bárbaros Noir</em>, a double edition of the New York magazine in
                which she invited 43 authors (from 8 different countries) to participate.
                In 2019 Tatiana published in Spain and Argentina the anthology <em>Barcelona/ Buenos</em>
                <em>Aires, once mil kilómetros</em>, which she conceived and edited, and which also included
                one of her short stories. <em>Once mil kilómetros</em> creates a bridge between BCN and Bs. As,
                and was presented at the very well known Kosmópolis festival in Barcelona and the
                international book fair of Buenos Aires.
                <em>Quisiera amarte menos</em> is currently being adapted to the screen.</p>
            </div>
          </div>
          <Footer className={styles.footer} />
        </div>
      </section>
    </>
  )
}

export default EnglishBio



