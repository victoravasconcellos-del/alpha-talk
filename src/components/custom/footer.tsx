import Link from 'next/link';
import { MessageSquare, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">
                Alpha<span className="text-[#D4AF37]">Talk</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Desenvolva suas habilidades de comunicação e conquista com técnicas comprovadas, 
              IA avançada e uma comunidade de homens em evolução.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/frases" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Frases Prontas
                </Link>
              </li>
              <li>
                <Link href="/analise" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Análise IA
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 AlphaTalk. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
