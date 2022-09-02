import React from 'react'
import styles from './SubmitButton.module.css'

function SubmitButton({text})
{
return(
    <div>
        <button class={styles.btn}>{text}</button>
    </div>

)


}
export default SubmitButton