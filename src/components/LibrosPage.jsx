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
import barbaros from '../assets/barbarosconmarco.png';
import impecables from '../assets/libro5.png';
import Footer from './Footer';

function LibrosPage() {
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
            <section className={styles.libroshdp}>
                <NavBar />
                <div className={styles.novelas}>
                    <div className={styles.titulo}>
                        <h2>NOVELAS</h2>
                    </div>
                    <div className={styles.galeria_container}>
                        <div className={styles.galeria}>
                            <a href="/libros/7"><img src={libro7} alt="" /></a>
                            <a href="/libros/6"><img src={libro6} alt="" /></a>
                            <a href="/libros/5"><img src={libro5} alt="" /></a>
                            <a href="/libros/3"><img src={libro4} alt="" /></a>
                        </div>
                        <div className={styles.galeria}>
                            <a href="/libros/4"><img src={libro3} alt="" /></a>
                            <a href="/libros/2"><img src={libro2} alt="" /></a>
                            <a href="/libros/1"><img src={libro1} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.novelas}>

                    <div className={styles.titulo}>
                        <h2>ANTOLOGÍAS</h2>
                    </div>
                    <div className={styles.galeria_container_b}>
                        <div className={styles.galeria}>
                            <a href="/libros/8"><img src={barcelona} alt="" /></a>
                            <a href="/libros/9"><img src={barbaros} alt="" /></a>
                        </div>
                        <div className={styles.vermasbtn} style={{ padding: "1.1vh 1.2vw" }}>
                            <a href="/otrasant">VER MÁS</a>
                        </div>
                    </div>

                </div>

                <div className={styles.novelas} style={{ margin: '20vh 0' }}>
                    <div className={styles.titulo}>
                        <h2>OTROS</h2>
                    </div>
                    <div className={styles.galeria_container_c}>
                        <div className={styles.galeria}>
                            <a href="/libros/10"><img src={impecables} alt="" /></a>
                        </div>
                        <div className={styles.vermasbtn} style={{ padding: ".6vh 1.2vw" }}>
                            <a href="/prologoimp">
                                <p>LEER</p>
                                <p>PRÓLOGO</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default LibrosPage