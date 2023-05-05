import { CaretDown } from '@phosphor-icons/react';
import styles from './Services.module.css';
import olloIllustration from './../assets/olloIllustration.svg';
import { Card } from './Card';

const dataCards = [
    {
        id: 1,
        content: {
            name: "Freelancers",
            paragraph: "Comunidade hipercurada de profissionais para atuar em projetos de curta e longa duração. São mais de 2500 talentos prontos para botar a mão na massa."
        },
    },
    {
        id: 2,
        content: {
            name: "Recruiting",
            paragraph: "Precisa de profissionais para atuar de forma fixa? É pra já! Temos soluções personalizadas para fazer essa integração dentro da sua estrutura, seja de forma presencial ou remota."
        },
    },
    {
        id: 3,
        content: {
            name: "Squads",
            paragraph: "Por meio da nossa metodologia Ollo Squad Builder™, montamos squads inteiros de forma rápida e customizada, otimizando os processos de consolidação de times."
        },
    },
];

export function Services() {

    return (
        <section className={styles.services} id="services">
            <div className={styles.arrowDown}>
                <CaretDown size={98} weight="fill" />
                <div>
                    <CaretDown size={28} weight="light" />
                </div>
            </div>
            <article className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2>0% drama<br /><span>100% ação.</span></h2>
                        <p>Conectamos empresas a uma rede global de talentos prontos para atuar com <strong>design</strong>, <strong>publicidade</strong>, <strong>marketing</strong> e <strong>tecnologia</strong>.</p>
                    </div>
                    <div className={styles.cardsSection}>
                        <img className={styles.illustration} src={olloIllustration} alt="Ollo Ilustração" />
                        <div className={styles.cards}>
                            {dataCards.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        content={item.content}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}