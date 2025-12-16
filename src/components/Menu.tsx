import React, { useState } from 'react';
import { pizzaItems, pastaItems, dessertItems } from '../data/menuItems';
import { MenuCategory, MenuTab } from '../types';
import MenuCard from './MenuCard';

const Menu: React.FC = () => {
    const [activeTab, setActiveTab] = useState<MenuCategory>('pizza');

    const tabs: MenuTab[] = [
        { id: 'pizza', label: 'Пицца' },
        { id: 'pasta', label: 'Пасты и супы' },
        { id: 'desserts', label: 'Десерты' },
    ];

    const getMenuItems = () => {
        switch (activeTab) {
            case 'pizza':
                return pizzaItems;
            case 'pasta':
                return pastaItems;
            case 'desserts':
                return dessertItems;
            default:
                return pizzaItems;
        }
    };

    const menuItems = getMenuItems();

    return (
        <section id="меню" className="py-20 px-4 relative">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 animate-in fade-in">
                    Наше меню
                </h2>

                {/* Tabs */}
                <div className="flex justify-center mb-12 gap-4 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/50 scale-105'
                                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, idx) => (
                        <MenuCard key={`${activeTab}-${idx}`} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;