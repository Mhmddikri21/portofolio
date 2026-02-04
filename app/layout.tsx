import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { SmoothScroll } from '@/components/SmoothScroll';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'Muhamad Dikri - Full Stack Developer',
    description: 'Passionate developer with expertise in building modern web applications. Portfolio showcasing projects and skills.',
    keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Laravel', 'TypeScript'],
    authors: [{ name: 'Muhamad Dikri' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Muhamad Dikri - Full Stack Developer',
        description: 'Passionate developer with expertise in building modern web applications',
        siteName: 'Muhamad Dikri Portfolio',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} antialiased`}>
                <LanguageProvider>
                    <SmoothScroll />
                    <Navbar />
                    <main className="pt-16 md:pt-20">
                        <PageTransition>{children}</PageTransition>
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
