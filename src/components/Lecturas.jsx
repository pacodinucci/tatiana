import React from "react";
import styles from '../styles/Lecturas.module.css';
import NavBar from "./NavBar";
import yt from '../assets/youtube.svg';
import Footer from "./Footer";

function Lecturas() {
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
            <section className={styles.lecturashdp}>
                <NavBar />
                <div className={styles.header}>
                    <h2>LECTURAS</h2>
                </div>
                <div className={styles.titulo_lecturas}>
                    <h2>Fade Out</h2>
                </div>
                <div className={styles.video}>
                    {/* <h3 className={styles.titulovideo}>Quisiera Amarte Menos. Novela. Primera parte</h3> */}
                    <iframe src="https://www.youtube.com/embed/NhGjEcoJkUk?si=DgKSwZkRk7N9ag1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                    <a className={styles.btn} href="https://www.youtube.com/@tatianagoransky" target="_blank" rel="noopener noreferrer">
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Lecturas;