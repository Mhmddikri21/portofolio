'use client';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function AboutPage() {
    const { dict } = useLanguage();

    const skillsByCategory = {
        frontend: SKILLS.filter(s => s.category === 'frontend'),
        backend: SKILLS.filter(s => s.category === 'backend'),
        tools: SKILLS.filter(s => s.category === 'tools'),
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section variant="gradient">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fadeInLeft">
                        <SectionHeading
                            align="left"
                            subtitle={dict.about.subtitle}
                            title={dict.about.title}
                            gradient
                        />
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-muted-foreground">
                                {PERSONAL_INFO.bio}
                            </p>
                            <p className="text-muted-foreground">
                                {dict.about.description}
                            </p>
                        </div>
                    </div>

                    <div className="relative animate-fadeInRight group">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-primary relative shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-500 ease-out">
                            <Image
                                src="/images/img.jpg"
                                alt="Muhamad Dikri - Full Stack Developer"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
                    </div>
                </div>
            </Section>

            {/* Skills Section */}
            <Section>
                <SectionHeading
                    subtitle={dict.about.skillsSubtitle}
                    title={dict.about.skillsTitle}
                    description={dict.about.skillsDesc}
                />

                <div className="space-y-12">
                    {/* Frontend Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">{dict.about.frontend}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skillsByCategory.frontend.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-primary transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">{dict.about.backend}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skillsByCategory.backend.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-secondary transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">{dict.about.tools}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skillsByCategory.tools.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-rainbow transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
