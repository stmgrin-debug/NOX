// ============================================================
// reader.js — Tela de leitura
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('book');
    if (!bookId) {
        window.location.href = 'index.html';
        return;
    }

    // Aplicar configurações salvas
    if (window.NOX && window.NOX.applySettings) {
        window.NOX.applySettings();
    }

    const titleEl = document.getElementById('readerTitle');
    const contentEl = document.getElementById('readerContent');

    // Carregar conteúdo
    const data = await window.NOX.loadBookContent(bookId);
    if (!data) {
        contentEl.innerHTML = '<p style="text-align:center;padding:2rem;">Livro não encontrado.</p>';
        titleEl.textContent = 'Erro';
        return;
    }

    titleEl.textContent = data.titulo || 'Título';
    // Processar texto: quebras em parágrafos
    const text = data.conteudo || 'Conteúdo indisponível.';
    const paragraphs = text.split('\n').filter(p => p.trim() !== '');
    contentEl.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');

    // Botão voltar
    document.getElementById('btnBack').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Botão configurações rápidas
    document.getElementById('btnSettingsQuick').addEventListener('click', () => {
        window.location.href = 'settings.html';
    });
});