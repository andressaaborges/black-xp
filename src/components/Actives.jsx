import { CardTalents } from './CardTalents';
import styles from './Actives.module.css';
import personValConceicao from './../assets/persons/val-conceicao.jpg';
import personDionorina from './../assets/persons/dionorina.jpg';
import personGilsam from './../assets/persons/gilsam.jpg';
import personHelyPedreira from './../assets/persons/hely-pedreira.jpg';
import personMaeGraca from './../assets/persons/mae-graca.jpg';
import personEkedePatricia from './../assets/persons/ekede-patricia-pinheiro.jpg';
import personFlavia from './../assets/persons/flavia-sacramento.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';

const dataCardsActives = [
    {
        id: 1,
        talent: {
            photo: personValConceicao,
            name: "Val",
            surname: "Conceição",
            companies: "Doutor Honoris Causa"
        },
    },
    {
        id: 2,
        talent: {
            photo: personMaeGraca,
            name: "Mãe Graça",
            surname: "de Nanã",
            companies: "Pedagoga e Ialorixá do Ilê Axé Gilodefan"
        },
    },
    {
        id: 3,
        talent: {
            photo: personGilsam,
            name: "Gilsam",
            surname: "Reggaeman do Brasil",
            companies: "Cantor e Compositor"
        },
    },
    {
        id: 4,
        talent: {
            photo: personHelyPedreira,
            name: "Hely",
            surname: "Pedreira",
            companies: "Pedagoga e Mestra em Educação"
        },
    },
    {
        id: 5,
        talent: {
            photo: personDionorina,
            name: "Dionorina",
            surname: "",
            companies: "Musicista • Reggae Music Brasil"
        },
    },
    {
        id: 6,
        talent: {
            photo: personEkedePatricia,
            name: "Ekede Patrícia",
            surname: "Pinheiro",
            companies: "Delegada Civil"
        },
    },
    {
        id: 7,
        talent: {
            photo: personFlavia,
            name: "Flávia",
            surname: "Sacramento",
            companies: "Estilista"
        },
    },
];

export function Actives() {

    return (
        <section className={styles.actives} id="talents">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Pessoas Atuantes<br /><span>Mantendo o Movimento</span></motion.h2>
                <div className={styles.content}>
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
                        <div className={styles.cardsTalents}>
                            {dataCardsActives.map(item => {
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