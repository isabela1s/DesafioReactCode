import React from 'react'
import styles from './Home.module.css'
import savings from '../Img/casa.jpg'
import imagem from '../Img/pirulito.png'

function Home() {
    return(
        <section class={styles.home_container}>
            <h1>Bem-vindo ao <spam>Doces da Colina Jr</spam></h1>
            <p>Os melhores doces da cidade!</p>
            <ul class={styles.home_test}>
                <li>
            
            <img src={imagem} alt="Doces da colina"/>
            </li>
            <li>
            <img src={savings} alt="Doces da colina" />
            </li>
            <li>
            
            <img src={imagem} alt="Doces da colina"/>
            </li>
            
            </ul>
        </section>


    )
}

export default Home