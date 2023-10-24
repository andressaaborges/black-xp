import styles from './Press.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import folhaDoEstado from './../assets/press/folha-do-estado-parceiro.png';
import acordaCidade from './../assets/press/acorda-cidade-parceiro.svg';

const linkNews = [
    {
        id: 220923,
        data: {
            logo: "https://www.portal190.com.br/img/476988948298af3e58990b412247fc9c.png",
            title: "Moviafro representa o Movimento Negro Feirense em Brasília.",
            url: "https://www.portal190.com.br/noticia/16730/moviafro-representa-o-movimento-negro-feirense-em-brasilia"
        },
    },
    {
        id: 280823,
        data: {
            logo: "https://cache2net3.com/Repositorio/12002/Logo/Design%20sem%20nome%20-%202023-03-26T212652.329.webp",
            title: "Concurso Moviafro destaca beleza negra infantil.",
            url: "https://www.youtube.com/watch?v=U1WFu30PviM"
        },
    },
    {
        id: 100823,
        data: {
            logo: folhaDoEstado,
            title: "Moviafro promove primeira edição do Concurso Miss & Mister Afro Infantil.",
            url: "https://www.jornalfolhadoestado.com/cultura-e-eventos/moviafro-promove-primeira-edicao-do-concurso-miss-mister-afro-infantil"
        },
    },
    {
        id: 130723,
        data: {
            logo: acordaCidade,
            title: "Núcleo de Mulheres Negras realiza encontro no Julho das Pretas.",
            url: "https://www.acordacidade.com.br/noticias/feira-de-santana/nucleo-de-mulheres-negras-realiza-encontro-no-julho-das-pretas/"
        },
    },
    {
        id: 200623,
        data: {
            logo: acordaCidade,
            title: "Representatividade e dedicação: conheça a jovem de 15 anos eleita Miss Afro Feira 2023.",
            url: "https://www.acordacidade.com.br/noticias/feira-de-santana/representatividade-e-dedicacao-conheca-a-jovem-de-15-anos-eleita-miss-afro-feira-2023/"
        },
    },
    {
        id: 100623,
        data: {
            logo: folhaDoEstado,
            title: "Moradora do bairro Tomba é escolhida Miss Afro Feira de Santana 2023.",
            url: "https://www.jornalfolhadoestado.com/cultura-e-eventos/moradora-do-tomba-e-escolhida-miss-afro-feira-de-santana-2023"
        },
    },
    {
        id: 310523,
        data: {
            logo: "https://www.catureba.com.br/wp-content/uploads/2023/03/logo.png",
            title: "Com teatro lotado, Concurso Miss Afro Feira de Santana realiza final da 6ª edição.",
            url: "https://www.catureba.com.br/2023/05/30/com-teatro-lotado-concurso-miss-afro-feira-de-santana-realiza-final-da-6a-edicao/"
        },
    },
    {
        id: 300523,
        data: {
            logo: "https://atendimento.al.ba.gov.br/assets/img/logotipo-share.png",
            title: "Neusa Cadore aplaude Associação Cultural Moviafro, de Feira de Santana.",
            url: "https://www.al.ba.gov.br/midia-center/noticias/57187"
        },
    },
];

export function Press() {
    return (
        <section className={styles.press} id="press">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Moviafro na Imprensa<br /><span>Acompanhe as Notícias</span></motion.h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        slidesPerView={1}
                        spaceBetween={10}
                    >
                        {linkNews.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.news}>
                                        <img src={item.data.logo} alt="Logo" />
                                        <h3>{item.data.title}</h3>
                                        <a href={item.data.url} target="_blank"><button className={styles.buttonHasBorder}>Ler notícia completa</button></a>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </article>
        </section >
    )
}