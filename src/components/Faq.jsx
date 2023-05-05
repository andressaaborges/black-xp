import styles from './Faq.module.css';

export function Faq() {
    return (
        <section className={styles.faq} id="faq">
            <article className={styles.container}>
                <h2>Nós temos <span>as respostas</span> que você precisa.</h2>
                <ol>
                    <li>
                        <details>
                            <summary>A Ollo é uma agência?</summary>
                            <p>Não. Somos uma plataforma de conexão entre talentos e empresas. <a href="#services">Clique aqui</a> para conhecer os nossos serviços.</p>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Quais são os planos oferecidos pela Ollo?</summary>
                            <p>Temos diversos planos para servir a qualquer demanda. <a href="#services">Clique aqui</a> para conhecer os nossos planos.</p>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Quais especialidades são oferecidas pela Ollo?</summary>
                            <p>Temos profissionais e soluções em diversas especialidades, como por exemplo:
                                <ul>
                                    <li>Design</li>
                                    <li>Branding</li>
                                    <li>Estratégia</li>
                                    <li>Criação</li>
                                    <li>Tecnologia</li>
                                    <li>Mídia</li>
                                    <li>Business Intelligence</li>
                                    <li>Produção de Conteúdo</li>
                                    <li>E muito mais.</li>
                                </ul>
                            </p>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>E se eu não estiver satisfeito com o desempenho de um talento? Posso fazer a troca?</summary>
                            <p>Aqui, a sua satisfação é garantida. A Ollo oferece um período de teste*. Se você não estiver 100% satisfeito com seu match, oferecemos outro profissional.</p>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sou um talento, como faço parte?</summary>
                            <p>Para fazer parte da comunidade de talentos da Ollo, basta <a href="#services">clicar aqui</a>, fazer o seu cadastro e nosso time de comunidade entrará em contato com você quando pintar o projeto perfeito para o seu perfil.</p>
                        </details>
                    </li>
                </ol>
            </article>
        </section>
    )
}