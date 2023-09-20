import React from 'react'
import { HashLink } from 'react-router-hash-link';
import ig from '../assets/instagram.svg';
import tw from '../assets/twitterxwhite.svg';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footer_container}>
                <div className={styles.social_footer}>
                    <a href=""><img src={tw} alt="" /></a>
                    <a href=""><img src={ig} alt="" /></a>
                </div>
                <div className={styles.textos_footer}>
                    <h3>Tatiana Goransky</h3>
                    <ul className={styles.links}>
                        <li>
                            <HashLink smooth to="/#biografia">
                                BIO
                            </HashLink>
                        </li>
                        <li>|</li>
                        <li><a href="/libros">LIBROS</a></li>
                        <li>|</li>
                        <li><a href="/musica">MÚSICA</a></li>
                        <li>|</li>
                        <li><a href="/lecturas">LECTURAS</a></li>
                        <li>|</li>
                        <li><a href="/fantasma">FANTASMA</a></li>
                        <li>|</li>
                        <li><a href="taleres">TALLERES</a></li>
                        <li>|</li>
                        <li><a href="prensa">PRENSA</a></li>
                        <li>|</li>
                        <li>
                            <HashLink smooth to="/#contacto">
                                CONTACTO
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;