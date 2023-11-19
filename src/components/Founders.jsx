import styles from './Founders.module.css';
import iconSquad from './../assets/icons/icon-squad.svg';
import iconKnow from './../assets/icons/icon-know.svg';
import iconBegin from './../assets/icons/icon-begin.svg';
import iconDeveloper from './../assets/icons/icon-developer.svg';
import iconNetwork from './../assets/icons/icon-network.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { CardFounders } from './CardFounders';
import { CodeSimple, Heart, Play, Target, UsersThree } from '@phosphor-icons/react';

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: <UsersThree size={30} />,
            role: "Forme seu time",
            companies: "Os participantes têm a opção de formar equipes com base em suas habilidades e interesses. Programadores, designers, artistas e músicos podem se unir para criar uma equipe equilibrada."
        },
    },
    {
        id: 2,
        talent: {
            photo: <Target size={30} />,
            role: "Conheça o tema",
            companies: "O evento começa com a revelação de um tema específico, que serve como base para a criação dos jogos. O tema pode ser amplo e aberto à interpretação, estimulando a criatividade dos participantes."
        },
    },
    {
        id: 3,
        talent: {
            photo: <Play size={30} />,
            role: "Comece na Jam",
            companies: "Com o tema revelado e as equipes formadas, a contagem regressiva começa. Os participantes têm um tempo limitado para idealizar, desenvolver e finalizar seus jogos."
        },
    },
    {
        id: 4,
        talent: {
            photo: <CodeSimple size={30} />,
            role: "Desenvolva bem rápido",
            companies: "Durante a Game Jam, as equipes trabalham arduamente para criar protótipos jogáveis de seus jogos. A pressão do tempo incentiva soluções criativas e inovações rápidas."
        },
    },
    {
        id: 5,
        talent: {
            photo: <Heart size={30} />,
            role: "Construa redes",
            companies: "A Game Jam não é apenas sobre desenvolvimento de jogos! É também uma oportunidade para os participantes se conectarem, compartilharem ideias e aprenderem uns com os outros."
        },
    },
];

export function Founders() {

    return (
        <section className={styles.talents} id="operation">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Como funciona?</motion.h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
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