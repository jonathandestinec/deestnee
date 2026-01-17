"use client"

import { useEffect, useState } from "react"

interface SkillCategory {
    title: string
    skills: string[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "Front-End",
        skills: ["Next.js", "React.js", "Tailwind CSS", "Zustand"],
    },
    {
        title: "Back-End",
        skills: ["Node.js", "Express.js"],
    },
    {
        title: "Databases",
        skills: ["MongoDB", "Prisma", "Supabase"],
    },
    {
        title: "Other Tools",
        skills: ["Socket.io", "Git", "GitHub", "Vercel"],
    },
]

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 },
        )

        const section = document.getElementById("skills")
        if (section) observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 border border-white/5 rounded-full blur-3xl animate-pulse-soft"></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 border border-white/5 rounded-full blur-3xl animate-pulse-soft"
                    style={{ animationDelay: "1s" }}
                ></div>

                {/* Minimal accent dots */}
                <div className="absolute top-1/2 left-1/4 design-dot opacity-20 animate-dot-pulse"></div>
                <div
                    className="absolute bottom-1/3 right-1/3 design-dot opacity-15 animate-dot-pulse"
                    style={{ animationDelay: "1.5s" }}
                ></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="design-accent"></div>
                        <p className="text-xs font-light tracking-widest text-white/60 uppercase">My Expertise</p>
                    </div>
                    <h2
                        className={`font-serif font-light text-5xl md:text-6xl transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    >
                        Skills & Tech Stack
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.title}
                            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className="group relative border border-white/10 hover:border-white/30 p-8 transition-all duration-300 hover:bg-white/5 h-full overflow-hidden">
                                {/* Minimal glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-1 h-6 bg-gradient-to-b from-white/50 to-white/0 rounded-full"></div>
                                        <h3 className="text-base font-serif font-light text-white group-hover:text-white transition-colors">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        {category.skills.map((skill, skillIdx) => (
                                            <div
                                                key={skill}
                                                className="flex items-center gap-3 group/skill"
                                                style={{ transitionDelay: `${skillIdx * 50}ms` }}
                                            >
                                                <div className="w-1.5 h-1.5 bg-white/40 group-hover/skill:bg-white group-hover/skill:scale-150 transition-all duration-300 rounded-full"></div>
                                                <span className="text-sm text-white/60 group-hover/skill:text-white transition-all duration-300 group-hover/skill:translate-x-1 font-light">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
