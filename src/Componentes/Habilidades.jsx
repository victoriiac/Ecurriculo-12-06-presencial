import style from './habilidades.module.css'

export function Habilidades(){
    return(
        
        <div className={style.comments}>
            <img src="data:image/png;base64,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" alt="" />
          
            <div className={style.commentsBox}>
            <div className={style.conteudoComments}>
                    <header>
                    <div>
                        <strong>Proatividade</strong>
                        </div>
                    </header>
                </div>


            <div className={style.conteudoComments}>
                    <header>
                    <div>
                        <strong>Trabalho em equipe</strong>
                        </div>
                    </header>
                </div>


            <div className={style.conteudoComments}>
                    <header>
                    <div>
                        <strong>Resiliência</strong>
                        </div>
                    </header>
                </div>


            <div className={style.conteudoComments}>
                    <header>
                    <div>
                        <strong>Flexibilidade</strong>
                        </div>
                    </header>
                </div>


            <div className={style.conteudoComments}>
                    <header>
                    <div>
                        <strong>Inteligencia emocional</strong>
                        </div>
                    </header>
                </div>
      </div>
      </div>
      
    )
    }