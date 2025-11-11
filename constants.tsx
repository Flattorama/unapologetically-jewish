
import React from 'react';
import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './components/icons';

export const navLinks = [
    { href: '#mission', label: 'Mission & Vision' },
    { href: '#who-we-are', label: 'Who We Are' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#media', label: 'Media' },
    { href: '#merch', label: 'Merch' },
];

export const merchItems = [
    {
        image: "https://picsum.photos/seed/hat/600/600",
        title: "UNAPOLOGETIC SNAPBACK",
        price: "$36",
        description: "Premium fitted cap. Embroidered logo. One size fits most. Make every street a statement.",
        cta: "WEAR IT PROUD",
        href: "#"
    },
    {
        image: "https://picsum.photos/seed/tee/600/600",
        title: "NO APOLOGIES TEE",
        price: "$36",
        description: "Premium cotton. Bold print. Sizes S-3XL. Because hiding is not an option.",
        cta: "MAKE A STATEMENT",
        href: "#"
    }
];

export const pillars = [
    {
        title: "LEGISLATIVE ACTION",
        description: "We don't wait in lobbies. We get in rooms. Monthly meetings with MPs, MPPs, and municipal leaders. Draft motions. Committee appearances. Policy briefings that move the needle. Through our partnership with Daisy Group, we have direct access to decision-makers at every level."
    },
    {
        title: "LAW ENFORCEMENT & LEGAL",
        description: "Collaboration first. Accountability always. Building partnerships that protect Jewish communities while holding law enforcement accountable when they fail. From hate crime training to Charter challenges — we ensure Jewish safety isn't negotiable."
    },
    {
        title: "MEDIA RELATIONS",
        description: "We don't react to narratives. We create them. Op-eds, interviews, press conferences, fact-checks. When media gets it wrong, we correct it. When they ignore us, we become impossible to ignore."
    },
    {
        title: "SOCIAL MEDIA",
        description: "Making Jewish pride go viral. Daily content that counters lies with truth. Rapid-response to breaking incidents. Campaigns that turn silence into visibility and fear into pride."
    },
    {
        title: "ADVOCATE BUILDING",
        description: "Training fighters, not victims. Monthly webinars on rights, reporting, and civic engagement. Creating a network of trained advocates who know how to show up, speak up, and never back down."
    },
    {
        title: "LABOUR & \"JEW 311\"",
        description: "No incident goes unanswered. Our intake system documents antisemitism in workplaces and unions, connecting victims to legal support, media amplification, and resolution. We track, triage, and follow through — every time."
    }
];

export const partners = [
    { name: "Partner 1", logo: "https://picsum.photos/seed/partner1/200/100" },
    { name: "Partner 2", logo: "https://picsum.photos/seed/partner2/200/100" },
    { name: "Partner 3", logo: "https://picsum.photos/seed/partner3/200/100" },
    { name: "Partner 4", logo: "https://picsum.photos/seed/partner4/200/100" },
    { name: "Partner 5", logo: "https://picsum.photos/seed/partner5/200/100" },
    { name: "Partner 6", logo: "https://picsum.photos/seed/partner6/200/100" },
    { name: "Partner 7", logo: "https://picsum.photos/seed/partner7/200/100" },
    { name: "Partner 8", logo: "https://picsum.photos/seed/partner8/200/100" },
];

export const socialLinks = [
    { name: "Twitter", icon: <TwitterIcon className="h-8 w-8" />, href: "#" },
    { name: "Instagram", icon: <InstagramIcon className="h-8 w-8" />, href: "#" },
    { name: "LinkedIn", icon: <LinkedinIcon className="h-8 w-8" />, href: "#" },
    { name: "YouTube", icon: <YoutubeIcon className="h-8 w-8" />, href: "#" },
];

export const newsItems = [
    { image: "https://picsum.photos/seed/news1/400/300", headline: "Unapologetically Jewish Secures Key Meeting with Federal Minister" },
    { image: "https://picsum.photos/seed/news2/400/300", headline: "Toronto Star: Matthew Taub on the Rise of Campus Antisemitism" },
    { image: "https://picsum.photos/seed/news3/400/300", headline: "National Post Op-Ed: Why 'Quiet Diplomacy' is Failing Canadian Jews" },
    { image: "https://picsum.photos/seed/news4/400/300", headline: "CBC Interview: Holding Police Accountable for Hate Crimes" },
];

export const socialsWithFollowers = [
    { name: "Twitter/X", handle: "@UnapologeticallyJewish", followers: "15.7K Followers" },
    { name: "Instagram", handle: "@UnapologeticallyJewish", followers: "8.2K Followers" },
    { name: "LinkedIn", handle: "Unapologetically Jewish", followers: "3.5K Connections" },
];

export const fundingBreakdown = [
    { percentage: 36, area: "Full-time advocacy leadership" },
    { percentage: 21, area: "Government relations and strategic partnerships" },
    { percentage: 10, area: "Legal challenges and Charter cases" },
    { percentage: 7, area: "Monthly lobbying in Ottawa and Queen's Park" },
    { percentage: 6, area: "Media and content operations" },
    { percentage: 20, area: "Direct action and rapid response" },
];
