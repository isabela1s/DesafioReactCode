import React from 'react'
import styles from './Login.module.css'
import LoginForm from '../login/LoginForm'
function Login()
{

    return(
        <div class={styles.login_container}>
        <h1>Fazer login</h1>
        <LoginForm btnText="Entrar" />
        </div>
    )
}

export default Login