import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/LeLectura.module.css';

function LeLectura() {
  return (
    <>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.lecture}>
                <div className={styles.titulo}>
                    <h3>La escritura del cuerpo</h3>
                    <p>Tatiana Goransky</p>
                </div>
                <div className={styles.texto}>
                    <p>Sin cuerpo no hay texto. Sin cuerpo no se puede narrar una historia. En el cuerpo está alojada la memoria más fuerte de todas, los grandes traumas, las satisfacciones, los rasguños de la vida cotidiana y las marcas, hasta la más pequeña de las marcas. Nuestro cuerpo es también una caja de reverberación que todo lo modifica. A veces los sonidos son armónicos, dulces, y el texto fluye con música suave. A veces son disonantes y se traducen en texto conflictivo, enfrentado, dicotómico. Otras, el sonido esconde un eco ominoso. Hay tantos tipos de sonidos como tipos de palabras. El cuerpo lo alberga todo, es nuestro mapa, nuestro continente, y se manifiesta cada vez que algo funciona mal o funciona demasiado bien. Esto es esencial a la hora de construir personajes, pero también al construir la obra en general. No hay nada como la memoria del cuerpo, fuera y dentro del papel. Y si alguna vez dijeron que el mundo era un escenario, ahora es más cierto que nunca. Nunca estuvimos tan expuestos, nunca tan solos. Porque esta novela está construida alrededor del deseo, siempre tan elusivo, siempre tan poderoso, siempre tan parecido a la escritura. Y ahí están ahora, contando sus historias en monólogos armados de palabras, que antes sólo eran sonidos enterrados en el cuerpo. Seis personajes que se encuentran en una trama construida para funcionar de manera polifónica.</p>
                    <p>Nunca mezquinamos tanto el cuerpo, escondiéndolo detrás de la tecnología, canjeando nuestra piel por un botón virtual. Antes la piel era el primer contacto que teníamos con todos, ahora el primer contacto está mediado. Nos escondemos detrás de las palabras que antes eran sonidos, que antes eran cuerpo, pero ya no es lo mismo. Esa mediación tecnológica nos expulsa de la escena, de nuestra escena, de nuestra propia vida. Podemos ser muchos al mismo tiempo, crear millones de personajes, escaparnos de nosotros mismos, ser lo que el otro quiere, diseñarnos a su antojo, vaciarnos. Entonces empecé a pensar qué sucedería si dejaba que seis personajes pusieran el cuerpo y se entregaran ahí, casi desnudos, en la página, con todas sus miserias y anhelos, con sus historias cruzadas, crudas, sin censura; con todo ese deseo que hace que el mundo avance y retroceda, que castiga con dicha y angustia; sin juzgarlos, exponiéndolos en todo su erotismo, su violencia, incluso su potencial de muerte.</p>
                    {/* <p>Porque esta novela está construida alrededor del deseo, siempre tan elusivo, siempre tan poderoso, siempre tan parecido a la escritura. Y ahí están ahora, contando sus historias en monólogos armados de palabras, que antes sólo eran sonidos enterrados en el cuerpo. Seis personajes que se encuentran en una trama construida para funcionar de manera polifónica.</p> */}
                    <p>Pero el cuerpo también es sexo, claro. Y pudor. El cuerpo es contenedor de amor y desgracia; y cuando algún personaje no puede escapar de su exceso, entonces sabemos que estamos frente a una tragedia. En este caso, una tragedia contada en seis monólogos y una confesión.</p>
                    <p>Desde el oficio de escribir, encuentro que cuando todo es posible, a veces nada es posible. En varias oportunidades descubrí que ponerme límites me ayudaba a darle más fluidez al texto. Termino y extraigo todo lo que está de más, confío en la economía que me propone cada novela y siempre que dudo prefiero subescribir a sobrescribir. Es que al sobrescribir estamos confiando poco en el lector. Así que, para mí, escribir también es un acto de fe, de confianza.</p>
                    <p>En Quisiera amarte menos recorté todos los lugares comunes del narrador. Primero los escribí, ojo, pero después los borré. Escribir esta novela fue casi como dirigir una obra de teatro, dándole a los actores toda la información sobre la vida de sus personajes para después pedirles que dijeran una sola línea que contuviera todo. Pidiéndoles que fueran extremadamente precisos al dar información, que supieran que lo dicho iba a llevar al lector (espectador) a una comprensión más profunda. Como ejemplo de esto puedo contar que dentro del libro se narra un crimen que aconteció de verdad, un feminicidio que ocurrió en una provincia argentina. Esto lo cuento acá, pero en el texto funciona construyendo a dos de los personajes principales. Ese feminicidio es fundacional, es una marca en el cuerpo de una provincia entera, de un país; y, sin embargo, no es el centro de la trama. Así como esto, hay muchas otras cosas que se disparan a través de las palabras, que ensanchan el mundo de los personajes y de la obra. Quisiera amarte menos es un texto sobre cómo el amor puede destruirlo todo y, a su vez, ese acto de destrucción puede refundar un amor nuevo. Es un texto sexual y violento, pero contiene muchísima ternura. Es un texto muy explícito que no teme profundizar en las fantasías, que se aleja de la corrección política, que intenta generar muchas más preguntas que respuestas. Porque todas y todos somos capaces de llegar al límite. La diferencia entre actuar y no actuar está, a veces, mucho más cerca de lo que nos gustaría.</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default LeLectura;