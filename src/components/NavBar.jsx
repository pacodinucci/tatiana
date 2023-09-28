import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/NavBar.module.css';
import ig from '../assets/igverde.svg';
import tw from '../assets/twitterx.svg';
import menu from '../assets/menu.svg';

function NavBar() {

    const [mobileVisible, setMobileVisible] = useState(false);

    const toggleMobileVisible = () => {
        setMobileVisible(!mobileVisible)
    }

    const handleClick = (event, target) => {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };


    return (
        <nav>
            <div className={styles.nav_container}>
                <div className={styles.menu}>
                    <div className={styles.menu_content}>
                        <div className={styles.name}>
                            <h1 translate='no' style={{ marginBottom: '-2vh' }}>TATIANA</h1>
                            <h1 translate='no'>GORANSKY</h1>
                        </div>
                        <div>
                            <div className={styles.social}>
                                <li>
                                    <a href="https://twitter.com/TatianaGoransky" target="_blank" rel="noopener noreferrer">
                                        <img src={tw} alt="Twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/tatianagoransky/" target="_blank" rel="noopener noreferrer">
                                        <img src={ig} alt="Instagram" />
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hamburger} onClick={toggleMobileVisible}>
                        <img src={menu} alt="" />
                    </div>
                    {mobileVisible && (
                        <div className={styles.mobileMenu}>
                            <button onClick={toggleMobileVisible} className="cerrarMenuButton">
                                X
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.menu_container}>
                    <ul className={styles.menu_horizontal}>
                        <li className={styles.menu_item}>
                            <HashLink smooth to="/#biografia" className={styles.menu_item}>
                                BIO
                            </HashLink>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="/libros">LIBROS</a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#">OTRAS COSAS</a>
                            <ul className={styles.menu_vertical}>
                                <li><a href="/musica">Música</a></li>
                                <li><a href="/lecturas">Lecturas</a></li>
                                <li><a href="/fantasma">Fantasma</a></li>
                                <li><a href="/talleres">Talleres</a></li>
                            </ul>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="/prensa">PRENSA</a>
                        </li>
                        <li className={styles.menu_item}>
                            <HashLink smooth to="/#contacto" className={styles.menu_item}>
                                CONTACTO
                            </HashLink>
                        </li>

                    </ul>
                    <div className={styles.social}>
                        <li>
                            <a href="https://twitter.com/TatianaGoransky" target="_blank" rel="noopener noreferrer">
                                <img src={tw} alt="Twitter" style={{ width: "3vw" }} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tatianagoransky/" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="Instagram" />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;