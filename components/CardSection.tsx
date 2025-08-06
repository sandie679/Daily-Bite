

import React from 'react';

const CardSection: React.FC = () => {

  const cards = [
    {
      title: 'Gourmet Burger',
      description: 'Flame-grilled goodness with a gourmet twist.',
      image: '/burger.jpg',
    },
    {
      title: 'Artisian Pizza',
      description: 'Crispy,cheesy, and handcrafted just for you.',
      image: '/pitsa.jpg',
    },
    {
      title: 'Lava Cake',
      description: 'Soft cake, flowing chocolate pure dessert bliss.',
      image: '/cake.jpg',
    },
    {
      title: 'Caesar Salad',
      description: 'A timeless salad with bold, savory taste and a zesty twist.',
      image: '/salad.jpg',
    },
  ];

  return (
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border-1 border-green-800 h-full rounded-xl shadow-md p-4 "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold font-playfair text-green-950 mt-3">{card.title}</h3>
            <p className="text-green-950 font-roboto mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    
  );
};

export default CardSection;
