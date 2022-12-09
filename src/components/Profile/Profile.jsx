import styles from './Profile.module.css'
import { PencilLine } from "phosphor-react"
import { Avatar } from '../Avatar/Avatar'

export function Profile() {
    return (
        <aside className={styles.profileContent}> 
          <div className={styles.profileCover}> <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" /></div>

          <div className={styles.profileImg}>
            <Avatar hasBorder src="https://github.com/pedromarins.png" />   
                  
          </div>

          <strong>Pedro Marins</strong>
          <span>Mentor</span>

          <div className={styles.separatorLine}></div>

          <a className={styles.editProfileButton} href="#">
            <PencilLine size={20}/> Editar seu Perfil</a>

        </aside>
    )
}