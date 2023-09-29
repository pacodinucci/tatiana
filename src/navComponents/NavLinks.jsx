import styles from '../styles/NavBar.module.css';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <ul className={styles.menu_horizontal}>
            <motion.li className={styles.menu_item} initial={animateFrom} animate={animateTo} transition={{delay: .05}} onClick={() => props.isMobile && props.closeMenu()}>
                <HashLink smooth to="/#biografia" className={styles.menu_item}>
                    BIO
                </HashLink>
            </motion.li>
            <motion.li className={styles.menu_item} initial={animateFrom} animate={animateTo} transition={{delay: .1}} onClick={() => props.isMobile && props.closeMenu()}>
                <a href="/libros">LIBROS</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: .2}} className={styles.menu_item}>
                <a href="#">OTRAS COSAS</a>
                <ul className={styles.menu_vertical}>
                    <li><a href="/musica">Música</a></li>
                    <li><a href="/lecturas">Lecturas</a></li>
                    <li><a href="/fantasma">Fantasma</a></li>
                    <li><a href="/talleres">Talleres</a></li>
                </ul>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} className={`${styles.menu_item} ${styles.collapsed}`} transition={{delay: .3}} onClick={() => props.isMobile && props.closeMenu()}>
                <a href="/prensa">PRENSA</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo}  className={`${styles.menu_item} ${styles.collapsed}`} transition={{delay: .4}} onClick={() => props.isMobile && props.closeMenu()}>
                <HashLink smooth to="/#contacto" className={styles.menu_item}>
                    CONTACTO
                </HashLink>
            </motion.li>
        </ul>
    )
}

export default NavLinks;