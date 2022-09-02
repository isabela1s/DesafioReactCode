import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../components/Img/Ico.ico'
import React from "react"

function Navbar()
{
    return(
        <nav Class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Doces da colina" />
                </Link>

                <h1 Class={styles.itemb}>Doces da Colina Jr</h1>

                <ul Class={styles.list}>
                    
                    <li Class={styles.item}>
                <Link to="/contato">Contato</Link>
                    </li>
                    

                    <li Class={styles.item}>
                <Link to="/home">Home</Link>
                    </li>
                    <li Class={styles.item}>
                <Link to="/SobreNos">Sobre Nós</Link>
                    </li>
                    <li Class={styles.item}>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    ) 
}
export default Navbar