import { CardTalents } from './CardTalents';
import styles from './Inspirations.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { City, Money, UsersFour, WifiHigh } from '@phosphor-icons/react';
import photo1 from './../assets/last/1.jpg'
import photo2 from './../assets/last/2.jpg'
import photo3 from './../assets/last/3.jpg'
import photo4 from './../assets/last/4.jpg'
import photo5 from './../assets/last/5.jpg'
import photo6 from './../assets/last/6.jpg'

const dataCardsTalents = [
    {
        id: 1,
        talent: {
            photo: photo1
        },
    },
    {
        id: 2,
        talent: {
            photo: photo2
        },
    },
    {
        id: 3,
        talent: {
            photo: photo3
        },
    },
    {
        id: 4,
        talent: {
            photo: photo4,
        },
    },
    {
        id: 5,
        talent: {
            photo: photo5,
        },
    },
    {
        id: 6,
        talent: {
            photo: photo6,
        },
    },
];

export function Inspirations() {

    return (
        <section className={styles.talents} id="inspirations">
            <article className={styles.container}>
                <div className={styles.texts}>
                    <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Sobre a edição anterior</motion.h2>
                    <div className={styles.paragraphs}>
                        <p>A primeira edição da <strong>Black XP Game Jam</strong> foi um marco na inclusão e capacitação de jovens negros na indústria de games. Realizado em Salvador, o evento promoveu 5 workshops online e mentorias em tecnologia, com foco em Afrofuturismo e diversidade. Esse pioneirismo chamou a atenção da mídia, sendo destacado pelo Correio 24 Horas como uma iniciativa transformadora para jovens criativos, proporcionando uma experiência prática e inovadora para novos talentos.</p>
                        <p><strong><span>Vini Santos</span></strong>, mentor de design, também destacou o impacto do evento: "<strong><i>Estes dias não foram apenas para criar jogos; foram para fomentar uma comunidade, promover a diversidade e oferecer uma plataforma de aprendizado e crescimento.</i></strong>"</p>
                        <p><strong>Os resultados foram expressivos:</strong>
                            <ul>
                                <li><UsersFour size={30} weight="duotone" />79 inscritos,</li>
                                <li><WifiHigh size={30} weight="duotone" />51 participações online,</li>
                                <li><City size={30} weight="duotone" />11 participações presenciais,</li>
                                <li><Money size={30} weight="duotone" />com 11 mil reais em premiações.</li>
                            </ul>
                        </p>
                        <p>
                            Além disso, a Game Jam levou ao desenvolvimento de projetos que seguem em evolução, como relatado por <strong><span>Thaís Ferreira</span></strong>, uma das participantes: "<strong><i>Foi incrível participar desse projeto, onde desenvolvi diversas habilidades e conheci pessoas incríveis que espero levar pra vida!</i></strong>"</p>
                        <p>O sucesso dessa edição estabeleceu o Black XP como referência em inovação e representatividade, impulsionando jovens talentos e promovendo a diversidade no setor de tecnologia. A Black XP Game Jam foi amplamente destacada na mídia pela sua iniciativa inovadora de inclusão no setor de games. Portais como o Correio 24 Horas e Geledés ressaltaram o impacto do evento. A cobertura destacou como o evento contribui para a construção de uma indústria de games mais diversa e inclusiva, despertando o interesse desses jovens por carreiras tecnológicas e potencializando suas habilidades. </p>
                    </div>
                </div>
                <div className={styles.content}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1920: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
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
                        <div className={styles.cardsTalents}>
                            {dataCardsTalents.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <CardTalents
                                            key={item.id}
                                            talent={item.talent}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
            </article>
        </section>
    )
}