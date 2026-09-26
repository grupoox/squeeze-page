import React from 'react';
import { X, BookOpen, Clock, Heart, Share2, Check } from 'lucide-react';
import { StoryExcerpt } from '../types';

interface StoryReaderModalProps {
  story: StoryExcerpt | null;
  onClose: () => void;
  onSubscribeClick: () => void;
}

export const StoryReaderModal: React.FC<StoryReaderModalProps> = ({
  story,
  onClose,
  onSubscribeClick,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  if (!story) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FBF9F5] text-stone-900 rounded-2xl shadow-2xl border border-stone-200/80 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200/80">
          <div className="flex items-center gap-3 text-xs text-stone-500 font-sans">
            <span className="font-semibold text-stone-700 tracking-wider uppercase">
              {story.edition}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {story.readingTime}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">{story.theme}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors"
            title="Fechar"
            aria-label="Fechar pré-visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="mt-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-stone-900 leading-snug">
            {story.title}
          </h2>
          <p className="mt-2 text-xs text-stone-400 font-sans tracking-wide">
            Enviada no domingo às 08:08 para assinantes de the stories
          </p>
        </div>

        {/* Story Body */}
        <div className="space-y-5 text-stone-800 font-editorial text-lg sm:text-[1.125rem] leading-relaxed">
          {story.fullSnippet.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-stone-900'
                  : ''
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Reader interaction ribbon */}
        <div className="mt-8 pt-6 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 font-sans">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
              liked
                ? 'border-red-200 bg-red-50 text-red-600'
                : 'border-stone-200 hover:border-stone-300 text-stone-600'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-red-600' : ''}`} />
            <span>{liked ? 'Você sentiu algo sincero' : 'Sentiu algo?'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 hover:border-stone-300 text-stone-600 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link copiado!' : 'Compartilhar'}</span>
          </button>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-8 p-6 bg-stone-100/70 rounded-xl border border-stone-200/70 text-center">
          <div className="w-8 h-8 mx-auto mb-2 text-stone-500 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-serif-display text-xl text-stone-900 font-medium">
            Gostou de ler esta crônica?
          </h3>
          <p className="mt-1 text-sm text-stone-600 font-sans max-w-md mx-auto">
            Uma história inédita como esta chega à sua caixa de entrada todo domingo às 08:08. É gratuito e sem anúncios.
          </p>
          <div className="mt-4">
            <button
              onClick={() => {
                onClose();
                onSubscribeClick();
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all"
            >
              Receber as próximas no meu e-mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
