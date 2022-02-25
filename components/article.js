import styles from "./article.module.css"

export default function Article({children}){
    return (
        <article className={styles.article}>
            {children}
        </article>
    )
}
