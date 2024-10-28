import { CardOperation } from './CardOperation';
import styles from './Impact.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { motion } from "framer-motion";
import { Baby, BowlFood, Broadcast, ChalkboardTeacher, ClockCountdown, Confetti, GameController, IdentificationBadge, UserFocus } from '@phosphor-icons/react';

export function Impact() {
    const cardsData = [
        {
            id: 1,
            icon: <ChalkboardTeacher size={30} weight='duotone'/>,
            title: 'Workshops Formativos',
            description: `Antes da maratona começar, teremos workshops no formato de videoaulas, que estarão disponíveis tanto no YouTube quanto no nosso Discord. Esses vídeos vão abordar temas super importantes como design de jogos, criação de cenários e personagens, e Engines e programação para Jogos. Você vai poder assistir no seu tempo e aprender com especialistas para arrasar no desenvolvimento do seu jogo.`,
        },
        {
            id: 2,
            icon: <Broadcast size={30} weight='duotone'/>,
            title: 'Live de Abertura',
            description: 'No dia 27 de novembro, às 17h, vamos fazer uma live de abertura para revelar o tema surpresa da Game Jam. Fique ligado, porque é a partir desse momento que a maratona começa oficialmente!',
        },
        {
            id: 3,
            icon: <ClockCountdown size={30} weight='duotone'/>,
            title: 'Maratona de Desenvolvimento',
            description: 'Depois da live, nos dias 28 e 29 de novembro, começa a parte mais emocionante: você e seu time terão 48 horas para criar um jogo do zero! É hora de colocar a mão na massa e usar tudo o que aprendeu nos workshops para desenvolver seu próprio game.',
        },
        {
            id: 4,
            icon: <Confetti size={30} weight='duotone'/>,
            title: 'Apresentação e Premiação',
            description: 'Na tarde do dia 29 de novembro, os participantes vão ter a chance de apresentar seus projetos pessoalmente na Arena Gamer do VI Festival Afrofuturismo, no Pelourinho. Lá, uma banca de jurados vai avaliar os jogos e escolher os melhores projetos, que concorrerão a prêmios incríveis como tablets  e celulares! 🏆',
        },
    ];

    if (window.innerWidth <= 1120) {
        return (
            <section className={styles.operation} id="registration">
                <article className={styles.content}>
                    <h2>Programação</h2>
                    <div className={styles.cardsSectionOperation}>
                        <Swiper grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: false,
                                    translate: ["-55%", 0, -800],
                                    rotate: [0, 0, -0],
                                },
                                next: {
                                    shadow: false,
                                    translate: ["55%", 0, -800],
                                    rotate: [0, 0, 0],
                                },
                            }}
                            breakpoints={{
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },

                            }}
                            modules={[EffectCreative]}
                            className="mySwiper">

                            {cardsData.map((card) => (
                                <SwiperSlide key={card.id}>
                                    <CardOperation icon={card.icon} title={card.title} description={card.description} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </article>
            </section>
        )
    }
    else {
        return (
            <section className={styles.operation} id="registration">
                <article className={styles.content}>
                    <div className={styles.title}>
                        <h2>Programação</h2>
                    </div>
                    <motion.div className={styles.cardsSectionOperation} initial={{ opacity: 0, scale: 0, x: 500, y: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }} transition={{ duration: 0.6 }}>

                        {cardsData.map((card) => (

                            <CardOperation key={card.id} icon={card.icon} title={card.title} description={card.description} />

                        ))}

                    </motion.div>
                </article>
            </section>
        )
    }
}