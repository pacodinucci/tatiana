import NavBar from "./NavBar";
import Footer from "./Footer";
import useIntersection from '../hooks/useIntersection';
import styles from '../styles/Prensa.module.css';
import galeria1 from '../assets/galeria1.png';
import galeria2 from '../assets/galeria2.png';
import galeria3 from '../assets/galeria3.png';
import galeria4 from '../assets/galeria4.png';
import galeria5 from '../assets/galeria5.png';
import galeria6 from '../assets/galeria6.png';

function Prensa() {

    const [elementoRef, isIntersecting] = useIntersection({
        threshold: 0.5,
    });

    const [elementoRef2, isIntersecting2] = useIntersection({
        threshold: 0.5,
    });

    const [elementoRef3, isIntersecting3] = useIntersection({
        threshold: 0.5,
    });

    const [elementoRef4, isIntersecting4] = useIntersection({
        threshold: 0.5,
    });

    const [elementoRef5, isIntersecting5] = useIntersection({
        threshold: 0.5,
    });

    const [elementoRef6, isIntersecting6] = useIntersection({
        threshold: 0.5,
    });

    return (
        <>
            <NavBar />
            <div className={styles.content}>
                <div className={styles.entrevista}>
                    <div className={styles.titulo}>
                        <h2>ENTREVISTA</h2>
                    </div>
                    <div className={styles.video} style={{ marginBottom: "-10vh", marginTop: "-10vh" }}>
                        <iframe width="800" height="450" src="https://www.youtube.com/embed/0IFLkbQFUKg?si=PsxxsZsEwKevmkKB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                        {/* <a className={styles.btn}>
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a> */}
                    </div>
                </div>
                <div className={styles.entrevista}>
                    <div className={styles.titulo}>
                        <h2>OTRAS ENTREVISTAS</h2>
                    </div>
                    <div style={{ height: "40vh" }}>

                    </div>
                </div>
                <div className={styles.fotosprensa}>
                    <div className={styles.titulo}>
                        <h2>FOTOS DEL PAQUETE</h2>
                        <h2>DE PRENSA</h2>
                    </div>
                    <div className={styles.galeria}>
                        <div style={{ marginBottom: "10vh" }}  >
                            <div className={styles.primera}>
                                <div className={styles.primeraizq}>
                                    <a href="/images/galeria1alta.jpg" download><img src={galeria1} alt="" ref={elementoRef} className={`${styles["slide-in-right"]} ${isIntersecting ? styles.active : ''}`} /></a>
                                </div>
                                <div className={styles.primeramedio}>
                                    <a href="/images/galeria2alta.jpg" download><img src={galeria2} alt="" ref={elementoRef3} className={`${styles["slide-in-top"]} ${isIntersecting3 ? styles.active : ''}`} /></a>
                                    <a href="/images/galeria3alta.jpg" download><img src={galeria3} alt="" ref={elementoRef4} className={`${styles["slide-in-bottom"]} ${isIntersecting4 ? styles.active : ''}`} /></a>
                                </div>
                                <div className={styles.primerader}>
                                    <a href="/images/galeria4alta.jpg" download><img src={galeria4} alt="" ref={elementoRef2} className={`${styles["slide-in-left"]} ${isIntersecting2 ? styles.active : ''}`} /></a>
                                </div>
                            </div>
                            <h4>Fotos: Alejandro Meter</h4>
                        </div>
                        <div className={styles.segunda}>
                            <div>
                                <a href="/images/galeria5alta.JPG" download><img src={galeria5} alt="" ref={elementoRef5} className={`${styles["slide-in-right"]} ${isIntersecting5 ? styles.active : ''}`} /></a>
                                <h4>Foto: Mailen Albamonte Pizarro</h4>
                            </div>
                            <div>
                                <img src={galeria6} alt="" ref={elementoRef6} className={`${styles["slide-in-left"]} ${isIntersecting6 ? styles.active : ''}`} />
                                <h4>Sin crédito</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Prensa