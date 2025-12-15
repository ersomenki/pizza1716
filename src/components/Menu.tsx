import React from 'react';
import { pizzas } from '../data/pizzas';
import PizzaCard from './PizzaCard';

const Menu: React.FC = () => {
    return (
        <section id="меню" className="py-20 px-4 relative">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 animate-in fade-in">
                    Наше меню
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pizzas.map((pizza, idx) => (
                        <PizzaCard key={idx} pizza={pizza} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;