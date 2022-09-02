import { FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import React from "react"
import styles from  './Footer.module.css'

function Footer (){
    return(
        <footer  class={styles.footer}>
        <ul Class={styles.social_list}>
            <li>
                <FaFacebook />
            </li>

            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
            </ul>

            <p><spam>Doces da colina</spam> &copy; 2022</p>
            </footer>
    )
}
export default Footer