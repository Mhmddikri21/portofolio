'use client';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { WORK_EXPERIENCE, EDUCATION } from '@/lib/constants';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ResumePage() {
    const { dict } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Header */}
            <Section variant="gradient">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <SectionHeading
                        align="left"
                        subtitle={dict.resume.subtitle}
                        title={dict.resume.title}
                        className="mb-0"
                    />
                    <Button asChild>
                        <a href="/cv/Muhamad_Dikri_CV.pdf" download>
                            <Download className="w-5 h-5" />
                            {dict.resume.downloadCv}
                        </a>
                    </Button>
                </div>
            </Section>

            {/* Work Experience */}
            <Section>
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <Briefcase className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">{dict.resume.experience}</h2>
                    </div>

                    <div className="space-y-6">
                        {WORK_EXPERIENCE.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 animate-fadeInLeft"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {exp.startDate} - {exp.endDate} • {exp.location}
                                        </p>
                                    </div>

                                    <p className="text-muted-foreground">{exp.description}</p>

                                    <div className="space-y-2">
                                        <p className="font-semibold text-sm">{dict.resume.achievements}:</p>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-muted"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Education */}
            <Section variant="muted">
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">{dict.resume.education}</h2>
                    </div>

                    <div className="space-y-6">
                        {EDUCATION.map((edu, index) => (
                            <div
                                key={edu.id}
                                className="p-6 rounded-lg border bg-card animate-scaleIn"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-primary font-medium">{edu.institution}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.startDate} - {edu.endDate} • {edu.location}
                                    </p>
                                    {edu.gpa && (
                                        <p className="text-sm text-muted-foreground">{dict.resume.gpa}: {edu.gpa}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
