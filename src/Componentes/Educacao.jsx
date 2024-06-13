import style from './educacao.module.css'


export function Educacao(){
    return(

        <div className={style.comments}>
            <img src="data:image/png;base64,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" alt="" />
        <div className={style.commentsBox}>
        <div className={style.conteudoComments}>
                <header>
                <div>
                    <strong>Ensino Médio completo</strong>
                    </div>
                </header>
                <p>E.E Gloria Macedo 1996-1998</p>
                </div>


        <div className={style.conteudoComments}>
                <header>
                <div>
                    <strong>Rio Pomba Valley</strong>
                    </div>
                </header>
                <p>Desenvolvedor FullStack 1999-2000</p>
                </div>


        <div className={style.conteudoComments}>
                <header>
                <div>
                    <strong>Sebrae(EaD)</strong>
                    </div>
                </header>
            <p>Empreendedorismo</p>
            </div>
  



    </div>
</div>
         


    )
}