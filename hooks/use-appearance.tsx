'use client';

import { useCallback, useMemo, useSyncExternalStore, useEffect } from 'react';

export type ResolvedAppearance = 'light' | 'dark';
export type Appearance = ResolvedAppearance | 'system';

export type UseAppearanceReturn = {
    readonly appearance: Appearance;
    readonly resolvedAppearance: ResolvedAppearance;
    readonly updateAppearance: (mode: Appearance) => void;
};

const listeners = new Set<() => void>();
let currentAppearance: Appearance = 'system';

const prefersDark = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const getStoredAppearance = (): Appearance => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('appearance') as Appearance) || 'system';
};

const isDarkMode = (appearance: Appearance): boolean => {
    return appearance === 'dark' || (appearance === 'system' && prefersDark());
};

const applyTheme = (appearance: Appearance): void => {
    if (typeof document === 'undefined') return;

    const isDark = isDarkMode(appearance);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
};

const subscribe = (callback: () => void) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
};

const notify = (): void => listeners.forEach((listener) => listener());

export function initializeTheme(): void {
    if (typeof window === 'undefined') return;

    if (!localStorage.getItem('appearance')) {
        localStorage.setItem('appearance', 'system');
    }

    currentAppearance = getStoredAppearance();
    applyTheme(currentAppearance);
}

export function useAppearance(): UseAppearanceReturn {
    const appearance: Appearance = useSyncExternalStore(
        subscribe,
        () => currentAppearance,
        () => 'system'
    );

    const resolvedAppearance: ResolvedAppearance = useMemo(
        () => (isDarkMode(appearance) ? 'dark' : 'light'),
        [appearance]
    );

    const updateAppearance = useCallback((mode: Appearance): void => {
        currentAppearance = mode;
        localStorage.setItem('appearance', mode);
        applyTheme(mode);
        notify();
    }, []);

    // Initialize theme on mount
    useEffect(() => {
        initializeTheme();
    }, []);

    return { appearance, resolvedAppearance, updateAppearance } as const;
}
