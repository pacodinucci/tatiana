import React from 'react';
import styles from '../styles/NavBar.module.css';
import ig from '../assets/igverde.svg';
import tw from '../assets/twverde.svg';

function NavBar() {

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
                <div className={styles.menu_container}>
                    <ul className={styles.menu_horizontal}>
                        <li className={styles.menu_item}>
                            <a href="/#biografia" translate='no'>BIO</a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="/#libros">LIBROS</a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#">OTRAS COSAS</a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#">PRENSA</a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#contacto">CONTACTO</a>
                        </li>
                        
                    </ul>
                    <div className={styles.social}>
                        <li><img src={tw} alt="" /></li>
                        <li><img src={ig} alt="" /></li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;