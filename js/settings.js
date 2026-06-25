// ============================================================
// settings.js — Gerenciamento de preferências
// ============================================================
const SETTINGS_KEY = 'nox_settings';

function getSettings() {
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
}

function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function applySettings(settings) {
    settings = settings || getSettings();
    const body = document.body;

    // Tema
    body.classList.remove('light');
    if (settings.theme === 'light') body.classList.add('light');

    // Tamanho fonte
    body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    if (settings.fontSize) body.classList.add('font-' + settings.fontSize);

    // Daltonismo (filtros)
    body.style.filter = '';
    const cb = settings.colorBlind || 'none';
    if (cb === 'protanopia') body.style.filter = 'url(#protanopia)';
    else if (cb === 'deuteranopia') body.style.filter = 'url(#deuteranopia)';
    else if (cb === 'tritanopia') body.style.filter = 'url(#tritanopia)';

    // Alto contraste
    body.classList.toggle('high-contrast', !!settings.highContrast);

    // Espaçamento ampliado
    body.classList.toggle('wider-spacing', !!settings.widerSpacing);

    // Leitura facilitada
    body.classList.toggle('easy-reading', !!settings.easyReading);
}

// Aplica as configurações ao carregar qualquer página
window.NOX = window.NOX || {};
window.NOX.applySettings = applySettings;

// Se estiver na página de configurações, inicializa os controles
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('settingsApp')) return; // só executa em settings.html

    const settings = getSettings();

    // Preencher campos
    const themeSel = document.getElementById('themeSelect');
    const fontSizeSel = document.getElementById('fontSizeSelect');
    const cbSel = document.getElementById('colorBlindSelect');
    const highContrastChk = document.getElementById('highContrast');
    const widerSpacingChk = document.getElementById('widerSpacing');
    const easyReadingChk = document.getElementById('easyReading');

    if (themeSel) themeSel.value = settings.theme || 'dark';
    if (fontSizeSel) fontSizeSel.value = settings.fontSize || 'medium';
    if (cbSel) cbSel.value = settings.colorBlind || 'none';
    if (highContrastChk) highContrastChk.checked = !!settings.highContrast;
    if (widerSpacingChk) widerSpacingChk.checked = !!settings.widerSpacing;
    if (easyReadingChk) easyReadingChk.checked = !!settings.easyReading;

    // Botão voltar
    document.getElementById('btnBackSettings')?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Salvar ao mudar
    const save = () => {
        const newSettings = {
            theme: themeSel.value,
            fontSize: fontSizeSel.value,
            colorBlind: cbSel.value,
            highContrast: highContrastChk.checked,
            widerSpacing: widerSpacingChk.checked,
            easyReading: easyReadingChk.checked
        };
        saveSettings(newSettings);
        applySettings(newSettings);
    };

    themeSel?.addEventListener('change', save);
    fontSizeSel?.addEventListener('change', save);
    cbSel?.addEventListener('change', save);
    highContrastChk?.addEventListener('change', save);
    widerSpacingChk?.addEventListener('change', save);
    easyReadingChk?.addEventListener('change', save);
});