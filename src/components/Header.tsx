import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/navigation';

interface HeaderProps {
    scrolled: boolean;
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, menuOpen, setMenuOpen, scrollToSection }) => {
    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-2 py-2 flex justify-between items-center">
                <button
                    onClick={() => scrollToSection('главная')}
                    className="flex items-center transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src="/logo1716.png"
                        alt="1716 Пиццерия"
                        className="h-16 w-auto"
                    />
                </button>

                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-orange-500 transition-colors duration-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-zinc-900 border-t border-zinc-800 animate-in slide-in-from-top">
                    <nav className="flex flex-col p-4 gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left hover:text-orange-500 transition-colors duration-300 py-2"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;