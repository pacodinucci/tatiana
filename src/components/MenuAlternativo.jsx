import React, { useState } from 'react';
import styles from '../styles/NavBar.module.css';
import menuIcon from '../assets/menuh.svg';
import closeIcon from '../assets/cerrar.svg';

const MenuAlternativo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav>
      {/* {menuOpen ? ( */}
        <div className={styles.menu}>
          <img src={menuIcon} alt="" onClick={toggleMenu} />
          <ul className={styles.menu_links}>
            <li>BIO</li>
            <li>LIBROS</li>
            <li>OTRAS COSAS</li>
            <li>PRENSA</li>
          </ul>
        </div>
      {/* ) : ( */}
        {/* <img src={menuIcon} alt="" onClick={toggleMenu} /> */}
      {/* )} */}
    </nav>
  );
};

export default MenuAlternativo;
