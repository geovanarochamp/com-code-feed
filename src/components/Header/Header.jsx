import styles from './Header.module.css'

import comcodeLogo from '../../assets/favicon.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={comcodeLogo} alt="logo da comunidade code" />
            <h1>ComCode Feed</h1>
        </header>
    )
}