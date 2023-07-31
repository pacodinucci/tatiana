import React from 'react';
import styles from '../styles/Fantasma.module.css';
import NavBar from './NavBar';
import fotofant from '../assets/fotofant.png';

function Fantasma() {
  return (
    <>
        <NavBar/>
        <section>
            <div className={styles.header}>
                <p>Novelas, artículos, biografías y cuentos han sido escritos bajo el nombre de otra persona. Son <br/> muchos los fantasmas literarios que transitan por los libros. Profesionales a quienes se les <br/> contrata para redactar en la sombra textos que después firman otros. <br/> <br/> 
                Los escritores fantasmas o ghostwriters en su acepción en inglés trabajan a la sombra por encargo <br/> y bajo el nombre de otros. ¿Cómo perciben los ghostwriters su trabajo? ¿Cuándo escriben para ellos <br/> mismos y cuándo para los demás? ¿Llegan a sentir compromiso afectivo con los libros? ¿Son <br/> mercenarios de las letras? ¿Cuándo participan de las ganancias? ¿Su trabajo afecta su propia obra <br/> literaria o pueden desarrollarla a la par? Estas son algunas de las cuestiones sobre las que <br/> Lilian Neuman conversó con la escritora y ghostwriter <br/>
                Tatiana Goransky en esta entrevista.</p>
            </div>
        </section>
        <section>
            <div className={styles.fantasma_content}>
                <p>Novelas, artículos, biografías y cuentos han sido escritos bajo el nombre de otra persona. Son <br/> muchos los fantasmas literarios que transitan por los libros. Profesionales a quienes se les <br/> contrata para redactar en la sombra textos que después firman otros. <br/> <br/> 
                    Los escritores fantasmas o ghostwriters en su acepción en inglés trabajan a la sombra por encargo <br/> y bajo el nombre de otros. ¿Cómo perciben los ghostwriters su trabajo? ¿Cuándo escriben para ellos <br/> mismos y cuándo para los demás? ¿Llegan a sentir compromiso afectivo con los libros? ¿Son <br/> mercenarios de las letras? ¿Cuándo participan de las ganancias? ¿Su trabajo afecta su propia obra <br/> literaria o pueden desarrollarla a la par? Estas son algunas de las cuestiones sobre las que <br/> Lilian Neuman conversó con la escritora y ghostwriter <br/>
                    Tatiana Goransky en esta entrevista.</p>
                <img src={fotofant} alt="" />
            </div>
        </section>
    </>
  )
}

export default Fantasma