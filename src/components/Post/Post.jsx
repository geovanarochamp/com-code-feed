import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'


export function Post({ author, publishedAt }) {
    
    return (
        <div className={styles.postWrapper}>
            <div className={styles.post}>
                <header>
                    <div className={styles.author}>                        
                        <Avatar hasBorder src={author.avatarURL}/>
                        
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>
                    <time title='06 de Dezembro de 2022' dateTime='06-12-2022 08:30:34'>Publicado há 1h</time>
                </header>

                <div className={styles.postContent}>
                    <p>Faaaaaala! </p>

                    <p>Amanhã às 9h temos um encontro marcado para mais um Live CoDe!  🚀</p>

                    <p>Vamos continuar o projeto do Pomodoro. Esse vai ser o segundo Live CoDe no mesmo projeto. Se você não estava no primeiro evento ou não viu a gravação é muito legal assistir hoje para já chegar sabendo o que está acontecendo! </p>

                    <p>👉 O link para a gravação do primeiro evento do Live CoDe sobre o Pomodoro está aqui:
                    <a href="#"> https://<wbr />app.nutror.com<wbr />/v3/curso<wbr />/6bdfb50e6f2579177147aad1ac55a<wbr />a085eb54342/aula/5959050</a></p>

                    <p><a href="#">#livecode</a> <a href="#">#pomodoro</a></p>
                </div>

                <div className={styles.separatorLine}></div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <form>
                        <textarea placeholder="Escreva aqui um comentário..." />
                        <footer>
                            <button className={styles.publishBtn}>Publicar</button>
                        </footer>
                    </form>
                </form>   

                <div className={styles.commentsList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>                                         
            </div>                    
        </div>
    )
}