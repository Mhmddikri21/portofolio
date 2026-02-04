'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAppearance } from '@/hooks/use-appearance';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { appearance, updateAppearance } = useAppearance();
    const pathname = usePathname();
    const { dict } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleTheme = () => {
        updateAppearance(appearance === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { href: '/', label: dict.nav.home },
        { href: '/about', label: dict.nav.about },
        { href: '/portfolio', label: dict.nav.portfolio },
        { href: '/services', label: dict.nav.services },
        { href: '/resume', label: dict.nav.resume },
        { href: '/contact', label: dict.nav.contact },
    ];

    return (
        <>
            <header
                className={cn(
                    'fixed z-50 transition-all duration-300',
                    // Desktop: Floating Island
                    'md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-auto md:min-w-[600px] md:max-w-4xl md:rounded-full',
                    // Mobile: Full Width Top Bar
                    'top-0 left-0 right-0 w-full',
                    isScrolled || isMobileMenuOpen
                        ? 'bg-background/80 backdrop-blur-md shadow-lg border border-border/50'
                        : 'bg-background/60 backdrop-blur-sm md:border md:border-transparent md:bg-transparent'
                )}
            >
                <div className="px-4 md:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity mr-4 md:mr-8 shrink-0"
                        >
                            MD.
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center justify-center gap-1 flex-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-muted/50 whitespace-nowrap',
                                        isActive
                                            ? 'text-primary bg-muted/50 font-semibold'
                                            : 'text-muted-foreground hover:text-foreground'
                                    )}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            )})}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-1 ml-4 shrink-0">
                            {/* Language Switcher */}
                            <LanguageSwitcher />

                            {/* Theme Toggle */}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="rounded-full hover:bg-muted/50"
                                aria-label="Toggle theme"
                            >
                                {appearance === 'dark' ? (
                                    <Sun className="w-5 h-5" />
                                ) : (
                                    <Moon className="w-5 h-5" />
                                )}
                            </Button>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden rounded-full"
                                aria-label="Toggle menu"
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-nav"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                    <div
                        id="mobile-nav"
                        className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fadeInDown"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        'text-base font-medium px-4 py-3 rounded-lg transition-colors active:bg-muted',
                                        pathname === link.href
                                            ? 'text-primary bg-muted/50'
                                            : 'text-muted-foreground'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Spacing for content below fixed navbar */}
            {/* <div className="h-16 md:h-24" /> */}
        </>
    );
}
