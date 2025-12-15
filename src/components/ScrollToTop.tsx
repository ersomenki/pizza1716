import React from 'react';

interface ScrollToTopProps {
    show: boolean;
    onClick: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ show, onClick }) => {
    if (!show) return null;

    return (
        <button
            onClick={onClick}
            className="
            fixed bottom-8 right-8 bg-gradient-to-r
            from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700
            w-16 h-16
            rounded-full shadow-2xl
            hover:shadow-orange-500/50
            transition-all duration-300 transform
            hover:scale-110 flex items-center
            justify-center text-3xl
            animate-in fade-in
            slide-in-from-bottom z-40"
            aria-label="Наверх"
        >
            🍕
        </button>
    );
};

export default ScrollToTop;