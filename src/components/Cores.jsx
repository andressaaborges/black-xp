import styles from './Cores.module.css';
import { CardAttributes } from './CardAttributes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper';
import marcelo from "../assets/persons/marceloSilva.jpg";

const dataCardsAttributes = [
    {
        id: 1,
        content: {
            photo: marcelo,
            title: "Inglês de Nível Básico para Projetos em Tecnologia",
            role: "Karina Santanna",
            date: "03 de Dezembro - 18hs",
            text: "Bio Karina."
        },
    },
    {
        id: 2,
        content: {
            photo: marcelo,
            title: "Estratégias de Monetização através da Web3 Aplicada à Jogos",
            role: "Marcelo Silva",
            date: "04 de Dezembro - 19hs",
            text: "Marcelo Silva é pesquisador (PhD), entusiasta da aplicação da tecnologia blockchain ao desenvolvimento social e ambiental."
        },
    },
    {
        id: 3,
        content: {
            photo: marcelo,
            title: "Concept Art para Design de Personagens e Cenários",
            role: "Juliendrios Oliveira • End_Z",
            date: "05 de Dezembro - 19hs",
            text: "Juliendrios Oliveira, também conhecido como “End_Z_”. É graduado em Sistemas da Informação e Pós - graduado em Jogos Digitais. Atualmente trabalha como artista 3D na Long Hat House e na Mantra Filmes. Modelagem 3D de Asset para jogos."
        },
    },
    {
        id: 4,
        content: {
            photo: marcelo,
            title: "Como Criar Tokens Para o Seu Jogo ",
            role: "Fausto Vanin",
            date: "06 de Dezembro - 19hs",
            text: "Bio Fausto."
        },
    },
    {
        id: 5,
        content: {
            photo: marcelo,
            title: "Engines de Jogo para a Game Jam",
            role: "Clara Matos",
            date: "07 de Dezembro - 19hs",
            text: "Bio Clarinha."
        },
    },
];

export function Cores() {
    return (
        <section className={styles.attributes} id="workshops">
            <article className={styles.container}>
                <h2>Quais Os Workshops?</h2>
                
                <div className={styles.content}>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            1920: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 3,
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
                        {dataCardsAttributes.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <CardAttributes
                                        key={item.id}
                                        photo={item.content.photo}
                                        title={item.content.title}
                                        role={item.content.role}
                                        date={item.content.date}
                                        description={item.content.text}
                                    />
                                </SwiperSlide>
                            )
                        })
                        }
                        {/* <img src={olloIllustrationEye} alt="Ilustração Ollo"/> */}
                    </Swiper>
                </div>
            </article>
        </section>
    )
}