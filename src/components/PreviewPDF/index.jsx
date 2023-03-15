import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import styles from "./styles.module.css"


export default function PreviewPDF() {

    const router = useRouter();
    const { id } = router.query;

    const [publicacao, setPublicao] = useState({})

    useEffect(() => {
        axios.get(`/api/publicacoes/${id}`)
            .then(response => setPublicao(response.data))
    }, [router])

    return (
        <>
           <p>Titulo:{publicacao.titulo}</p>
           <p>Autor:{publicacao.autor}</p>
           <p>Orientador:{publicacao.orientador}</p>
            <iframe src={publicacao.arquivo} className={styles.pdf}>

            </iframe>
        </>
    )
}