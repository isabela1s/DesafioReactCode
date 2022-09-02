import React from 'react'
import imagem from '../Img/brownie-8.jpeg'
import styles from './Contato.module.css'

function Contato() {
    return (
       
            <section class={styles.contato}>
                
                
                <p class={styles.contatoa}>
                    Rua Junior dos santos Silva, 1010 - Diamantina<br />
                
                    (55) 95555-5555/ (55) 99999-9999<br />
                    Pedidos em: junior.dorival@gmail.com
                </p>

                <ul class={styles.contatob}>
                <li>
                <img src={imagem} alt="Doces da colina" />
                </li>
                </ul>

            </section>)

}

export default Contato