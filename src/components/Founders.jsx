import styles from './Founders.module.css';
import personValConceicao from './../assets/persons/valConceicao.jpeg';
import personVivianeCarvalho from './../assets/persons/vivianeCarvalho.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { CardFounders } from './CardFounders';

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: personValConceicao,
            name: "Valmilton Conceição Pereira dos Santos",
            role: "Val Conceição",
            companies: "Candomblecista, Drº Honoris Causa pela Faculdade Febraica (RJ), Medalha de Ordem ao Mérito da Cultura de Feira de Santana, Medalha Nelson Mandela, Músico, Produtor de Eventos Culturais, Gestor de Espaços Culturais."
        },
    },
    {
        id: 2,
        talent: {
            photo: personVivianeCarvalho,
            name: "Viviane Carvalho de Jesus Dias",
            role: "Vivi Sorriso",
            companies: "Modelo Fotográfico, Maquiadora especializada em pele negra, Ativista Social e Cultural, Promotora de Eventos e Dançarina."
        },
    },
];

export function Founders() {

    return (
        <section className={styles.talents} id="founders">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Primeiros Passos<span><br />Nossos Fundadores</span></motion.h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
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
                                        <CardFounders
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