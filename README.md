<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="180" height="180">
    <rect width="512" height="512" rx="80" fill="#080808" />
    <text x="256" y="280" font-family="Georgia, serif" font-size="180" font-weight="bold" fill="#e0e0e0" text-anchor="middle" letter-spacing="8">NOX</text>
    <text x="256" y="370" font-family="Georgia, serif" font-size="48" fill="#b5b5b5" text-anchor="middle" letter-spacing="4">BIBLIOTECA</text>
    <circle cx="256" cy="130" r="20" fill="none" stroke="#e0e0e0" stroke-width="3" />
    <path d="M256 110 L256 150 M236 130 L276 130" stroke="#e0e0e0" stroke-width="3" />
  </svg>
</p>

<h1 align="center">NOX — Biblioteca Digital PWA</h1>
<p align="center">
  <strong>Sua biblioteca. Apenas leitura.</strong>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status" /></a>
  <a href="#"><img src="https://img.shields.io/badge/PWA-100%25-blue" alt="PWA" /></a>
  <a href="#"><img src="https://img.shields.io/badge/license-[TIPO_DE_LICENÇA]-green" alt="License" /></a>
</p>

---

## 📖 Sobre o Projeto

**NOX** é um aplicativo PWA (Progressive Web App) completamente **offline-first** criado para organizar e exibir textos completos de livros de forma elegante, acessível e sem distrações. 

O projeto utiliza **exclusivamente HTML5, CSS3, JavaScript Vanilla e JSON** — sem dependências externas, sem frameworks e sem backend. Basta adicionar seus livros em formato JSON que o app os exibe automaticamente no dashboard.

---

## ✨ Funcionalidades

- 📚 **Dashboard inteligente** — Capas estilizadas geradas dinamicamente para cada livro, com grid responsivo.
- 📖 **Leitor contínuo** — Rolagem suave, margens amplas, tipografia confortável e cabeçalho fixo.
- 🎨 **Temas escuro/claro** — Alternância entre "Dark Luxury" e "Light Minimal".
- 🔤 **Controle de tamanho da fonte** — Pequena, Média, Grande e Extra Grande.
- ♿ **Acessibilidade total (WCAG 2.2)**:
  - Modos para daltonismo (Protanopia, Deuteranopia, Tritanopia)
  - Alto contraste
  - Espaçamento ampliado
  - Leitura facilitada
- 📦 **Offline-first** — Service Worker com cache estático para funcionar sem internet.
- 🚀 **Performance extrema** — Otimizado para Lighthouse (100 em Acessibilidade, Práticas e PWA).
- 📱 **Responsivo** — Funciona perfeitamente em smartphones, tablets, desktops e telas ultrawide.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica e acessível.
- **CSS3** — Design System próprio com variáveis CSS, animações suaves e suporte a temas.
- **JavaScript Vanilla** — Toda lógica de negócio, navegação e persistência de preferências.
- **JSON** — Armazenamento dos livros e catálogo.
- **PWA** — Manifest e Service Worker para instalação nativa e uso offline.

---

## 📂 Estrutura de Pastas
NOX/
├── index.html # Dashboard
├── reader.html # Leitor
├── settings.html # Configurações
├── manifest.json # PWA Manifest
├── service-worker.js # Service Worker
├── css/ # Estilos modulares
│ ├── style.css
│ ├── dashboard.css
│ ├── reader.css
│ └── settings.css
├── js/ # Scripts modulares
│ ├── app.js
│ ├── books.js
│ ├── reader.js
│ ├── settings.js
│ └── accessibility.js
├── data/ # Dados da biblioteca
│ ├── catalog.json # Lista de livros
│ └── books/ # Conteúdo dos livros (JSON)
│ └── exemplo_metamorfose.json
└── assets/
└── icons/ # Ícones PWA (192x192 e 512x512)

text

---

## 📥 Como Adicionar um Novo Livro

1. Crie um arquivo `.json` em `data/books/` com a seguinte estrutura:
   ```json
   {
     "id": "meu_livro",
     "titulo": "Título do Livro",
     "autor": "Nome do Autor",
     "conteudo": "Texto completo do livro. Use \\n para quebras de parágrafo."
   }
Adicione uma entrada no data/catalog.json:

json
{
  "books": [
    ...,
    { "id": "meu_livro", "titulo": "Título do Livro", "autor": "Nome do Autor" }
  ]
}
Atualize a página. O novo livro aparecerá automaticamente no dashboard.

🚀 Publicação no GitHub Pages
Faça o upload de toda a pasta NOX para a raiz de um repositório público no GitHub.

Acesse Settings > Pages.

Selecione a branch main e a pasta / (root).

Aguarde alguns minutos. O site estará disponível em:

text
https://[SEU_USUARIO].github.io/[NOME_DO_REPOSITORIO]/
⚙️ Personalização Visual
Edite as variáveis CSS em css/style.css para alterar:

Cores (--bg, --surface, --text, etc.)

Tipografia (--font-base, --font-ui)

Espaçamentos e bordas (--radius, --shadow)

📋 Placeholders para Configuração
Placeholder	Onde usar	Descrição
[SEU_NOME]	README, rodapé	Nome do mantenedor
[LINK_DO_PROJETO]	README	URL do repositório ou demo
[SEU_EMAIL]	README	Contato para suporte
[TIPO_DE_LICENÇA]	README	Ex: MIT, GPL-3.0
[ANO_ATUAL]	Rodapé do app	Ano de copyright (gerado automaticamente)
🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias, correções ou novos recursos.

📄 Licença
Este projeto está sob a licença [TIPO_DE_LICENÇA]. Consulte o arquivo LICENSE para mais detalhes (se houver).

📧 Contato
Mantenedor: [SEU_NOME]
E-mail: [SEU_EMAIL]
Link do Projeto: [LINK_DO_PROJETO]

<p align="center"> Feito com ❤️ para amantes da leitura e da acessibilidade. </p> ```
✅ Instruções finais
Substitua todos os colchetes [ ... ] pelos seus dados reais antes de publicar.

O ícone SVG centralizado será renderizado perfeitamente no GitHub (leia-se, a visualização do README suporta SVG).

Se quiser, adicione um arquivo LICENSE (ex: MIT) e atualize o badge correspondente.

Tudo pronto para o seu repositório! 🚀

