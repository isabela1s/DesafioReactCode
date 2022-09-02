import React from 'react'
import Styles from './LoginForm.module.css'
import Input from  '../form/Input'
import SubmitButton from '../form/SubmitButton'

function LoginForm({btnText}){
    return (
        <form class={Styles.form}>
            <Input type="text"
             text="Nome"
             name="name"
             placeholder="Insira o seu nome"/>
             <Input 
             type="number"
             text="Senha"
             name="budget"
             placeholder="Insira a sua senha"/>

            <SubmitButton text={btnText} />

        </form>


    )

}
export default LoginForm