import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/constants';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Link
            href={`/portfolio/${project.slug}`}
            className={cn(
                'group block h-full rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2',
                className
            )}
        >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-3 left-3 z-20">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/90 text-white shadow-lg backdrop-blur-sm border border-white/10">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-4 relative">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium px-2 py-1 rounded-md bg-secondary/10 text-secondary-foreground">
                            {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                            {project.year}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-border text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full border border-border text-muted-foreground">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
