import React from 'react';
import { Heart, MessageCircle, Phone } from 'lucide-react';

const CallToAction = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511991298838?text=Olá! Gostaria de agendar um serviço para meu pet 🐾', '_blank');
  };

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42, #FF7A32)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seu pet merece o melhor cuidado!
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Fale com a nossa equipe agora mesmo e agende um horário. 
            Estamos prontos para cuidar do seu companheiro com todo amor e carinho! 🐾
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={openWhatsApp}
            className="bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center"
            style={{ color: '#FFA552' }}
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Agendar pelo WhatsApp
          </button>
          
          <div className="flex items-center text-white">
            <Phone className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">(11) 99129-8838</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">📍 Venha nos visitar!</h3>
          <p className="text-lg mb-2">Rua Tommaso Giordani</p>
          <p className="text-lg mb-2">Vila Guacuri, São Paulo - SP</p>
          <p className="text-lg mb-4">CEP: 04475-210</p>
          
          <div className="text-lg">
            <p className="mb-1">🕒 <strong>Horário de Funcionamento:</strong></p>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 16h</p>
            <p>Domingo: 9h às 12h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;