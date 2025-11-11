
import React from 'react';
import { socialsWithFollowers, fundingBreakdown } from '../constants';

const SectionWrapper: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => (
    <section id={id} className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-4 sm:px-5 md:px-[30px] lg:px-10 xl:px-20 max-w-screen-xl">
            {children}
        </div>
    </section>
);

const GetInvolved: React.FC = () => {
    return (
        <SectionWrapper id="get-involved">
            <div className="text-center text-primary-blue">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">STOP WATCHING. START FIGHTING.</h2>
            </div>
            
            <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column */}
                <div>
                    {/* Stay Informed */}
                    <div>
                        <h3 className="font-heading text-2xl text-primary-blue">STAY INFORMED</h3>
                        <p className="mt-2 text-gray-700">Get weekly updates on victories, threats, and actions you can take.</p>
                        <form className="mt-4 flex flex-col sm:flex-row gap-2">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="flex-grow appearance-none border border-gray-300 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                                placeholder="Email:"
                            />
                            <button
                                type="submit"
                                className="bg-action-red text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors hover:bg-red-700 h-[50px] whitespace-nowrap"
                            >
                                Join the Fight
                            </button>
                        </form>
                    </div>

                    {/* Follow the Movement */}
                    <div className="mt-12">
                        <h3 className="font-heading text-2xl text-primary-blue">FOLLOW THE MOVEMENT</h3>
                        <div className="mt-4 space-y-3">
                            {socialsWithFollowers.map(social => (
                                <div key={social.name} className="flex justify-between items-baseline border-b border-gray-300 pb-2">
                                    <span className="font-bold text-primary-blue">{social.name}: <span className="text-gray-600 font-normal">{social.handle}</span></span>
                                    <span className="text-sm text-gray-500">{social.followers}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <h3 className="font-heading text-2xl text-primary-blue">FUND THE FIGHT</h3>
                    <p className="mt-2 font-bold text-lg text-primary-blue italic">We don't issue tax receipts. We issue results.</p>
                    <p className="mt-4 text-gray-700">Your donation directly funds:</p>
                    <ul className="mt-4 space-y-2">
                       {fundingBreakdown.map(item => (
                           <li key={item.area} className="flex items-center text-gray-700">
                               <span className="font-bold text-primary-blue w-12">{item.percentage}%</span>
                               <span>- {item.area}</span>
                           </li>
                       ))}
                    </ul>
                    <div className="mt-6 border-t pt-6 border-gray-300">
                        <p className="font-bold text-primary-blue">Founding Underwriter Tiers:</p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li><span className="font-bold">$100K</span> - Strategic Advisory Board seat + quarterly briefings</li>
                            <li><span className="font-bold">$50K</span> - Monthly impact reports + direct access</li>
                            <li><span className="font-bold">$25K</span> - Quarterly updates + recognition</li>
                        </ul>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a href="#" className="flex-1 text-center bg-accent-gold text-primary-blue font-bold uppercase tracking-wider px-6 py-4 transition-colors hover:bg-yellow-400">Donate Now</a>
                        <a href="#" className="flex-1 text-center bg-primary-blue text-white font-bold uppercase tracking-wider px-6 py-4 transition-colors hover:bg-blue-900">Become a Founder</a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default GetInvolved;
