import styles from './Profile.module.css'

export function Profile() {
    return (
        <aside className={styles.profileContent}> 
          <div className={styles.profileCover}> <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" /></div>

          <div className={styles.profileImg}> <img src="https://github.com/geovanarochamp.png" /></div>

          <strong>Geovana Rocha</strong>
          <p>Desenvolvedora Front-End</p>

          <div className={styles.separatorLine}></div>

          <a className={styles.editProfileButton} href="#"><img src="./src/assets/icon-editprofile.svg" /> Editar seu Perfil</a>

        </aside>
    )
}