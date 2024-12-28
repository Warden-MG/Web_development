import styles from "./emptycard.module.css";
import Link from "next/link";
import Image from "next/image";

export const EmptyCard = () => {
    return (
       
            <div className={styles.emptycard}>
               <Link href="/#tour"><img className={styles.plus} src={"/Plus.svg"} alt={"Избранное"}></img></Link>
            </div>
         
    );
}   