export type PageTheme = 'editorial' | 'minimal' | 'velvet';

export type ViewMode = 'redesign' | 'compare' | 'audit' | 'export';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface StoryExcerpt {
  id: string;
  edition: string;
  title: string;
  date: string;
  readingTime: string;
  teaser: string;
  fullSnippet: string[];
  theme: string;
}

export interface AuditItem {
  id: string;
  category: string;
  severity: 'critical' | 'high' | 'medium';
  title: string;
  currentIssue: string;
  psychologicalImpact: string;
  solutionApplied: string;
  conversionLift: string;
}

export interface SqueezePageConfig {
  headline: string;
  subheadline: string;
  scheduleText: string;
  subscriberCount: string;
  readingTime: string;
  ctaText: string;
  theme: PageTheme;
  showTeaser: boolean;
  showSocialProof: boolean;
  showGuarantee: boolean;
}
