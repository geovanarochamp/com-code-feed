import styles from './Avatar.module.css'

export function Avatar( props ) {
    return (
        <div className={styles.avatar}>
            <img src={props.src} />
        </div>
    )
}