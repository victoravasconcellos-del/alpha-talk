'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  Trophy,
  Target,
  TrendingUp,
  Crown,
  Star,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import { ACHIEVEMENTS, DAILY_CHALLENGES, TIPS } from '@/lib/constants';

export default function DashboardPage() {
  const [user] = useState({
    name: 'Alpha User',
    level: 5,
    xp: 1250,
    xpToNextLevel: 2000,
    streak: 7,
    totalAchievements: 3
  });

  const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              Bem-vindo, <span className="text-[#D4AF37]">{user.name}</span>
            </h1>
            <p className="text-gray-400 text-lg">Continue sua jornada para se tornar um mestre da comunicação</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Level Card */}
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Crown className="w-8 h-8 text-[#D4AF37]" />
                <span className="text-3xl font-bold text-[#D4AF37]">{user.level}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Nível</h3>
              <div className="w-full bg-black/30 rounded-full h-2 mb-2">
                <div
                  className="bg-[#D4AF37] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${xpPercentage}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm">{user.xp} / {user.xpToNextLevel} XP</p>
            </div>

            {/* Streak Card */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Flame className="w-8 h-8 text-orange-500" />
                <span className="text-3xl font-bold text-orange-500">{user.streak}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Sequência</h3>
              <p className="text-gray-400 text-sm">Dias consecutivos de atividade</p>
            </div>

            {/* Achievements Card */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Trophy className="w-8 h-8 text-purple-500" />
                <span className="text-3xl font-bold text-purple-500">{user.totalAchievements}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Conquistas</h3>
              <p className="text-gray-400 text-sm">Desbloqueadas até agora</p>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Zap className="w-8 h-8 text-blue-500" />
                <Star className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Premium</h3>
              <button className="mt-2 w-full px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-all">
                Assinar Agora
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Daily Challenges */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-[#D4AF37]" />
                    <h2 className="text-2xl font-bold">Desafios Diários</h2>
                  </div>
                  <span className="text-sm text-gray-400">Resetam em 12h</span>
                </div>

                <div className="space-y-4">
                  {DAILY_CHALLENGES.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="bg-black/30 border border-white/10 rounded-xl p-6 hover:bg-black/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{challenge.title}</h3>
                          <p className="text-gray-400 text-sm">{challenge.description}</p>
                        </div>
                        {challenge.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 ml-4" />
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-600 rounded-full flex-shrink-0 ml-4" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D4AF37] font-semibold text-sm">+{challenge.xpReward} XP</span>
                        {!challenge.completed && (
                          <button className="px-4 py-2 bg-[#D4AF37] text-black text-sm font-semibold rounded-lg hover:bg-[#F5C842] transition-all">
                            Começar
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Ações Rápidas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="/frases"
                    className="bg-black/30 border border-white/10 rounded-xl p-6 hover:bg-black/50 hover:border-[#D4AF37]/30 transition-all group"
                  >
                    <BookOpen className="w-8 h-8 text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">Frases Prontas</h3>
                    <p className="text-gray-400 text-sm">Biblioteca completa</p>
                  </Link>

                  <Link
                    href="/analise"
                    className="bg-black/30 border border-white/10 rounded-xl p-6 hover:bg-black/50 hover:border-[#D4AF37]/30 transition-all group"
                  >
                    <Sparkles className="w-8 h-8 text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">Análise IA</h3>
                    <p className="text-gray-400 text-sm">Melhore mensagens</p>
                  </Link>

                  <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:bg-black/50 hover:border-[#D4AF37]/30 transition-all group cursor-pointer">
                    <MessageSquare className="w-8 h-8 text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">Técnicas</h3>
                    <p className="text-gray-400 text-sm">Aprenda mais</p>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  <h2 className="text-2xl font-bold">Dicas do Dia</h2>
                </div>
                <div className="space-y-4">
                  {TIPS.slice(0, 3).map((tip, index) => (
                    <div key={index} className="bg-black/30 border border-white/10 rounded-xl p-6">
                      <h3 className="font-semibold mb-2 text-[#D4AF37]">{tip.title}</h3>
                      <p className="text-gray-400 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Trophy className="w-6 h-6 text-[#D4AF37]" />
                  <h2 className="text-2xl font-bold">Conquistas</h2>
                </div>

                <div className="space-y-4">
                  {ACHIEVEMENTS.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`bg-black/30 border rounded-xl p-4 transition-all ${
                        achievement.unlocked
                          ? 'border-[#D4AF37]/30 hover:bg-black/50'
                          : 'border-white/10 opacity-60'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            achievement.unlocked ? 'bg-[#D4AF37]/20' : 'bg-white/5'
                          }`}
                        >
                          {achievement.unlocked ? (
                            <Trophy className="w-5 h-5 text-[#D4AF37]" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
                          <p className="text-gray-400 text-xs mb-2">{achievement.description}</p>
                          <span className="text-[#D4AF37] text-xs font-semibold">
                            +{achievement.xpReward} XP
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium CTA */}
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl p-8">
                <Crown className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-2xl font-bold mb-3">Seja Premium</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Análises ilimitadas com IA</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Acesso a todas as frases</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Conteúdo exclusivo semanal</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#F5C842] transition-all hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Assinar Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-gray-400 text-xs mt-3">R$ 29,90/mês</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
