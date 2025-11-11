
import React from 'react';
import { partners } from '../constants';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24 bg-primary-blue text-white">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const Partners: React.FC = () => {
    const extendedPartners = [...partners, ...partners]; // Duplicate for seamless scroll

    return (
        <SectionWrapper id="partners">
            <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">STRATEGIC ALLIANCES THAT DELIVER</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
                    We don't work alone. Through partnerships with government relations firms, legal experts, and allied organizations, we multiply our impact. Our network opens doors, moves policy, and ensures no Jewish voice goes unheard.
                </p>
            </div>
            <div className="relative mt-12 w-full overflow-hidden mask-image-lr">
                 <div className="flex w-max">
                    <div className="flex items-center justify-center animate-infinite-scroll">
                        {extendedPartners.map((partner, index) => (
                            <div key={`partner-${index}`} className="w-48 mx-8 flex-shrink-0">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full h-auto object-contain filter grayscale brightness-200 contrast-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                     <div className="flex items-center justify-center animate-infinite-scroll" aria-hidden="true">
                        {extendedPartners.map((partner, index) => (
                            <div key={`partner-dup-${index}`} className="w-48 mx-8 flex-shrink-0">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full h-auto object-contain filter grayscale brightness-200 contrast-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Partners;
