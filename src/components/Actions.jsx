import styles from './Actions.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

export function Actions() {
    const tataRibeiro = "https://instagram.ffec6-1.fna.fbcdn.net/v/t51.2885-19/357645287_239038465571695_970027028639169174_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffec6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=X9nMExf5Sb4AX9E4WmV&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfDnqNk_HAnz02rCvCaRW_LXeLHQFQszlncEW-s1cH4U5A&oe=655C0517&_nc_sid=982cc7";

    return (
        <section className={styles.testimonials} id="organization">
            <h2>Quem Organiza?</h2>
            <article className={styles.content}>
                <p>A <strong>aimo tech</strong> montou um time irado para esse evento acontecer, composto por profissionais experientes, mas também criando oportunidades para quem tá organizando uma jam pela primeira vez.<br /><br />Nas nossas redes sociais e no nosso servidor você vai poder conhecer o nosso time completo!</p>

                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className={styles.mySwiper}
                > */}

                    {/* <SwiperSlide>
                        <article className={styles.cardTestimonials}>
                            <img src={tataRibeiro} alt="Foto da pessoa organizadora" title="Foto da pessoa organizadora" />
                            <div className={styles.contentCard}>
                                <h3>Tata Ribeiro</h3>
                                <p>Idealizadora e Organizadora</p>
                            </div>
                        </article>
                    </SwiperSlide>

                    <SwiperSlide>
                        <article className={styles.cardTestimonials}>
                            <img src={tataRibeiro} alt="Foto da pessoa organizadora" title="Foto da pessoa organizadora" />
                            <div className={styles.contentCard}>
                                <h3>Tata Ribeiro</h3>
                                <p>Idealizadora e Organizadora</p>
                            </div>
                        </article>
                    </SwiperSlide>

                    <SwiperSlide>
                        <article className={styles.cardTestimonials}>
                            <img src={tataRibeiro} alt="Foto da pessoa organizadora" title="Foto da pessoa organizadora" />
                            <div className={styles.contentCard}>
                                <h3>Tata Ribeiro</h3>
                                <p>Idealizadora e Organizadora</p>
                            </div>
                        </article>
                    </SwiperSlide>

                </Swiper> */}
            </article>
        </section>
    )
}