import React from 'react';
import styles from '../styles/Home.module.css';
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';
import libro1 from '../assets/libro1.png';
import libro2 from '../assets/libro2.png';
import libro3 from '../assets/dondelagua.png';
import libro4 from '../assets/ballboy.png';
import libro5 from '../assets/fadeout.png';
import libro6 from '../assets/mujerpocoprobable.png';
import libro7 from '../assets/quisieraamartemenos.png';
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
           
           </div>
          
           
            <div className={styles.name}>
              <h1>TATIANA</h1>
              <h1>GORANSKY</h1>
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
          <div className={styles.galeria_container}>
            <div className={styles.galeria}>
              <a href="/libros/4"><img src={libro4} alt="" /></a>
              <a href="/libros/5"><img src={libro5} alt="" /></a>
              <a href="/libros/6"><img src={libro6} alt="" /></a>
              <a href="/libros/7"><img src={libro7} alt="" /></a>
            </div>
            <div className={styles.galeria}>
              <a href="/libros/3"><img src={libro3} alt="" /></a>
              <a href="/libros/2"><img src={libro2} alt="" /></a>
              <a href="/libros/1"><img src={libro1} alt="" /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className={styles.contacto}>
        <div className={styles.contacto_container}>
            <div className={styles.titulo_contacto}>
              <h2>CONTACTO</h2>
            </div>
            <form action="" className={styles.form}>
                <input className={styles.input} type="text" name="" id="" placeholder="Nombre"/>
                <input className={styles.input} type="email" name="" id="" placeholder="Email"/>
                <textarea className={styles.input} name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <input className={styles.input} type="submit" value="Enviar"/>
            </form>
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

export default Home