import styles from './Cores.module.css';
import { CardAttributes } from './CardAttributes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper';
import marceloSilva from "../assets/persons/marceloSilva.jpg";
import faustoVanin from "../assets/persons/fausto-vanin.jpeg";
import juliendriosOliveira from "../assets/persons/juliendriosOliveira.png";
import claraMatos from "../assets/persons/claraMatos.jpeg";
import karinaSantana from "../assets/persons/karinaSantana.webp";

const dataCardsAttributes = [
    {
        id: 1,
        content: {
            photo: karinaSantana,
            title: "Game Design para Game Jam",
            role: "Tata Ribeiro",
            // date: "08 de Janeiro - 19hs",
            text: `Explore os fundamentos do game design e aprenda estratégias para criar jogos inovadores e envolventes em um curto período, focando em técnicas que elevam a experiência do jogador.\nTata Ribeiro é Designer, pesquisadora da área de Tecnologias Educacionais, Mestre em Gestão e Tecnologias Aplicadas à Educação. Sócia-fundadora e Gerente de projetos na Aimo Tech, game studio que pauta a diversidade.`
        },
    },
    {
        id: 2,
        content: {
            photo: faustoVanin,
            title: "Como Criar Tokens Para o Seu Jogo ",
            role: "Fausto Vanin",
            // date: "11 de Janeiro - 19hs",
            text: "Fausto Vanin é agente da transformação digital. Atua em iniciativas que usam a tecnologia para mudar o contexto social em que vive. Possui mestrado em Informática Aplicada pela PUC-PR e certificação em Inovação e Estratégia pelo MIT Sloan School of Management. Em processo de doutoramento no uso de Blockchain na área da saúde pela Universidade do Vale dos Sinos, Co-fundador da OnePercent, empresa que desenvolve soluções  com a tecnologia Blockchain e da Lanceiros, empresa de tecnologia formada por pessoas pretas e de periferia. Mentor, palestrante e ativista por causas de impacto social, ambiental em redução de desigualdades."
        },
    },
    {
        id: 3,
        content: {
            photo: marceloSilva,
            title: "Estratégias de Monetização através da Web3 Aplicada à Jogos",
            role: "Marcelo Silva",
            // date: "09 de Janeiro - 19hs",
            text: "Marcelo Silva é pesquisador (PhD), entusiasta da aplicação da tecnologia blockchain ao desenvolvimento social e ambiental."
        },
    },
    {
        id: 4,
        content: {
            photo: juliendriosOliveira,
            title: "Concept Art para Design de Personagens e Cenários",
            role: "Juliendrios Oliveira • End_Z",
            // date: "10 de Janeiro - 19hs",
            text: "Juliendrios Oliveira, também conhecido como “End_Z_”. É graduado em Sistemas da Informação e Pós - graduado em Jogos Digitais. Atualmente trabalha como artista 3D na Long Hat House e na Mantra Filmes. Modelagem 3D de Asset para jogos."
        },
    },
    
    {
        id: 5,
        content: {
            photo: claraMatos,
            title: "Engines de Jogo para a Game Jam",
            role: "Clara Matos",
            // date: "12 de Janeiro - 19hs",
            text: "Cientista de Formação e programadora front-end, tem como hobby criação de jogos."
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