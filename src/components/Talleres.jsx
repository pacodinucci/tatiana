import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/Talleres.module.css';

function Talleres() {
  return (
    <>
        <NavBar />
        <div className={styles.form_container}>
            <div className={styles.header}>
                <h2>TALLERES Y CLÍNICA DE OBRA</h2>
            </div>
            <div className={styles.contacto}>
                <div className={styles.titulo}>
                    <h2>Dejá tu consulta:</h2>
                </div>
                <form action="" className={styles.form}>
                    <input className={styles.input} type="text" name="" id="" placeholder="Nombre"/>
                    <input className={styles.input} type="email" name="" id="" placeholder="Email"/>
                    <textarea className={styles.input} name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <input className={styles.input} type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Talleres;