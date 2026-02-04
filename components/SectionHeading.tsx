import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string | ReactNode;
    subtitle?: string;
    description?: string;
    className?: string;
    align?: 'left' | 'center';
    gradient?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    description,
    className,
    align = 'center',
    gradient = false,
}: SectionHeadingProps) {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
    };

    return (
        <div
            className={cn(
                'mb-12 md:mb-16 space-y-4',
                alignmentClasses[align],
                className
            )}
        >
            {subtitle && (
                <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider",
                    align === 'center' && "mx-auto"
                )}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {subtitle}
                </div>
            )}

            <h2
                className={cn(
                    'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
                    gradient && 'gradient-text'
                )}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={cn(
                        'text-lg text-muted-foreground max-w-2xl',
                        align === 'center' && 'mx-auto'
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
