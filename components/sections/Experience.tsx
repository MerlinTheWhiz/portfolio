import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceSection({ theme = 'dark' }) {
    const experiences = [
        {
            id: 1,
            role: 'Senior Software Engineer',
            company: 'TechCorp Inc.',
            location: 'San Francisco, CA',
            period: '2021 - Present',
            description: 'Leading development of microservices architecture serving 2M+ daily users. Mentoring junior developers and driving technical decisions.',
            highlights: ['Led team of 6 engineers', 'Reduced latency by 40%', 'Implemented CI/CD pipelines'],
        },
        {
            id: 2,
            role: 'Full Stack Developer',
            company: 'StartupXYZ',
            location: 'Remote',
            period: '2019 - 2021',
            description: 'Built core product features from scratch, working closely with design and product teams to deliver user-centric solutions.',
            highlights: ['Built MVP in 3 months', 'Grew to 100K users', 'React & Node.js stack'],
        },
        {
            id: 3,
            role: 'Frontend Developer',
            company: 'Digital Agency',
            location: 'New York, NY',
            period: '2017 - 2019',
            description: 'Developed responsive web applications for Fortune 500 clients, focusing on performance and accessibility.',
            highlights: ['15+ client projects', 'Performance optimization', 'Accessibility standards'],
        },
        {
            id: 4,
            role: 'Junior Developer',
            company: 'WebDev Studio',
            location: 'Boston, MA',
            period: '2015 - 2017',
            description: 'Started my journey building websites and web applications, learning best practices and modern development workflows.',
            highlights: ['HTML/CSS/JavaScript', 'WordPress development', 'Team collaboration'],
        },
    ];

    return (
        <section
            id="experience"
            className={`py-32 relative ${
                theme === 'dark' ? 'bg-[#111111]/50' : 'bg-gray-50/50'
            }`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,126,246,0.03),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-[#057ef6]/10 text-[#057ef6] text-sm font-medium rounded-full mb-6">
                        Career Path
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Professional
                        <span className="text-[#057ef6]"> journey</span>
                    </h2>
                    <p
                        className={`mt-6 text-lg max-w-2xl mx-auto ${
                            theme === 'dark' ? 'text-[#737373]' : 'text-gray-600'
                        }`}
                    >
                        A timeline of growth, challenges overcome, and milestones
                        achieved across my career.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#057ef6]/50 via-[#057ef6]/20 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col lg:flex-row gap-8 ${
                                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#057ef6] border-4 z-10 ${
                                        theme === 'dark'
                                            ? 'border-[#0a0a0a]'
                                            : 'border-white'
                                    }`}
                                />

                                {/* Content */}
                                <div
                                    className={`lg:w-1/2 ${
                                        index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                                    } pl-16 lg:pl-0`}
                                >
                                    <div
                                        className={`group p-8 rounded-3xl border transition-all duration-500 ${
                                            theme === 'dark'
                                                ? 'bg-[#0a0a0a] border-white/5 hover:border-[#057ef6]/20'
                                                : 'bg-white border-gray-200 hover:border-[#057ef6]/40'
                                        } ${index % 2 === 0 ? 'lg:text-right' : ''}`}
                                    >
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#057ef6]/10 text-[#057ef6] text-sm font-medium mb-4">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#057ef6] transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <div
                                            className={`flex items-center gap-4 mb-4 ${
                                                theme === 'dark'
                                                    ? 'text-[#737373]'
                                                    : 'text-gray-600'
                                            } ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                                        >
                                            <div className="flex items-center gap-1">
                                                <Briefcase size={14} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                        <p
                                            className={`mb-6 leading-relaxed ${
                                                theme === 'dark'
                                                    ? 'text-[#a3a3a3]'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 ${
                                                index % 2 === 0 ? 'lg:justify-end' : ''
                                            }`}
                                        >
                                            {exp.highlights.map((highlight) => (
                                                <span
                                                    key={highlight}
                                                    className={`px-3 py-1 rounded-full text-xs ${
                                                        theme === 'dark'
                                                            ? 'bg-white/5 text-[#737373]'
                                                            : 'bg-gray-100 text-gray-600'
                                                    }`}
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
