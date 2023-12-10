import styles from './History.module.css';
import patterns5 from './../assets/patterns/5.png';
import { Card } from './Card';
import { motion } from "framer-motion";

const dataCards = [
    {
        id: 1,
        content: {
            name: "Uma Game Jam é uma maratona de desenvolvimento",
            paragraph: "onde os participantes se reúnem para criar jogos em um curto período de tempo. Esse formato intensivo e colaborativo proporciona uma experiência única de criação e inovação no desenvolvimento de jogos. Mas a nossa é uma BLACK GAME JAM que é ainda mais especial, porque cria um ambiente diverso e acolhedor, focado no desenvolvimento de pessoas negras, sejam homens ou mulheres - cis, trans ou pessoas não-binárias. Ah, também temos um time super especial de monitores de diferentes áreas para ajudar sua equipe durante a jam.",
        },
    },
    {
        id: 2,
        content: {
            name: "Nosso evento é gratuito e híbrido",
            paragraph: "ou seja, você pode optar por trabalhar online com a sua equipe através do nosso servidor ou no nosso espaço de coworking com equipamentos, internet de alta velocidade, muito café e um espaço kids para sua criança. Se essa é a sua primeira game jam, não se preocupe! Preparamos também um “After formativo” uma semana inteira com workshops online com um time de profissionais incríveis de diferentes áreas de desenvolvimento de jogos - no campo do design, programação, monetização de jogos que vão te ajudar a aprimorar suas habilidades, tirar dúvidas e se preparar melhor para Black Game Jam.",
        },
    },
];

export function History() {
    return (
        <section className={styles.services} id="what">
            <article className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2>O que é a Black XP?</h2>
                    </div>

                    <div className={styles.cardsSection}>
                        <div className={styles.cards}>
                            <Card key={dataCards[0].id} content={dataCards[0].content} />
                            <Card hasBorderLeft={false} key={dataCards[1].id} content={dataCards[1].content} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} />
                        </div>
                        <div className={styles.patternsWrapper}>
                            <motion.img className={styles.patterns} src={patterns5} alt="Padrão geométrico da BlackXP" title="Padrão geométrico da BlackXP" whileInView={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}