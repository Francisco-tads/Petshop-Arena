import React, { useState } from 'react';
import { Heart, Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511991298838?text=Olá! Gostaria de agendar um serviço para meu pet 🐾', '_blank');
  };

  return (
    <>
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-full" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Petshop</h1>
                <p className="text-sm font-semibold" style={{ color: '#FFA552' }}>Lilly</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('banho-tosa')}
                className="text-gray-700 font-medium transition-colors hover:text-orange-500"
                style={{ '--tw-text-opacity': '1' }}
                onMouseEnter={(e) => e.target.style.color = '#FFA552'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                Banho & Tosa
              </button>
              <button
                onClick={() => scrollToSection('veterinario')}
                className="text-gray-700 font-medium transition-colors hover:text-orange-500"
                onMouseEnter={(e) => e.target.style.color = '#FFA552'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                Veterinário
              </button>
              <button
                onClick={openWhatsApp}
                className="text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 font-medium"
                style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #FF8C42, #FF7A32)'}
                onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #FFA552, #FF8C42)'}
              >
                Agende Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('banho-tosa')}
                  className="text-gray-700 font-medium text-left transition-colors"
                  onMouseEnter={(e) => e.target.style.color = '#FFA552'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Banho & Tosa
                </button>
                <button
                  onClick={() => scrollToSection('veterinario')}
                  className="text-gray-700 font-medium text-left transition-colors"
                  onMouseEnter={(e) => e.target.style.color = '#FFA552'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Veterinário
                </button>
                <button
                  onClick={openWhatsApp}
                  className="text-white px-6 py-2 rounded-full transition-all font-medium text-center"
                  style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                >
                  Agende Agora
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* WhatsApp Fixed Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        title="Agendar pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
};

export default Header;