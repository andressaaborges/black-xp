import styles from './History.module.css';
import patterns5 from './../assets/patterns/5.png';
import { Card } from './Card';
import { motion } from "framer-motion";

const dataCards = [
    {
        id: 1,
        content: {
            name: "Uma Game Jam é uma maratona de desenvolvimento",
            paragraph: "Uma Game Jam é uma maratona de desenvolvimento onde os participantes se reúnem para criar jogos em um curto período de tempo. Esse formato intensivo e colaborativo proporciona uma experiência única de criação e inovação no desenvolvimento de jogos. E a segunda edição da Black XP é ainda mais especial, porque é focada em estudantes do 8º e 9º ano da rede pública de Salvador. Durante o evento, você e sua equipe vão criar um jogo do zero, usando muita criatividade e inovação. E o melhor: é totalmente gratuito e faz parte da programação do IV Festival Afrofuturismo.",
        },
    },
    {
        id: 2,
        content: {
            name: "Além de desenvolver o seu próprio jogo,",
            paragraph: "os participantes terão acesso a videoaulas e workshops com profissionais incríveis de áreas como design e programação, tudo pensado para ajudá-los a aprender e se preparar para a Jam. Também vai contar com o apoio de monitores prontos para auxiliar os times durante todo o processo. A Black XP não é só sobre games, é uma oportunidade de entrar no mundo da tecnologia, aprender novas habilidades e começar a pensar em uma carreira na área.",
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