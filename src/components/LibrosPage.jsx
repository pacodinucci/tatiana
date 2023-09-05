import React from 'react';
import NavBar from './NavBar';
import styles from '../styles/LibrosPage.module.css';
import libro7 from '../assets/quisieraamartemenos.png';
import libro6 from '../assets/mujerpocoprobable.png';
import libro5 from '../assets/fade-out-1.png';
import libro4 from '../assets/libro3.png';
import libro3 from '../assets/libro4.png';
import libro2 from '../assets/libro2.png';
import libro1 from '../assets/libro1.png';
import barcelona from '../assets/barcelona.png';
import barbaros from '../assets/barbaros.png';
import impecables from '../assets/libro5.png';
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';

function LibrosPage() {
  return (
    <>
        <NavBar/>
        <section>
            <div className={styles.novelas}>
                <div className={styles.titulo}>
                    <h2>NOVELAS</h2>
                </div>
                <div className={styles.galeria_container}>
                    <div className={styles.galeria}>
                        <a href="/libros/7"><img src={libro7} alt="" /></a>
                        <a href="/libros/6"><img src={libro6} alt="" /></a>
                        <a href="/libros/5"><img src={libro5} alt="" /></a>
                        <a href="/libros/4"><img src={libro4} alt="" /></a>
                    </div>
                    <div className={styles.galeria}>
                        <a href="/libros/3"><img src={libro3} alt="" /></a>
                        <a href="/libros/2"><img src={libro2} alt="" /></a>
                        <a href="/libros/1"><img src={libro1} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className={styles.novelas}>
                
                    <div className={styles.titulo}>
                        <h2>ANTOLOGÍAS</h2>
                    </div>
                    <div className={styles.galeria_container_b}>
                        <div className={styles.galeria}>
                            <a href="#"><img src={barcelona} alt="" /></a>
                            <a href="#"><img src={barbaros} alt="" /></a>
                        </div>
                        <div className={styles.vermasbtn}>
                            <a href="#">VER MÁS</a>
                        </div>
                    </div>
                
            </div>
        </section>
        <section style={{margin: '20vh 0'}}>
            <div className={styles.novelas}>
                    <div className={styles.titulo}>
                        <h2>OTROS</h2>
                    </div>
                    <div className={styles.galeria_container_b}>
                        <div className={styles.galeria}>
                            <a href="#"><img src={impecables} alt="" /></a>
                        </div>
                        <div className={styles.vermasbtn}>
                            <a href="#">LEER PRÓLOGO</a>
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

export default LibrosPage