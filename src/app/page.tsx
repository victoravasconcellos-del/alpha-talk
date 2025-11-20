import Link from 'next/link';
import { 
  MessageSquare, 
  Sparkles, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Crown,
  Flame,
  Star
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-8">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold">Transforme Sua Comunicação</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Domine a Arte da
              <span className="block text-[#D4AF37] mt-2">Conquista e Conversação</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Desenvolva confiança, aprenda técnicas comprovadas e use IA avançada para 
              melhorar suas habilidades de comunicação e atração.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#F5C842] transition-all hover:scale-105 shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center space-x-2"
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/frases"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Ver Frases Prontas</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">10k+</div>
                <div className="text-gray-400 text-sm">Usuários Ativos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">500+</div>
                <div className="text-gray-400 text-sm">Frases Prontas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">95%</div>
                <div className="text-gray-400 text-sm">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Recursos <span className="text-[#D4AF37]">Poderosos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tudo que você precisa para se tornar um mestre da comunicação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Análise com IA</h3>
              <p className="text-gray-400 mb-4">
                Envie prints de conversas e receba análises detalhadas, sugestões de melhoria 
                e respostas otimizadas geradas por IA.
              </p>
              <Link href="/analise" className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:underline">
                <span>Experimentar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Frases Prontas</h3>
              <p className="text-gray-400 mb-4">
                Biblioteca com centenas de frases categorizadas para iniciar conversas, 
                manter diálogo, marcar encontros e muito mais.
              </p>
              <Link href="/frases" className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:underline">
                <span>Ver Biblioteca</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Desafios Diários</h3>
              <p className="text-gray-400 mb-4">
                Complete missões diárias para ganhar XP, subir de nível e desbloquear 
                conquistas exclusivas.
              </p>
              <Link href="/dashboard" className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:underline">
                <span>Ver Desafios</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Gamificação</h3>
              <p className="text-gray-400 mb-4">
                Sistema completo de níveis, XP, streaks e conquistas para manter você 
                motivado e em constante evolução.
              </p>
              <Link href="/dashboard" className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:underline">
                <span>Ver Progresso</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Técnicas de Atração</h3>
              <p className="text-gray-400 mb-4">
                Aprenda técnicas comprovadas de linguagem corporal, timing, criação de 
                tensão e muito mais.
              </p>
              <Link href="/dashboard" className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:underline">
                <span>Aprender</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Respostas Rápidas</h3>
              <p className="text-gray-400 mb-4">
                IA gera respostas personalizadas em segundos baseadas no contexto da 
                conversa e seu estilo.
              </p>
              <Link href="/analise" className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:underline">
                <span>Testar Agora</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Como <span className="text-[#D4AF37]">Funciona</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Três passos simples para transformar sua comunicação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 text-black text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Aprenda</h3>
              <p className="text-gray-400">
                Acesse frases prontas, técnicas de atração e dicas de especialistas 
                para construir sua base de conhecimento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 text-black text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Pratique</h3>
              <p className="text-gray-400">
                Use a IA para analisar suas conversas, receber feedback instantâneo 
                e melhorar suas mensagens em tempo real.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 text-black text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Evolua</h3>
              <p className="text-gray-400">
                Complete desafios diários, suba de nível e desbloqueie conquistas 
                enquanto se torna um mestre da comunicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-3xl p-12">
            <Star className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto para se tornar um <span className="text-[#D4AF37]">Alpha</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de homens que já transformaram suas habilidades de 
              comunicação e conquista com o AlphaTalk.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-[#D4AF37] text-black font-bold text-lg rounded-lg hover:bg-[#F5C842] transition-all hover:scale-105 shadow-2xl shadow-[#D4AF37]/30"
            >
              <span>Começar Gratuitamente</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Sem cartão de crédito necessário • Acesso imediato
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
