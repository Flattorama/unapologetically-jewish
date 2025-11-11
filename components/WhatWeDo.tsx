
import React from 'react';
import { pillars } from '../constants';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const WhatWeDo: React.FC = () => {
    return (
        <SectionWrapper id="what-we-do">
            <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-blue">SIX PILLARS OF ACTION</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pillars.map((pillar, index) => (
                    <div key={pillar.title} className="p-8 bg-gray-50 shadow-lg">
                        <span className="font-heading text-4xl text-accent-gold">0{index + 1}</span>
                        <h3 className="font-heading text-xl text-primary-blue mt-4">{pillar.title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-gray-700">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default WhatWeDo;
