
import React from 'react';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const WhoWeAre: React.FC = () => {
    return (
        <SectionWrapper id="who-we-are">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-3 text-primary-blue">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">MEET THE FIGHTER</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        Matthew Taub doesn't wait for permission. When Toronto Police failed to act, he got antisemites arrested. When media ignored Jewish voices, he forced them to listen. When politicians looked away, he showed up at their offices.
                    </p>
                    <p className="mt-4 font-bold text-lg">His track record speaks:</p>
                    <ul className="mt-4 space-y-3 list-disc list-inside text-lg">
                        <li>Secured arrests of Razaali Awan Bahudar and multiple threat actors</li>
                        <li>Exposed officers with extremist connections, triggering internal investigations</li>
                        <li>Forced Toronto Police to implement new social media protocols</li>
                        <li>Built direct access to federal ministers and provincial leadership</li>
                        <li>Created the blueprint for rapid-response Jewish advocacy</li>
                    </ul>
                    <p className="mt-6 text-xl font-bold italic">This isn't another committee. This is action.</p>
                </div>
                <div className="lg:col-span-2">
                    <img
                        src="https://picsum.photos/seed/headshot/500/600"
                        alt="Professional headshot of Matthew Taub"
                        className="w-full h-auto object-cover shadow-2xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WhoWeAre;
