import Image from "next/image";
import styles from './styles.module.css'

export default function Header() {
    return (

        <header className={styles.header}>
            <div>
                <Image
                    src="/logo-ifro.svg"
                    alt="Logotipo do IFRO"
                    width="79"
                    height="112" 
                />
            </div>
            <div>
                Repositório de TCC do Bacharelado em Arquitetura e Urbanismo
            </div>
        </header>
    )
}