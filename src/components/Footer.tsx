import React from 'react';
import { Heart, Instagram, Facebook, MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511991298838', '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-full" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Petshop Lilly</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cuidamos do seu pet com amor, carinho e profissionalismo. 
              Seu companheiro merece todo o cuidado do mundo! 🐾
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" style={{ color: '#FFA552' }} />
                <div>
                  <p>Rua Tommaso Giordani</p>
                  <p>Vila Guacuri, São Paulo - SP</p>
                  <p>CEP: 04475-210</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#FFA552' }} />
                <p>(11) 99129-8838</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1" style={{ color: '#FFA552' }} />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 16h</p>
                  <p>Domingo: 9h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
            <p className="text-gray-300 mb-4">
              Siga-nos para ver nossos pets felizes e dicas de cuidados!
            </p>
            <div className="flex space-x-4">
              <button 
                className="p-3 rounded-full transition-all transform hover:scale-110"
                style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #FF8C42, #FF7A32)'}
                onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #FFA552, #FF8C42)'}
              >
                <Instagram className="w-6 h-6" />
              </button>
              <button 
                className="p-3 rounded-full transition-all transform hover:scale-110"
                style={{ backgroundColor: '#FFA552' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF8C42'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FFA552'}
              >
                <Facebook className="w-6 h-6" />
              </button>
              <button
                onClick={openWhatsApp}
                className="p-3 rounded-full transition-all transform hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#128C7E'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Petshop Lilly. Feito com 💜 para pets felizes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;