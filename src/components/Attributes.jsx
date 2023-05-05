import styles from './Attributes.module.css';
import olloIllustrationEye from './../assets/olloIllustrationEye.svg';
import { CardAttributes } from './CardAttributes';

const dataCardsAttributes = [
    {
        id: 1,
        content: {
            title: "hiperantenados",
            text: "Encaramos os projetos por diferentes ângulos. Cada pessoa do nosso time de recrutamento têm a sua especialidade, experiência e vivência. Essa diversidade cultural contribui para criar curadorias incríveis e isso é o que mais conta!"
        },
    },
    {
        id: 2,
        content: {
            title: "hipercomprometidos",
            text: "Estamos sempre perto dos nossos talentos e dos nossos clientes para atuar quando necessário. A nossa participação só termina quando o projeto acaba."
        },
    },
    {
        id: 3,
        content: {
            title: "hiperflexíveis",
            text: "Cada projeto é único e a nossa forma de lidar com eles também. Nos adaptamos às necessidades de cada cliente para entregar exatamente o que é esperado."
        },
    },
    {
        id: 4,
        content: {
            title: "hiperbem-relacionados",
            text: "Já conectamos mais de 120 clientes globais aos nossos talentos. E nessa conexão todo mundo sai ganhando: empresas e profissionais."
        },
    },
    {
        id: 5,
        content: {
            title: "hiper-rápidos",
            text: "Alocamos os melhores talentos de forma ágil e eficiente, sempre levando em consideração as habilidades necessárias, o prazo e o orçamento disponível."
        },
    },
];

export function Attributes() {
    return (
        <section className={styles.attributes} id="attributes">
            <article className={styles.container}>
                <h2>Somos ultra, mega, <span>hipereficientes.</span></h2>
                <div className={styles.content}>
                    {dataCardsAttributes.map(item => {
                        return (
                            <CardAttributes
                                key={item.id}
                                content={item.content}
                            />
                        )
                    })}
                    <img src={olloIllustrationEye} alt="Ilustração Ollo"/>
                </div>
            </article>
        </section>
    )
}