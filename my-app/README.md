#  Submundo 808

Uma aplicação web moderna construída em Next.js dedicada à cultura funk e eventos musicais da Submundo808.

## 📋 Sobre o Projeto

A **Submundo 808** é uma plataforma que celebra a cultura do funk e promove eventos musicais autênticos. O projeto representa mais que uma simples festa - é um movimento que fortalece a cultura da favela e valoriza a arte dos DJs locais.

###  Funcionalidades

- **Página Inicial**: Apresentação da marca e filosofia da Submundo808
- **Eventos**: Sistema completo de gerenciamento de eventos com:
  - Listagem de eventos por categorias (próximos, passados, destaque)
  - Visualização detalhada de cada evento
- **Sobre**: Página pessoal do desenvolvedor Kevin Lima com:
  - Animação de digitação
  - Showcase de habilidades técnicas
  - Informações profissionais
- **Contato**: Formulário de contato

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.3** - Framework React para produção
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **CSS Modules** - Estilização componentizada
- **ESLint** - Linting e qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.jsx              # Página inicial
│   ├── eventos/              # Páginas de eventos
│   │   ├── page.jsx          # Lista de eventos
│   │   └── [id]/page.jsx     # Detalhes do evento
│   ├── sobre/page.jsx        # Página sobre Kevin Lima
│   ├── contato/page.jsx      # Página de contato
│   └── globals.css           # Estilos globais
└── components/
    ├── Header/               # Cabeçalho da aplicação
    ├── Footer/               # Rodapé da aplicação
    ├── Cards/                # Componente de cards
    ├── DjCard/               # Card específico para DJs
    └── StatisticCard/        # Card de estatísticas
```

##  Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone [url-do-repositório]
cd my-app
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env.local e configure:
NEXT_PUBLIC_API_URL=sua_api_url_aqui
```

4. Execute em modo de desenvolvimento
```bash
npm run dev
```

5. Acesse em seu navegador: `http://localhost:3000`

##  Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Executa a aplicação em modo de produção
- `npm run lint` - Executa o linting do código

## 🎯 Funcionalidades Técnicas

- **Server-Side Rendering (SSR)** com Next.js
- **Roteamento dinâmico** para páginas de eventos
- **Componentes reutilizáveis** com CSS Modules
- **Responsividade** para diferentes dispositivos
- **Integração com API** para dados dinâmicos de eventos
- **Animações CSS** personalizadas

## 🎨 Design

- Interface moderna
- Tema escuro apropriado para o ambiente musical
- Animações suaves e interativas
- Design focado na experiência do usuário
- Tipografia e cores alinhadas com a identidade visual

##  Desenvolvedor

Projeto desenvolvido por **Kevin Lima**, um desenvolvedor apaixonado por tecnologia e cultura musical.

---

**Submundo 808** - Onde a cultura da favela encontra a tecnologia moderna! 🚀
