import { useState } from 'react';
import styles from '../styles/NavBar.module.css';
import MobileNavLinks from "./MobileNavLinks";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CgMenuRound } from 'react-icons/cg';
import ig from '../assets/igverde.svg';
import tw from '../assets/twitterx.svg';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <AiOutlineMenu className={styles.hamburger} onClick={() => setOpen(!open)} size='4vw' color='#257A77' />
    const closeIcon = <AiOutlineClose className={styles.hamburger} onClick={() => setOpen(!open)} size='4vw' color='#257A77' />

    const closeMenu = () => setOpen(false);

    return (
        <nav className={styles.mobileNavigation}>
            <div className={styles.menu_content}>
                <div className={styles.name}>
                    <a href="/">
                        <h1 translate='no' style={{ marginBottom: '-2vh' }}>TATIANA</h1>
                        <h1 translate='no'>GORANSKY</h1>
                    </a>
                </div>
                <div>
                    <div className={styles.redes}>
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
            {open ? closeIcon : hamburgerIcon}
            {open && <MobileNavLinks isMobile={true} closeMenu={closeMenu} />}
        </nav>
    );
}

export default MobileNavigation;