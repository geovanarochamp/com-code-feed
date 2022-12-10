import styles from './Profile.module.css'
import { PencilLine } from "phosphor-react"
import { Avatar } from '../Avatar/Avatar'

export function Profile({ data }) {
    return (
        <aside className={styles.profileContent}> 
          <div className={styles.profileCover}> <img src={data.coverURL} /></div>

          <div className={styles.profileImg}>
            <Avatar hasBorder src={data.avatarURL} />   
                  
          </div>

          <strong>{data.name}</strong>
          <span>{data.role}</span>

          <div className={styles.separatorLine}></div>

          <a className={styles.editProfileButton} href="#">
            <PencilLine size={20}/> Editar seu Perfil</a>

        </aside>
    )
}