import React from 'react'
import styles from './SobreNos.module.css'
import savings from '../Img/CBPFOT190320190405-550x366.jpg'


function SobreNos(){

    return( <section class={styles.sobre}>  
        <h1>O Doces da Colina Hoje</h1>
        <p> O Doces da Colina Jr continua crescendo e inovando, proporcionando momentos únicos e com muito sabor em seus produtos. Nossa loja tem o ar aconchegante para você apreciar uma bom café juntamente com alguns de nossos doces. Contamos com muitas opções de bolos, doces e salgados para agradar a todos e oferecer ao cliente, o cardápio certo para suas comemorações. Somos referência em buffets corporativos, atuando em várias empresas com coffees, brunchs, almoços e coquetéis com todos os ingredientes selecionados. Ao longo da nossa trajetória, tivemos o prazer de trabalhar com clientes renomados que confiam no nosso trabalho. Estamos sempre procurando e proporcionando ao cliente experiências gastronômicas para ficarem marcadas na memória.</p>
        <ul class={styles.sobreimg}>
            <li><img src={savings} alt="Doces da colina" /></li></ul>
</section>)}

export default SobreNos

