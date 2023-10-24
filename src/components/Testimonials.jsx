import styles from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import missAfro from './../assets/actions/missAfroGeisaBorges.jpg';
import emmn from './../assets/actions/encontro-moviafro-de-mulheres-negras.jpg';
import missaAfro from './../assets/actions/missaAfro.jpg';
import narrativasNegras from './../assets/actions/narrativasNegras.jpeg';
import festivalMusicasNegrasImportam from './../assets/actions/festivalMusicasNegrasImportam.jpg';
import ensaiosDoMicareta from './../assets/actions/ensaiosDoMicareta.jpg';
import projetoNovembroNegro from './../assets/actions/projeto-novembro-negro.jpg';
import misterAfro from './../assets/actions/misterAfro.jpg';
import cortejoMoviafro from './../assets/actions/cortejoMoviafro.jpg';
import projetoEnemgrecer from './../assets/actions/projeto-enemgrecer.png';
import circuitoMoviafro from './../assets/actions/circuitoMoviafro.jpg';
import cortejoPelaPaz from './../assets/actions/cortejoPelaPaz.jpg';
import missPlusSize from './../assets/actions/miss-plus-size.webp';

export function Testimonials() {
    return (
        <section className={styles.testimonials} id="testimonials">
            <h2>Nossas Ações<span><br />Transformação Social</span></h2>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 50000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className={styles.mySwiper}
            >

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={missAfro} alt="Miss Afro Feira de Santana 2023" title="Geisa Borges Miss Afro 2023" />
                        <div className={styles.content}>
                            <h3>Miss Afro Feira de Santana</h3>
                            <p>O Miss Afro Feira de Santana é um concurso reverenciado na cidade, enraizado em tradição e comprometido com o desenvolvimento da autoestima e educação. Durante todo o processo, meninas e mulheres mergulham em rodas de conversa, palestras, seminários, oficinas e cursos que abordam questões raciais. Este concurso já impactou positivamente a vida de cerca de mil mulheres negras, promovendo a celebração de nossa identidade e a luta pela igualdade racial. A atual Miss Afro de Feira de Santana é Geisa Borges, grande ganhadora do último concurso.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={emmn} alt="Encontro Moviafro de Mulheres Negras" title="Moviafro e seu Núcleo Numnegras" />
                        <div className={styles.content}>
                            <h3>Encontro Moviafro de Mulheres Negras</h3>
                            <p>O Encontro é uma iniciativa anual que ocorre em julho, em honra ao mês da Mulher Afro-Latino Americana e Afro-Caribenha, destinado a ampliar a visibilidade e reconhecer o valor inestimável das mulheres negras brasileiras. Ao longo dos anos, tem se firmado como um dos principais acontecimentos na celebração do mês de julho, contando com a presença de diversas personalidades negras de Feira de Santana e região, incluindo notáveis como Mãe Graça de Nanã.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={missaAfro} alt="Missa Afro de Feira de Santana" title="Missa Afro de Feira de Santana" />
                        <div className={styles.content}>
                            <h3>Missa Afro de Feira de Santana</h3>
                            <p>Desde 2018, em colaboração com a ICAIB - Igreja Católica Independente do Brasil e a FENACAB - Federação Nacional do Culto Afro-Brasileiro, regionais de Feira de Santana, a Moviafro realiza a Missa Afro como um encerramento anual de suas atividades. É um momento de gratidão e renovação espiritual para o próximo ano, uma preparação para os desafios vindouros e, igualmente importante, um momento de confraternização para todos os membros e membros da Moviafro. Acolhidos de maneira calorosa pelo Arcebispo Dom Marcos Paulo, adeptos e simpatizantes das religiões afro-brasileiras se sentem em casa, conforme deve ser. Além disso, a Missa Afro também simboliza a celebração da paz e harmonia entre as diversas expressões religiosas.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={narrativasNegras} alt="Curso Narrativas Negras: Escrevendo as Nossas Histórias" title="Curso Narrativas Negras: Escrevendo as Nossas Histórias" />
                        <div className={styles.content}>
                            <h3>Narrativas Negras: Escrevendo as Nossas Histórias</h3>
                            <p>Em uma colaboração inédita em Feira de Santana, a Moviafro e o Projeto Afropapo, concebido pelo professor e escritor Daniel Pintto, apresentam o primeiro curso dedicado exclusivamente a pessoas negras, com o objetivo de capacitar futuras pessoas autoras negras. O curso, de 60 horas e totalmente gratuito, concede um certificado ao término. Sob o tema "Narrativas Negras: Escrevendo as Nossas Histórias", orienta os participantes negros inscritos a desenvolverem suas habilidades na escrita e publicação de seus próprios livros. Ao final do curso, é lançada uma coletânea que reúne contos, textos e narrativas produzidas pelos alunos.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={festivalMusicasNegrasImportam} alt="Festival Músicas Negras Importam" title="Festival Músicas Negras Importam" />
                        <div className={styles.content}>
                            <h3>Festival Músicas Negras Importam</h3>
                            <p>Em 2020, nasceu o Festival de Música Negra e Identidade (FMNI), em meio ao turbilhão da Pandemia do Covid-19. As entidades culturais de matriz africana foram as mais impactadas, já que, em tempos normais, esta comunidade não contava com nenhum subsídio das esferas governamentais. Muitas delas sobreviviam apenas com uma modesta ajuda de custo oferecida pelo governo municipal. Com a pandemia, algumas destas entidades sucumbiram. No entanto, foi nesse momento crítico que a Lei Aldir Blanc surgiu, e a Moviafro viu sua ação afirmativa reconhecida.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={ensaiosDoMicareta} alt="Ensaios Moviafro para a Micareta de Feira de Santana" title="Ensaios Moviafro para a Micareta de Feira de Santana" />
                        <div className={styles.content}>
                            <h3>Ensaios Moviafro para a Micareta de Feira de Santana</h3>
                            <p>Em 2019, marcamos um marco histórico com a primeira edição deste projeto de vital importância, apoiado pela Secretaria de Cultura do município. Durante três finais de semana, convergimos na uma das praças mais encantadoras de Feira de Santana. Lá, congregam-se todas as entidades afiliadas à Moviafro, blocos afros, afoxés, escolas de samba, blocos de samba, blocos de reggae e blocos de capoeira com suas envolventes percussões e grupos de dança. Juntos, lançamos nossos temas, deliberamos sobre nossas ações e nos preparamos para desfilar com orgulho na Micareta.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={projetoNovembroNegro} alt="Projeto Novembro Negro Moviafro" title="Projeto Novembro Negro Moviafro" />
                        <div className={styles.content}>
                            <h3>Projeto Novembro Negro Moviafro</h3>
                            <p>Um movimento que une as entidades culturais de matriz africana em Feira de Santana e arredores. Nossas atividades englobam rodas de conversa, oficinas, palestras e seminários. A cada ano, um tema central e subtemas são cuidadosamente selecionados, todos profundamente entrelaçados com a luta e a celebração da identidade negra. É mais do que um projeto, é uma afirmação de nossa negritude e um compromisso com a erradicação do racismo em nossa sociedade.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={misterAfro} alt="Mister Afro Feira de Santana" title="Participante do Mister Afro Feira de Santana" />
                        <div className={styles.content}>
                            <h3>Mister Afro Feira de Santana</h3>
                            <p>O Mister Afro surge inspirado no Miss Afro, oferecendo uma plataforma para homens que se autodeclaram negros, com idades entre 16 e 45 anos. Seu propósito central é elevar a autoestima dos participantes, promovendo uma profunda conexão com sua herança e identidade. Por meio de palestras, rodas de conversa, oficinas de formação e seminários, buscamos não apenas celebrar  a beleza negra, mas também fortalecer a consciência afrodescendente. Assim como no concurso Miss Afro, o Mister Afro não busca eleger o mais belo, mas sim aquele que mais se identifica e se engaja com as questões cruciais da nossa comunidade afrodescendente. Este é um espaço para celebração, empoderamento e resistência contra o racismo.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={cortejoMoviafro} alt="Cortejo Moviafro" title="Cortejo Moviafro" />
                        <div className={styles.content}>
                            <h3>Cortejo Moviafro</h3>
                            <p>O Cortejo Moviafro é um evento anual de manifestação artística e cultural profundamente enraizado na negritude. Nele, pessoas se unem nas ruas vestindo com orgulho as cores e trajes tradicionais, imergindo em danças e capoeira pelo Circuito Maneca Ferreira, encerrando com grandeza a Micareta de Feira. Este encontro congrega os blocos afros mais emblemáticos da cidade, emanando uma celebração vibrante da nossa rica herança cultural.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={projetoEnemgrecer} alt="Projeto Enem-Grecer" title="Print Projeto Enem-Grecer" />
                        <div className={styles.content}>
                            <h3>Projeto Enem-Grecer</h3>
                            <p>O Projeto Enem-Grecer é um programa educacional afrocentrado, destinado a estudantes de escolas públicas em Feira de Santana e região, que estão se preparando para o Enem. Oferecemos aulas gratuitas ministradas por um grupo de pessoas educadoras que são membros ativos do Núcleo Moviafro de Pedagogia. Além de abordar dúvidas específicas sobre o Enem, os estudantes realizam simulados preparatórios. Esta iniciativa não é apenas sobre o acesso à educação, mas sobre empoderar jovens negros e negras a alcançar o sucesso acadêmico e além.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={circuitoMoviafro} alt="Circuito Moviafro para a Preservação da Cultura de Matriz Africana" title="Circuito Moviafro para a Preservação da Cultura de Matriz Africana" />
                        <div className={styles.content}>
                            <h3>Circuito Moviafro para a Preservação da Cultura de Matriz Africana</h3>
                            <p>O Circuito Moviafro é uma iniciativa persistente de afroempreendedorismo. Seu propósito é catalisar o desenvolvimento e a sustentação de empreendimentos liderados por pessoas negras, especialmente aquelas em situação de vulnerabilidade social. Esta ação é uma resposta direta à necessidade urgente de fortalecer a presença e o impacto da comunidade negra no mundo dos negócios.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={cortejoPelaPaz} alt="Cortejo Moviafro pela Paz e contra a Intolerância Religiosa" title="Cortejo Moviafro pela Paz e contra a Intolerância Religiosa" />
                        <div className={styles.content}>
                            <h3>Cortejo Moviafro pela Paz e contra a Intolerância Religiosa</h3>
                            <p>As religiões afro-brasileiras enfrentam diariamente o racismo e a intolerância. A triste realidade inclui inúmeros atos de violência contra nossos lares, terreiros e devotos. Em 2016, o cortejo surgiu como um ato de resistência contra esses crimes e como um meio de unir ainda mais pessoas praticantes e apoiadoras da Umbanda e do Candomblé. A Moviafro está na vanguarda dessa batalha, defendendo a liberdade e a dignidade de nossa comunidade. União e resiliência são nossas armas mais poderosas.</p>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    <article className={styles.cardTestimonials}>
                        <img src={missPlusSize} alt="Miss Afro Plus Size Feira de Santana" title="Vencedoras do Concurso Miss Afro Plus Size Feira de Santana" />
                        <div className={styles.content}>
                            <h3>Miss Afro Plus Size Feira de Santana</h3>
                            <p>O Concurso Miss Afro Plus Size segue a mesma filosofia do Miss e Mister Afro, sendo direcionado para mulheres com manequim a partir de 46. No entanto, ele se destaca por sua missão inclusiva, combatendo a discriminação por capacidade, a gordofobia e desafiando estereótipos arraigados. Nosso objetivo primordial é enaltecer a beleza da mulher negra e gorda, honrando e respeitando sua verdadeira essência. Este é um espaço de reafirmação da força da mulher negra em toda a sua diversidade e autenticidade.</p>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}