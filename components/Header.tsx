
import React from 'react';
import { navLinks } from '../constants';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<{ setIsMenuOpen: (isOpen: boolean) => void; }> = ({ setIsMenuOpen }) => (
    <div className="fixed inset-0 bg-white z-40 lg:hidden" aria-modal="true">
        <div className="flex flex-col h-full">
            <div className="flex-grow pt-20">
                <nav>
                    <ul className="text-center">
                        {navLinks.map((link) => (
                            <li key={link.label} className="border-b border-gray-200">
                                <a
                                    href={link.href}
                                    className="block py-4 font-bold text-lg text-primary-blue hover:text-accent-gold transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="p-5">
                 <a href="#get-involved" onClick={() => setIsMenuOpen(false)} className="w-full h-[50px] bg-accent-gold text-primary-blue font-bold flex items-center justify-center uppercase tracking-wider hover:bg-yellow-400 transition-colors">
                    Take Action Now
                </a>
            </div>
        </div>
    </div>
);


const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto flex h-[60px] items-center justify-between px-4 sm:px-5 md:px-[30px] lg:h-20 lg:px-10 xl:px-20 max-w-screen-xl">
                <a href="#" className="text-primary-blue font-heading text-lg md:text-xl" aria-label="Unapologetically Jewish home">
                    UNAPOLOGETICALLY JEWISH
                </a>

                <nav className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm font-bold uppercase tracking-wider text-primary-blue hover:text-accent-gold transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a href="#get-involved" className="ml-4 bg-accent-gold text-primary-blue px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors">
                        Take Action
                    </a>
                </nav>

                <button
                    className="z-50 -mr-2 p-2 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    <div className="h-6 w-6 space-y-1.5">
                        <span className={`block h-0.5 w-full bg-primary-blue transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-primary-blue transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-primary-blue transition-transform duration-300 ease-in-out ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                    </div>
                </button>
            </div>
            {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
        </header>
    );
};

export default Header;
