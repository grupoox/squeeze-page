import React, { useState } from 'react';

export const SqueezePageOriginal: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-[640px] bg-white text-black flex flex-col items-center justify-center p-5 relative font-sans text-center border border-dashed border-stone-300 rounded-xl overflow-hidden shadow-inner">
      <div className="absolute top-3 left-3 bg-stone-100 text-stone-600 text-[11px] px-2.5 py-1 rounded border border-stone-200 font-mono">
        Versão Atual (thestories.cc)
      </div>

      <div className="max-w-[600px] w-full p-4 flex flex-col items-center my-auto">
        {/* Original Logo */}
        <img
          src="https://i.imgur.com/owFGbM2.png"
          alt="The Stories"
          referrerPolicy="no-referrer"
          className="w-[100px] h-[100px] object-contain mb-4 rounded-lg shadow-sm"
        />

        {/* Original Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight text-black">
          the stories
        </h1>

        {/* Original Description */}
        <div className="mb-6 max-w-lg">
          <p className="text-base leading-relaxed text-[#111]">
            Nem sempre com finais felizes, mas sempre verdadeiras.
            <br />
            Histórias de quem realmente sentiu algo sincero, diretamente
            entregues na sua caixa de entrada. A cada história uma emoção.
          </p>
        </div>

        {/* Original Schedule */}
        <p className="text-base text-stone-800 mb-8 font-medium">
          Sempre aos domingos de manhã, às 08:08.
        </p>

        {/* Original Form with magenta/pink borders */}
        {submitted ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-sm w-full max-w-[550px]">
            Simulação de inscrição enviada! (Na página real, redireciona para thestories.cc/obrigado)
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full max-w-[550px] mx-auto gap-3 sm:gap-0"
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu Nome..."
              className="flex-1 p-3.5 text-sm border border-[#FF005C] sm:border-r-0 rounded sm:rounded-r-none text-stone-800 outline-none placeholder:text-stone-400"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor Email..."
              required
              className="flex-1 p-3.5 text-sm border border-[#FF005C] sm:border-r-0 rounded sm:rounded-none text-stone-800 outline-none placeholder:text-stone-400"
            />
            <button
              type="submit"
              className="py-3.5 px-6 text-sm font-bold text-white bg-[#FF005C] hover:bg-[#D6004D] border border-[#FF005C] rounded sm:rounded-l-none cursor-pointer transition-colors whitespace-nowrap"
            >
              Inscreva-se
            </button>
          </form>
        )}
      </div>

      {/* Original Footer */}
      <footer className="text-xs text-stone-500 mt-6 sm:mt-0 sm:absolute sm:bottom-4 sm:left-4">
        © 2026 the stories 🧸.
      </footer>
    </div>
  );
};
