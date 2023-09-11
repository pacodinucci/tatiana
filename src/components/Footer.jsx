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
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;