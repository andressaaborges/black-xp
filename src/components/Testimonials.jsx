import styles from './Testimonials.module.css';
import personOne from './../assets/personOne.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export function Testimonials() {
    return (
        <section className={styles.testimonials} id="testimonials">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src="https://media.licdn.com/dms/image/C4E03AQGghYS4JtxCyg/profile-displayphoto-shrink_200_200/0/1611360979224?e=1688601600&v=beta&t=zATtHMTQIZZfblDIp7ZwGBqhakIci2FFT91TBC7zpPU" alt="Pessoa autora do depoimento" title="Sandra Gerena" />
                        <div className={styles.content}>

                            <h3>"Trabalhamos com a Ollo aqui na Domino's Pizza há  um ano. No início, houve a insegurança de mudarmos a estrutura do time de criação, trazendo profissionais externos. Hoje, podemos afirmar que é um modelo extremamente satisfatório, sem muita burocracia, agilizando o processo em geral, e com profissionais qualificados e de alta performance."</h3>
                            <p>Sandra Gerena
                                <br /><strong>Gerente de Marketing e Vendas • Domino's Pizza Brasil</strong></p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={personOne} alt="Pessoa autora do depoimento" />
                        <div className={styles.content}>
                            <h3>"A Ollo é um dos negócios mais disruptivos e atuais do mercado. Baseado em uma necessidade urgente e muito específica, foi montado um squad com profissionais seniores e muito complementares em seus talentos e skills em menos de uma semana. Mesmo montando um esquema direto entre cliente e criativos, a liderança da Ollo é próxima e atenta, sempre disponível e preocupada com resultados, operação e relação com o cliente. Virei fã!"</h3>
                            <p>Gustavo Sartori
                                <br /><strong>Gerente de Marketing • iFood</strong></p>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}