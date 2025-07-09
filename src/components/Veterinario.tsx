import React from 'react';
import { Stethoscope, Shield, Activity, AlertCircle } from 'lucide-react';

const Veterinario = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Consultas Presenciais',
      description: 'Atendimento completo com profissionais experientes'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Vacinas em Dia',
      description: 'Protocolo completo de vacinação para proteger seu pet'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Check-up Geral',
      description: 'Exames preventivos para manter a saúde em dia'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Emergências',
      description: 'Primeiros socorros e atendimento de urgência'
    }
  ];

  return (
    <section id="veterinario" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Serviços Veterinários
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cuidamos da saúde do seu pet com todo amor e responsabilidade. 
                Consultas, vacinas, exames e muito mais para garantir o bem-estar 
                do seu companheiro! 🩺
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
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

            <div className="text-white p-6 rounded-2xl" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
              <h3 className="text-xl font-semibold mb-2">💚 Cuidado Especial</h3>
              <p className="text-orange-100">
                Nossa equipe veterinária está sempre pronta para oferecer o melhor 
                atendimento, com carinho e profissionalismo que seu pet merece.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.open('https://wa.me/5511991298838?text=Olá! Preciso de atendimento veterinário para meu pet 🩺', '_blank')}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}
                onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #FF8C42, #FF7A32)'}
                onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #FFA552, #FF8C42)'}
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/banho2.jpg"
                alt="Atendimento Veterinário no Petshop Lilly"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 text-white p-6 rounded-2xl shadow-lg" style={{ background: 'linear-gradient(to right, #FFA552, #FF8C42)' }}>
              <Stethoscope className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veterinario;