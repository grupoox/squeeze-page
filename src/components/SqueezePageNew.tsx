import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Mail,
  ShieldCheck,
  ArrowRight,
  Coffee,
  Quote,
  Feather,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';
import { PageTheme, SqueezePageConfig, StoryExcerpt } from '../types';
import { SAMPLE_STORIES } from '../data/stories';

interface SqueezePageNewProps {
  config: SqueezePageConfig;
  onOpenStoryModal: (story: StoryExcerpt) => void;
  isEmbedPreview?: boolean;
}

export const SqueezePageNew: React.FC<SqueezePageNewProps> = ({
  config,
  onOpenStoryModal,
  isEmbedPreview = false,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<'demo' | 'real'>('demo');
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

  const activeStory = SAMPLE_STORIES[selectedStoryIndex] || SAMPLE_STORIES[0];

  const handleDemoSubmit = (e: React.FormEvent) => {
    if (submissionMode === 'real') {
      // Allow default HTML form submission to app.thestories.cc
      return;
    }
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#A855F7', '#EC4899', '#F59E0B', '#3B82F6'],
        });
      } catch {
        // fallback
      }
    }, 600);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setEmail('');
    setName('');
  };

  // Theme styling definitions
  const themeClasses: Record<PageTheme, {
    bg: string;
    text: string;
    subtext: string;
    cardBg: string;
    cardBorder: string;
    inputBg: string;
    inputBorder: string;
    button: string;
    navBorder: string;
    accent: string;
    tagBg: string;
  }> = {
    editorial: {
      bg: 'bg-[#FAF8F5]',
      text: 'text-stone-900',
      subtext: 'text-stone-600',
      cardBg: 'bg-white',
      cardBorder: 'border-stone-200/90',
      inputBg: 'bg-[#FDFCFA]',
      inputBorder: 'border-stone-300 focus:border-stone-900 focus:ring-stone-900/10',
      button: 'bg-stone-900 hover:bg-stone-800 text-white',
      navBorder: 'border-stone-200/80',
      accent: 'text-stone-800',
      tagBg: 'text-stone-600',
    },
    minimal: {
      bg: 'bg-white',
      text: 'text-neutral-900',
      subtext: 'text-neutral-600',
      cardBg: 'bg-neutral-50/70',
      cardBorder: 'border-neutral-200',
      inputBg: 'bg-white',
      inputBorder: 'border-neutral-300 focus:border-black focus:ring-black/10',
      button: 'bg-black hover:bg-neutral-800 text-white',
      navBorder: 'border-neutral-100',
      accent: 'text-neutral-900',
      tagBg: 'text-neutral-500',
    },
    velvet: {
      bg: 'bg-[#141312]',
      text: 'text-stone-100',
      subtext: 'text-stone-400',
      cardBg: 'bg-[#1C1A18]',
      cardBorder: 'border-stone-800',
      inputBg: 'bg-[#22201D]',
      inputBorder: 'border-stone-700 focus:border-stone-400 focus:ring-stone-400/20 text-white',
      button: 'bg-stone-100 hover:bg-white text-stone-950 font-semibold',
      navBorder: 'border-stone-800/80',
      accent: 'text-stone-200',
      tagBg: 'text-stone-400',
    },
  };

  const currentTheme = themeClasses[config.theme] || themeClasses.editorial;

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} font-sans transition-colors duration-300 flex flex-col justify-between relative selection:bg-stone-200 selection:text-stone-900`}
    >
      {/* 1-Row, 3-Zone Top Bar following Frontend Design Constitution */}
      <header
        className={`w-full border-b ${currentTheme.navBorder} px-4 sm:px-8 py-4 sticky top-0 backdrop-blur-md bg-opacity-90 z-20 transition-colors`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Zone 1: Single element wordmark */}
          <a
            href="#topo"
            className="flex items-center gap-2.5 font-serif-display text-2xl font-bold tracking-tight text-inherit hover:opacity-85 transition-opacity"
          >
            <span>the stories</span>
            <span className="text-sm font-normal opacity-40 font-sans">🧸</span>
          </a>

          {/* Zone 2: 4-6 text links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#amostra"
              className={`${currentTheme.subtext} hover:${currentTheme.text} transition-colors`}
            >
              Amostra de Domingo
            </a>
            <a
              href="#leitores"
              className={`${currentTheme.subtext} hover:${currentTheme.text} transition-colors`}
            >
              Comunidade
            </a>
            <a
              href="#ritual"
              className={`${currentTheme.subtext} hover:${currentTheme.text} transition-colors`}
            >
              O Ritual das 08:08
            </a>
            <a
              href="#sobre"
              className={`${currentTheme.subtext} hover:${currentTheme.text} transition-colors`}
            >
              Sobre o Projeto
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenStoryModal(activeStory)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Espiar Edição</span>
            </button>
            <a
              href="#formulario"
              className={`hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap ${currentTheme.button}`}
            >
              Assinar Grátis
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-14 max-w-4xl mx-auto w-full">
        {/* Editorial Subtitle Kicker (Clean unboxed text, no pills) */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide uppercase text-stone-500 mb-4 text-center">
          <span className="flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-stone-500" />
            Todo domingo às 08:08
          </span>
          <span aria-hidden="true">·</span>
          <span>Leitura de 4 minutos</span>
          <span aria-hidden="true">·</span>
          <span>100% Gratuito</span>
        </div>

        {/* Brand Logo & Editorial Hook */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-block relative mb-5">
            <img
              src="https://i.imgur.com/owFGbM2.png"
              alt="The Stories"
              referrerPolicy="no-referrer"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto rounded-xl shadow-sm border border-stone-200/50"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif-display font-medium tracking-tight leading-[1.15] text-balance mb-4">
            {config.headline}
          </h1>

          <p className={`text-base sm:text-lg font-editorial leading-relaxed ${currentTheme.subtext} max-w-xl mx-auto text-balance`}>
            {config.subheadline}
          </p>
        </div>

        {/* Lead Capture Form Decision Block */}
        <div id="formulario" className="w-full max-w-xl mx-auto mb-10 scroll-mt-24">
          <div
            className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${currentTheme.cardBg} ${currentTheme.cardBorder} transition-all`}
          >
            {isSuccess ? (
              <div className="text-center py-4 space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif-display font-semibold">
                  Tudo pronto. Seu domingo já tem companhia.
                </h3>
                <p className={`text-sm ${currentTheme.subtext} max-w-md mx-auto`}>
                  Enviamos uma confirmação para <strong>{email}</strong>. Domingo que vem, às 08:08, uma história sincera estará esperando por você.
                </p>
                <div className="pt-3">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 underline underline-offset-4"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Inscrever outro e-mail de teste</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-semibold tracking-wider uppercase text-stone-400 font-sans">
                    Receber a próxima edição
                  </div>
                  <div className="text-[11px] text-stone-400">
                    Próximo envio: Domingo, 08:08
                  </div>
                </div>

                <form
                  onSubmit={handleDemoSubmit}
                  action={submissionMode === 'real' ? 'https://app.thestories.cc/subscription/form' : undefined}
                  method={submissionMode === 'real' ? 'POST' : undefined}
                  className="space-y-3"
                >
                  <input type="hidden" name="nonce" />
                  <input
                    type="hidden"
                    name="l"
                    value="027850e9-f9e0-4bd9-9d7b-37b5ce9c00ac"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name-input" className="sr-only">Seu primeiro nome</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Como prefere ser chamado?"
                        className={`w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all ${currentTheme.inputBg} ${currentTheme.inputBorder}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email-input" className="sr-only">Seu e-mail principal</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu melhor e-mail..."
                        required
                        className={`w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all ${currentTheme.inputBg} ${currentTheme.inputBorder}`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md ${currentTheme.button} disabled:opacity-60`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        Preparando sua xícara...
                      </span>
                    ) : (
                      <>
                        <span>{config.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Signals & Microcopy under form */}
                <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-stone-800 flex flex-wrap items-center justify-between text-[12px] text-stone-500 gap-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                    <span>Livre de spam · Cancele em 1 clique</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Sem algoritmos tóxicos</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submission Mode switcher toggle for testing */}
          {!isEmbedPreview && (
            <div className="mt-2.5 flex items-center justify-center gap-3 text-[11px] text-stone-400">
              <span>Modo do Formulário:</span>
              <button
                type="button"
                onClick={() => setSubmissionMode('demo')}
                className={`font-medium px-2 py-0.5 rounded transition-colors ${
                  submissionMode === 'demo' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : 'hover:text-stone-700'
                }`}
              >
                Demonstração Interativa
              </button>
              <span>|</span>
              <button
                type="button"
                onClick={() => setSubmissionMode('real')}
                className={`font-medium px-2 py-0.5 rounded transition-colors ${
                  submissionMode === 'real' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : 'hover:text-stone-700'
                }`}
                title="Envia dados reais para o endpoint https://app.thestories.cc/subscription/form"
              >
                Envio Real (app.thestories.cc)
              </button>
            </div>
          )}
        </div>

        {/* Feature 1: Live Story Teaser & Excerpt Card (Crucial for Conversion!) */}
        {config.showTeaser && (
          <section
            id="amostra"
            className="w-full max-w-xl mx-auto mb-12 scroll-mt-24"
          >
            <div
              className={`p-6 rounded-2xl border transition-all relative overflow-hidden ${currentTheme.cardBg} ${currentTheme.cardBorder}`}
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200/60 dark:border-stone-800">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Feather className="w-3.5 h-3.5 text-stone-400" />
                  <span className="font-semibold text-stone-700 dark:text-stone-300">
                    Degustação da Última Edição
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStory.edition}</span>
                </div>
                {/* Story switch tabs */}
                <div className="flex items-center gap-1">
                  {SAMPLE_STORIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedStoryIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedStoryIndex === idx
                          ? 'w-5 bg-stone-800 dark:bg-stone-200'
                          : 'bg-stone-300 dark:bg-stone-700 hover:bg-stone-400'
                      }`}
                      aria-label={`Ver edição ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-serif-display text-xl font-medium mb-2 leading-tight">
                "{activeStory.title}"
              </h3>

              <div className="relative pl-4 border-l-2 border-stone-300 dark:border-stone-700 my-4">
                <p className="font-editorial text-base sm:text-lg italic text-stone-700 dark:text-stone-300 leading-relaxed">
                  {activeStory.teaser}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-stone-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeStory.readingTime}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenStoryModal(activeStory)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:underline underline-offset-4"
                >
                  <span>Continuar lendo esta crônica</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Feature 2: Social Proof & Reader Testimonials */}
        {config.showSocialProof && (
          <section id="leitores" className="w-full max-w-xl mx-auto mb-10 text-center">
            <div className="py-4 px-6 rounded-xl border border-stone-200/60 dark:border-stone-800 bg-stone-100/40 dark:bg-stone-900/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <span className="w-6 h-6 rounded-full bg-amber-200 border border-white dark:border-stone-900 flex items-center justify-center text-[10px] font-bold text-amber-900">
                      M
                    </span>
                    <span className="w-6 h-6 rounded-full bg-rose-200 border border-white dark:border-stone-900 flex items-center justify-center text-[10px] font-bold text-rose-900">
                      C
                    </span>
                    <span className="w-6 h-6 rounded-full bg-emerald-200 border border-white dark:border-stone-900 flex items-center justify-center text-[10px] font-bold text-emerald-900">
                      R
                    </span>
                  </div>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    {config.subscriberCount}
                  </span>
                </div>
                <span className="hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">★★★★★</span>
                  <span>4.9/5 estrelas de satisfação</span>
                </div>
              </div>

              {/* Reader quotes */}
              <div className="mt-4 pt-3 border-t border-stone-200/40 dark:border-stone-800/80 text-left">
                <div className="flex items-start gap-2.5">
                  <Quote className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <p className="text-xs italic text-stone-600 dark:text-stone-400 leading-normal">
                    "Virou o meu ritual sagrado de domingo: passar o café passado, abrir o e-mail às 08:08 e ler sem a correria do Instagram. A cada domingo uma emoção diferente."
                  </p>
                </div>
                <div className="mt-1 text-[11px] text-stone-400 text-right">
                  — Mariana S., leitora desde a edição #12
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Feature 3: The 08:08 Ritual Narrative Section */}
        <section id="ritual" className="w-full max-w-xl mx-auto text-center mb-8">
          <div className="p-6 rounded-xl border border-stone-200/40 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed space-y-2">
            <h4 className="font-serif-display text-base font-semibold text-stone-900 dark:text-stone-100">
              Por que às 08:08 da manhã de domingo?
            </h4>
            <p>
              Porque é o horário em que o mundo ainda não acelerou. As notificações de trabalho estão desligadas, o café ainda está quente e você tem cinco minutos para lembrar que o amor, mesmo imperfeito, é o que dá sentido a tudo.
            </p>
          </div>
        </section>
      </main>

      {/* Quiet Footer adhering to Constitution */}
      <footer
        id="sobre"
        className={`w-full border-t ${currentTheme.navBorder} py-6 px-4 text-center text-xs ${currentTheme.subtext}`}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif-display font-medium text-stone-800 dark:text-stone-200 text-sm">
              the stories
            </span>
            <span>© 2026 🧸</span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <a
              href="https://feeds.feedburner.com/thestoriescc"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              Feed RSS
            </a>
            <span>·</span>
            <a
              href="https://www.thestories.cc/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              thestories.cc
            </a>
            <span>·</span>
            <span>Feito com afeto e café</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
