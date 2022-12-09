import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Posts.module.css'

export function Post() {
    return (
        <div className="posts">
            <div className={styles.post}>
                <header>
                    <div className={styles.author}>                        
                        <Avatar hasBorder src="https://github.com/geovanarochamp.png"/>
                        
                        <div className={styles.authorInfo}>
                            <strong>Geovana Rocha</strong>
                            <span>Dev Front-End</span>
                        </div>
                    </div>
                    <time title='06 de Dezembro de 2022' dateTime='06-12-2022 08:30:34'>Publicado há 1h</time>
                </header>

                <div className={styles.postContent}>
                    <p>Fala galeraa 👋</p>

                    <p>Contruí um sistema de busca de usuários do github e foi minha primeira aplicação react. 🚀</p>

                    <p>Quem puder ir dar uma olhada, e adicionar o user de vocês para ver se está tudo ok!</p>

                    <p><a href="#">👉 github.com/geovanarochamp/search-github-users</a></p>

                    <p><a href="#">#novoprojeto</a> <a href="#">#reactjs</a> <a href="#">#javascript</a></p>
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