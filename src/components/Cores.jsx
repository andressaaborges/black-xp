import styles from './Cores.module.css';
import { CardAttributes } from './CardAttributes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper';
import marceloSilva from "../assets/persons/marceloSilva.jpg";
import faustoVanin from "../assets/persons/fausto-vanin.jpeg";
import juliendriosOliveira from "../assets/persons/juliendriosOliveira.png";
import melCampos from "../assets/persons/melCampos.jpg";
import tataRibeiro from "../assets/persons/tataRibeiro.jpg";

const dataCardsAttributes = [
    {
        id: 1,
        content: {
            photo: tataRibeiro,
            title: "Game Design para Game Jam",
            role: "Tata Ribeiro",
            // date: "08 de Janeiro - 19hs",
            text: `Explore os fundamentos do game design e aprenda estratégias para criar jogos inovadores e envolventes em um curto período, focando em técnicas que elevam a experiência do jogador.
            Tata Ribeiro é Designer, pesquisadora da área de Tecnologias Educacionais, Mestre em Gestão e Tecnologias Aplicadas à Educação. Sócia-fundadora e Gerente de projetos na Aimo Tech, game studio que pauta a diversidade.`
        },
    },
    {
        id: 2,
        content: {
            photo: faustoVanin,
            title: "Como Criar Tokens Para o Seu Jogo ",
            role: "Fausto Vanin",
            // date: "11 de Janeiro - 19hs",
            text: "Descubra o potencial dos tokens no mundo dos jogos! Neste workshop, você vai aprender os conceitos básicos de criação de tokens e como integrá-los ao seu projeto para aumentar o engajamento e a personalização. Fausto Vanin é agente da transformação digital. Atua em iniciativas que usam a tecnologia para mudar o contexto social em que vive. Possui mestrado em Informática Aplicada pela PUC-PR e certificação em Inovação e Estratégia pelo MIT Sloan School of Management. Em processo de doutoramento no uso de Blockchain na área da saúde pela Universidade do Vale dos Sinos, Co-fundador da OnePercent, empresa que desenvolve soluções  com a tecnologia Blockchain e da Lanceiros, empresa de tecnologia formada por pessoas pretas e de periferia. Mentor, palestrante e ativista por causas de impacto social, ambiental em redução de desigualdades."
        },
    },
    {
        id: 3,
        content: {
            photo: juliendriosOliveira,
            title: "Concept Art para Design de Personagens e Cenários",
            role: "Juliendrios Oliveira • End_Z",
            // date: "10 de Janeiro - 19hs",
            text: "Aprimore suas habilidades de criação visual com técnicas de concept art para personagens e cenários. Ideal para quem deseja transformar ideias em visuais únicos e atrativos para jogos. Juliendrios Oliveira, também conhecido como “End_Z_”. É graduado em Sistemas da Informação e Pós - graduado em Jogos Digitais. Atualmente trabalha como artista 3D na Long Hat House e na Mantra Filmes. Modelagem 3D de Asset para jogos."
        },
    },
    {
        id: 4,
        content: {
            photo: melCampos,
            title: "Pitch Perfeito Para Seu Jogo",
            role: "Mel Campos",
            // date: "09 de Janeiro - 19hs",
            text: "Aprenda a apresentar seu jogo com impacto! Este workshop oferece dicas para construir um pitch envolvente e conquistar o interesse de jurados e investidores, destacando o valor único do seu projeto. Mel Campos é Designer Gráfica, Cineasta e Mentora de negócios de inovação e impacto social. Designer Estratégica e de serviços, com desenho de processos focada na experiência do usuário e encantamento de clientes. Diretora de inovação criativa do Estúdio DUMA e sócia da GUGURU e do coletivo PretADG."
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