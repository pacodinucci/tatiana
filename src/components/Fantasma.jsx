import React from 'react';
import styles from '../styles/Fantasma.module.css';
import NavBar from './NavBar';
import yt from '../assets/youtube.svg';
import Footer from './Footer';

function Fantasma() {
  return (
    <>
        <NavBar/>
        <section>
            <div className={styles.header}>
                <span><p className={styles.negrita}>Estoy acostumbrado a borrarme de las páginas,</p> para eso me pagan. Para vivir diferentes vidas en mi cabeza por un tiempo limitado y transcribirlas al papel. Luego, ellos o ellas las firman y yo <p className={styles.negrita}>desaparezco.</p> Son dueños del corte final, pueden sacar aquello con lo que no estén de acuerdo. Eso es lo que suele estar en los contratos, contratos larguísimos que siempre terminan con un anexo donde se firma el acuerdo de confidencialidad. Piedra angular de mi trabajo, la que me emparienta con sacerdotes, psiquiatras, psicólogos, abogados, periodistas. Un grupo de <p className={styles.negrita}>cuidadores de secretos</p> que, con mayor o menor rigurosidad, tenemos almacenadas palabras que no podemos soltar. Nuestras situaciones son distintas: algunos pueden soltarlas si las vidas de los que las profirieron corren peligro; otros, si los que hablan representan una amenaza contra la sociedad. Lo mío es más borroso, <p className={styles.negrita}>no hay reglas universales del escritor fantasma,</p> no es una profesión registrada, no se enseña en las universidades, es una vocación. Es salirse de la página, extirparse del mundo. <p className={styles.negrita}>Somos los ausentes.</p></span>
                <h4>Extracto de la novela<p style={{ fontStyle: "italic"}}>Fade Out</p></h4>
            </div>
        </section>
        <section>
            <div className={styles.fantasma_content}>
                <span className={styles.texto}>
                    <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>¿Cómo perciben los ghostwriters su trabajo? ¿Cuándo escriben para ellos mismos y cuándo para los demás? ¿Llegan a sentir compromiso afectivo con los libros? ¿Son merecensarios de las letras? ¿Cuándo participan de las ganancias? ¿Su trabajo afecta su propia obra literaria o pueden desarrollarla a la par?</p>
                    <p>Novelas, artículos, biografías y cuentos han sido escritos bajo el nombre de otra persona. Son muchos los fantasmas literarios que transitan por los libros. Profesionales a quienes se les contrata para redactar en la sombra textos que después firman otros.</p>
                    <p>La escritora y ghostwriter Tatiana Goransky responsponde a estas preguntas en la siguiente entrevista:</p>
                </span>
                <div className={styles.video} style={{marginTop: "-10vh", marginBottom: "10vh"}}>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/ir0HcuiEyRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.reproductor}></iframe>
                    <a className={styles.btn} href="https://www.youtube.com/@tatianagoransky" target="_blank">
                        <img src={yt} alt="" />
                        <h4>VER MÁS</h4>
                    </a>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Fantasma