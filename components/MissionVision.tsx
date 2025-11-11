
import React from 'react';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const MissionVision: React.FC = () => {
    return (
        <SectionWrapper id="mission">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="text-primary-blue">
                    <h2 className="font-heading text-2xl md:text-3xl border-b-4 border-accent-gold pb-2 inline-block">OUR MISSION</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        We empower Jews to stand proud, speak boldly, and live safely. Unapologetically Jewish combats antisemitism through grassroots organizing, legal advocacy, public education, media engagement, and strategic partnerships — building a Canada where Jewish identity is celebrated, not silenced.
                    </p>
                </div>
                <div className="text-primary-blue">
                    <h2 className="font-heading text-2xl md:text-3xl border-b-4 border-accent-gold pb-2 inline-block">OUR VISION</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        A Canada where Jews live without fear. Where our heritage is honored without shame. Where standing up for Jewish lives isn't courage — it's just being who we are.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MissionVision;
