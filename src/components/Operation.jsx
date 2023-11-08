import { CardOperation } from './CardOperation';
import styles from './Operation.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { motion } from 'framer-motion';

export function Operation() {

    if (window.innerWidth <= 1120) {
        return (
            <section className={styles.operation} id="operation">
                <article className={styles.content}>
                    <h2>Compromisso Ancestral<span><br />Nosso Impacto</span></h2>
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

                            <SwiperSlide key={1}>
                                <CardOperation
                                    key={1}
                                    number={"2"}
                                    title={"Mil Vidas Impactadas"}
                                    description={"Nossos ações afirmativas beneficiaram mais de 2.000 crianças, jovens e adultos."}
                                />
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <CardOperation
                                    key={2}
                                    number={10}
                                    title={"Ações Desenvolvidas"}
                                    description={"Com mais de 10 atividades culturais idealizadas e realizadas pela associação."}
                                />
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <CardOperation
                                    key={3}
                                    number={50}
                                    title={"Pessoas Participantes"}
                                    description={"Com mais de 50 pessoas membras e parceiras que constroem nossa Moviafro."}
                                />
                            </SwiperSlide>
                            <SwiperSlide key={4}>
                                <CardOperation
                                    key={4}
                                    number={8}
                                    title={"Anos de Existência"}
                                    description={"Uma trajetória que testemunha nosso compromisso com nossa missão ancestral."}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* <h3>{t("operation.subtitle")}</h3>
                    <div className={styles.buttonsSection}>
                        <PopupButton
                            id={t("button.hireLang")}
                            className={styles.buttonBackground}>
                            {t("button.hire")}
                        </PopupButton>

                        <PopupButton
                            id={t("button.inLang")}
                            className={styles.buttonHasBorder}>
                            {t("button.in")}
                        </PopupButton>
                    </div> */}
                </article>
            </section>
        )
    }
    else {
        return (
            <section className={styles.operation} id="operation">
                <article className={styles.content}>
                    <div className={styles.title}>
                        <h2>Compromisso Ancestral<span><br />Nosso Impacto</span></h2>

                    </div>
                    <motion.div className={styles.cardsSectionOperation} initial={{ opacity: 0, scale: 0, x: 500, y: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }} transition={{ duration: 0.6 }}>

                        <CardOperation
                            key={1}
                            number={2}
                            title={"Mil Vidas Impactadas"}
                            description={"Nossos ações afirmativas beneficiaram mais de 2.000 crianças, jovens e adultos."}
                        />


                        <CardOperation
                            key={2}
                            number={10}
                            title={"Ações Desenvolvidas"}
                            description={"Com mais de 10 atividades culturais idealizadas e realizadas pela associação."}
                        />

                        <CardOperation
                            key={3}
                            number={50}
                            title={"Pessoas Participantes"}
                            description={"Com mais de 50 pessoas membras e parceiras que constroem nossa Moviafro."}
                        />

                        <CardOperation
                            key={4}
                            number={8}
                            title={"Anos de Existência"}
                            description={"Uma trajetória que testemunha nosso compromisso com nossa missão ancestral."}
                        />

                    </motion.div>
                    {/* <h3>{t("operation.subtitle")}</h3>
                    <motion.div className={styles.buttonsSection} initial={{ opacity: 0, scale: 0, x: -500 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.6 }}>  */}
                    {/* <a href="https://ollo.is/br/hire/" target="_blank"><motion.button className={styles.buttonBackground} initial={{ opacity: 0, scale: 0, x: -500 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.6 }}>Quero contratar</motion.button></a>
                        <a href="https://ollo.is/br/in/" target="_blank"><motion.button className={styles.buttonHasBorder} initial={{ opacity: 0, scale: 0, x: 500 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.6 }}>Quero fazer parte</motion.button></a> */}
                    {/* 
                        <PopupButton
                            id={t("button.hireLang")}
                            className={styles.buttonBackground} >
                            {t("button.hire")}
                        </PopupButton>

                        <PopupButton
                            id={t("button.inLang")}
                            className={styles.buttonHasBorder} >
                            {t("button.in")}
                        </PopupButton>
                    </motion.div> */}
                </article>
            </section>
        )
    }
}