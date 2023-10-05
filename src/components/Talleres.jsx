import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        toast.success("¡Mensaje enviado con éxito!")
            .catch((error) => {
                toast.error("Error al mandar el mensaje.")
                console.log(error.text);
            });
    };

    return (
        <>
            <div className={styles.modal}>
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
            </div>
            <div className={styles.form_container}>
                <NavBar />
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
                <Footer />
            </div>
        </>
    )
}

export default Talleres;