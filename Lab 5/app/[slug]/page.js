import prisma from "@/lib/prisma";
import Image from "next/image";
import styles from "@/app/[slug]/page.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper";

export async function generateStaticParams() {
    const cards = await prisma.travelCard.findMany();
   
    return cards.map((card) => ({
      slug: card.id,
    }))
  }

export default async function DetailPage({ params }){
    
    const slug = (await params).slug

    const card = await prisma.travelCard.findFirst({
        where: {
            id: slug
        }
    });

     // Массив с именами картинок для слайдера
    //  const images = [`/media/${card.name_photo}`, "/media/photo2.jpg", "/media/photo3.jpg"]; // Замените фото на реальные данные


    return(
        <>
            <div className={styles.item}>
                <div className={styles.itemLeft}>
                    <div className={styles.itemImg}>
                         {/* Слайдер
                         <Swiper
                            modules={[Navigation]}
                            navigation
                            spaceBetween={50}
                            slidesPerView={1}
                            loop
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img}
                                        alt={`Фото ${index + 1}`}
                                        width={950}
                                        height={510}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                        <Image  width={950} height={510} src={`/media/${card.name_photo}`} alt="Картинка" />
                        <div className={styles.itemImgInfo}>
                            <h2>{card.title}</h2>
                            <h2>{card.price}</h2>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h2 className={styles.itemTitle}>{card.title}</h2>
                        <p className={styles.itemTextContent}>{card.content}</p>
                    </div>
                </div>
                <div className={styles.itemRight}>
                    <div className={styles.itemSlogan}><span>ПУТЕ</span> <br /> ШЕСТВУЙ <br /> ВЕЗДЕ!</div>
                    <div className={styles.itemSloganSubtitle}>Онлайн-Сервис услуг <br /> для ПУТЕШЕСТВИЙ</div>
                    <a className={styles.itemBtn} >
                        <span className={styles.itemFavirote}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ffffff"></path> 
                            </g>
                        </svg>
                        </span>
                        <span>Оформить</span></a>
                </div>
            </div>
            {/* <h2>{card.length}</h2>
            <h2>{card.content}</h2>
            <h2>{card.price}</h2>
            <h2>{card.length}</h2>
            <h2>{card.date}</h2>
            <h2>{card.place}</h2>
            <Image  width={400} height={400} src={`/media/${card.name_photo}`} alt="Картинка" /> */}
        </>
    );
    
}