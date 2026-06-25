// ============================================================
// books.js — Carregamento e gerenciamento do catálogo
// ============================================================
const BOOKS_DATA = {};

async function loadCatalog() {
    try {
        const response = await fetch('data/catalog.json');
        if (!response.ok) throw new Error('Catálogo não encontrado');
        const catalog = await response.json();
        return catalog;
    } catch (e) {
        console.warn('[NOX] Usando catálogo vazio.', e);
        return { books: [] };
    }
}

async function loadBookContent(bookId) {
    try {
        const response = await fetch(`data/books/${bookId}.json`);
        if (!response.ok) throw new Error(`Livro ${bookId} não encontrado`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('[NOX] Erro ao carregar livro:', e);
        return null;
    }
}

// Expõe para uso global
window.NOX = window.NOX || {};
window.NOX.loadCatalog = loadCatalog;
window.NOX.loadBookContent = loadBookContent;