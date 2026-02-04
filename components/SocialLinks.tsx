import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/lib/constants';

interface SocialLinksProps {
    className?: string;
    variant?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
    showLabels?: boolean;
}

export function SocialLinks({
    className,
    variant = 'horizontal',
    size = 'md',
    showLabels = false,
}: SocialLinksProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    const containerClasses = {
        horizontal: 'flex items-center gap-4',
        vertical: 'flex flex-col gap-3',
    };

    const iconSize = sizeClasses[size];

    const socials = [
        {
            name: 'GitHub',
            url: SOCIAL_LINKS.github,
            icon: Github,
            show: !!SOCIAL_LINKS.github,
        },
        {
            name: 'LinkedIn',
            url: SOCIAL_LINKS.linkedin,
            icon: Linkedin,
            show: !!SOCIAL_LINKS.linkedin,
        },
        {
            name: 'Twitter',
            url: SOCIAL_LINKS.twitter,
            icon: Twitter,
            show: !!SOCIAL_LINKS.twitter,
        },
        {
            name: 'Instagram',
            url: SOCIAL_LINKS.instagram,
            icon: Instagram,
            show: !!SOCIAL_LINKS.instagram,
        },
    ].filter((social) => social.show);

    return (
        <div className={cn(containerClasses[variant], className)}>
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        'group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors',
                        showLabels && 'hover:translate-x-1 transition-transform'
                    )}
                    aria-label={social.name}
                >
                    <social.icon className={iconSize} />
                    {showLabels && (
                        <span className="text-sm font-medium">{social.name}</span>
                    )}
                </a>
            ))}
        </div>
    );
}
