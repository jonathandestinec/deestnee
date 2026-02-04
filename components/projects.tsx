"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface Project {
    title: string
    description: string
    tech: string[]
    liveUrl?: string
    githubUrl: string
    featured: boolean
    image: string
}

const projects: Project[] = [
    {
        title: "Chatt",
        description:
            "Real-time chat application featuring instant messaging. Built with Socket.io, Node.js, Next.js, and MongoDB.",
        tech: ["Node.js", "MongoDB", "Socket.io", "Next.js"],
        liveUrl: "https://super-basic-chat-app.vercel.app/",
        githubUrl: "https://github.com/jonathandestinec/super-basic-chat-app-front-end",
        featured: true,
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Bamhire",
        description:
            "Skill Hiring Agency – Web platform connecting skilled professionals with clients. Built with Next.js and React.js.",
        tech: ["Next.js", "React.js", "Tailwind CSS"],
        liveUrl: "https://bamhire.vercel.app",
        githubUrl: "https://github.com/jonathandestinec/bam-hire",
        featured: true,
        image: "/hiring-platform-interface.jpg",
    },
    {
        title: "Cosmetics E-Commerce Store",
        description: "Full-featured e-commerce platform with product listing, shopping cart, and checkout flow.",
        tech: ["Next.js", "Zustand", "Tailwind CSS"],
        liveUrl: "https://commerce333-sigma.vercel.app",
        githubUrl: "https://github.com/jonathandestinec/commerce333",
        featured: true,
        image: "/ecommerce-cosmetics-store.png",
    },
    {
        title: "Saje Food Court",
        description: "Responsive restaurant website showcasing menus, reservations, and online ordering.",
        tech: ["Next.js", "Tailwind CSS", "React.js"],
        liveUrl: "https://saje-food-court.vercel.app/",
        githubUrl: "https://github.com/jonathandestinec/saje-food-court",
        featured: true,
        image: "/restaurant-food-delivery-app.jpg",
    },
    {
        title: "Neko Hub",
        description: "Social networking platform for anime fans with posts, discussions, real-time comments.",
        tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/jonathandestinec/neko-hub",
        featured: true,
        image: "/anime-social-network-community.jpg",
    },
]

export default function Projects() {
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

        const section = document.getElementById("projects")
        if (section) observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 -right-96 w-96 h-96 border border-white/5 rounded-full blur-3xl animate-float"></div>
                <div
                    className="absolute -bottom-40 -left-96 w-96 h-96 border border-white/5 rounded-full blur-3xl animate-float-small"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="design-accent"></div>
                        <p className="text-xs font-light tracking-widest text-white/60 uppercase">Recent Work</p>
                    </div>
                    <h2
                        className={`font-serif font-light text-5xl md:text-6xl transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    >
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className={`group cursor-pointer transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="border border-white/10 group-hover:border-white/30 overflow-hidden transition-all duration-300 hover:bg-white/5 h-full flex flex-col relative">
                                {/* Minimal glow effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                {/* Image Container */}
                                <div className="relative h-72 md:h-80 overflow-hidden bg-white/5">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1 relative z-10">
                                    <h3 className="font-serif text-2xl font-light mb-3 group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-6 flex-1 leading-relaxed font-light">{project.description}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-300 hover:scale-105 font-light"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-white/60 hover:text-white transition-all flex items-center gap-2 group/link font-light"
                                            >
                                                Live Demo
                                                <span className="group-hover/link:translate-x-1 group-hover/link:text-white transition-all duration-300">
                                                    →
                                                </span>
                                            </Link>
                                        )}
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-white/60 hover:text-white transition-all flex items-center gap-2 group/link font-light"
                                        >
                                            GitHub
                                            <span className="group-hover/link:translate-x-1 group-hover/link:text-white transition-all duration-300">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className={`pt-20 border-t border-white/10 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                >
                    <h3 className="font-serif text-2xl font-light mb-12">Other Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "RBXFATE Website",
                                desc: "Prediction website with real-time updates",
                                tech: ["Next.js", "Socket.io"],
                                collaboratorUrl: "https://github.com/reallav0",
                            },
                            {
                                title: "Login-Setting App",
                                desc: "User dashboard interface with authentication",
                                tech: ["Next.js", "Supabase"],
                                collaboratorUrl: "https://github.com/reallav0",
                            },
                        ].map((proj) => (
                            <div
                                key={proj.title}
                                className="border border-white/10 hover:border-white/30 p-8 transition-all duration-300 hover:bg-white/5 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <h4 className="font-serif font-light text-lg mb-2 group-hover:text-white transition-colors duration-300">
                                        {proj.title}
                                    </h4>
                                    <p className="text-white/60 text-sm mb-4 font-light">{proj.desc}</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        {proj.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-300 font-light"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Collaborator Link */}
                                    {proj.collaboratorUrl && (
                                        <Link
                                            href={proj.collaboratorUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-white/60 hover:text-white transition-all flex items-center gap-2 group/link font-light"
                                        >
                                            In collaboration with @reallav0
                                            <span className="group-hover/link:translate-x-1 group-hover/link:text-white transition-all duration-300">
                                                →
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
