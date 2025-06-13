import React from 'react';

const Collections: React.FC = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Coleções
        </h2>
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            Em breve, novas coleções exclusivas do Mico Leão Bolado™
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Collections;