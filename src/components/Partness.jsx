import styles from './Partness.module.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import ford from "./../assets/partness/ford.png";
import valeDoDende from "./../assets/partness/valeDoDende.png";
import rarum from "./../assets/partness/rarum.png";
import semdec from "./../assets/partness/semdec.png";
import boraAmbev from "./../assets/partness/boraAmbev.jpg";
import aimoTech from "./../assets/partness/aimoTech.png";

export function Partness() {
    const realizationsLogos = [
        {
            id: 1,
            src: aimoTech,
            alt: "Logo Aimo Tech",
        },
    ];
    const institutionalSupportLogos = [
        {
            id: 1,
            src: valeDoDende,
            alt: "Logo Vale Do Dendê",
        },
        // {
        //     id: 2,
        //     src: rarum,
        //     alt: "Logo Rarum",
        // },
    ];

    const sponsorshipLogos = [
        {
            id: 1,
            src: ford,
            alt: "Logo Ford",
        },
        {
            id: 2,
            src: semdec,
            alt: "Logo Semdec",
        },
        // {
        //     id: 3,
        //     src: boraAmbev,
        //     alt: "Logo Bora Ambev",
        // },
    ];

    return (
        <section className={styles.companies} id="partness">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Quem Colou Conosco?</motion.h2>

                <div className={styles.sliderContainer}>
                    <h3>Realização</h3>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1920: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },

                        }}
                    >
                        <div className={styles.imgs}>
                            {realizationsLogos.map((logo) => (
                                <SwiperSlide key={logo.id}>
                                    <div className={styles.containerImg}>
                                        <img src={logo.src} alt={logo.alt} title={logo.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>

                <div className={styles.sliderContainer}>
                    <h3>Patrocínio</h3>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1920: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },

                        }}
                    >
                        <div className={styles.imgs}>
                            {sponsorshipLogos.map((logo) => (
                                <SwiperSlide key={logo.id}>
                                    <div className={styles.containerImg}>
                                        <img src={logo.src} alt={logo.alt} title={logo.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>

                <div className={styles.sliderContainer}>
                    <h3>Apoio Institucional</h3>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1920: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },

                        }}
                    >
                        <div className={styles.imgs}>
                            {institutionalSupportLogos.map((logo) => (
                                <SwiperSlide key={logo.id} className={styles.swiperSlide}>
                                    <div className={styles.containerImg}>
                                        <img src={logo.src} alt={logo.alt} title={logo.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </article>
        </section>
    )
}
