import React from 'react';

interface HeroProps {
    scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section id="главная" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-zinc-950 to-red-900/20"></div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 text-9xl animate-pulse">🍕</div>
                <div className="absolute bottom-20 right-10 text-9xl animate-pulse" style={{ animationDelay: '1s' }}>🍕</div>
            </div>

            <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom duration-1000">
                <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                    1716
                </h1>
                <p className="text-2xl md:text-4xl mb-8 text-zinc-300">
                    Настоящая итальянская пицца в сердце Сибири
                </p>
                <p className="text-lg md:text-xl mb-12 text-zinc-400 max-w-2xl mx-auto">
                    Готовим из отборных ингредиентов по традиционным рецептам
                </p>
                <button
                    onClick={() => scrollToSection('меню')}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50"
                >
                    Посмотреть меню
                </button>
            </div>
        </section>
    );
};

export default Hero;