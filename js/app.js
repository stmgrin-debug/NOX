// ============================================================
// app.js — Dashboard principal
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('libraryGrid');
    const empty = document.getElementById('emptyState');
    const bookCountSpan = document.getElementById('bookCount');
    const footerYear = document.getElementById('footerYear');
    footerYear.textContent = new Date().getFullYear();

    // Carregar configurações
    if (window.NOX && window.NOX.applySettings) {
        window.NOX.applySettings();
    }

    // Carregar catálogo
    const catalog = await window.NOX.loadCatalog();
    const books = catalog.books || [];

    if (books.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
        bookCountSpan.innerHTML = `0 <span class="stat-label">livros</span>`;
        return;
    }

    grid.style.display = 'grid';
    empty.style.display = 'none';
    bookCountSpan.innerHTML = `${books.length} <span class="stat-label">livros</span>`;

    // Estimar tempo de leitura (300 palavras/min)
    let totalWords = 0;
    for (const b of books) {
        const content = await window.NOX.loadBookContent(b.id);
        if (content && content.conteudo) {
            const words = content.conteudo.split(/\s+/).length;
            totalWords += words;
        }
    }
    const minutes = Math.ceil(totalWords / 300);
    document.getElementById('readingTime').innerHTML = `${minutes} <span class="stat-label">min de leitura</span>`;

    // Renderizar cards
    grid.innerHTML = '';
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card fade-in';
        card.dataset.id = book.id;

        // Capa estilizada
        const cover = document.createElement('div');
        cover.className = 'book-cover';
        cover.innerHTML = `
            <div class="cover-stripe"></div>
            <div class="cover-title">${book.titulo}</div>
            <div class="cover-author">${book.autor}</div>
            <div class="cover-badge">NOX Library</div>
        `;
        card.appendChild(cover);

        const title = document.createElement('div');
        title.className = 'book-title';
        title.textContent = book.titulo;
        card.appendChild(title);

        const author = document.createElement('div');
        author.className = 'book-author';
        author.textContent = book.autor;
        card.appendChild(author);

        card.addEventListener('click', () => {
            // Navegar para o leitor com o ID do livro
            window.location.href = `reader.html?book=${book.id}`;
        });

        grid.appendChild(card);
    });

    // Botão configurações
    document.getElementById('btnSettings').addEventListener('click', () => {
        window.location.href = 'settings.html';
    });
});