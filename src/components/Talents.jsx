import { CardTalents } from './CardTalents';
import styles from './Talents.module.css';
import talentOne from './../assets/talentOne.png';
import talentTwo from './../assets/talentTwo.png';
import talentThree from './../assets/talentThree.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: talentOne,
            name: "Larissa Vaz",
            role: "Creative",
            companies: "iFood • Electrolux • Domino's"
        },
    },
    {
        id: 2,
        talent: {
            photo: talentTwo,
            name: "Pedro Luiz",
            role: "Product Manager",
            companies: "Ambev • Tok & Stok • Gympass"
        },
    },
    {
        id: 3,
        talent: {
            photo: talentThree,
            name: "Flávia Assis",
            role: "Art Director & Design",
            companies: "Hustlers BR • Perestroika • iFood"
        },
    },
];

export function Talents() {

    return (
        <section className={styles.talents} id="talents">
            <article className={styles.container}>
                <h2>Talentos <span>únicos</span> para vagas <span>únicas</span></h2>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 30,
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
                    >
                        <div className={styles.cardsTalents}>
                            {dataCardsTalents.map(item => {
                                return (
                                    <SwiperSlide><CardTalents
                                        key={item.id}
                                        talent={item.talent}
                                    /></SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
            </article>
        </section>
    )
}