'use client';

import { useState } from 'react';
import {
  Sparkles,
  Upload,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Zap,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';

export default function AnalisePage() {
  const [message, setMessage] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeMessage = () => {
    if (!message.trim()) return;

    setAnalyzing(true);

    // Simulação de análise (em produção, chamar API real)
    setTimeout(() => {
      const mockAnalysis = {
        original: message,
        improved: generateImprovedMessage(message),
        tone: detectTone(message),
        score: Math.floor(Math.random() * 30) + 70,
        suggestions: [
          'Adicione mais confiança ao tom da mensagem',
          'Use linguagem mais direta e assertiva',
          'Inclua uma pergunta para manter o engajamento',
          'Evite parecer muito ansioso ou necessitado'
        ]
      };
      setAnalysis(mockAnalysis);
      setAnalyzing(false);
    }, 2000);
  };

  const generateImprovedMessage = (original: string): string => {
    // Lógica simples de melhoria (em produção, usar IA real)
    const improvements = [
      `Ei! ${original} Você parece ser alguém interessante.`,
      `${original} Conta mais sobre isso, fiquei curioso.`,
      `Adorei isso! ${original} O que te motivou nisso?`
    ];
    return improvements[Math.floor(Math.random() * improvements.length)];
  };

  const detectTone = (text: string): 'confident' | 'neutral' | 'insecure' => {
    const insecureWords = ['talvez', 'acho', 'será', 'desculpa', 'sorry'];
    const confidentWords = ['vamos', 'sei', 'definitivamente', 'com certeza'];

    const lowerText = text.toLowerCase();
    const hasInsecure = insecureWords.some((word) => lowerText.includes(word));
    const hasConfident = confidentWords.some((word) => lowerText.includes(word));

    if (hasConfident) return 'confident';
    if (hasInsecure) return 'insecure';
    return 'neutral';
  };

  const toneConfig = {
    confident: { color: 'text-green-500', bg: 'bg-green-500/10', label: 'Confiante' },
    neutral: { color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Neutro' },
    insecure: { color: 'text-red-500', bg: 'bg-red-500/10', label: 'Inseguro' }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-10 h-10 text-[#D4AF37]" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                Análise com <span className="text-[#D4AF37]">IA</span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cole sua mensagem e receba análise detalhada, sugestões de melhoria e versões otimizadas
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 mb-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-400 mb-3">
                Sua Mensagem
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cole aqui a mensagem que você quer enviar ou já enviou..."
                className="w-full h-40 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={analyzeMessage}
                disabled={!message.trim() || analyzing}
                className="flex-1 px-6 py-4 bg-[#D4AF37] text-black font-bold rounded-xl hover:bg-[#F5C842] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {analyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Analisando...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Analisar com IA</span>
                  </>
                )}
              </button>

              <button className="px-6 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Upload Print</span>
              </button>
            </div>
          </div>

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {/* Score Card */}
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                    <h2 className="text-2xl font-bold">Score de Confiança</h2>
                  </div>
                  <div className="text-5xl font-bold text-[#D4AF37]">{analysis.score}</div>
                </div>

                <div className="w-full bg-black/30 rounded-full h-4 mb-4">
                  <div
                    className="bg-[#D4AF37] h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${analysis.score}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Tom detectado:</span>
                  <span
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      toneConfig[analysis.tone].bg
                    } ${toneConfig[analysis.tone].color}`}
                  >
                    {toneConfig[analysis.tone].label}
                  </span>
                </div>
              </div>

              {/* Original vs Improved */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Original */}
                <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-bold">Mensagem Original</h3>
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-300">{analysis.original}</p>
                  </div>
                </div>

                {/* Improved */}
                <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-bold">Versão Melhorada</h3>
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-xl p-4 mb-4">
                    <p className="text-white">{analysis.improved}</p>
                  </div>
                  <button className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all flex items-center justify-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Copiar Mensagem</span>
                  </button>
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
                  <h2 className="text-2xl font-bold">Sugestões de Melhoria</h2>
                </div>

                <div className="space-y-4">
                  {analysis.suggestions.map((suggestion: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-black/30 border border-white/10 rounded-xl p-4"
                    >
                      <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 flex-1">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h2 className="text-2xl font-bold">Próximos Passos</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="px-6 py-4 bg-purple-500/20 border border-purple-500/30 text-white font-semibold rounded-xl hover:bg-purple-500/30 transition-all flex items-center justify-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Analisar Outra</span>
                  </button>

                  <button className="px-6 py-4 bg-[#D4AF37] text-black font-bold rounded-xl hover:bg-[#F5C842] transition-all flex items-center justify-center space-x-2">
                    <span>Ver Frases Prontas</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!analysis && !analyzing && (
            <div className="text-center py-20">
              <Sparkles className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Pronto para melhorar suas mensagens?</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Cole uma mensagem acima e deixe nossa IA analisar e sugerir melhorias para 
                aumentar suas chances de sucesso
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
