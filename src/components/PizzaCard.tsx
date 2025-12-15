import React from 'react';
import { Pizza } from '../types';
import {useInView} from "../hooks/useInView";

interface PizzaCardProps {
    pizza: Pizza;
    index: number;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, index }) => {
    const { ref, isVisible } = useInView({
        threshold: 0.2, // 20% карточки видно
    });

    const getAnimationClass = (idx: number) => {
        const position = idx % 6; // Для сетки 3 колонки × 2 ряда

        // Верхний ряд
        if (position === 0) return 'animate-slide-in-left';
        if (position === 1) return 'animate-slide-in-top';
        if (position === 2) return 'animate-slide-in-right';

        // Нижний ряд
        if (position === 3) return 'animate-slide-in-left';
        if (position === 4) return 'animate-slide-in-bottom';
        if (position === 5) return 'animate-slide-in-right';

        return 'animate-slide-in-top';
    };

    return (
        <div
            ref={ref}
            className={`
            bg-zinc-900 rounded-2xl overflow-hidden 
            hover:transform hover:scale-105 
            transition-all duration-300 
            hover:shadow-2xl hover:shadow-orange-500/20 
            ${isVisible ? getAnimationClass(index) : 'opacity-0'}
            `}
            style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'backwards'
            }}
        >
            <div className="h-48 bg-gradient-to-br from-orange-600/20 to-red-900/20 flex items-center justify-center text-8xl">
                {pizza.img}
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pizza.name}</h3>
                <p className="text-zinc-400 mb-4">{pizza.desc}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-500">{pizza.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-colors duration-300">
                        Заказать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;