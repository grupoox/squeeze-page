import React, { useState } from 'react';
import { Copy, Check, Download, Code2, Sparkles, FileCode, CheckCircle2 } from 'lucide-react';
import { SqueezePageConfig } from '../types';

interface CodeExporterProps {
  config: SqueezePageConfig;
}

export const CodeExporter: React.FC<CodeExporterProps> = ({ config }) => {
  const [copiedType, setCopiedType] = useState<'html' | 'react' | null>(null);
  const [exportTab, setExportTab] = useState<'html' | 'react'>('html');

  // Generate pure, standalone HTML/CSS that the user can immediately paste into thestories.cc
  const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>the stories — Histórias Verdadeiras para Ler e Sentir</title>
  <meta name="description" content="Histórias reais de amor, desencontros e recomeços. Entregues gratuitamente na sua caixa de entrada todo domingo às 08:08.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.thestories.cc/">

  <!-- Open Graph / Redes Sociais -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.thestories.cc/">
  <meta property="og:title" content="the stories — O seu domingo nunca mais será frio">
  <meta property="og:description" content="Histórias reais de amor e sentimentos sinceros. Leia com uma xícara de café quente todo domingo às 08:08.">
  <meta property="og:image" content="https://www.thestories.cc/img/social.jpg?v=260623">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="icon" type="image/vnd.microsoft.icon" href="https://fonts.gstatic.com/s/e/notoemoji/17.0/1f9f8/32.png"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Google Tag Manager -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TZBPFV014K"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TZBPFV014K', { 'cookie_domain': 'auto' });
  </script>

  <style>
    :root {
      --bg: #FAF8F5;
      --card-bg: #FFFFFF;
      --text: #1C1917;
      --subtext: #57534E;
      --border: #E7E5E4;
      --accent: #1C1917;
      --button-bg: #1C1917;
      --button-hover: #292524;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-font-smoothing: antialiased;
    }
    header {
      width: 100%;
      border-bottom: 1px solid var(--border);
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(250, 248, 245, 0.95);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .wordmark {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
      letter-spacing: -0.5px;
    }
    .badge-ritual {
      font-size: 13px;
      color: var(--subtext);
    }
    main {
      max-width: 640px;
      width: 100%;
      margin: 0 auto;
      padding: 48px 20px;
      text-align: center;
    }
    .kicker {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #78716C;
      margin-bottom: 16px;
    }
    .logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      border-radius: 16px;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    }
    h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 40px;
      font-weight: 600;
      line-height: 1.15;
      letter-spacing: -0.5px;
      margin-bottom: 16px;
    }
    .subtext {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 19px;
      color: var(--subtext);
      line-height: 1.55;
      margin-bottom: 32px;
    }
    .form-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 28px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      margin-bottom: 32px;
      text-align: left;
    }
    .form-title {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #A8A29E;
      margin-bottom: 14px;
      font-weight: 600;
    }
    .subscribe-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .input-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 14px 16px;
      font-size: 14px;
      font-family: inherit;
      border: 1px solid #D6D3D1;
      border-radius: 12px;
      outline: none;
      background: #FAFAF9;
      color: var(--text);
      transition: all 0.2s;
    }
    input:focus {
      border-color: var(--text);
      background: #FFFFFF;
      box-shadow: 0 0 0 3px rgba(28,25,23,0.08);
    }
    button[type="submit"] {
      padding: 16px 24px;
      font-size: 15px;
      font-family: inherit;
      font-weight: 600;
      color: #FFFFFF;
      background: var(--button-bg);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
      width: 100%;
    }
    button[type="submit"]:hover {
      background: var(--button-hover);
      transform: translateY(-1px);
    }
    .trust-row {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid #F5F5F4;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #78716C;
    }
    .teaser-card {
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
      text-align: left;
    }
    .teaser-header {
      font-size: 12px;
      color: #78716C;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-weight: 500;
    }
    .teaser-quote {
      font-family: 'Newsreader', Georgia, serif;
      font-style: italic;
      font-size: 17px;
      line-height: 1.6;
      border-left: 2px solid #D6D3D1;
      padding-left: 14px;
      color: #292524;
      margin: 12px 0;
    }
    .social-proof {
      font-size: 13px;
      color: var(--subtext);
      padding: 16px 20px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: rgba(245, 245, 244, 0.4);
      margin-bottom: 32px;
    }
    footer {
      border-top: 1px solid var(--border);
      padding: 24px;
      text-align: center;
      font-size: 13px;
      color: #78716C;
    }
    @media (max-width: 600px) {
      h1 { font-size: 32px; }
      .input-row { grid-template-columns: 1fr; }
      main { padding: 32px 16px; }
    }
  </style>
</head>
<body>
  <header>
    <a href="/" class="wordmark">the stories 🧸</a>
    <span class="badge-ritual">Todo domingo às 08:08</span>
  </header>

  <main>
    <div class="kicker">Newsletter Editorial Gratuita</div>
    <img src="https://i.imgur.com/owFGbM2.png" alt="The Stories" class="logo">
    <h1>${config.headline}</h1>
    <p class="subtext">${config.subheadline}</p>

    <!-- Formulário Oficial com Integração app.thestories.cc -->
    <div class="form-card">
      <div class="form-title">Receber a próxima edição domingo</div>
      
      <script>var submitted=false;</script>
      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) { window.location='https://thestories.cc/obrigado'; }"></iframe>
      
      <form class="subscribe-form" action="https://app.thestories.cc/subscription/form" method="POST" target="hidden_iframe" onsubmit="submitted=true;">
        <input type="hidden" name="nonce" />
        <input type="hidden" name="l" value="027850e9-f9e0-4bd9-9d7b-37b5ce9c00ac" />
        
        <div class="input-row">
          <input type="text" name="name" placeholder="Seu primeiro nome...">
          <input type="email" name="email" placeholder="Seu melhor e-mail..." required>
        </div>
        
        <button type="submit">${config.ctaText}</button>
      </form>

      <div class="trust-row">
        <span>🔒 100% gratuito · Sem spam</span>
        <span>☕ Leitura de 4 minutos</span>
      </div>
    </div>

    <!-- Amostra de Domingo -->
    <div class="teaser-card">
      <div class="teaser-header">
        <span>DEGUSTAÇÃO DA ÚLTIMA EDIÇÃO</span>
        <span>Edição #52 · 4 min</span>
      </div>
      <div class="teaser-quote">
        "A gente combinou de nunca ter pressa, ela disse, enquanto mexia o açúcar que já tinha dissolvido há dez minutos. Às 08:08 daquela manhã, entendi que deixar ir também é uma forma de amar."
      </div>
    </div>

    <!-- Prova Social -->
    <div class="social-proof">
      <strong>${config.subscriberCount}</strong> começam o domingo com uma história real.
    </div>
  </main>

  <footer>
    © 2026 the stories 🧸 · Feito com afeto e café
  </footer>
</body>
</html>`;

  const reactCodeSnippet = `// Exemplo de integração React + Tailwind
import React, { useState } from 'react';

export function SqueezePageTheStories() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans flex flex-col justify-between">
      <header className="px-6 py-4 border-b border-stone-200 flex justify-between items-center">
        <span className="font-serif text-2xl font-bold tracking-tight">the stories 🧸</span>
        <span className="text-xs text-stone-500">Todo domingo às 08:08</span>
      </header>

      <main className="max-w-xl mx-auto px-4 py-12 text-center">
        <img src="https://i.imgur.com/owFGbM2.png" alt="Logo" className="w-20 h-20 mx-auto rounded-xl mb-4" />
        <h1 className="font-serif text-4xl font-medium mb-3">${config.headline}</h1>
        <p className="font-serif italic text-stone-600 mb-8">${config.subheadline}</p>

        {/* Form */}
        <form action="https://app.thestories.cc/subscription/form" method="POST" className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
          <input type="hidden" name="l" value="027850e9-f9e0-4bd9-9d7b-37b5ce9c00ac" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" name="name" placeholder="Seu nome" className="p-3 border rounded-xl" />
            <input type="email" name="email" required placeholder="Seu e-mail" className="p-3 border rounded-xl" />
          </div>
          <button type="submit" className="w-full py-3 bg-stone-900 text-white rounded-xl font-medium">${config.ctaText}</button>
        </form>
      </main>

      <footer className="py-6 border-t border-stone-200 text-center text-xs text-stone-500">
        © 2026 the stories 🧸
      </footer>
    </div>
  );
}`;

  const handleCopy = (type: 'html' | 'react') => {
    const textToCopy = type === 'html' ? standaloneHtml : reactCodeSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopiedType(type);
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
            <span>Código 100% Pronto para Produção</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-stone-900">
            Exportar o Novo Código de thestories.cc
          </h2>
          <p className="text-sm text-stone-600 font-sans mt-1">
            Sem necessidade de build ou servidor complexo: copie o arquivo HTML pronto ou baixe para substituir no seu servidor.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCopy(exportTab)}
            className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            {copiedType === exportTab ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Código</span>
              </>
            )}
          </button>

          {exportTab === 'html' && (
            <button
              onClick={handleDownloadHtml}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border border-stone-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Baixar index.html</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
        <button
          onClick={() => setExportTab('html')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            exportTab === 'html'
              ? 'bg-stone-900 text-white shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>HTML + CSS Standalone (Arquivo Único index.html)</span>
        </button>
        <button
          onClick={() => setExportTab('react')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            exportTab === 'react'
              ? 'bg-stone-900 text-white shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>Componente React + Tailwind</span>
        </button>
      </div>

      {/* Code Viewer */}
      <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-[#161514] text-stone-200 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 bg-[#1F1D1B] border-b border-stone-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="font-mono text-stone-400 ml-2">
              {exportTab === 'html' ? 'public/index.html' : 'src/components/SqueezePage.tsx'}
            </span>
          </div>
          <button
            onClick={() => handleCopy(exportTab)}
            className="text-[11px] text-stone-400 hover:text-stone-100 flex items-center gap-1.5"
          >
            {copiedType === exportTab ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedType === exportTab ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </div>

        <pre className="p-5 font-mono text-xs overflow-x-auto max-h-[500px] leading-relaxed text-stone-300 selection:bg-stone-700">
          <code>{exportTab === 'html' ? standaloneHtml : reactCodeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};
