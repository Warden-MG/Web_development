import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import { EmptyCard } from "@/components/EmptyCard/emptycard";

export default function favourites() {
    return (
      <div className={styles.bg}>
        <h1>ИЗБРАННОЕ</h1>
        <div className={styles.content}>
          <EmptyCard/>
          <EmptyCard/>
          <EmptyCard/>
        </div>
      </div>  
    );
}