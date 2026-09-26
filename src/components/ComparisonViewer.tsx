import React, { useState } from 'react';
import { ArrowLeftRight, Check, X, Sparkles, TrendingUp, AlertTriangle, Layers } from 'lucide-react';
import { SqueezePageOriginal } from './SqueezePageOriginal';
import { SqueezePageNew } from './SqueezePageNew';
import { SqueezePageConfig, StoryExcerpt } from '../types';

interface ComparisonViewerProps {
  config: SqueezePageConfig;
  onOpenStoryModal: (story: StoryExcerpt) => void;
}

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({
  config,
  onOpenStoryModal,
}) => {
  const [layoutMode, setLayoutMode] = useState<'split' | 'tabs'>('split');
  const [activeTab, setActiveTab] = useState<'original' | 'redesign'>('redesign');

  const comparisonPoints = [
    {
      title: 'Amostra de Conteúdo',
      original: 'Nenhum trecho de texto. Visitante não sabe se a escrita é boa.',
      redesign: 'Degustação da última crônica com modal completo em 1 clique.',
      lift: '+45% de interesse',
    },
    {
      title: 'Prova Social',
      original: 'Zero assinantes citados. Sensação de página abandonada.',
      redesign: '+18.400 leitores, nota 4.9/5 estrelas e depoimento real.',
      lift: '+25% de confiança',
    },
    {
      title: 'Identidade & Afeto',
      original: 'Bordas rígidas em magenta neon (#FF005C) sobre fundo branco vazio.',
      redesign: 'Papel alabaster acolhedor, serifas elegantes (Cormorant) e carinho editorial.',
      lift: '+30% de tempo de leitura',
    },
    {
      title: 'Formulário & Segurança',
      original: 'Botão "Inscreva-se" genérico sem política de cancelamento ou spam.',
      redesign: 'CTA de valor ("Receber no Domingo às 08:08"), sem spam, 1 clique para sair.',
      lift: '+20% na taxa de clique',
    },
    {
      title: 'Gatilho de Ritual',
      original: 'Horário "08:08" solto como texto comum sem criar hábito.',
      redesign: 'Ritual matinal contextualizado: café quente, tranquilidade de domingo.',
      lift: '+18% de identificação',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Controller Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
            <ArrowLeftRight className="w-3.5 h-3.5 text-stone-700" />
            <span>Comparador Analítico Antes & Depois</span>
          </div>
          <h2 className="text-2xl font-serif-display font-medium text-stone-900">
            thestories.cc Original vs. Redesign Otimizado
          </h2>
          <p className="text-sm text-stone-500 font-sans mt-0.5">
            Veja exatamente quais elementos foram transformados para transformar visitantes curiosos em leitores fiéis.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setLayoutMode('split')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              layoutMode === 'split'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Lado a Lado (Split)
          </button>
          <button
            onClick={() => setLayoutMode('tabs')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              layoutMode === 'tabs'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Alternar Abas
          </button>
        </div>
      </div>

      {/* Comparison Grid Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {comparisonPoints.map((pt, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-2 text-xs"
          >
            <div className="font-semibold text-stone-800 flex items-center justify-between">
              <span>{pt.title}</span>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                {pt.lift}
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] leading-tight">
              <div className="flex items-start gap-1.5 text-stone-500">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>{pt.original}</span>
              </div>
              <div className="flex items-start gap-1.5 text-stone-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt.redesign}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Screen Renderers */}
      {layoutMode === 'split' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Original View */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                Versão Atual (thestories.cc)
              </span>
              <span className="text-xs text-stone-400">Conversão estimada: ~4.2%</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-sm bg-white">
              <SqueezePageOriginal />
            </div>
          </div>

          {/* New View */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Novo Redesign Otimizado
              </span>
              <span className="text-xs text-emerald-600 font-medium">Conversão projetada: ~11.8% (+180%)</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md">
              <SqueezePageNew
                config={config}
                onOpenStoryModal={onOpenStoryModal}
                isEmbedPreview={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('original')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'original'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Exibir Versão Atual (thestories.cc)
            </button>
            <button
              onClick={() => setActiveTab('redesign')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'redesign'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Exibir Novo Redesign Otimizado ⭐
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md">
            {activeTab === 'original' ? (
              <SqueezePageOriginal />
            ) : (
              <SqueezePageNew
                config={config}
                onOpenStoryModal={onOpenStoryModal}
                isEmbedPreview={true}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
