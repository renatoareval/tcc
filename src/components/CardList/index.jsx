import axios from "axios"
import { useState, useEffect } from "react"
import Card from "../Card"
import styles from "./styles.module.css"

export default function CardList() {

    const [cards, setCards] = useState([

    ])

    useEffect(() => {
        axios.get("http://localhost:3000/api/publicacoes")
            .then(resposta => setCards(resposta.data))
    }, [])

    return (
        <div className={styles.cardlist}>
            {cards.map(c => (
                <Card
                    key={c.id}
                    titulo={c.titulo}
                    autor={c.autor}
                    orientador={c.orientador}
                />
            ))}
        </div>
    )
}