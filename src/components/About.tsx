import React from 'react';
import { ChefHat, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            icon: ChefHat,
            title: 'Мастера своего дела',
            description: 'Наши пиццайоло прошли обучение в Италии'
        },
        {
            icon: Clock,
            title: 'Быстрая доставка',
            description: 'Привезем вашу пиццу горячей за 30 минут'
        },
        {
            icon: MapPin,
            title: 'В центре города',
            description: 'Удобное расположение и уютная атмосфера'
        }
    ];

    return (
        <section id="о нас" className="py-20 px-4 bg-zinc-900/50">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">О нас</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="text-center p-8 bg-zinc-900 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                                <Icon size={64} className="mx-auto mb-4 text-orange-500" />
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-zinc-400">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;