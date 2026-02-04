'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, type Locale } from '@/lib/dictionary';

type Dictionary = typeof dictionaries.en;

interface LanguageContextType {
    locale: Locale;
    dict: Dictionary;
    setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');

    useEffect(() => {
        // Load saved preference
        const saved = localStorage.getItem('locale') as Locale;
        if (saved && dictionaries[saved]) {
            setLocaleState(saved);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('locale', newLocale);
        // Optional: Set document lang attribute
        document.documentElement.lang = newLocale;
    };

    const value = {
        locale,
        dict: dictionaries[locale],
        setLocale,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
