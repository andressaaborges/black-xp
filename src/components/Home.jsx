import styles from './Home.module.css';
import blackxp from './../assets/blackXp.svg';
import patterns2 from './../assets/patterns/9.png';
import patterns5 from './../assets/patterns/4.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function Home() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    // Animação personalizada para a logo
    const logoAnimation = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        move: {
            x: [0, -20, 20, -20, 20, 0],
            y: [0, -20, 20, -20, 20, 0],
            transition: { duration: 2, ease: 'easeInOut', loop: Infinity },
        },
    };

    // Animação personalizada para os patterns
    const patternsAnimation = {
        hidden: { scale: 0, rotate: 0 },
        visible: { scale: 1, rotate: 360, transition: { duration: 0.5 } },
    };

    // Disparar as animações quando os elementos estiverem no campo de visão
    useEffect(() => {
        if (inView) {
            controls.start('visible');
            controls.start('move'); // Adicionado para iniciar a animação de movimento
        }
    }, [controls, inView]);

    return (
        <section className={styles.home} id="home">
            <motion.img
                className={styles.patterns}
                src={patterns5}
                alt="Padrão geométrico da BlackXP"
                title="Padrão geométrico da BlackXP"
                initial="hidden"
                animate={controls}
                ref={ref}
                variants={patternsAnimation}
            />
            <motion.img
                className={styles.patterns2}
                src={patterns2}
                alt="Padrão geométrico da BlackXP"
                title="Padrão geométrico da BlackXP"
                initial="hidden"
                animate={controls}
                ref={ref}
                variants={patternsAnimation}
            />
            <article className={styles.content}>
                <div className={styles.textImg}>
                    <motion.img
                        className={styles.logo}
                        src={blackxp}
                        alt="Logo Black XP"
                        title="Logo Black XP"
                        variants={logoAnimation}
                        initial="hidden"
                        animate={controls}
                        ref={ref}
                    />
                </div>
                <div className={styles.buttonsSection}>
                    <button className={styles.buttonBackground}>
                        <a href="https://www.sympla.com.br/evento-online/black-xp-game-jam-online/2275832">
                            Inscreva-se agora!
                        </a>
                    </button>
                    <button className={styles.buttonHasBorder}>
                        <a href="https://www.sympla.com.br/black-xp-game-jam__2275828">
                            Participe Presencial!
                        </a>
                    </button>
                </div>
            </article>
        </section>
    );
}
