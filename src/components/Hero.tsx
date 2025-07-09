import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511991298838?text=Olá! Gostaria de agendar um serviço para meu pet 🐾', '_blank');
  };

  return (
    <section className="pt-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-8 h-8 mr-2" style={{ color: '#FFA552' }} />
              <span className="font-semibold text-lg" style={{ color: '#FFA552' }}>Petshop Lilly</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Cuidamos do seu pet como se fosse 
              <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)', WebkitBackgroundClip: 'text' }}> da família!</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Banho, tosa e serviços veterinários com amor, cuidado e profissionalismo. 
              Seu pet merece todo o carinho do mundo! 🐾
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openWhatsApp}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #FF8C42, #FF7A32)'}
                onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #FFA552, #FF8C42)'}
              >
                Agendar agora pelo WhatsApp
              </button>
              <button
                onClick={() => document.getElementById('banho-tosa')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                style={{ borderColor: '#FFA552', color: '#FFA552' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFA552';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#FFA552';
                }}
              >
                Conhecer Serviços
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/adestrar2.jpg"
                alt="Pet feliz no Petshop Lilly"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg">
              <Heart className="w-8 h-8" style={{ color: '#FFA552' }} />
            </div>
            <div className="absolute -bottom-4 -left-4 text-white p-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
              <Sparkles className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
