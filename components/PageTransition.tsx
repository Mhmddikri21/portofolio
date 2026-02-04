'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div
            className={cn(
                'transition-all duration-500 ease-out',
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
        >
            {children}
        </div>
    );
}
