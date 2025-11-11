
import React from 'react';
import { merchItems } from '../constants';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24 bg-gray-100">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const Merch: React.FC = () => {
    return (
        <SectionWrapper id="merch">
            <div className="text-center text-primary-blue">
                <p className="font-heading text-xl text-accent-gold tracking-widest">WEAR YOUR PRIDE</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-2">ARMOR FOR THE UNAPOLOGETIC</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
                    Every purchase funds the fight. Every logo worn is a declaration: We're here. We're proud. We're not going anywhere.
                </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
                {merchItems.map((item) => (
                    <div key={item.title} className="bg-white p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="aspect-square bg-gray-200">
                             <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-grow pt-6 text-center flex flex-col">
                             <h3 className="font-heading text-2xl text-primary-blue">{item.title}</h3>
                             <p className="text-2xl font-bold text-primary-blue my-2">{item.price}</p>
                             <p className="text-gray-600 flex-grow">{item.description}</p>
                             <a 
                                href={item.href}
                                className="mt-6 w-full bg-accent-gold text-primary-blue font-bold uppercase tracking-wider px-6 py-4 transition-colors hover:bg-yellow-400"
                            >
                                {item.cta}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                 <p className="text-lg text-primary-blue">More designs. More statements. More ways to stand proud.</p>
                 <a 
                    href="#"
                    className="mt-4 inline-block bg-primary-blue text-white font-bold uppercase tracking-wider px-10 py-4 text-sm md:text-base transition-colors hover:bg-blue-900"
                >
                    Enter Full Store
                </a>
                <p className="mt-2 text-sm text-gray-500">Powered by secure checkout. Ships across Canada.</p>
            </div>
        </SectionWrapper>
    );
};

export default Merch;
