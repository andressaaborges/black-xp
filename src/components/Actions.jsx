import styles from './Actions.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export function Actions() {

    return (
        <section className={styles.testimonials} id="organization">
            <h2>Quem Organiza?</h2>
            <article className={styles.content}>
                <p>A <strong>aimo tech</strong> e <strong>Estúdio DUMA</strong> montou um time irado para esse evento acontecer, composto por profissionais experientes, mas também criando oportunidades para quem tá organizando uma jam pela primeira vez.<br /><br />Nas nossas redes sociais e no nosso servidor do discord você vai poder conhecer o nosso time completo!</p>
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