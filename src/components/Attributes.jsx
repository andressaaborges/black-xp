import styles from './Attributes.module.css';
import { CardAttributes } from './CardAttributes';

const dataCardsAttributes = [
    {
        id: 1,
        content: {
            title: "Núcleo Moviafro de Mulheres Negras • NUMNEGRAS",
            role: "Coordenadora: Andressa Borges",
            text: "Força coletiva composta por Psicólogas, Assistentes Sociais, Pedagogas, Advogadas, Historiadoras, Desenvolvedoras, Mestras e Doutoras negras, todas engajadas e militantes. Além disso, conta com a participação de comerciantes e vendedoras ambulantes autônomas, que compartilham não apenas suas habilidades profissionais, mas também a riqueza de seus saberes. Esta união fortalece a comunidade, mas também proporciona um espaço para acesso a informações e formação, oportunidade que por tanto tempo lhes foi negada."
        },
    },
    {
        id: 2,
        content: {
            title: "Núcleo Moviafro de Homens Negros • NUMNEGROS",
            role: "Coordenador: Profº Daniel Pintto",
            text: "Núcleo Moviafro de Homens Negros é um coletivo de Tecnologistas, Desenvolvedores, Fotógrafos e Autônomos negros, unidos por um propósito comum: fortalecer a comunidade afrodescendente e lutar incansavelmente pela igualdade racial. Cada membro traz consigo um conjunto único de habilidades e conhecimentos. Ao compartilharem suas experiências e sabedorias, constroem juntos um um quilombo que se fortalece e atua na batalha pela justiça e equidade racial."
        },
    },
    {
        id: 3,
        content: {
            title: "Núcleo Moviafro de Apoio Pedagógico • NUMPED",
            role: "Coordenadora: Edivânia Vitória",
            text: "Formado por profissionais e estudantes comprometidos com a pedagogia inclusiva e a equidade. Nosso propósito é promover a inclusão social através da educação, atuando como disseminadores das melhores práticas pedagógicas em meio à população brasileira em situação socioeconômica vulnerável."
        },
    },
    {
        id: 4,
        content: {
            title: "Núcleo Moviafro de Ação Social • NUMAS",
            role: "Coordenadora: Marinalda Soares",
            text: ""
        },
    },
    {
        id: 5,
        content: {
            title: "Núcleo Moviafro de Teatro Preto • NUMTEP",
            role: "",
            text: ""
        },
    },
    {
        id: 6,
        content: {
            title: "Núcleo Moviafro de Apoio Jurídico • NUMAJ",
            role: "Coordenadora: Drª Diana Pereira",
            text: ""
        },
    },
    {
        id: 7,
        content: {
            title: "Núcleo Moviafro de Apoio ao Culto Afro-Brasileiro • NUMCAB",
            role: "Coordenadora: Ekede Patrícia Pinheiro",
            text: ""
        },
    },
    {
        id: 8,
        content: {
            title: "Núcleo Moviafro de Política Preta • NUMPP",
            role: "",
            text: ""
        },
    },
];

export function Attributes() {
    return (
        <section className={styles.attributes} id="attributes">
            <article className={styles.container}>
                <h2>Nossos Núcleos<span><br />Aquilombar é Fortalecer</span></h2>
                <div className={styles.content}>
                    {dataCardsAttributes.map(item => {
                        return (
                            <CardAttributes
                                key={item.id}
                                title={item.content.title}
                                role={item.content.role}
                                description={item.content.text}
                            />
                        )
                    })}
                    {/* <img src={olloIllustrationEye} alt="Ilustração Ollo"/> */}
                </div>
            </article>
        </section>
    )
}