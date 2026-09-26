import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeftRight,
  FileCheck2,
  Download,
  Smartphone,
  Tablet,
  Monitor,
  Sliders,
  X,
  Sun,
  Moon,
} from 'lucide-react';
import { DeviceMode, SqueezePageConfig, ViewMode } from '../types';

interface CustomizeToolbarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;
  config: SqueezePageConfig;
  setConfig: React.Dispatch<React.SetStateAction<SqueezePageConfig>>;
}

export const CustomizeToolbar: React.FC<CustomizeToolbarProps> = ({
  viewMode,
  setViewMode,
  deviceMode,
  setDeviceMode,
  config,
  setConfig,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle between Light (editorial) and Dark (velvet)
  const isDark = config.theme === 'velvet';
  const toggleTheme = () => {
    setConfig((prev) => ({
      ...prev,
      theme: prev.theme === 'velvet' ? 'editorial' : 'velvet',
    }));
  };

  return (
    <>
      <nav aria-label="Controles principais do otimizador" className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Main Navigation Views */}
          <div className="flex items-center gap-1 bg-stone-800/80 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('redesign')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'redesign'
                  ? 'bg-stone-100 text-stone-900 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Squeeze Page</span>
            </button>

            <button
              onClick={() => setViewMode('export')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'export'
                  ? 'bg-emerald-500 text-white font-bold shadow-xs'
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar index.html (Hospedagem)</span>
            </button>

            <button
              onClick={() => setViewMode('compare')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'compare'
                  ? 'bg-stone-100 text-stone-900 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-blue-400" />
              <span>Antes & Depois</span>
            </button>

            <button
              onClick={() => setViewMode('audit')}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'audit'
                  ? 'bg-stone-100 text-stone-900 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5 text-stone-400" />
              <span>Diagnóstico CRO</span>
            </button>
          </div>

          {/* Right Tools: Sol / Lua Toggle, Devices & Customizer */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ícone Sol / Lua com texto descritivo */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                isDark
                  ? 'bg-stone-800 border-amber-400/50 text-amber-300 shadow-xs hover:bg-stone-700'
                  : 'bg-stone-800 border-stone-700 text-stone-200 hover:text-white hover:bg-stone-700'
              }`}
              title={isDark ? 'Mudar para Modo Claro (Sol)' : 'Mudar para Modo Escuro (Lua)'}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span className="hidden sm:inline">Modo Escuro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-stone-300" />
                  <span className="hidden sm:inline">Modo Claro</span>
                </>
              )}
            </button>

            {/* Device preview toggles */}
            <div className="hidden md:flex items-center gap-1 bg-stone-800/80 p-1 rounded-xl text-stone-400">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded-lg transition-colors ${
                  deviceMode === 'desktop' ? 'bg-stone-700 text-white' : 'hover:text-white'
                }`}
                title="Visualização Desktop"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1.5 rounded-lg transition-colors ${
                  deviceMode === 'tablet' ? 'bg-stone-700 text-white' : 'hover:text-white'
                }`}
                title="Visualização Tablet"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded-lg transition-colors ${
                  deviceMode === 'mobile' ? 'bg-stone-700 text-white' : 'hover:text-white'
                }`}
                title="Visualização Celular"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Customizer trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-xl transition-colors cursor-pointer border border-stone-700"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Ajustar Textos</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Customizer Drawer */}
      {isDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white text-stone-900 h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-stone-700" />
                  <h3 className="font-semibold text-stone-900 text-base">
                    Personalizar thestories.cc
                  </h3>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mt-6 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Título Principal (Headline)
                  </label>
                  <textarea
                    rows={2}
                    value={config.headline}
                    onChange={(e) =>
                      setConfig((c) => ({ ...c, headline: e.target.value }))
                    }
                    className="w-full p-2.5 text-xs border border-stone-300 rounded-lg outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Subtítulo & Proposta de Valor
                  </label>
                  <textarea
                    rows={3}
                    value={config.subheadline}
                    onChange={(e) =>
                      setConfig((c) => ({ ...c, subheadline: e.target.value }))
                    }
                    className="w-full p-2.5 text-xs border border-stone-300 rounded-lg outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Texto do Botão de Inscrição (CTA)
                  </label>
                  <input
                    type="text"
                    value={config.ctaText}
                    onChange={(e) =>
                      setConfig((c) => ({ ...c, ctaText: e.target.value }))
                    }
                    className="w-full p-2.5 text-xs border border-stone-300 rounded-lg outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Contagem de Leitores (Prova Social)
                  </label>
                  <input
                    type="text"
                    value={config.subscriberCount}
                    onChange={(e) =>
                      setConfig((c) => ({ ...c, subscriberCount: e.target.value }))
                    }
                    className="w-full p-2.5 text-xs border border-stone-300 rounded-lg outline-none focus:border-stone-900"
                  />
                </div>

                <div className="pt-2 border-t border-stone-200 space-y-2">
                  <div className="font-semibold text-stone-700 mb-2">Módulos Visíveis:</div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showTeaser}
                      onChange={(e) =>
                        setConfig((c) => ({ ...c, showTeaser: e.target.checked }))
                      }
                      className="rounded text-stone-900"
                    />
                    <span>Card de Degustação da Última Edição</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showSocialProof}
                      onChange={(e) =>
                        setConfig((c) => ({
                          ...c,
                          showSocialProof: e.target.checked,
                        }))
                      }
                      className="rounded text-stone-900"
                    />
                    <span>Barra de Prova Social e Avaliações</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Concluir Ajustes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
