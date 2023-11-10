import styles from './History.module.css';
import story1 from './../assets/story/story-1.svg';
import story2 from './../assets/story/story-2.svg';
import story3 from './../assets/story/story-3.svg';
import { Card } from './Card';
import { motion } from "framer-motion";

const dataCards = [
    {
        id: 1,
        content: {
            name: "Raízes que Germinam",
            paragraph: "No dia 20 de Novembro do ano de 2014, Val Conceição e Viviane Carvalho, se uniram em Feira de Santana, Bahia. para darem vida ao Coletivo Moviafro, um espaço que nasceu da necessidade de uma nova representatividade no Movimento Negro em Feira de Santana, partindo do princípio da ressignificação desse movimento em nosso município e por perceberem a necessidade dessa representatividade de forma mais abrangente e que oferecesse credibilidade não só externa, mas internamente. Existia uma carência em Feira de Santana de um grupo que verdadeiramente representasse o povo negro em todas as suas demandas, sejam elas culturais ou intelectuais. Precisava-se de algo que pudesse fazer com que a população negra e as comunidades se sentissem representados, e que, sobretudo, pudessem ter espaço de fala em momentos e locais jamais imaginados. Neste período, sementes foram plantadas, e a Moviafro surge como um porta voz das comunidades afrodescendentes de Feira de Santana, como uma representante fiel desses que herdaram dos seus ancestrais suas dores, mas também os seus valores."
        },
    },
    {
        id: 2,
        content: {
            name: "Pequenas Mudanças e Grande Diferença",
            paragraph: "Ao decorrer do ano de 2018, a Moviafro expandiu seus horizontes. Após dois anos de intensas ações afirmativas, as principais entidades da cultura de matriz africana de Feira de Santana, demonstraram interesse em fazer parte desse novo momento, dessa nova ideia, dessa nova alternativa que deu certo. Foi então que o Coletivo se transformou em uma Associação, que tornou-se a Associação Cultural Moviafro. Com isso a necessidade de abordar questões específicas de cada segmento se tornou evidente e após diversas reuniões, três núcleos foram criados, compostos por profissionais que, de forma voluntária, se dedicam a promover ações afirmativas. Estas têm como objetivo a erradicação das desigualdades historicamente arraigadas, assegurando igualdade de oportunidades e tratamento, bem como a compensação por perdas ocasionadas pela discriminação e marginalização decorrentes de fatores raciais, étnicos, religiosos, de gênero e outros.  Projetos colaborativos, parcerias estratégicas e eventos marcantes consolidaram sua posição como uma entidade vital na promoção da diversidade cultural em Feira de Santana. A Moviafro tornou-se um catalisador para o diálogo intercultural, promovendo a união através da arte e da cultura, além de reforçar seu compromisso com a educação e o impacto social. "
        },
    },
    {
        id: 3,
        content: {
            name: "Conectando Passado e Futuro",
            paragraph: "A Moviafro se consolidou como uma das instituições mais atuantes do movimento negro de Feira de Santana - BA, proporcionando oportunidades tangíveis para as comunidades locais prosperarem. Hoje, a Associação Cultural Moviafro continua a ser um pilar na tapeçaria cultural de Feira de Santana. Com seu lema 'Levantemos uns aos outros' e através de exposições, performances, oficinas e eventos comunitários, a Moviafro perpetua a riqueza da herança afro-brasileira, enquanto olha para o futuro com um compromisso firme com a inclusão, a diversidade e a cultura afro-brasileira."
        },
    },
];

export function History() {

    return (
        <section className={styles.services} id="history">
            {/* <div className={styles.arrowDown}>
                <CaretDown size={98} weight="fill" />
                <div>
                    <CaretDown size={28} weight="light" />
                </div>
            </div> */}
            <article className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2>Resistência Viva<br /><span>Nossa História</span></h2>
                        {/* <div className={styles.paragraph}> */}
                        {/* <motion.img initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 4 }} className={styles.pattern} src={pattern} alt="Patterns Moviafro" title="Patterns Moviafro" /> */}
                        {/* <p><strong>Início</strong></p> */}
                        {/* <div className={styles.line}></div> */}
                        {/* </div> */}

                    </div>
                    <div className={styles.paragraph2}>
                        <p><strong>2014</strong></p>
                    </div>
                    <div className={styles.cardsSection}>                  
                            <img className={styles.illustration} src={story1} alt="Val Conceição" title="Val Conceição" />                          
                        <div className={styles.cards}>
                            <Card
                                key={dataCards[0].id}
                                content={dataCards[0].content}
                            />
                        </div>
                    </div>

                    <div className={styles.paragraph2}>
                        <p className={styles.cardParagraph2}><strong>2018</strong></p>
                    </div>
                    <div className={styles.cardsSection}>
                        <img className={styles.illustration3} src={story2} alt="História da Moviafro" title="História da Moviafro" />
                        <div className={styles.cards}>
                            <Card hasBorderLeft={false}
                                key={dataCards[1].id}
                                content={dataCards[1].content}
                            />
                        </div>
                        <img className={styles.illustration2} src={story2} alt="História da Moviafro" title="História da Moviafro" />
                    </div>
                    <div className={styles.paragraph2}>
                        <p><strong>2023</strong></p>
                    </div>

                    <div className={styles.cardsSection}>
                        <img className={styles.illustration4} src={story3} alt="História da Moviafro" title="História da Moviafro" />
                        <div className={styles.cards}>
                        
                            <Card
                                key={dataCards[2].id}
                                content={dataCards[2].content}
                            />
                              
                        </div>
                    </div>

                    <div className={styles.paragraph2}>
                        <p><strong>E CONTINUA...</strong></p>
                    </div>

                </div>
            </article>
        </section>
    )
}