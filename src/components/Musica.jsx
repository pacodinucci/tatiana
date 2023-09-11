import React from "react";
import styles from '../styles/Musica.module.css';
import NavBar from "./NavBar";
import yt from '../assets/youtube.svg';
import Footer from "./Footer";

function Musica() {
    return(
        <>
            <NavBar/>
            <section>
                <div className={styles.header}>

                </div>
            </section>
            <section>
                <div className={styles.titulo}>
                    <h2>Smile, Tatiana Goransky en Clásica y Moderna</h2>
                </div>
                <div className={styles.video}>
                    {/* <h3 className={styles.titulovideo}>The man I love, Tatiana Goransky</h3> */}
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/C1X-4o4TQ1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                    <a className={styles.btn} href="https://www.youtube.com/@tatianagoransky" target="_blank">
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                </div>
            </section>
            <section style={{marginTop: "-10vh", marginBottom: "20vh"}}>
                <div className={styles.titulo}>
                    <h2>The man I Love, Tatiana Goransky + Del Norte Big Band</h2>
                </div>
                <div className={styles.video}>
                    {/* <h3 className={styles.titulovideo}>The man I love, Tatiana Goransky</h3> */}
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/yizk2NW2s-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                    <a className={styles.btn} href="https://www.youtube.com/@tatianagoransky" target="_blank">
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Musica;