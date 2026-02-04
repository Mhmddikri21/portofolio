import Link from 'next/link';
import { Heart } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';

const footerLinks = {
    navigation: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Services', href: '/services' },
        { label: 'Resume', href: '/resume' },
        { label: 'Contact', href: '/contact' },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="space-y-4 lg:col-span-2">
                        <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
                        <p className="text-muted-foreground max-w-md">
                            {PERSONAL_INFO.tagline}
                        </p>
                        <SocialLinks className="pt-2" size="md" />
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    {PERSONAL_INFO.email}
                                </a>
                            </li>
                            <li>{PERSONAL_INFO.location}</li>
                            <li className="text-xs text-muted-foreground/70">
                                {PERSONAL_INFO.availability}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-1">
                            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 fill-red-500 text-red-500" />{' '}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
