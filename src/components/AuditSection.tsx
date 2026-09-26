import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  FileText,
  Users,
  Palette,
  Shield,
  Clock,
  Share2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from 'lucide-react';
import { AUDIT_ITEMS, BENCHMARK_METRICS } from '../data/auditReport';

export const AuditSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('value-proof');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'Amostra de Valor & Teaser': <FileText className="w-4 h-4 text-purple-600" />,
    'Prova Social & Validação': <Users className="w-4 h-4 text-blue-600" />,
    'Atmosfera Visual & Identidade': <Palette className="w-4 h-4 text-rose-600" />,
    'Formulário & Redução de Atrito': <Shield className="w-4 h-4 text-amber-600" />,
    'Gatilho de Hábito & Ritual': <Clock className="w-4 h-4 text-emerald-600" />,
    'Performance & Compartilhamento Social': <Share2 className="w-4 h-4 text-indigo-600" />,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Executive Summary Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              Auditoria de Conversão (CRO)
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-stone-900">
              Diagnóstico Aprofundado de thestories.cc
            </h2>
            <p className="text-sm text-stone-600 font-sans mt-1 max-w-xl">
              Análise baseada em princípios cognitivos de tomada de decisão para newsletters literárias e squeeze pages de alto desempenho.
            </p>
          </div>

          {/* Score comparison pill */}
          <div className="flex items-center gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="text-center">
              <div className="text-xs text-stone-400 font-medium">Nota Atual</div>
              <div className="text-2xl font-bold text-red-600 font-mono">44/100</div>
              <div className="text-[10px] text-stone-400">Alto abandono</div>
            </div>
            <div className="text-stone-300 font-bold text-lg">→</div>
            <div className="text-center">
              <div className="text-xs text-emerald-700 font-medium">Com Redesign</div>
              <div className="text-2xl font-bold text-emerald-600 font-mono">95/100</div>
              <div className="text-[10px] text-emerald-600 font-medium">Pronto para escala</div>
            </div>
          </div>
        </div>

        {/* Projected Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-[11px] text-stone-500">Conversão Atual Estimada</div>
            <div className="text-lg font-bold text-stone-800 font-mono mt-0.5">{BENCHMARK_METRICS.currentEstimatedConversion}</div>
            <div className="text-[10px] text-stone-400">Média de mercado sem prova</div>
          </div>
          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
            <div className="text-[11px] text-emerald-800">Conversão Projetada</div>
            <div className="text-lg font-bold text-emerald-700 font-mono mt-0.5">{BENCHMARK_METRICS.projectedNewConversion}</div>
            <div className="text-[10px] text-emerald-600 font-medium">{BENCHMARK_METRICS.potentialGrowth} mais inscritos</div>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-[11px] text-stone-500">Taxa Média de Abertura</div>
            <div className="text-lg font-bold text-stone-800 font-mono mt-0.5">{BENCHMARK_METRICS.sundayOpenRate}</div>
            <div className="text-[10px] text-stone-400">Envio pontual às 08:08</div>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-[11px] text-stone-500">Taxa de Leitura Completa</div>
            <div className="text-lg font-bold text-stone-800 font-mono mt-0.5">{BENCHMARK_METRICS.averageReadRate}</div>
            <div className="text-[10px] text-stone-400">Formato 4 min sem ruído</div>
          </div>
        </div>
      </div>

      {/* Deep-dive Audit Items */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-serif-display font-medium text-stone-900">
            Os 6 Gargalos Críticos & Soluções Implementadas
          </h3>
          <span className="text-xs text-stone-500">Clique para expandir o raciocínio</span>
        </div>

        {AUDIT_ITEMS.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`bg-white rounded-xl border transition-all overflow-hidden ${
                isExpanded
                  ? 'border-stone-400 shadow-sm'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-stone-50 border border-stone-100 shrink-0 mt-0.5">
                    {categoryIcons[item.category] || <HelpCircle className="w-4 h-4 text-stone-600" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          item.severity === 'critical'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : item.severity === 'high'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        Gravidade {item.severity === 'critical' ? 'Crítica' : item.severity === 'high' ? 'Alta' : 'Média'}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-stone-900 mt-1">
                      {item.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded hidden sm:inline">
                    {item.conversionLift}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-stone-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-stone-100 space-y-4 text-sm font-sans">
                  {/* Problem vs Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 space-y-1">
                      <div className="text-xs font-bold text-red-800 uppercase flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        O que acontece na página atual:
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {item.currentIssue}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="text-xs font-bold text-stone-700 uppercase flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
                        Impacto na mente do visitante:
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {item.psychologicalImpact}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                    <div className="text-xs font-bold text-emerald-900 uppercase flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Como resolvemos no novo Redesign:
                    </div>
                    <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                      {item.solutionApplied}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Strategic Pro-tips Card */}
      <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          <span>3 Dicas Extras de Ouro para a Escala de The Stories:</span>
        </div>
        <ul className="text-xs sm:text-sm text-stone-700 space-y-2 list-disc list-inside">
          <li>
            <strong>Página de Obrigado (thestories.cc/obrigado):</strong> Após a inscrição, instrua imediatamente o leitor a favoritar ou mover o e-mail para a "Caixa Principal" para não cair em Promoções/Spam no Gmail.
          </li>
          <li>
            <strong>E-mail de Boas-Vindas Imediato:</strong> Não espere o domingo! Envie nos primeiros 2 minutos a crônica mais aclamada da história da newsletter como presente de boas-vindas.
          </li>
          <li>
            <strong>Gatilho de Compartilhamento no Final do E-mail:</strong> No rodapé de cada edição, coloque um botão direto: "Conhece alguém que precisa ler isso hoje? Encaminhe este e-mail com carinho."
          </li>
        </ul>
      </div>
    </div>
  );
};
