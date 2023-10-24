import styles from './Home.module.css';
import olloLogo from './../assets/ollo.svg';
import olloStar from './../assets/olloStar.svg';
import { motion } from 'framer-motion';

export function Home() {
    return (
        <section className={styles.home} id="home">
            <motion.img className={styles.olloLogo} src={olloStar} alt="Logo Ollo" whileInView={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} />
            <article className={styles.content}>
                <div className={styles.textImg}>
                    <motion.img className={styles.afro} src={olloLogo} alt="Star Ollo" whileInView={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }} />
                    <div className={styles.titles}>
                        <h1>Raízes de Resistência: 8 anos da Moviafro em Prol da Cultura Afro</h1>
                        {/* <h5 className={styles.h5Pt}>{t("home.description")}</h5> */}
                        <h5 className={styles.h5En}>Celebrando a Herança Negra de Feira de Santana, Nosso Compromisso e Atuação na Luta Antirracista.</h5>
                    </div>
                </div>
                {/* <motion.img className={styles.olloStar1} src={olloStar} alt="Star Ollo" whileInView={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} />
                <motion.img className={styles.olloStar2} src={olloStar} alt="Star Ollo" whileInView={{ x: [0, 69, 0] }} />
                <motion.img className={styles.olloStar3} src={olloStar} alt="Star Ollo" whileInView={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} />
                <motion.img className={styles.olloStar4} src={olloStar} alt="Star Ollo" whileInView={{ x: [0, 36, 0] }} />
                <motion.img className={styles.olloStar5} src={olloStar} alt="Star Ollo" whileInView={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} /> */}
                <div className={styles.buttonsSection}>
                    <a href={"#services"}
                        className={styles.buttonBackground}>
                        Conheça nossa História
                    </a>

                    <a href={"#operation"}
                        className={styles.buttonHasBorder}>
                        Veja nosso Impacto
                    </a>
                </div>
            </article>
        </section>
    )
}