'use client';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO, STATS, PROJECTS } from '@/lib/constants';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
    const featuredProjects = PROJECTS.filter(p => p.featured);
    const { dict } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden" variant="default">
                {/* Background Image & Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/90 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 mix-blend-screen"
                        style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
                    />
                    <div className="absolute inset-0 bg-dot-pattern z-10 opacity-30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full z-0 animate-pulse" />
                </div>

                <div className="text-center space-y-8 animate-fadeInUp relative z-20 w-full max-w-4xl mx-auto px-4">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mx-auto mb-4 hover:bg-primary/20 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {dict.hero.greeting}
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                            <span className="gradient-text text-glow">{PERSONAL_INFO.name}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {dict.hero.description}
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                            <Link href="/portfolio">
                                {dict.hero.viewWork}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/contact">
                                {dict.hero.contactMe}
                            </Link>
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Stats Section */}
            <Section variant="muted">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {STATS.map((stat, index) => {
                        // Map stats labels to dictionary keys if possible, or fallback
                        // For now, keys in STATS are static strings from constants.ts, ideally we check key matching
                        // Ideally we refactor STATS to be keys or use dictionary directly
                        const labelKey = stat.label.toLowerCase().includes('experience') ? 'experience' :
                            stat.label.toLowerCase().includes('projects') ? 'projects' :
                                stat.label.toLowerCase().includes('client') ? 'clients' : 'commits';

                        return (
                            <div
                                key={stat.label}
                                className="space-y-2 animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground">{dict.stats[labelKey] || stat.label}</p>
                            </div>
                        )
                    })}
                </div>
            </Section>

            {/* Featured Projects Section */}
            <Section>
                <SectionHeading
                    subtitle={dict.nav.portfolio}
                    title={dict.common.featured}
                    description="Check out some of my recent work that showcases my skills and expertise"
                    gradient
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-scaleIn"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 animate-fadeIn delay-300">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/portfolio">
                            {dict.common.viewProject}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </Section>

            {/* CTA Section */}
            <Section variant="gradient">
                <div className="text-center space-y-6 max-w-3xl mx-auto animate-fadeInUp">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        {dict.common.letsWork}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        I'm currently available for freelance projects and full-time opportunities.
                        Let's create something amazing together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                            <Link href="/contact">
                                {dict.common.getInTouch}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a href="/cv/Muhamad_Dikri_CV.pdf" download>
                                {dict.hero.downloadCv}
                                <Download className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
