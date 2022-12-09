import styles from './Avatar.module.css'

export function Avatar( { hasBorder, src } ) {
    return (
        <div className={hasBorder ? styles.avatar : ""}>
            <img className={styles.avatarImg} src={src} />
        </div>
    )
}