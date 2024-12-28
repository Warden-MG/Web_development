import { Card } from "@/components/Card/card";
import prisma from "../lib/prisma"
import styles from "@/app/page.module.css";
import Image from "next/image";



export default async function Home() {
  const cardList = await prisma.travelCard.findMany();


  return (
    <div className="body">
    <div className={styles.content}> 
      <div className={styles.face}>

        <div className={styles.promo}>
          <h1>ВОЗМОЖНОСТЬ ПУТЕШЕСТВОВАТЬ!</h1>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <h2>ОБЛЕТАЙ ВОКРУГ СВЕТА,<br></br>ОФОРМИВ  ТУР!</h2>
        </div>
        
        <div className={styles.faceimage}>
          <Image className={styles.item} src={"/faceimage.svg"} alt={"Лицевая картинка"} width={500} height={500}></Image>
        </div>


      </div>


      <div className={styles.recommendations}>

        <a name="tour"></a><h1>ГОРЯЧИЕ ТУРЫ</h1>
        <hr width='100%' size="7" color="white"></hr>

        <div className={styles.reccontent}>

          {
            cardList.map((item) => {
              return (
                <Card 
                key={item.id} 
                name={item.title} 
                description={item.content} 
                price={item.price} 
                id = {item.id}
                length = {item.length}
                date = {item.date}
                place = {item.place}
                img = {item.name_photo}
                />
              )
            })
          }

        </div>
      </div>

    </div>
    </div >
  );
}
