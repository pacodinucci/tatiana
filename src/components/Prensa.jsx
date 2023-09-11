import NavBar from "./NavBar";
import Footer from "./Footer";
import yt from '../assets/youtube.svg';
import styles from '../styles/Prensa.module.css';
import galeria1 from '../assets/galeria1.png';
import galeria2 from '../assets/galeria2.png';
import galeria3 from '../assets/galeria3.png';
import galeria4 from '../assets/galeria4.png';
import galeria5 from '../assets/galeria5.png';
import galeria6 from '../assets/galeria6.png';

function Prensa() {
  return (
    <>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.entrevista}>
                <div className={styles.titulo}>
                    <h2>ENTREVISTA</h2>
                </div>
                <div className={styles.video} style={{marginBottom: "-10vh", marginTop: "-10vh"}}>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/ir0HcuiEyRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
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
                <div style={{height: "40vh"}}>

                </div>
            </div>
            <div className={styles.fotosprensa}>
                <div className={styles.titulo}>
                    <h2>FOTOS DEL PAQUETE</h2>
                    <h2>DE PRENSA</h2>
                </div>
                <div className={styles.galeria}>
                    <div style={{marginBottom: "10vh"}}>
                        <div className={styles.primera}>
                            <div className={styles.primeraizq}>
                                <img src={galeria1} alt="" />
                            </div>
                            <div className={styles.primeramedio}>
                                <img src={galeria2} alt="" />
                                <img src={galeria3} alt="" />
                            </div>
                            <div className={styles.primerader}>
                                <img src={galeria4} alt="" />
                            </div>
                        </div>
                        <h4>Fotos: Alejandro Meter</h4>
                    </div>
                    <div className={styles.segunda}>
                        <div>
                            <img src={galeria5} alt="" />
                            <h4>Foto: Mailen Albamonte Pizarro</h4>
                        </div>
                        <div>
                            <img src={galeria6} alt="" />
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