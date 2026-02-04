'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Locale } from '@/lib/dictionary';

const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Indonesia' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'zh', label: '中文' },
];

export function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();
    // Default to first language if not found
    const currentLang = languages.find((l) => l.code === locale) || languages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 rounded-full px-3 hover:bg-muted/50 transition-colors"
                >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase">{currentLang.code}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[150px] p-2 glass">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLocale(lang.code)}
                        className={cn(
                            "gap-3 cursor-pointer rounded-md my-1",
                            locale === lang.code ? "bg-muted font-medium" : ""
                        )}
                    >
                        <span className="text-sm font-medium w-6 uppercase text-muted-foreground">
                            {lang.code}
                        </span>
                        <span>{lang.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
