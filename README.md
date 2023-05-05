# <center> Ollo Landing Page </center>


## Estrutura da Aplicação


- Usar JavaScript no cliente-side com [React + Vite](https://vitejs.dev/guide/)
    - **Por que [React](https://reactjs.org/docs/introducing-jsx.html)?** Mais fácil para lidar com a quantidade de informações; É SPA (Single Page Aplication), por isso, o backend não é responsável pela construção visual da tela, garantindo um ganho em perfomance, tempo de carregamento e manuntenabilidade; tem a possibilidade de ter múltiplos frontends (Mobile, IOS, Web) todos consumindo a mesma fonte de dados em JSON.
    - **Por quê Vite?** Vite utiliza por padrão o ES Modules nativo do browser e possui um compilador interno, por isso não precisa de bundler e nem compiler externo, fazendo com que a experiência de desenvolvimento seja muito mais rápida e enxuta.

- Usar [CSS Modules](https://github.com/css-modules/css-modules) para estilização dos componentes
    - **Por que CSS Modules?** Para criar um estilo específico para cada componente através de um CSS escopado, garantindo maior organização e manuntenabilidade.

- Usar [Vitest](https://vitest.dev) para testes no client-side:
    - **Por que Vitest?** Vitest inclui os recursos mais comuns necessários para configurar testes unitários (mocking, instantâneos, cobertura). Além de ser um recurso compatível com JSX e TypeScript e com uma comunidade ativa de mantenedores.

- Utizar Microsserviços como arquitetura da aplicação: 

### Tools

- Git/Github
- Commits Convencionais / Git Emoji

### Requisitos para rodar o projeto
- Ter o NodeJS instalado e rodando na máquina. (Recomendação: v16 ou superior).
- Como executar:
    - clonar o repositório
    - executar `npm install` ou `npm i`
    - executar `npm run dev`