import styles from './Home.module.css';
import olloLogo from './../assets/ollo.svg';
import olloStar from './../assets/olloStar.svg';

export function Home() {
    return (
        <section className={styles.home} id="home">
            <img className={styles.olloLogo} src={olloLogo} alt="Logo Ollo" />
            <article className={styles.content}>
                <div className={styles.titles}>
                    <h1>
                        Encontre os melhores talentos para o que você precisa.
                    </h1>
                    <h5>
                        Oferecemos o match perfeito entre os melhores talentos e a sua empresa em 72 horas.
                    </h5>
                </div>
                <img className={styles.olloStar1} src={olloStar} alt="Star Ollo" />
                <img className={styles.olloStar2} src={olloStar} alt="Star Ollo" />
                <img className={styles.olloStar3} src={olloStar} alt="Star Ollo" />
                <img className={styles.olloStar4} src={olloStar} alt="Star Ollo" />
                <img className={styles.olloStar5} src={olloStar} alt="Star Ollo" />
                <div className={styles.buttonsSection}>
                    <a href="https://ollo.is/br/hire/"><button className={styles.buttonBackground}>Quero contratar</button></a>
                    <a href="https://ollo.is/br/in/"><button className={styles.buttonHasBorder}>Quero fazer parte</button></a>
                </div>
            </article>
        </section>
    )
}