// Portfolio Data Constants
export const PERSONAL_INFO = {
    name: 'Muhamad Dikri',
    tagline: 'Full Stack Developer & UI/UX Enthusiast',
    bio: 'Passionate developer with expertise in building modern web applications. I transform ideas into elegant, scalable solutions that users love.',
    email: 'muhamaddikri11@gmail.com',
    location: 'Jakarta, Indonesia',
    phone: '+62 123 4567 8900',
    availability: 'Available for freelance projects',
} as const;

export const SOCIAL_LINKS = {
    github: 'https://github.com/Mhmddikri21',
    linkedin: 'https://linkedin.com/in//muhamad-dikri-9a8268213',
    twitter: 'https://twitter.com/mhmd_dikri',
    instagram: 'https://instagram.com/mhmddikri11',
} as const;

export const STATS = [
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Code Commits', value: 1000, suffix: 'K+' },
] as const;

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft';

export interface Skill {
    name: string;
    level: number;
    category: SkillCategory;
}

export const SKILLS: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'TailwindCSS', level: 95, category: 'frontend' },
    { name: 'Vue.js', level: 75, category: 'frontend' },

    // Backend
    { name: 'Laravel', level: 90, category: 'backend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'PHP', level: 90, category: 'backend' },
    { name: 'MySQL', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },

    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'Figma', level: 85, category: 'tools' },
    { name: 'VS Code', level: 95, category: 'tools' },

    // Soft Skills
    { name: 'Problem Solving', level: 95, category: 'soft' },
    { name: 'Communication', level: 90, category: 'soft' },
    { name: 'Team Collaboration', level: 90, category: 'soft' },
    { name: 'Project Management', level: 80, category: 'soft' },
];

export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
    category: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    year: number;
}

export const PROJECTS: Project[] = [
    {
        id: '1',
        slug: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        shortDescription: 'Modern e-commerce platform with real-time inventory management',
        image: '/images/projects/ecommerce-1.jpg',
        category: 'Web Application',
        tags: ['Laravel', 'React', 'Inertia.js', 'TailwindCSS', 'MySQL'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project',
        featured: true,
        year: 2024,
    },
    {
        id: '2',
        slug: 'task-management-app',
        title: 'Task Management App',
        shortDescription: 'Collaborative task management tool with real-time updates',
        image: '/images/projects/task-app-1.jpg',
        category: 'SaaS',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
        liveUrl: 'https://taskapp.example.com',
        featured: true,
        year: 2024,
    },
    {
        id: '3',
        slug: 'portfolio-builder',
        title: 'Portfolio Builder',
        shortDescription: 'Drag-and-drop portfolio builder for creatives',
        image: '/images/projects/portfolio-builder-1.jpg',
        category: 'Web Application',
        tags: ['Vue.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
        featured: false,
        year: 2023,
    },
];

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    pricing: string;
}

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
        icon: 'Code',
        features: [
            'Responsive design',
            'Performance optimization',
            'SEO best practices',
            'Cross-browser compatibility',
            'Clean, maintainable code',
        ],
        pricing: 'Starting from $2,000',
    },
    {
        id: '2',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that users love, backed by research and best practices.',
        icon: 'Palette',
        features: [
            'User research',
            'Wireframing & prototyping',
            'Visual design',
            'Usability testing',
            'Design systems',
        ],
        pricing: 'Starting from $1,500',
    },
    {
        id: '3',
        title: 'Full Stack Development',
        description: 'End-to-end development services from database design to frontend implementation.',
        icon: 'Layers',
        features: [
            'API development',
            'Database design',
            'Authentication & authorization',
            'Third-party integrations',
            'Deployment & maintenance',
        ],
        pricing: 'Starting from $3,000',
    },
];

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string;
    achievements: string[];
    technologies: string[];
}

export const WORK_EXPERIENCE: Experience[] = [
    {
        id: '1',
        title: 'Senior Full Stack Developer',
        company: 'Tech Company Inc.',
        location: 'Jakarta, Indonesia',
        startDate: '2022-01',
        endDate: 'Present',
        description: 'Leading development of enterprise web applications and mentoring junior developers.',
        achievements: [
            'Led a team of 5 developers in building a large-scale SaaS platform',
            'Improved application performance by 40% through optimization',
            'Implemented CI/CD pipeline reducing deployment time by 60%',
        ],
        technologies: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    },
    {
        id: '2',
        title: 'Full Stack Developer',
        company: 'Startup XYZ',
        location: 'Remote',
        startDate: '2020-06',
        endDate: '2021-12',
        description: 'Developed and maintained multiple client projects from inception to deployment.',
        achievements: [
            'Built 10+ web applications for various clients',
            'Established development best practices and coding standards',
            'Conducted code reviews and technical interviews',
        ],
        technologies: ['Vue.js', 'Node.js', 'MySQL', 'AWS'],
    },
];

export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
}

export const EDUCATION: Education[] = [
    {
        id: '1',
        degree: 'Bachelor of Computer Science',
        institution: 'University of Technology',
        location: 'Jakarta, Indonesia',
        startDate: '2016-08',
        endDate: '2020-06',
        gpa: '3.8/4.0',
    },
];
