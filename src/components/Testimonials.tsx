import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      pet: 'Luna (Golden Retriever)',
      text: 'A Luna adora vir aqui! O cuidado e carinho da equipe é incrível. Sempre saímos de lá com ela feliz e cheirosa!',
      rating: 5,
      image: '/assets/destaque1.jpg'
    },
    {
      name: 'João Santos',
      pet: 'Max (Labrador)',
      text: 'Profissionais excelentes! O Max ficou lindíssimo depois da tosa e o atendimento veterinário é de primeira qualidade.',
      rating: 5,
      image: '/assets/banho1.jpeg'
    },
    {
      name: 'Ana Costa',
      pet: 'Lilly (Poodle)',
      text: 'Recomendo de olhos fechados! A Bella sempre fica relaxada aqui. É visível o amor que eles têm pelos animais.',
      rating: 5,
      image: '/assets/banho2.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos de quem confia no nosso trabalho 💕
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-purple-300 mb-4" />
              <Quote className="w-8 h-8 mb-4" style={{ color: '#FFB366' }} />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.pet}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Tutora do {testimonial.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;