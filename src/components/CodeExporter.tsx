import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, CheckCircle2, Server, Eye } from 'lucide-react';
import { SqueezePageConfig } from '../types';

interface CodeExporterProps {
  config: SqueezePageConfig;
}

export const CodeExporter: React.FC<CodeExporterProps> = ({ config }) => {
  const [copiedType, setCopiedType] = useState<'html' | null>(null);
  const [exportTab, setExportTab] = useState<'html' | 'preview'>('preview');

  // Pure standalone HTML/CSS/JS ready for any static web host with Light/Dark sun/moon toggle
  const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Primário -->
  <title>The Stories: Histórias Verdadeiras para Ler e Sentir</title>
  <meta name="title" content="The Stories: Histórias Verdadeiras para Ler e Sentir">
  <meta name="description" content="Histórias reais de amor, desencontros e recomeços para o seu domingo de manhã. Assine gratuitamente e receba doses de sentimento direto na sua caixa de entrada às 08:08.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.thestories.cc/">
  <meta name="language" content="Portuguese">

  <!-- Open Graph / WhatsApp / Facebook / LinkedIn -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.thestories.cc/">
  <meta property="og:title" content="The Stories: Histórias Verdadeiras para Ler e Sentir">
  <meta property="og:description" content="Histórias reais, cultura e afeto para o seu domingo de manhã. Assine gratuitamente e receba às 08:08 na sua caixa de entrada!">
  <meta property="og:image" content="https://www.thestories.cc/img/social.jpg?v=260623">
  <meta property="og:site_name" content="The Stories">
  <meta property="og:locale" content="pt_BR">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://www.thestories.cc/">
  <meta name="twitter:title" content="The Stories: Histórias Verdadeiras para Ler e Sentir">
  <meta name="twitter:description" content="Histórias reais de amor e recomeços entregues todo domingo às 08:08.">
  <meta name="twitter:image" content="https://www.thestories.cc/img/social.jpg?v=260623">

  <!-- Favicon e RSS Oficial -->
  <link rel="icon" type="image/vnd.microsoft.icon" href="https://fonts.gstatic.com/s/e/notoemoji/17.0/1f9f8/32.png"/>
  <link rel="service.post" type="application/atom+xml" title="The Stories - Atom" href="https://feeds.feedburner.com/thestoriescc" />

  <!-- Tipografia Editorial Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Google Tag Manager (Seu ID de Produção) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TZBPFV014K"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TZBPFV014K', { 'cookie_domain': 'auto' });
  </script>

  <style>
    /* Variáveis do Tema Claro */
    :root {
      --bg-color: #FAF8F5;
      --card-bg: #FFFFFF;
      --text-main: #1C1917;
      --text-muted: #57534E;
      --text-subtle: #78716C;
      --border-color: #E7E5E4;
      --border-focus: #1C1917;
      --input-bg: #FAFAF9;
      --btn-bg: #1C1917;
      --btn-hover: #292524;
      --btn-text: #FFFFFF;
      --header-bg: rgba(250, 248, 245, 0.95);
      --box-highlight: rgba(245, 245, 244, 0.6);
      --border-dashed: #D6D3D1;
      --quote-border: #D6D3D1;
      --modal-bg: #FAF8F5;
      --modal-card-bg: #FFFFFF;
      --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.04);
      --max-width: 640px;
    }

    /* Variáveis do Tema Escuro */
    [data-theme="dark"] {
      --bg-color: #121110;
      --card-bg: #1A1918;
      --text-main: #F5F5F4;
      --text-muted: #A8A29E;
      --text-subtle: #78716C;
      --border-color: #2E2C29;
      --border-focus: #F5F5F4;
      --input-bg: #22201E;
      --btn-bg: #F5F5F4;
      --btn-hover: #FFFFFF;
      --btn-text: #121110;
      --header-bg: rgba(18, 17, 16, 0.95);
      --box-highlight: rgba(30, 28, 26, 0.7);
      --border-dashed: #3E3B37;
      --quote-border: #44403C;
      --modal-bg: #1A1918;
      --modal-card-bg: #22201E;
      --shadow-soft: 0 4px 25px rgba(0, 0, 0, 0.4);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
    }

    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-font-smoothing: antialiased;
      position: relative;
    }

    header {
      width: 100%;
      border-bottom: 1px solid var(--border-color);
      padding: 14px 24px;
      background: var(--header-bg);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 30;
    }

    .header-container {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo-text {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--text-main);
      text-decoration: none;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-badge {
      font-size: 13px;
      color: var(--text-subtle);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .theme-toggle-btn {
      background: var(--card-bg);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .theme-toggle-btn:hover {
      border-color: var(--border-focus);
      transform: scale(1.03);
    }

    .theme-toggle-btn svg {
      width: 18px;
      height: 18px;
      stroke-width: 2;
    }

    .icon-sun { display: none; }
    .icon-moon { display: block; }
    [data-theme="dark"] .icon-sun { display: block; }
    [data-theme="dark"] .icon-moon { display: none; }

    .header-cta-btn {
      font-size: 12px;
      font-weight: 600;
      background: transparent;
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .header-cta-btn:hover {
      background: var(--card-bg);
      border-color: var(--border-focus);
    }

    main {
      max-width: var(--max-width);
      width: 100%;
      margin: 0 auto;
      padding: 40px 20px 60px 20px;
      text-align: center;
    }

    .kicker {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-subtle);
      margin-bottom: 20px;
    }

    .logo {
      width: 84px;
      height: 84px;
      object-fit: contain;
      border-radius: 18px;
      margin-bottom: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      border: 1px solid var(--border-color);
      background: #FFFFFF;
    }

    h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 42px;
      font-weight: 600;
      line-height: 1.15;
      letter-spacing: -0.5px;
      margin-bottom: 16px;
      color: var(--text-main);
    }

    .description {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 20px;
      color: var(--text-muted);
      line-height: 1.55;
      margin-bottom: 32px;
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
    }

    .form-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      padding: 28px;
      box-shadow: var(--shadow-soft);
      margin-bottom: 28px;
      text-align: left;
    }

    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .form-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: var(--text-subtle);
    }

    .form-schedule-tag {
      font-size: 11px;
      color: var(--text-subtle);
    }

    .subscribe-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .input-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 14px 16px;
      font-size: 14px;
      font-family: inherit;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      outline: none;
      background: var(--input-bg);
      color: var(--text-main);
    }

    input[type="text"]:focus,
    input[type="email"]:focus {
      border-color: var(--border-focus);
      background: var(--card-bg);
      box-shadow: 0 0 0 3px rgba(120, 113, 108, 0.15);
    }

    input::placeholder {
      color: var(--text-subtle);
      opacity: 0.8;
    }

    button[type="submit"] {
      padding: 16px 24px;
      font-size: 15px;
      font-family: inherit;
      font-weight: 600;
      color: var(--btn-text);
      background: var(--btn-bg);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    button[type="submit"]:hover {
      background: var(--btn-hover);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }

    .trust-guarantee {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: var(--text-subtle);
    }

    .teaser-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 18px;
      padding: 24px;
      margin-bottom: 24px;
      text-align: left;
    }

    .teaser-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 11px;
      font-weight: 600;
      color: var(--text-subtle);
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    .teaser-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 21px;
      font-weight: 600;
      color: var(--text-main);
      margin-bottom: 10px;
    }

    .teaser-quote {
      font-family: 'Newsreader', Georgia, serif;
      font-style: italic;
      font-size: 17px;
      line-height: 1.6;
      border-left: 2px solid var(--quote-border);
      padding-left: 14px;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .teaser-read-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-main);
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    .teaser-read-btn:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    .social-proof-box {
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 20px 24px;
      background: var(--box-highlight);
      margin-bottom: 24px;
      text-align: left;
    }

    .social-proof-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .stars {
      color: #F59E0B;
      letter-spacing: 2px;
    }

    .testimonial-text {
      font-size: 13px;
      font-style: italic;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .testimonial-author {
      font-size: 11px;
      color: var(--text-subtle);
      margin-top: 6px;
      text-align: right;
    }

    .ritual-section {
      padding: 20px;
      border-radius: 14px;
      border: 1px dashed var(--border-dashed);
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 32px;
    }

    .ritual-section strong {
      color: var(--text-main);
      display: block;
      margin-bottom: 4px;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 17px;
      font-weight: 600;
    }

    footer {
      border-top: 1px solid var(--border-color);
      padding: 24px;
      font-size: 12px;
      color: var(--text-subtle);
      text-align: center;
    }

    .footer-content {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    .footer-links a {
      color: var(--text-subtle);
      text-decoration: none;
      margin-left: 14px;
    }

    .footer-links a:hover {
      text-decoration: underline;
    }

    .modal-backdrop {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      z-index: 100;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    .modal-backdrop.active {
      display: flex;
    }

    .modal-card {
      background: var(--modal-bg);
      color: var(--text-main);
      max-width: 620px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border-color);
      text-align: left;
      position: relative;
    }

    .modal-close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      font-size: 24px;
      color: var(--text-subtle);
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
      border-radius: 6px;
    }

    .modal-close-btn:hover {
      background: var(--border-color);
      color: var(--text-main);
    }

    .modal-meta {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-subtle);
      margin-bottom: 8px;
    }

    .modal-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 28px;
      line-height: 1.25;
      margin-bottom: 16px;
      color: var(--text-main);
    }

    .modal-body {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 18px;
      line-height: 1.7;
      color: var(--text-muted);
    }

    .modal-body p {
      margin-bottom: 16px;
    }

    .modal-cta-box {
      margin-top: 24px;
      padding: 20px;
      background: var(--modal-card-bg);
      border-radius: 14px;
      border: 1px solid var(--border-color);
      text-align: center;
    }

    .modal-cta-box h3 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 20px;
      margin-bottom: 6px;
      color: var(--text-main);
    }

    .modal-cta-box p {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 12px;
    }

    .modal-cta-box button {
      background: var(--btn-bg);
      color: var(--btn-text);
      border: none;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }

    @media (max-width: 640px) {
      h1 { font-size: 32px; }
      .description { font-size: 17px; }
      .input-grid { grid-template-columns: 1fr; }
      .form-card { padding: 20px; }
      .header-badge { display: none; }
      .footer-content { flex-direction: column; text-align: center; }
      .modal-card { padding: 24px; }
    }
  </style>
</head>
<body>

  <header>
    <div class="header-container">
      <a href="/" class="brand-logo-text">
        <span>the stories</span>
        <span style="font-size: 16px;">🧸</span>
      </a>

      <div class="header-right">
        <div class="header-badge">
          <span>☕ Domingo, 08:08</span>
        </div>

        <!-- Botão Alternador Sol / Lua -->
        <button
          type="button"
          class="theme-toggle-btn"
          id="themeToggleBtn"
          onclick="toggleTheme()"
          title="Alternar entre modo Claro e Escuro"
          aria-label="Alternar modo claro e escuro"
        >
          <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
          <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </button>

        <button type="button" class="header-cta-btn" onclick="openStoryModal()">
          <span>Espiar Edição</span>
        </button>
      </div>
    </div>
  </header>

  <main id="topo">
    <div class="kicker">
      <span>☕ O seu ritual matinal de domingo</span>
    </div>

    <div>
      <img src="https://i.imgur.com/owFGbM2.png" alt="The Stories" class="logo" />
    </div>

    <h1>\${config.headline}</h1>

    <p class="description">
      \${config.subheadline}
    </p>

    <!-- Formulário Oficial com Integração Real do app.thestories.cc -->
    <div class="form-card" id="formulario">
      <div class="form-header">
        <span class="form-title">Receber a próxima edição</span>
        <span class="form-schedule-tag">Envio no Domingo às 08:08</span>
      </div>

      <script>var submitted = false;</script>
      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) { window.location='https://thestories.cc/obrigado'; }"></iframe>

      <form class="subscribe-form" action="https://app.thestories.cc/subscription/form" method="POST" target="hidden_iframe" onsubmit="submitted=true;">
        <input type="hidden" name="nonce" />
        <input id="02785" type="checkbox" name="l" checked value="027850e9-f9e0-4bd9-9d7b-37b5ce9c00ac" style="display:none;" />

        <div class="input-grid">
          <input type="text" name="name" placeholder="Como prefere ser chamado?" autocomplete="given-name">
          <input type="email" name="email" placeholder="Seu melhor e-mail..." required autocomplete="email">
        </div>

        <button type="submit">
          <span>\${config.ctaText}</span>
          <span>→</span>
        </button>
      </form>

      <div class="trust-guarantee">
        <span>🔒 100% gratuito · Sem spam · Cancele em 1 clique</span>
        <span>⏱️ Leitura de 4 min</span>
      </div>
    </div>

    <div class="teaser-card">
      <div class="teaser-top">
        <span>Amostra da Edição #52</span>
        <span>4 min de leitura</span>
      </div>
      <div class="teaser-title">O café que esfriou e a conversa adiada</div>
      <div class="teaser-quote">
        "— 'A gente combinou de nunca ter pressa', ela disse, enquanto mexia o açúcar que já tinha dissolvido há dez minutos. Às 08:08 daquela manhã, entendi que deixar ir também é uma das formas mais bonitas de amar."
      </div>
      <button type="button" class="teaser-read-btn" onclick="openStoryModal()">
        <span>Continuar lendo esta crônica</span>
        <span>→</span>
      </button>
    </div>

    <div class="social-proof-box">
      <div class="social-proof-header">
        <div><strong>\${config.subscriberCount}</strong> todo domingo</div>
        <div class="stars">★★★★★ <span style="font-size:12px; opacity:0.8;">4.9/5</span></div>
      </div>
      <div class="testimonial-text">
        "Virou o meu ritual sagrado de domingo: passar o café passado, abrir o e-mail às 08:08 e ler com calma. A cada domingo uma emoção diferente."
      </div>
      <div class="testimonial-author">— Mariana S., leitora desde a edição #12</div>
    </div>

    <div class="ritual-section">
      <strong>Por que às 08:08 da manhã de domingo?</strong>
      Porque é o único momento da semana em que o mundo ainda não acelerou. As notificações de trabalho estão silenciadas, o café está na xícara e você tem cinco minutos para lembrar que o afeto sincero ainda existe.
    </div>
  </main>

  <footer>
    <div class="footer-content">
      <div>© 2026 the stories 🧸 · Histórias para ler e sentir</div>
      <div class="footer-links">
        <a href="https://feeds.feedburner.com/thestoriescc" target="_blank" rel="noreferrer">Feed RSS</a>
        <a href="mailto:contato@thestories.cc">Contato</a>
      </div>
    </div>
  </footer>

  <div class="modal-backdrop" id="storyModal" onclick="closeStoryModal(event)">
    <div class="modal-card" onclick="event.stopPropagation()">
      <button type="button" class="modal-close-btn" onclick="closeStoryModal()" aria-label="Fechar">&times;</button>
      
      <div class="modal-meta">Edição #52 · Domingo às 08:08</div>
      <h2 class="modal-title">O café que esfriou e a conversa adiada</h2>

      <div class="modal-body">
        <p>A gente combinou de nunca ter pressa, ela disse, enquanto mexia o açúcar que já tinha dissolvido há dez minutos. A xícara de porcelana já estava morna, mas ninguém ousava interromper o silêncio que precedia a decisão.</p>
        <p>O amor adulto raramente acaba com portas batendo ou gritos no corredor. Na maioria das vezes, ele termina assim: com duas pessoas que ainda se gostam muito, sentadas frente a frente, percebendo que os futuros que desenharam já não cabem na mesma mala.</p>
        <p>Quando perguntei se doía, ela sorriu com aquele canto de boca que sempre me desarmava: "Dói, mas é uma dor limpa. Pior seria insistir até transformar afeto em rancor."</p>
        <p>Às 08:08 daquela manhã de domingo, entendi que deixar ir também é uma das formas mais bonitas e corajosas de amar.</p>
      </div>

      <div class="modal-cta-box">
        <h3>Gostou desta crônica?</h3>
        <p>Todo domingo às 08:08 uma nova história real chega ao seu e-mail.</p>
        <button type="button" onclick="closeModalAndScroll()">Quero receber no meu e-mail</button>
      </div>
    </div>
  </div>

  <script>
    (function initTheme() {
      var savedTheme = localStorage.getItem('thestories_theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();

    function toggleTheme() {
      var current = document.documentElement.getAttribute('data-theme');
      var newTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('thestories_theme', newTheme);
    }

    function openStoryModal() {
      document.getElementById('storyModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeStoryModal() {
      document.getElementById('storyModal').classList.remove('active');
      document.body.style.overflow = '';
    }

    function closeModalAndScroll() {
      closeStoryModal();
      var form = document.getElementById('formulario');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
        var emailInput = form.querySelector('input[type="email"]');
        if (emailInput) emailInput.focus();
      }
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeStoryModal();
      }
    });
  </script>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtml);
    setCopiedType('html');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Versão 100% HTML + CSS + JS Puro (Sem Dependências)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-stone-900">
            index.html com Botão Sol / Lua Embutido
          </h2>
          <p className="text-sm text-stone-600 font-sans mt-1">
            Pronto para subir no cPanel, Hostinger, Locaweb, Cloudflare Pages ou qualquer servidor FTP.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            {copiedType === 'html' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>HTML Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar HTML Completo</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadHtml}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Baixar index.html</span>
          </button>
        </div>
      </div>

      {/* Como usar na sua hospedagem */}
      <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs">
        <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
          <Server className="w-4 h-4 text-stone-700" />
          <span>Como colocar este arquivo na sua hospedagem em 3 passos simples:</span>
        </div>
        <ol className="text-stone-700 space-y-2 list-decimal list-inside leading-relaxed">
          <li>
            Clique no botão verde <strong>"Baixar index.html"</strong> acima (ou copie o código abaixo).
          </li>
          <li>
            Acesse o gerenciador de arquivos da sua hospedagem (ex: pasta <code>public_html</code>).
          </li>
          <li>
            Substitua seu arquivo <code>index.html</code> antigo por este. Ele já vem com o botão de Sol/Lua, formulário oficial conectado e leitor de crônicas embutido.
          </li>
        </ol>
      </div>

      {/* Navigation tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
        <button
          onClick={() => setExportTab('preview')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            exportTab === 'preview'
              ? 'bg-stone-900 text-white shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Prévia Real do HTML Puro (Teste o Sol / Lua aqui)</span>
        </button>
        <button
          onClick={() => setExportTab('html')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            exportTab === 'html'
              ? 'bg-stone-900 text-white shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>Ver Código Fonte HTML (index.html)</span>
        </button>
      </div>

      {/* Content Area */}
      {exportTab === 'preview' ? (
        <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-white">
          <div className="p-3 bg-stone-100 border-b border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <strong>Arquivo HTML Puro:</strong> Clique no ícone de Sol/Lua no topo direito para alternar entre claro e escuro.
            </span>
            <span className="font-mono text-[11px] bg-stone-200 px-2 py-0.5 rounded">public/index.html</span>
          </div>
          <iframe
            srcDoc={standaloneHtml}
            title="Prévia do index.html puro com Sol e Lua"
            className="w-full h-[720px] border-0"
          />
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-[#161514] text-stone-200 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 bg-[#1F1D1B] border-b border-stone-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="font-mono text-stone-400 ml-2">index.html (Arquivo Único Autossuficiente)</span>
            </div>
            <button
              onClick={handleCopy}
              className="text-[11px] text-stone-400 hover:text-stone-100 flex items-center gap-1.5"
            >
              {copiedType === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedType === 'html' ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>

          <pre className="p-5 font-mono text-xs overflow-x-auto max-h-[550px] leading-relaxed text-stone-300 selection:bg-stone-700">
            <code>{standaloneHtml}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
