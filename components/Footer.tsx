
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-blue text-white">
            <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left */}
                    <div className="md:col-span-1">
                        <h3 className="font-heading text-2xl">UNAPOLOGETICALLY JEWISH</h3>
                        <p className="mt-2 text-gray-300 text-sm">Fighting the present so our community can build the future.</p>
                    </div>

                    {/* Middle */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold uppercase tracking-wider text-gray-400">Contact</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="mailto:info@unapologeticallyjewish.ca" className="hover:text-accent-gold transition-colors">info@unapologeticallyjewish.ca</a></li>
                            <li><a href="mailto:media@unapologeticallyjewish.ca" className="hover:text-accent-gold transition-colors">Press: media@unapologeticallyjewish.ca</a></li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold uppercase tracking-wider text-gray-400">Quick Links</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#mission" className="hover:text-accent-gold transition-colors">Mission & Vision</a></li>
                            <li><a href="#what-we-do" className="hover:text-accent-gold transition-colors">Six Pillars</a></li>
                            <li><a href="#media" className="hover:text-accent-gold transition-colors">Media Kit</a></li>
                            <li><a href="#get-involved" className="hover:text-accent-gold transition-colors">Get Involved</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-xs text-gray-400">
                    <p>Legal: Registered Canadian Non-Profit | Lobbying Registration #123456789</p>
                    <p className="mt-2">© {new Date().getFullYear()} Unapologetically Jewish. We don't apologize for existing.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
