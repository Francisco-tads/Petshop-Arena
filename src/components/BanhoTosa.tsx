import React from 'react';
import { Droplets, Scissors, Sparkles, Heart } from 'lucide-react';

const BanhoTosa = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Banho Tradicional',
      description: 'Banho relaxante com produtos especiais para cada tipo de pelo'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Tosa Higiênica',
      description: 'Cuidados essenciais para a higiene e saúde do seu pet'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Tosa na Tesoura',
      description: 'Corte personalizado para deixar seu pet ainda mais lindo'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hidratação Especial',
      description: 'Tratamentos especiais para pelos macios e saudáveis'
    }
  ];

  return (
    <section id="banho-tosa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/banho1.jpeg"
                alt="Banho e Tosa no Petshop Lilly"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 text-white p-6 rounded-2xl shadow-lg" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
              <Droplets className="w-10 h-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Banho & Tosa
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Banho relaxante, tosa higiênica, estética e hidratação para seu pet 
                ficar limpinho, cheiroso e feliz. Cuidamos de cada detalhe com muito amor! 💙
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                  style={{ background: 'linear-gradient(to bottom right, #FFF5F0, #FFEDE0)' }}
                >
                  <div className="mb-4" style={{ color: '#FFA552' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.open('https://wa.me/5511991298838?text=Olá! Gostaria de agendar banho e tosa para meu pet 🛁', '_blank')}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #FF8C42, #FF7A32)'}
                onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #FFA552, #FF8C42)'}
              >
                Agendar Banho & Tosa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanhoTosa;