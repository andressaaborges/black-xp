import { CardOperation } from './CardOperation';
import styles from './Operation.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { useState } from 'react';

const dataCardsOperation = [
    {
        id: 1,
        content: {
            title: "O começo de tudo",
            text: "Profissionais e empresas compartilham seus objetivos dentro da nossa plataforma."
        },
    },
    {
        id: 2,
        content: {
            title: "O match perfeito",
            text: "Buscamos os perfis ideais para cada projeto e criamos a melhor conexão possível."
        },
    },
    {
        id: 3,
        content: {
            title: "Bate-papo, jogo rápido",
            text: "Empresas e talentos se conhecem e conversam para alinhar todos os detalhes."
        },
    },
    {
        id: 4,
        content: {
            title: "Pronto!",
            text: "Agora, a seleção de talentos é feita, o contrato é assinado e o projeto começa."
        },
    },
];

export function Operation() {

    if (window.innerWidth <= 1120) {
        return (
            <section className={styles.operation} id="operation">
                <article className={styles.content}>
                    <h2>Veja <span>como funciona.</span></h2>
                    <div className={styles.cardsSectionOperation}>
                        <Swiper grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: ["-125%", 0, -800],
                                    rotate: [0, 0, -90],
                                },
                                next: {
                                    shadow: true,
                                    translate: ["125%", 0, -800],
                                    rotate: [0, 0, 90],
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
                            {dataCardsOperation.map(item => {
                                return (
                                    <SwiperSlide>
                                        <CardOperation
                                            key={item.id}
                                            number={item.id.toString()}
                                            content={item.content}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <h3>Os talentos certos,
                        para os projetos certos,
                        no lugar certo.</h3>
                    <div className={styles.buttonsSection}>
                        <a href="https://ollo.is/br/hire/"><button className={styles.buttonBackground}>Quero contratar</button></a>
                        <a href="https://ollo.is/br/in/"><button className={styles.buttonHasBorder}>Quero fazer parte</button></a>
                    </div>
                </article>
            </section>
        )
    }
    else {
        return (
            <section className={styles.operation} id="operation">
                <article className={styles.content}>
                    <h2>Veja <span>como funciona.</span></h2>
                    <div className={styles.cardsSectionOperation}>
                        {dataCardsOperation.map(item => {
                            return (
                                <CardOperation
                                    key={item.id}
                                    number={item.id.toString()}
                                    content={item.content}
                                />
                            )
                        })}
                    </div>
                    <h3>Os talentos certos,
                        para os projetos certos,
                        no lugar certo.</h3>
                    <div className={styles.buttonsSection}>
                        <button className={styles.buttonBackground}>Quero contratar</button>
                        <button className={styles.buttonHasBorder}>Quero fazer parte</button>
                    </div>
                </article>
            </section>
        )
    }
}