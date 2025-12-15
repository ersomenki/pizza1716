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
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    1716
                </div>

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