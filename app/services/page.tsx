'use client';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES } from '@/lib/constants';
import { Code, Palette, Layers, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap = {
    Code,
    Palette,
    Layers,
};

export default function ServicesPage() {
    const { dict } = useLanguage();

    return (
        <div className="min-h-screen">
            <Section variant="gradient">
                <SectionHeading
                    subtitle={dict.services.subtitle}
                    title={dict.services.title}
                    description={dict.services.description}
                    gradient
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap] || Code;

                        return (
                            <div
                                key={service.id}
                                className="group p-8 rounded-lg border bg-card hover-lift transition-smooth animate-scaleIn"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="space-y-6">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title & Description */}
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm">
                                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Pricing */}
                                    <div className="pt-4 border-t">
                                        <p className="text-sm font-semibold text-primary">{service.pricing}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}
