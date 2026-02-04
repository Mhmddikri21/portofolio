'use client';

import { useEffect, useState } from 'react';

export function SmoothScroll() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Enhanced smooth scrolling for anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor?.hash) {
                const targetId = anchor.hash.slice(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });

                    // Update URL without jumping
                    history.pushState(null, '', anchor.hash);
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    if (!isClient) return null;
    return null;
}
