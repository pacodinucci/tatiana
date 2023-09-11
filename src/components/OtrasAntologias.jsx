import React from 'react'
import espana from '../assets/espana.png';
import argentina from '../assets/argentina.png';
import bolivia from '../assets/bolivia.png';
import mexico from '../assets/mexico.png';
import styles from '../styles/OtrasAntologias.module.css';
import Footer from './Footer';

function OtrasAntologias() {
  return (
    <>
        <div>
            <div className={styles.titulo}>
                <h2>OTRAS ANTOLOGÍAS</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.galeria}>
                    <div className={styles.antologia}><img src={mexico} alt="" /><p>México (2007)</p></div>
                    <div className={styles.antologia}><img src={espana} alt="" /><p>España (2015)</p></div>
                    <div className={styles.antologia}><img src={argentina} alt="" /><p>Argentina (2014)</p></div>
                    <div className={styles.antologia}><img src={bolivia} alt="" /><p>Bolivia (2001)</p></div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default OtrasAntologias