import styles from './Founders.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { CardFounders } from './CardFounders';
import { BookOpenText, Code, HandWaving, Lifebuoy, ShareNetwork, UsersFour } from '@phosphor-icons/react';

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: <UsersFour size={30} weight='duotone'/>,
            role: "Forme seu time",
            companies: "Antes de tudo, você vai formar sua equipe com base nas habilidades de cada um. A ideia é montar um time equilibrado, onde cada um contribui com algo único."
        },
    },
    {
        id: 2,
        talent: {
            photo: <BookOpenText size={30} weight='duotone'/>,
            role: "Conheça o tema",
            companies: "O evento começa com a revelação de um tema surpresa, que vai ser o ponto de partida para criar o seu jogo. O tema é bem aberto para interpretação, então vale soltar a imaginação e ser criativo!"
        },
    },
    {
        id: 3,
        talent: {
            photo: <HandWaving size={30} weight='duotone' />,
            role: "Mãos à obra!",
            companies: "Com o tema definido e os times prontos, começa a contagem regressiva. Vocês terão um tempo limitado para pensar, criar e finalizar o jogo. É hora de correr contra o tempo e colocar as ideias em prática!"
        },
    },
    {
        id: 4,
        talent: {
            photo: <Code size={30} weight='duotone'/>,
            role: "Desenvolva rápido",
            companies: "Durante a Jam, o foco é desenvolver um protótipo jogável do seu jogo. A pressão do tempo é real, mas isso é ótimo para estimular soluções criativas e rápidas."
        },
    },
    {
        id: 5,
        talent: {
            photo: <Lifebuoy size={30} weight='duotone'/>,
            role: "Tenha ajuda",
            companies: "Não se preocupe, um mentor especializado em programação vai estar junto com o seu time durante todo o processo, ajudando com o código e tirando qualquer dúvida técnica."
        },
    },
    {
        id: 6,
        talent: {
            photo: <ShareNetwork size={30} weight='duotone'/>,
            role: "Construa redes",
            companies: "Além de criar o jogo, a Black XP é uma super oportunidade para conhecer gente nova, trocar ideias e aprender com os outros participantes. Quem sabe o seu próximo parceiro de projetos não está aqui?"
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