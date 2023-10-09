import React from 'react';
import styles from '../styles/Fantasma.module.css';
import NavBar from './NavBar';
import yt from '../assets/youtube.svg';
import imagen from '../assets/imagen-fantasma.png';
import Footer from './Footer';

function Fantasma() {
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
            <section style={{ background: '#000' }} className={styles.fantasmahdp}>
            <NavBar />
                <div className={styles.landing}>
                    <h1>ESCRITORA FANTASMA</h1>
                </div>
            </section>
            <section>
                <div className={styles.header}>
                    <span><p className={styles.negrita}>Estoy acostumbrado a borrarme de las páginas,</p> para eso me pagan. Para vivir diferentes<br /> vidas en mi cabeza por un tiempo limitado y transcribirlas al papel. Luego, ellos o<br /> ellas las firman y yo <p className={styles.negrita}>desaparezco.</p> Son dueños del corte final, pueden sacar aquello<br /> con lo que no estén de acuerdo. Eso es lo que suele estar en los contratos, contratos<br /> larguísimos que siempre terminan con un anexo donde se firma el acuerdo de<br /> confidencialidad. Piedra angular de mi trabajo, la que me emparienta con sacerdotes,<br /> psiquiatras, psicólogos, abogados, periodistas. Un grupo de <p className={styles.negrita}>cuidadores de secretos</p><br /> que, con mayor o menor rigurosidad, tenemos almacenadas palabras que no podemos<br /> soltar. Nuestras situaciones son distintas: algunos pueden soltarlas si las vidas de los que las profirieron corren peligro; otros, si los que hablan representan una amenaza<br /> contra la sociedad. Lo mío es más borroso, <p className={styles.negrita}>no hay reglas universales del escritor<br /> fantasma,</p> no es una profesión registrada, no se enseña en las universidades, es una<br /> vocación. Es salirse de la página, extirparse del mundo. <p className={styles.negrita}>Somos los ausentes.</p></span>
                    <h4>Extracto de la novela<p style={{ fontStyle: "italic" }}>Fade Out</p></h4>
                </div>
            </section>
            <section>
                <div className={styles.fantasma_content}>
                    <span className={styles.texto}>
                        <p>¿Cómo perciben los ghostwriters su trabajo? ¿Cuándo escriben para ellos mismos y cuándo<br /> para los demás? ¿Llegan a sentir compromiso afectivo con los libros? ¿Son merecensarios<br /> de las letras? ¿Cuándo participan de las ganancias? ¿Su trabajo afecta su propia obra<br /> literaria o pueden desarrollarla a la par?</p>
                        <p>Novelas, artículos, biografías y cuentos han sido escritos bajo el nombre de otra<br /> persona. Son muchos los fantasmas literarios que transitan por los libros.<br /> Profesionales a quienes se les contrata para redactar en la sombra textos que después<br /> firman otros.</p>
                        <p>La escritora y ghostwriter Tatiana Goransky responsponde a estas preguntas en la<br /> siguiente entrevista:</p>
                    </span>
                    <div className={styles.video} style={{ marginTop: "-10vh", marginBottom: "10vh" }}>
                        <img className={styles.imagen} src={imagen} alt="" />
                        <a className={styles.btn} href="https://www.youtube.com/watch?v=hE6FQKFE2kM&t=531s" target="_blank">
                            <img src={yt} alt="" />
                            <h4>VER VIDEO</h4>
                        </a>
                    </div>
                </div>
            <Footer />
            </section>
        </>
    )
}

export default Fantasma