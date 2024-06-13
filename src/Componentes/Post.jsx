import { Comments } from './Comments'
import { Educacao } from './Educacao'
import { Habilidades } from './Habilidades'
import style from './post.module.css'


export function Post(){
    return(
     <article className={style.post}>
        <header>  
            <div className={style.author}>
               <img className={style.avatar}src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png"/>
                         <div className={style.authorInfo}> 
                           <strong> Enzo Gabriel de Souza </strong>
                            <span> Vendedor de miçangas</span>
                         </div>
            </div>
         </header>
         <div className={style.conteudo}>
            <p>Sobre</p>
            <p>Busco uma oportunidade para aplicar minhas habilidades e conhecimentos dentro do mercado de empreendedorismo e vendas, contribuindo para o crescimento e sucesso da organização.
               Profissional dedicado e proativo com experiência em vendas, e possuo habilidades sólidas dentro do ramo. Sou comprometido com a excelência, capaz de trabalhar de forma independente ou em equipe para alcançar metas e objetivos estabelecidos.</p>
            <p>  <a href=""> Repositório </a>  </p>
            <p>  <a href=""> Último Projeto </a>  </p>
            </div>
            
        <br></br>    
        <hr></hr>
        <br></br> 

            <form className={style.commentsForm}>
                <strong>Experiência Profissional</strong>
            </form>



        

            <div>

<Comments/>
<br></br>    
        <hr></hr>
        <br></br> 

        <form className={style.commentsForm}>
                <strong>Educação</strong>
            </form>

<Educacao />

<br></br>    
        <hr></hr>
        <br></br> 

        <form className={style.commentsForm}>
                <strong>Habilidades</strong>
            </form>

<Habilidades />

            </div>

      </article>
       
    )
}