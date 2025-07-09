import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Map = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/Rua+Tommaso+Giordani+Vila+Guacuri+São+Paulo+SP+04475-210', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            📍 Nossa Localização
          </h2>
          <p className="text-xl text-gray-600">
            Venha nos visitar! Estamos esperando você e seu pet com muito carinho
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123!2d-46.6123456!3d-23.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x8986cdac5c6e5c6e!2sRua%20Tommaso%20Giordani%2C%20Vila%20Guacuri%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004475-210!5e0!3m2!1spt!2sbr!4v1635789012345!5m2!1spt!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Petshop Lilly"
              ></iframe>
            </div>
            <div className="absolute -top-4 -right-4 text-white p-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
              <MapPin className="w-8 h-8" />
            </div>
          </div>

          {/* Location Info */}
          <div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Petshop Lilly
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" style={{ color: '#FFA552' }} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">Rua Tommaso Giordani</p>
                    <p className="text-gray-600">Vila Guacuri, São Paulo - SP</p>
                    <p className="text-gray-600">CEP: 04475-210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Navigation className="w-6 h-6 mr-4 mt-1" style={{ color: '#FFA552' }} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Como Chegar</h4>
                    <p className="text-gray-600 mb-3">
                      Fácil acesso por transporte público e com estacionamento disponível
                    </p>
                    <button
                      onClick={openGoogleMaps}
                      className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium"
                      style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                      onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #FF8C42, #FF7A32)'}
                      onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #FFA552, #FF8C42)'}
                    >
                      Ver no Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-white p-6 rounded-2xl" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
              <h4 className="text-xl font-semibold mb-3">🕒 Horário de Funcionamento</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-semibold">8h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-semibold">9h às 12h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;