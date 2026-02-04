import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    variant?: 'default' | 'muted' | 'gradient';
    containerClassName?: string;
}

export function Section({
    children,
    className,
    id,
    variant = 'default',
    containerClassName,
}: SectionProps) {
    const variantStyles = {
        default: 'bg-background',
        muted: 'bg-muted/30',
        gradient: 'bg-gradient-to-b from-background via-muted/20 to-background',
    };

    return (
        <section
            id={id}
            className={cn('py-16 md:py-24 lg:py-32', variantStyles[variant], className)}
        >
            <div className={cn('container px-4 mx-auto max-w-7xl', containerClassName)}>
                {children}
            </div>
        </section>
    );
}
