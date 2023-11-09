import { CardTalents } from './CardTalents';
import styles from './Inspirations.module.css';
import personIvannide from './../assets/persons/ivannide-rodrigues-doutora-honoris-causa.jpg';
import personNegraJho from './../assets/persons/negra-jhô.png';
import personDanielPintto from './../assets/persons/prof-daniel-pintto.jpeg';
import personChica from './../assets/persons/chica-do-pandeiro.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: personIvannide,
            name: "Ivannide Rodrigues",
            surname: "Santa Barbara",
            companies: "Doutora Honoris Causa"
        },
    },
    {
        id: 2,
        talent: {
            photo: personNegraJho,
            name: "Negra",
            surname: "Jhô",
            companies: "Criadora do Instituto Kimundo"
        },
    },
    {
        id: 3,
        talent: {
            photo: personDanielPintto,
            name: "Daniel",
            surname: "Pintto",
            companies: "Professor e Escritor"
        },
    },
    {
        id: 4,
        talent: {
            photo: personChica,
            name: "Chica",
            surname: "do Pandeiro",
            companies: "Referência do Samba na Bahia"
        },
    },
];

export function Inspirations() {

    return (
        <section className={styles.talents} id="inspirations">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Construindo em União<br /><span>Nossas Inspirações</span></motion.h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1920: {
                                slidesPerView: 4,
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
                        <div className={styles.cardsTalents}>
                            {dataCardsTalents.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <CardTalents
                                            key={item.id}
                                            talent={item.talent}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
            </article>
        </section>
    )
}