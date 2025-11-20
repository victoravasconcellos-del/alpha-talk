'use client';

import { useState } from 'react';
import { BookOpen, Search, Copy, CheckCircle2, Filter, Star } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import { PHRASES, CATEGORIES } from '@/lib/constants';

export default function FrasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Todas');

  const filteredPhrases = PHRASES.filter((phrase) => {
    const matchesCategory = selectedCategory === 'Todas' || phrase.category === selectedCategory;
    const matchesSearch =
      phrase.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phrase.context.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === 'Todas' || phrase.difficulty === selectedDifficulty;
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const difficultyColors = {
    beginner: 'text-green-500 bg-green-500/10 border-green-500/30',
    intermediate: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
    advanced: 'text-red-500 bg-red-500/10 border-red-500/30'
  };

  const difficultyLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-10 h-10 text-[#D4AF37]" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                Biblioteca de <span className="text-[#D4AF37]">Frases</span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              Centenas de frases prontas categorizadas para todas as situações
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 mb-8">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar frases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Filter className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-semibold text-gray-400">Categoria</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('Todas')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedCategory === 'Todas'
                      ? 'bg-[#D4AF37] text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  Todas
                </button>
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-[#D4AF37] text-black'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Star className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-semibold text-gray-400">Dificuldade</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDifficulty('Todas')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedDifficulty === 'Todas'
                      ? 'bg-[#D4AF37] text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  Todas
                </button>
                <button
                  onClick={() => setSelectedDifficulty('beginner')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedDifficulty === 'beginner'
                      ? 'bg-green-500 text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  Iniciante
                </button>
                <button
                  onClick={() => setSelectedDifficulty('intermediate')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedDifficulty === 'intermediate'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  Intermediário
                </button>
                <button
                  onClick={() => setSelectedDifficulty('advanced')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedDifficulty === 'advanced'
                      ? 'bg-red-500 text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  Avançado
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-400">
              Mostrando <span className="text-[#D4AF37] font-semibold">{filteredPhrases.length}</span>{' '}
              {filteredPhrases.length === 1 ? 'frase' : 'frases'}
            </p>
          </div>

          {/* Phrases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPhrases.map((phrase) => (
              <div
                key={phrase.id}
                className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-semibold mb-2">
                      {phrase.category}
                    </span>
                    <div
                      className={`inline-block ml-2 px-3 py-1 border rounded-full text-xs font-semibold ${
                        difficultyColors[phrase.difficulty]
                      }`}
                    >
                      {difficultyLabels[phrase.difficulty]}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phrase.text, phrase.id)}
                    className="p-2 bg-black/30 rounded-lg hover:bg-black/50 transition-all group-hover:scale-110"
                    title="Copiar frase"
                  >
                    {copiedId === phrase.id ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Phrase Text */}
                <p className="text-white text-lg mb-4 leading-relaxed">{phrase.text}</p>

                {/* Context */}
                <div className="bg-black/30 border border-white/10 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">
                    <span className="text-[#D4AF37] font-semibold">Contexto:</span> {phrase.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPhrases.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Nenhuma frase encontrada</h3>
              <p className="text-gray-500">Tente ajustar os filtros ou buscar por outros termos</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
