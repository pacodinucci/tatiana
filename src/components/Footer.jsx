import React from 'react'
import ig from '../assets/instagram.svg';
import tw from '../assets/vector.svg';
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
                        <li><a href="">BIO</a></li>
                        <li>|</li>
                        <li><a href="">LIBROS</a></li>
                        <li>|</li>
                        <li><a href="">MÚSICA</a></li>
                        <li>|</li>
                        <li><a href="">LECTURAS</a></li>
                        <li>|</li>
                        <li><a href="">FANTASMA</a></li>
                        <li>|</li>
                        <li><a href="">TALLERES</a></li>
                        <li>|</li>
                        <li><a href="">PRENSA</a></li>
                        <li>|</li>
                        <li><a href="">CONTACTO</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;