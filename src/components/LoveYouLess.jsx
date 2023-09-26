import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/LoveYouLess.module.css';
import image1 from '../assets/quisieraamartemenos.png';
import image2 from '../assets/quisieraamartemenos2.png';
import press from '../assets/press.png';


function LoveYouLess() {
  return (
    <div className={styles.content}>
        <NavBar />
        <div className={styles.bookdata}>
            <div className={styles.principal}>
                <div className={styles.title}>
                    <h2>TO LOVE YOU LESS</h2>
                </div>
                <div className={styles.images}>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className={styles.press}>
                <img src={press} alt="" />
            </div>
            <div className={styles.reviews}>
                <div className={styles.review}>
                    <p>Goransky makes the most of the choral novel to offer readers every facet of drama: passion, desire, lust, madness, failure. The result is a stupendous novella, under the tight surface of which she portrays a true mass of human misery.</p>
                    <h4>Revista Kundra</h4>
                </div>
                <div className={styles.review}>
                    <p>Every time I read a book by Tatiana Goransky, I am amazed by her sense of rhythm, her ability to maintain the narrative with skill and craft. In just over a hundred pages, she builds a story about love and its complex variations, creating a unique universe of characters filled with frustration, tired of their destiny and dark in nature.</p>
                    <h4>Fondo de Lectura, Spain</h4>
                </div>
                <div className={styles.review}>
                    <p>The texture of Goransky’s narrative transports us to a cruel, intense, and extremely sharp world in which all the literary machinery is set in motion for the reader to find, in these voices, an echo: perhaps that of society, perhaps that of the inner world of many women, partners, and lovers.</p>
                    <h4>Somos Berlín, Germany</h4>
                </div>
            </div>
            <div className={styles.synopsiscont}>
                <div className={styles.synopsis}>
                    <h2>SYNOPSIS</h2>
                    <p>Behind desire, a body; behind the body, a story. Behind love, sometimes, hate. Is there a force more powerful than desire? Julia, Clara, Juan, la Turca, Vera and Ricardo tell their own stories and in doing so tell those of others. Six characters entangled in a polyphonic, violent, loving, sexual plot. With acid humor and irreverence, Tatiana Goransky builds a brutal and polemic novel that breaks with any stereotype about sexuality and shows how easily that territory of pleasure that is the body can become a battlefield.</p>
                </div>
            </div>
            <div className={styles.btncont}>
                <a href="/ToLoveYouLessFirstChapter.pdf" target="_blank" rel="noopener noreferrer"><span>FIRST CHAPTER</span></a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LoveYouLess