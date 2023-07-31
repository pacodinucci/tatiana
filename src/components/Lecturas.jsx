import React from "react";
import styles from '../styles/Lecturas.module.css';
import NavBar from "./NavBar";
import yt from '../assets/youtube.svg';

function Lecturas() {
    return (
        <>
            <NavBar />
            <section>
                <div className={styles.header}>
                    {/* <h2>LECTURAS</h2> */}
                </div>
            </section>
            <section>
                <div className={styles.titulo_lecturas}>
                    <h2>LECTURAS</h2>
                </div>
                <div className={styles.video}>
                    <h3 className={styles.titulovideo}>Quisiera Amarte Menos. Novela. Primera parte</h3>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/ir0HcuiEyRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <a className={styles.btn}>
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Lecturas;