import React from "react";
import styles from '../styles/Lecturas.module.css';
import NavBar from "./NavBar";
import yt from '../assets/youtube.svg';
import Footer from "./Footer";

function Lecturas() {
    return (
        <>
            <NavBar />
            <section>
                <div className={styles.header}>
                    <h2>LECTURAS</h2>
                </div>
            </section>
            <section>
                <div className={styles.titulo_lecturas}>
                    <h2>Fade Out</h2>
                </div>
                <div className={styles.video}>
                    {/* <h3 className={styles.titulovideo}>Quisiera Amarte Menos. Novela. Primera parte</h3> */}
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/NhGjEcoJkUk?si=DgKSwZkRk7N9ag1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                    <a className={styles.btn}>
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Lecturas;