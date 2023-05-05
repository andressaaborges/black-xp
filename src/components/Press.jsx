import logoVoceRh from './../assets/imgPress/voceRh.svg';
import logoForbes from './../assets/imgPress/forbes.svg';
import logoStartse from './../assets/imgPress/startse.svg';
import styles from './Press.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';


const linkNews = [
    {
        data: {
            logo: logoVoceRh,
            title: "Cresce a contratação de líderes sob demanda",
            url: "https://vocerh.abril.com.br/lideranca/cresce-contratacao-de-lideres-sob-demanda/"
        },
    },
    {
        data: {
            logo: logoStartse,
            title: "Trabalho as-a-service: como este formato atinge os negócios hoje?",
            url: "https://www.youtube.com/watch?v=crIRvXDUEew"
        },
    },
    {
        data: {
            logo: logoForbes,
            title: "Futuro do trabalho: tendência é contratação de executivos sob demanda",
            url: "https://forbes.com.br/carreira/2023/03/c-level-as-a-service-entenda-a-tendencia-de-contratacao-sob-demanda-2/"
        },
    },
];

export function Press() {
    return (
        <section className={styles.press} id="press">
            <article className={styles.container}>
                <h2>De olho na <span>ollo.</span></h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        slidesPerView={1}
                        spaceBetween={10}
                    >
                        {linkNews.map(item => {
                            return (
                                <SwiperSlide>
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
        </section>
    )
}