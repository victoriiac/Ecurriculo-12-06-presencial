
import { Post } from './Componentes/Post'
import { Header } from './Componentes/Header'
import { Sidebar } from './Componentes/Sidebar'
import './styles.global.css'
import styles from './app.module.css'

export default function App() {

  return (
      
    /*div de todas*/ <div> 


        <Header />

          <div className={styles.wrapper}>  { /*div com sidebar e post*/}
          
           <Sidebar/>

             <main>      {/*parte principal*/ }
              <Post />
             </main>



          </div>


    </div> /*fim div de todas*/
     
  )
}


