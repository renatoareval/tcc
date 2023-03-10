import styles from "./styles.module.css"

export default function Card({ titulo, autor, orientador }) {
    return (
        <div className={styles.card}>
            <div>
                {titulo}
            </div>
            <div>
                Autor(a):{autor}
            </div>
            <div>
                Orientador(a):{orientador}
            </div>
        </div>
    )
}