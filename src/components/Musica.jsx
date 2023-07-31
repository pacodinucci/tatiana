import React from "react";
import styles from '../styles/Musica.module.css';
import NavBar from "./NavBar";
import yt from '../assets/youtube.svg';

function Musica() {
    return(
        <>
            <NavBar/>
            <section>
                <div className={styles.header}>

                </div>
            </section>
            <section>
                <div className={styles.video}>
                    <h3 className={styles.titulovideo}>The man I love, Tatiana Goransky</h3>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/yizk2NW2s-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <a className={styles.btn}>
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                    
                </div>
            </section>
        </>
    )
}

export default Musica;