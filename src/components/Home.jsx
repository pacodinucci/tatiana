import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import useIntersection from '../hooks/useIntersection';
import styles from '../styles/Home.module.css';
import libro5 from '../assets/fade-out-1.png';
import libro6 from '../assets/mujerpocoprobable.png';
import libro7 from '../assets/quisieraamartemenos.png';
import imagenBio from '../assets/foto-1.png';
import bandera from '../assets/bandera.svg';
import NavBar from './NavBar';
import Footer from './Footer';



function Home() {

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

  const [elementoRef, isIntersecting] = useIntersection({
    threshold: 0.5,
  });

  const [elementoRef2, isIntersecting2] = useIntersection({
    threshold: 0.5,
  });


  return (
    <>
      <NavBar />
      <section>
        <div className={styles.landing_container}>
          <div className={styles.menu_landing}>

          </div>


          <div className={styles.name}>
            <h1 translate='no'>TATIANA</h1>
            <h1 translate='no'>GORANSKY</h1>
          </div>

        </div>
      </section>
      <section id="libros" className={styles.libros}>
        <div className={styles.galeria_container}>
          <div className={styles.ultimos}>
            <h2>ÚLTIMOS LIBROS</h2>
          </div>
          <div className={styles.galeria}>
            <a href="/libros/7"><img src={libro7} alt="" /></a>
            <a href="/libros/6"><img src={libro6} alt="" /></a>
            <a href="/libros/5"><img src={libro5} alt="" /></a>
          </div>
          <div className={styles.vermasbtn}>
            <a href="/libros">VER TODOS</a>
          </div>
        </div>

      </section>
      <section id="biografia">
        <div className={styles.bio_container}>
          <div className={styles.titulo_bio}>
            <h2>BIO</h2>
          </div>
          <div className={styles.biografia_container}>
            <div className={styles.biografia_content}>
              <img src={imagenBio} alt="" ref={elementoRef} className={`${styles["slide-in-right"]} ${isIntersecting ? styles.active : ''}`} />
              {/* <h2>BIOGRAFÍA</h2> */}
              <div ref={elementoRef2} className={`${styles.textosBio} ${styles["slide-in-left"]} ${isIntersecting ? styles.active : ''}`} >
                <p className={styles.textopc}>Tatiana Goransky nació en Buenos Aires en 1977, es escritora, dramaturga y cantante <br /> de jazz. Autora de las novelas Lulúpe María T (2005), ¿Quién mató a la cantante de <br /> jazz? (2008), Don del agua (2010), Ball boy (2013), Fade Out (2016), Quisiera amarte <br /> menos (2020) y La mujer poco probable (2021).<br />
                  En 2018 editó un número doble de la revista neoyorquina Los Bárbaros, que reúne a <br /> 43 autores de ocho países diferentes. En 2019, en Argentina y España, compiló la <br /> antología Barcelona/ Buenos Aires, Once Mil kilómetros, un puente entre ambas <br /> ciudades.<br />
                  Su trabajo ha sido publicado en Argentina, Chile, México, Bolivia, Ecuador, Alemania, <br /> Uruguay, España y los Estados Unidos.</p>
                <p className={styles.textomobile}>Tatiana Goransky nació en Buenos Aires en 1977, es escritora, dramaturga y cantante de jazz. Autora de las novelas Lulúpe María T (2005), ¿Quién mató a la cantante de jazz? (2008), Don del agua (2010), Ball boy (2013), Fade Out (2016), Quisiera amarte menos (2020) y La mujer poco probable (2021).<br />
                  En 2018 editó un número doble de la revista neoyorquina Los Bárbaros, que reúne a 43 autores de ocho países diferentes. En 2019, en Argentina y España, compiló la antología Barcelona/ Buenos Aires, Once Mil kilómetros, un puente entre ambas ciudades.<br />
                  Su trabajo ha sido publicado en Argentina, Chile, México, Bolivia, Ecuador, Alemania, Uruguay, España y los Estados Unidos.</p>
                <a href="/english"><img src={bandera} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className={styles.contacto}>
        <div className={styles.contacto_container}>
          <div className={styles.titulo_contacto}>
            <h2>CONTACTO</h2>
          </div>
          <form action="" className={styles.form} ref={form} onSubmit={sendEmail}>
            <input className={styles.input} type="text" name="user_name" id="" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input className={styles.input} type="email" name="user_email" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className={styles.input} name="message" id="" cols="30" rows="10" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} ></textarea>
            <input className={styles.input} type="submit" value="Enviar" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home