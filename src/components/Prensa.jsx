import NavBar from "./NavBar";
import Footer from "./Footer";
import useIntersection from '../hooks/useIntersection';
import styles from '../styles/Prensa.module.css';
import galeria1 from '../assets/galeria1alta.jpg';
import galeria2 from '../assets/galeria2alta.jpg';
import galeria3 from '../assets/1.png';
import galeria4 from '../assets/galeria4alta.jpg';
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
            {/* <div className={styles.modal}>
                <div className={styles.name}>
                    <h1>TATIANA GORANSKY</h1>
                </div>
                <div className={styles.sign}>
                    <h2>VERSIÓN MÓVIL EN DESARROLLO</h2>
                    <h2>PUEDES ENTRAR DESDE UNA PC</h2>
                </div>
                <div className={styles.btnvolver}>
                    <a href="/">VOLVER</a>
                </div>
            </div> */}
            <div className={styles.content}>
                <NavBar />
                <div className={styles.entrevista}>
                    <div className={styles.titulo}>
                        <h2>ENTREVISTA</h2>
                    </div>
                    <div className={styles.video} style={{ marginBottom: "-10vh", marginTop: "-10vh" }}>
                        <iframe src="https://www.youtube.com/embed/0IFLkbQFUKg?si=PsxxsZsEwKevmkKB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                        {/* <a className={styles.btn}>
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a> */}
                    </div>
                </div>
                <div className={styles.entrevista}>
                    <div className={styles.titulo}>
                        <h2>ALGUNAS OTRAS ENTREVISTAS</h2>
                    </div>
                    <div className={styles.entrevistas}>
                        <a href="https://www.youtube.com/watch?v=hE6FQKFE2kM" target="_blank" rel="noopener noreferrer">Casa América Catalunya, Barcelona</a>
                        <a href="https://www.youtube.com/watch?v=_4Hvfn-1KDE" target="_blank" rel="noopener noreferrer">Leer es un placer, Con Natu Poblet, Sobre ¿Quién mató a la cantante de jazz?, 2015. RumboSur TV.</a>
                        <a href="https://m.facebook.com/Leamos-903878669624494/videos/auditorioleamos-eugenia-zicavo-entrevista-a-tatiana-goransky-sobre-ball-boy-una-/2758145980925689/" target="_blank" rel="noopener noreferrer">Sobre Ball boy, Con Eugenia Zicavo. Leamos. 2019, Feria del libro de Buenos Aires.</a>
                        <a href="https://kosmopolis.cccb.org/ca/noticies/literatura-en-xarxa-a-k19/" target="_blank" rel="noopener noreferrer">Barcelona/ Buenos Aires, Once mil kilómetros. Kosmópolis 2019. Barcelona.</a>
                        <a href="https://www.periodistadigital.com/cultura/libros/20150211/tatiana-goransky-estuve-trabajando-mundo-porno-noticia-689400350426/" target="_blank" rel="noopener noreferrer">Periodista Digital, Sobre ¿Quién mató a la cantante de jazz”, cine, literatura. 2015.</a>
                        <a href="https://www.zendalibros.com/entrevista-tatiana-goransky/" target="_blank" rel="noopener noreferrer">Zenda Libros</a>
                        <a href="http://www.culturamas.es/blog/2015/09/09/cuestionario-literario-tatiana-goransky/" target="_blank" rel="noopener noreferrer">Culturamas</a>
                        <a href="http://www.eternacadencia.com.ar/blog/libreria/nueve-preguntas/item/hay-metodo-en-mi-locura.html" target="_blank" rel="noopener noreferrer">Eterna Cadencia</a>
                        <a href="https://www.fronterad.com/la-lectura-es-una-practica-que-enriquece-a-la-sociedad-y-muchas-veces-salva-al-individuo/" target="_blank" rel="noopener noreferrer">Frontera D</a>
                        <a href="http://almaenlaspalabras.blogspot.com.ar/2016/11/que-todo-en-la-vida-es-cine-en-el-blog.html" target="_blank" rel="noopener noreferrer">Alma en las palabras</a>
                        <a href="http://www.eternacadencia.com.ar/blog/libreria/imprescindibles/item/volumen-musical.html" target="_blank" rel="noopener noreferrer">Eterna Cadencia</a>
                        <a href="http://paraencenderunfuego.blogspot.com.ar/2014/11/tatiana-goransky.html?m=0" target="_blank" rel="noopener noreferrer">Para encender un fuego</a>
                        <a href="https://www.eternacadencia.com.ar/blog/contenidos-originales/entrevistas/item/los-escritores-fantasma.html" target="_blank" rel="noopener noreferrer">Eterna Cadencia</a>
                        <a href="https://www.youtube.com/watch?v=TMektL4sP5Y" target="_blank" rel="noopener noreferrer">Radio Mitre</a>
                        <a href="https://www.instagram.com/tv/CDFKBCpF6-I/?igshid=1g29qe76p6q6d" target="_blank" rel="noopener noreferrer">Editorial Ateneo</a>
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
                                <a href="/images/galeria6alta.JPG" download><img src={galeria6} alt="" ref={elementoRef6} className={`${styles["slide-in-left"]} ${isIntersecting6 ? styles.active : ''}`} /></a>
                                <h4>Sin crédito</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Prensa