import { CardOperation } from './CardOperation';
import styles from './Impact.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { motion } from "framer-motion";
import { Baby, BowlFood, GameController, IdentificationBadge, UserFocus } from '@phosphor-icons/react';

export function Impact() {
    const cardsData = [
        {
            id: 1,
            icon: <IdentificationBadge size={30} />,
            title: 'Autodeclaração',
            description: 'Se você é uma pessoa autodeclarada preta, parda ou indígena, este evento é para você.',
        },
        {
            id: 2,
            icon: <UserFocus size={30} />,
            title: 'Idade',
            description: 'Este evento é destinado a pessoas com idade entre 16 e 29 anos que amam games.',
        },
        {
            id: 3,
            icon: <GameController size={30} />,
            title: 'Modalidade',
            description: 'Escolha entre participação online, híbrida ou presencial.',
        },
        {
            id: 4,
            icon: <Baby size={30} />,
            title: 'Espaço Kids',
            description: 'Informe se precisa de suporte do nosso espaço kids, incluindo a idade da criança.',
        },
        {
            id: 5,
            icon: <BowlFood size={30} />,
            title: 'Alimentação',
            description: 'Informe sobre alguma restrição alimentar para garantir uma experiência personalizada.',
        },
    ];

    if (window.innerWidth <= 1120) {
        return (
            <section className={styles.operation} id="registration">
                <article className={styles.content}>
                    <h2>Como me inscrever?</h2>
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

                            {cardsData.map((card, index) => (
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
                        <h2>Como me inscrever?</h2>
                    </div>
                    <motion.div className={styles.cardsSectionOperation} initial={{ opacity: 0, scale: 0, x: 500, y: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }} transition={{ duration: 0.6 }}>

                        {cardsData.map((card, index) => (

                                <CardOperation key={index} icon={card.icon} title={card.title} description={card.description} />

                        ))}

                    </motion.div>
                </article>
            </section>
        )
    }
}