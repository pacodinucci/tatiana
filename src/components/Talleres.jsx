import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/Talleres.module.css';

function Talleres() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n1cun6u', 'template_lns2nal', form.current, '-ab8SURfwZoUdHMj-')
            .then((result) => {
                console.log(result.text);
                setNombre('');
                setEmail('');
                setMensaje('');
                // setFormularioEnviado(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

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
                    <form action="" className={styles.form} ref={form} onSubmit={sendEmail}>
                        <input className={styles.input} type="text" name="user_name" id="" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input className={styles.input} type="email" name="user_email" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea className={styles.input} name="message" id="" cols="30" rows="10" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                        <input className={styles.input} type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Talleres;