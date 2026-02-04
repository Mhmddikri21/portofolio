'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function AnimatedCounter({
    value,
    suffix = '',
    duration = 2000,
    className,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();
                    const endTime = startTime + duration;

                    const updateCount = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);

                        // Easing function (easeOutExpo)
                        const easedProgress =
                            progress === 1
                                ? 1
                                : 1 - Math.pow(2, -10 * progress);

                        setCount(Math.floor(easedProgress * value));

                        if (now < endTime) {
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(value);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [value, duration, hasAnimated]);

    return (
        <span ref={elementRef} className={cn('tabular-nums', className)}>
            {count}
            {suffix}
        </span>
    );
}
