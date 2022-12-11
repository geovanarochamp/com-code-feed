import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { HandsClapping, Trash } from 'phosphor-react'

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.commentWrapper}>
            <Avatar hasBorder={false} src="https://github.com/geovanarochamp.png" />
            <div className={styles.comment}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Geovana Rocha</strong>
                            <time title='06 de Dezembro de 2022' dateTime='06-12-2022 08:30:34'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário"><Trash size={20}/></button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button title="Aplaudir comentário"><HandsClapping size={20} /> Aplaudir • <span>03</span></button>
                </footer>
            </div>
        </div>
    )
}