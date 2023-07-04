import React from 'react';
import styles from '../styles/Home.module.css';
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';
import libro1 from '../assets/libro1.png';
import libro2 from '../assets/libro2.png';
import libro3 from '../assets/libro3.png';
import libro4 from '../assets/libro4.png';
import libro5 from '../assets/libro5.png';
import libro6 from '../assets/libro6.png';
import libro7 from '../assets/libro7.png';
import libro8 from '../assets/libro8.png';
import imagenBio from '../assets/foto-1.png';
import mancha from '../assets/manchaturquesa.svg';
import NavBar from './NavBar';

function Home() {
  return (
    <>
      <NavBar/>
      <section>
        <div className={styles.landing_container}>
          <div className={styles.menu_landing}>
            {/* <a href="#biografia" className={styles.menu_link}>BIO</a>
            <a href="#libros" className={styles.menu_link}>LIBROS</a>
            <a href="" className={styles.menu_link}>OTRAS COSAS</a>
            <a href="" className={styles.menu_link}>PRENSA</a>
            <a href="" className={styles.menu_link}>CONTACTO</a> */}
           </div>
          <div className={styles.social_name}>
            {/* <div className={styles.social}>
                <a href="" className={styles.social_link}><img src={tw} alt="" /></a>
                <a href="" className={styles.social_link}><img src={ig} alt="" /></a>
            </div> */}
            <div className={styles.name}>
              <h1>TATIANA</h1>
              <h1>GORANSKY</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="biografia">
          <div className={styles.biografia_container}>
            <div className={styles.biografia_content}>
              <img src={imagenBio} alt="" />
              <div className={styles.textosBio}>
                <h2>BIOGRAFÍA</h2>
                <p>Tatiana Goransky nació en Buenos Aires en 1977, es escritora, dramaturga y cantante de jazz. Autora de las novelas Lulúpe María T (2005), ¿Quién mató a la cantante de jazz? (2008), Don del agua (2010), Ball boy (2013), Fade Out (2016), Quisiera Amarte Menos (2020) y La mujer poco probable (2021).
                  En 2018 editó un número doble de la revista neoyorquina Los Bárbaros, que reúne a 43 autores de ocho países diferentes. En 2019, en Argentina y España, compiló la antología Barcelona / Buenos Aires, Once Mil kilómetros, un puente entre ambas ciudades.
                  Su trabajo ha sido publicado en Argentina, Chile, México, Bolivia, Ecuador, Alemania, Uruguay, España y los Estados Unidos.</p>
              </div>
            </div>
          </div>
      </section>
      <section id="libros">
        <div className={styles.libros_container}>
          <div className={styles.titulo_libros}>
            <h2>LIBROS</h2>
          </div>
          <div className={styles.galeria}>
            <a href="/libros"><img src={libro1} alt="" /></a>
            <a href="/libros"><img src={libro2} alt="" /></a>
            <a href="/libros"><img src={libro3} alt="" /></a>
            <a href="/libros"><img src={libro4} alt="" /></a>
            <a href="/libros"><img src={libro5} alt="" /></a>
            <a href="/libros"><img src={libro6} alt="" /></a>
            {/* <a href="/libros"><img src={libro7} alt="" /></a> */}
            {/* <a href="/libros"><img src={libro8} alt="" /></a> */}
          </div>
        </div>
      </section>
      {/* <section>PRENSA</section> */}
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

export default Home