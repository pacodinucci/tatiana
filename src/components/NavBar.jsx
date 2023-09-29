import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/NavBar.module.css';
import ig from '../assets/igverde.svg';
import tw from '../assets/twitterx.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavBar() {

    const [mobileVisible, setMobileVisible] = useState(false);
    const [otrasCosasVisible, setOtrasCosasVisible] = useState(false);

    const toggleMobileVisible = () => {
        setMobileVisible(!mobileVisible)
    }

    const toggleOtrasCosasVisible = (e) => {
        e.preventDefault()
        setOtrasCosasVisible(!otrasCosasVisible);
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


    useEffect(() => {
        if (mobileVisible) {
            document.body.classList.add('mobileMenuOpen');
        } else {
            document.body.classList.remove('mobileMenuOpen');
        }
    }, [mobileVisible]);


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
                    <div className={styles.hamburgerContainer}>
                        <div className={styles.hamburger} onClick={toggleMobileVisible}>
                            {mobileVisible ? (<p style={{ color: "#FFF", zIndex: "1000" }}><AiOutlineClose /></p>) : (<p style={{ color: "#16726F" }}><AiOutlineMenu /></p>)}
                        </div>
                    </div>
                    {mobileVisible && (
                        <div className={styles.mobileMenu} style={{ zIndex: "999" }}>
                            <ul className={styles.mobileOptions}>
                                <li>
                                    <a href="">BIO</a>
                                </li>
                                <li>
                                    <a href="">LIBROS</a>
                                </li>
                                <li>
                                    <a href="" onClick={toggleOtrasCosasVisible}>OTRAS COSAS</a>
                                    {otrasCosasVisible ? (
                                        <ul className={`${styles.mobileCascade} ${otrasCosasVisible ? styles.active : ''}`}>
                                            <li><a href="/musica">MÚSICA</a></li>
                                            <li><a href="/lecturas">LECTURAS</a></li>
                                            <li><a href="/fantasma">FANTASMA</a></li>
                                            <li><a href="/talleres">TALLERES</a></li>
                                        </ul>
                                    ) : null}
                                </li>
                                <li>
                                    <a href="">PRENSA</a>
                                </li>
                                <li>
                                    <a href="">CONTACTO</a>
                                </li>
                            </ul>
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