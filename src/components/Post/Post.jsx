import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'


export function Post({ author, publishedAt, content }) {
    
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
                    {
                        // console.log(content)
                        content.map(line => {                            
                            if (line.type === 'paragraph') {
                                console.log("oi")
                                return <p>{line.content}</p>

                            } else if (line.type === 'link') {
                                return <p><a href='#'>{line.content}</a></p>
                            }
                        })
                    }
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