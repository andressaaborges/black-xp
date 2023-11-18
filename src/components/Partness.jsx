import styles from './Partness.module.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import polkadot from "./../assets/partness/Polkadot_Logo_Horizontal_Black.svg";
import refaz from "./../assets/partness/Profile_Refaz.png";
import polkaPink from "./../assets/partness/Polkadot_Logo_Horizontal_WhiteOnPink.png";

export function Partness() {
    const institutionalSupportLogos = [
        {
            id: 1,
            src: refaz,
            alt: "Logo da Refaz",
        },
        {
            id: 2,
            src: polkadot,
            alt: "Logo da Refaz",
        },
        {
            id: 3,
            src: polkaPink,
            alt: "Logo da Refaz",
        },
        {
            id: 5,
            src: refaz,
            alt: "Logo da Refaz",
        },
        {
            id: 6,
            src: refaz,
            alt: "Logo da Refaz",
        },
    ];

    const sponsorshipLogos = [
        {
            id: 1,
            src: polkadot,
            alt: "Logo da Refaz",
        },
        {
            id: 2,
            src: refaz,
            alt: "Logo da Refaz",
        },
        {
            id: 3,
            src: polkaPink,
            alt: "Logo da Refaz",
        },
        {
            id: 5,
            src: refaz,
            alt: "Logo da Refaz",
        },
        {
            id: 6,
            src: refaz,
            alt: "Logo da Refaz",
        },
    ];

    return (
        <section className={styles.companies} id="partness">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Quem Colou Conosco?</motion.h2>

                <div className={styles.sliderContainer}>
                    <h3>Apoio Institucional</h3>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
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
                                <img src={logo.src} alt={`Logo`} title={`Logo`} />
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
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },

                        }}
                    >
                        <div className={styles.imgs}>
                            {sponsorshipLogos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <img src={logo.src} alt={`Logo ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </article>
        </section>
    )
}
