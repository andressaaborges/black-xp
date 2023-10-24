import { CardTalents } from './CardTalents';
import styles from './Talents.module.css';
import personValConceicao from './../assets/persons/valConceicao.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
    {
        id: 2,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
    {
        id: 3,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
    {
        id: 4,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Fernandez",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
    {
        id: 5,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
    {
        id: 6,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
    {
        id: 7,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Coordenador Geral Moviafro • Produtor Cultural"
        },
    },
];

export function Talents() {

    return (
        <section className={styles.talents} id="talents">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Nossas Inspirações<br /><span>Construindo em União</span></motion.h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
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
                                            role={item.companies}
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