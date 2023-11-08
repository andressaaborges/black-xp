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
            text: "O NUMAS tem como finalidade primordial promover a garantia dos direitos e a proteção social de diversas parcelas da população, incluindo famílias, crianças, adolescentes, jovens, pessoas com deficiência e idosos em situação de vulnerabilidade. Para alcançar esse objetivo, atua de maneira coordenada na mobilização de esforços e recursos necessários para a execução de ações assistenciais. Essas ações abrangem aspectos preventivos, protetivos, interventivos e de inclusão social, visando assegurar a proteção integral das pessoas e seus familiares em situação de vulnerabilidade e risco pessoal e social. O NUMAS também desempenha um papel crucial ao oferecer ações socioeducativas e orientações, bem como encaminhamentos para a rede sócio-assistencial nas esferas governamentais federal, estadual e municipal. Ademais, presta suporte às entidades provedoras de serviços por meio de capacitações, monitoramentos e orientações."
        },
    },
    {
        id: 5,
        content: {
            title: "Núcleo Moviafro de Teatro Preto • NUMTEP",
            role: "",
            text: "Criado com o intuito de efetivar um abrangente projeto poético-político. Esse projeto engloba diversas vertentes, tais como representar o cotidiano da população negra, combater o racismo, promover a valorização e disseminação da cultura negra no país, e fomentar a participação ativa dos negros na sociedade. Além disso, busca-se estimular a conscientização e a construção das identidades negras, bem como capacitar artistas pertencentes a essa comunidade, e desenvolver uma dramaturgia e linguagem cênica próprias. O núcleo encontra-se profundamente influenciado pela rica cultura negra baiana, absorvendo elementos como a religiosidade, o caráter festivo e popular, a dança, os ritmos, os instrumentos percussivos, a memória ancestral, a estética corporal, as formas de resistência e a ênfase no registro oral da língua."
        },
    },
    {
        id: 6,
        content: {
            title: "Núcleo Moviafro de Apoio Jurídico • NUMAJ",
            role: "Coordenadora: Drª Diana Pereira",
            text: "Tem como finalidade primordial proporcionar atendimento especializado, com o propósito de oferecer apoio, orientação e acompanhamento às famílias que enfrentam situações de ameaça ou violação de direitos, envolvendo um ou mais de seus membros. Esse suporte engloba um conjunto de atenções e orientações direcionadas à promoção dos direitos, à preservação e ao fortalecimento dos laços familiares, comunitários e sociais. "
        },
    },
    {
        id: 7,
        content: {
            title: "Núcleo Moviafro de Apoio ao Culto Afro-Brasileiro • NUMACAB",
            role: "Coordenadora: Ekede Patrícia Pinheiro",
            text: "Criado com o propósito de fortalecer o combate à intolerância religiosa e oferecer suporte aos centros de culto africano, em colaboração com as organizações já existentes. Além disso, tem como missão orientar adeptos e simpatizantes das religiões afro-brasileiras em uma ampla gama de temas, abrangendo desde questões de Racismo Religioso, Regularização Fundiária e Inventário, Imunidade Tributária, até Antirracismo, Associativismo e Cooperativismo, Empreendedorismo, Previdência, Estatuto da Igualdade Racial, Saúde da População Negra e Acesso aos direitos e à justiça."
        },
    },
    {
        id: 8,
        content: {
            title: "Núcleo Moviafro de Política Preta • NUMPP",
            role: "",
            text: "Tem como principal objetivo fortalecer o debate acerca do protagonismo negro na política partidária. Para alcançar esse propósito, o NUMPP se empenha em oferecer cursos específicos voltados para a formação política da população afrodescendente, além de prestar apoio ativo a candidaturas negras. Dessa forma, busca-se promover a participação ativa e qualificada dos afrodescendentes no cenário político, contribuindo para uma representatividade mais justa e inclusiva."
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