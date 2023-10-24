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
            role: "Coordenador: Val Conceição",
            text: "Núcleo Moviafro de Homens Negros é um coletivo de Tecnologistas, Desenvolvedores, Fotógrafos e Autônomos negros, unidos por um propósito comum: fortalecer a comunidade afrodescendente e lutar incansavelmente pela igualdade racial. Cada membro traz consigo um conjunto único de habilidades e conhecimentos. Ao compartilharem suas experiências e sabedorias, constroem juntos um um quilombo que se fortalece e atua na batalha pela justiça e equidade racial."
        },
    },
    {
        id: 3,
        content: {
            title: "Núcleo Moviafro de Apoio Pedagógico • NUMPED",
            role: "Coordenadora: Vânia Vitória",
            text: "Formado por profissionais e estudantes comprometidos com a pedagogia inclusiva e a equidade. Nosso propósito é promover a inclusão social através da educação, atuando como disseminadores das melhores práticas pedagógicas em meio à população brasileira em situação socioeconômica vulnerável."
        },
    },
    {
        id: 4,
        content: {
            title: "Núcleo Moviafro de Ação Social • NUMAS",
            role: "Coordenadora: Marinalda Soares",
            text: "O Encontro é uma iniciativa anual que ocorre em julho, em honra ao mês da Mulher Afro-Latino Americana e Afro-Caribenha, destinado a ampliar a visibilidade e reconhecer o valor inestimável das mulheres negras brasileiras. Ao longo dos anos, tem se firmado como um dos principais acontecimentos na celebração do mês de julho, contando com a presença de diversas personalidades negras de Feira de Santana e região, incluindo notáveis como Mãe Graça de Nanã."
        },
    },
    {
        id: 5,
        content: {
            title: "Núcleo Moviafro de Teatro Preto • NUMTEP",
            role: "",
            text: "O Projeto Enem-Grecer é um programa educacional afrocentrado, destinado a estudantes de escolas públicas em Feira de Santana e região, que estão se preparando para o Enem. Oferecemos aulas gratuitas ministradas por um grupo de pessoas educadoras que são membros ativos do Núcleo Moviafro de Pedagogia. Além de abordar dúvidas específicas sobre o Enem, os estudantes realizam simulados preparatórios. Esta iniciativa não é apenas sobre o acesso à educação, mas sobre empoderar jovens negros e negras a alcançar o sucesso acadêmico e além."
        },
    },
    {
        id: 6,
        content: {
            title: "Núcleo Moviafro de Apoio Jurídico • NUMAJ",
            role: "",
            text: "Em 2020, nasceu o Festival de Música Negra e Identidade (FMNI), em meio ao turbilhão da Pandemia do Covid-19. As entidades culturais de matriz africana foram as mais impactadas, já que, em tempos normais, esta comunidade não contava com nenhum subsídio das esferas governamentais. Muitas delas sobreviviam apenas com uma modesta ajuda de custo oferecida pelo governo municipal. Com a pandemia, algumas destas entidades sucumbiram. No entanto, foi nesse momento crítico que a Lei Aldir Blanc surgiu, e a Moviafro viu sua ação afirmativa reconhecida."
        },
    },
    {
        id: 7,
        content: {
            title: "Núcleo Moviafro de Apoio ao Culto Afro-Brasileiro • NUMCAB",
            role: "",
            text: "O Cortejo Moviafro é um evento anual de manifestação artística e cultural profundamente enraizado na negritude. Nele, pessoas se unem nas ruas vestindo com orgulho as cores e trajes tradicionais, imergindo em danças e capoeira pelo Circuito Maneca Ferreira, encerrando com grandeza a Micareta de Feira. Este encontro congrega os blocos afros mais emblemáticos da cidade, emanando uma celebração vibrante da nossa rica herança cultural."
        },
    },
    {
        id: 8,
        content: {
            title: "Núcleo Moviafro de Política Preta • NUMPP",
            role: "",
            text: "O Circuito Moviafro é uma iniciativa persistente de afroempreendedorismo. Seu propósito é catalisar o desenvolvimento e a sustentação de empreendimentos liderados por mulheres e homens negros, especialmente aqueles em situação de vulnerabilidade social. Esta ação é uma resposta direta à necessidade urgente de fortalecer a presença e o impacto da comunidade negra no mundo dos negócios."
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