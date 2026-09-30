# Catálogo de Séries

Aplicação web para explorar séries de TV e montar uma lista de favoritos. Os dados vêm da [API da TVMaze](https://www.tvmaze.com/api).

## Funcionalidades

- Catálogo de séries com pôster e nome
- Página de detalhes com idioma, gêneros, descrição e imagem
- Adicionar e remover séries dos favoritos
- Página de favoritos com contador na barra de navegação

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) para navegação
- Context API para gerenciar os favoritos
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [TVMaze API](https://www.tvmaze.com/api) como fonte de dados

## Rotas

| Rota           | Descrição                        |
| -------------- | -------------------------------- |
| `/series`      | Catálogo de séries               |
| `/series/:id`  | Detalhes de uma série            |
| `/favorites`   | Lista de séries favoritas        |

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone <url-do-repositorio>
cd <nome-da-pasta>

# instalar as dependências
bun install

# iniciar o servidor de desenvolvimento
bun run dev
```

Depois, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Estrutura do projeto

```
src/
├── context/     # FavoritesContext e FavoritesProvider
├── pages/       # SeriesPage, SeriesDetails e FavoritesShows
├── components/  # NavBar
└── types/       # ShowsTypes
```

## Licença

Projeto para fins de estudo.