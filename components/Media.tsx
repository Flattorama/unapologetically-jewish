
import React from 'react';
import { socialLinks, newsItems } from '../constants';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const Media: React.FC = () => {
    return (
        <SectionWrapper id="media">
            <div className="text-center text-primary-blue">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">MAKING HEADLINES. CHANGING MINDS.</h2>
                <p className="mt-4 font-bold text-lg">Follow the Fight:</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.href} aria-label={social.name} className="text-primary-blue hover:text-accent-gold transition-colors">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h3 className="font-heading text-2xl text-center text-primary-blue">In the News:</h3>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {newsItems.map((item) => (
                        <a key={item.headline} href="#" className="group block">
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.headline}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <p className="mt-4 font-bold text-primary-blue group-hover:text-accent-gold transition-colors">{item.headline}</p>
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <a 
                    href="#"
                    className="inline-block bg-primary-blue text-white font-bold uppercase tracking-wider px-10 py-4 text-sm md:text-base transition-colors hover:bg-blue-900"
                >
                    View Press Kit
                </a>
            </div>
        </SectionWrapper>
    );
};

export default Media;
