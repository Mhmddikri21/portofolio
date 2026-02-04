'use client';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioPage() {
    const { dict } = useLanguage();

    return (
        <div className="min-h-screen">
            <Section variant="gradient">
                <SectionHeading
                    subtitle={dict.portfolio.subtitle}
                    title={dict.portfolio.title}
                    description={dict.portfolio.description}
                    gradient
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-scaleIn"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
