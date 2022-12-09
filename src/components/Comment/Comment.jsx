import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { HandsClapping, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.commentWrapper}>
            <Avatar hasBorder={false} src="https://github.com/geovanarochamp.png" />
            <div className={styles.comment}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Devon Lane</strong>
                            <time title='06 de Dezembro de 2022' dateTime='06-12-2022 08:30:34'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário"><Trash size={24}/></button>
                    </header>
                    <p>Muito bom! Parabéns! 👏👏</p>
                </div>
                <footer>
                    <button><HandsClapping size={20} /> Aplaudir • <span>03</span></button>
                </footer>
            </div>
        </div>
    )
}