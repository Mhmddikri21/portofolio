'use client';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { SocialLinks } from '@/components/SocialLinks';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
    const { dict } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - will implement API route later
        console.log('Form submitted:', formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen">
            <Section variant="gradient">
                <SectionHeading
                    subtitle={dict.contact.subtitle}
                    title={dict.contact.title}
                    description={dict.contact.description}
                    gradient
                />

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-slideInLeft">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{dict.contact.infoTitle}</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <p className="font-semibold">{dict.contact.email}</p>
                                        <a
                                            href={`mailto:${PERSONAL_INFO.email}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <p className="font-semibold">{dict.contact.location}</p>
                                        <p className="text-muted-foreground">{PERSONAL_INFO.location}</p>
                                    </div>
                                </div>

                                {PERSONAL_INFO.phone && (
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">{dict.contact.phone}</p>
                                            <p className="text-muted-foreground">{PERSONAL_INFO.phone}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">{dict.contact.follow}</h4>
                            <SocialLinks size="lg" showLabels variant="vertical" />
                        </div>

                        <div className="p-6 rounded-lg border bg-card">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">{dict.contact.availability}:</span>{' '}
                                {PERSONAL_INFO.availability}
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slideInRight">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    {dict.contact.form.name} *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder={dict.contact.form.placeholderName}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    {dict.contact.form.email} *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder={dict.contact.form.placeholderEmail}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    {dict.contact.form.subject} *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder={dict.contact.form.placeholderSubject}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    {dict.contact.form.message} *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder={dict.contact.form.placeholderMessage}
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-gradient-primary hover:opacity-90"
                            >
                                {dict.contact.form.send}
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
