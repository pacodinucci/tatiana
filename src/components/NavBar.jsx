import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/NavBar.module.css';
import ig from '../assets/igverde.svg';
import tw from '../assets/twitterx.svg';
import MobileNavigation from '../NavComponents/MobileNavigation';
import Navigation from '../NavComponents/Navigation';

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
                <div className={styles.menu_container}>
                    <MobileNavigation />
                    <Navigation />
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