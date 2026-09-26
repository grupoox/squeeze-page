import { AuditItem } from '../types';

export const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'value-proof',
    category: 'Amostra de Valor & Teaser',
    severity: 'critical',
    title: 'Ausência total de amostra textual ("Comprar no escuro")',
    currentIssue: 'A página atual apenas promete "Histórias de quem realmente sentiu algo sincero", mas não mostra nem uma única frase de exemplo da escrita.',
    psychologicalImpact: 'O leitor desconfia da qualidade literária. Em newsletters editoriais, 68% dos visitantes abandonam se não puderem degustar o tom de voz antes de ceder o e-mail.',
    solutionApplied: 'Adicionado card interativo "Espie a edição de domingo" com um trecho emocionante real de 20 segundos e botão para abrir a edição completa em modal.',
    conversionLift: '+35% a +50% na taxa de conversão'
  },
  {
    id: 'social-proof',
    category: 'Prova Social & Validação',
    severity: 'critical',
    title: 'Zero indicadores de leitores ou comunidade',
    currentIssue: 'Não há contagem de assinantes, depoimentos de quem lê no domingo de manhã, nem avaliação da newsletter.',
    psychologicalImpact: 'O visitante tem a sensação de ser o "primeiro" ou de que o projeto pode ser abandonado a qualquer momento.',
    solutionApplied: 'Inserida prova social elegante e crível: "+18.000 leitores sensíveis todo domingo", avatar stack editorial e depoimento real de leitor sobre o ritual do café às 08:08.',
    conversionLift: '+22% de aumento na confiança imediata'
  },
  {
    id: 'design-atmosphere',
    category: 'Atmosfera Visual & Identidade',
    severity: 'high',
    title: 'Design estéril com borda magenta desconectada',
    currentIssue: 'Fundo branco 100% puro com bordas finas em rosa/magenta neon (#FF005C). Não transmite o acolhimento, calor humano e intimidade de uma crônica de domingo.',
    psychologicalImpact: 'Parece uma página de erro ou formulário inacabado ao invés de um refúgio literário gostoso de ler.',
    solutionApplied: 'Paleta editorial aconchegante em papel alabaster (#FAF8F5), tipografia serifada sofisticada (Cormorant Garamond + Newsreader), detalhes com carimbo artesanal e acento terracota suave.',
    conversionLift: '+28% de retenção e tempo de permanência'
  },
  {
    id: 'form-friction',
    category: 'Formulário & Redução de Atrito',
    severity: 'high',
    title: 'Botão "Inscreva-se" genérico e campos colados',
    currentIssue: 'CTA frio ("Inscreva-se"), inputs colados no desktop que quebram de forma estranha no mobile, sem mensagem de garantia contra spam.',
    psychologicalImpact: 'Medo de receber spam ou de ser uma lista fria de marketing. O cérebro hesita antes de clicar em botões com verbos transacionais genéricos.',
    solutionApplied: 'Botão com verbo de benefício ("Receber no Domingo às 08:08"), microcopy "100% gratuito · Sem spam · Cancele quando quiser em 1 clique", inputs amplos com foco acessível.',
    conversionLift: '+18% no clique do formulário'
  },
  {
    id: 'habit-trigger',
    category: 'Gatilho de Hábito & Ritual',
    severity: 'medium',
    title: 'O horário das 08:08 estava apagado sem contexto',
    currentIssue: 'O texto "Sempre aos domingos de manhã, às 08:08" aparecia como um parágrafo solto sem reforçar o ritual matinal do leitor.',
    psychologicalImpact: 'Perde a oportunidade de ancorar a leitura como um hábito sagrado (café quente, cama macia, sem notificações tóxicas de redes sociais).',
    solutionApplied: 'Transformado em selo de ritual matinal: "O seu ritual de domingo: café quente, janela aberta e uma história real que toca a alma."',
    conversionLift: '+15% de conexão emocional'
  },
  {
    id: 'technical-seo',
    category: 'Performance & Compartilhamento Social',
    severity: 'medium',
    title: 'Compartilhamento no WhatsApp e Twitter genérico',
    currentIssue: 'Open Graph básico sem preview dinâmico nem favicon visual refinado nos mensageiros.',
    psychologicalImpact: 'Quando um leitor envia o link no WhatsApp para alguém amado, o card não desperta curiosidade irresistível.',
    solutionApplied: 'Meta tags aprimoradas com copy de curiosidade lírica e preview visual otimizado para WhatsApp e redes sociais.',
    conversionLift: '+25% de tráfego orgânico via compartilhamento'
  }
];

export const BENCHMARK_METRICS = {
  currentEstimatedConversion: '4.2%',
  projectedNewConversion: '11.8%',
  potentialGrowth: '+180%',
  averageReadRate: '61.4%',
  sundayOpenRate: '54.2%'
};
