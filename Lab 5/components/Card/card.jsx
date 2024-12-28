import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = ({name, id, img}) => {
    return (
       
            <div className={styles.card}>
            
                <Link href={`/${id}`}>
                    <Image className={styles.image} layout="fill" objectFit="cover" src={`/media/${img}`} alt="Картинка" />
                    <h2 className={styles.content}>{name ?? "Название товара"}</h2>
                 </Link>
            </div>
         
    );
}   