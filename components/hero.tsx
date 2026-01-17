"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Elegant dots */}
                <div className="absolute top-1/4 left-1/4 design-dot animate-dot-pulse opacity-30"></div>
                <div
                    className="absolute top-1/3 right-1/3 design-dot animate-dot-pulse opacity-20"
                    style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 design-dot animate-dot-pulse opacity-25"
                    style={{ animationDelay: "1s" }}
                ></div>

                {/* Floating circles with slow animation */}
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 border border-white/5 rounded-full blur-3xl animate-float"></div>
                <div
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 border border-white/5 rounded-full blur-3xl animate-float-small"
                    style={{ animationDelay: "1s" }}
                ></div>

                {/* Subtle accent circles */}
                <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-white/[0.02] rounded-full blur-2xl animate-pulse-soft"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <div className="flex items-center gap-4">
                                <div className="design-accent"></div>
                                <p className="text-sm font-light tracking-widest text-white/60 uppercase">Welcome</p>
                            </div>

                            <h1 className="font-serif font-light tracking-tight overflow-hidden">
                                <span className="inline-block animate-slide-in-up">I&apos;m</span>
                                <br />
                                <span className="inline-block animate-slide-in-up" style={{ animationDelay: "0.15s" }}>
                                    Destine
                                </span>
                                <br />
                                <span className="inline-block animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                                    Joe
                                </span>
                            </h1>

                            <div
                                className="w-12 h-px bg-gradient-to-r from-white/50 to-white/0 animate-expand"
                                style={{ animationDelay: "0.5s" }}
                            ></div>

                            <p
                                className="text-lg text-white/70 font-light leading-relaxed tracking-wide animate-fade-in-up"
                                style={{ animationDelay: "0.4s" }}
                            >
                                Full-Stack Web Developer
                            </p>
                        </div>

                        <p
                            className="text-base text-white/60 leading-relaxed max-w-xl font-light animate-fade-in-up"
                            style={{ animationDelay: "0.5s" }}
                        >
                            I build fast, scalable, and user-friendly web applications using Next.js, React.js, Node.js, and MongoDB.
                            Experienced with Prisma, Supabase, Tailwind CSS, and Zustand.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="group relative px-8 py-3 bg-white text-black font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">View My Work</span>
                                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group relative px-8 py-3 border border-white/30 text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:border-white hover:bg-white/5"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </div>

                        <div className="flex gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                            <Link
                                href="https://github.com/jonathandestinec"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-all duration-300 overflow-hidden"
                            >
                                <span className="text-white/60 group-hover:text-white transition-colors relative z-10 text-xs font-semibold">
                                    GH
                                </span>
                                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/jonathandestinec"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-all duration-300 overflow-hidden"
                            >
                                <span className="text-white/60 group-hover:text-white transition-colors relative z-10 text-xs font-semibold">
                                    LI
                                </span>
                                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
                        <div className="relative w-80 h-80 md:w-96 md:h-96 group">
                            {/* Elegant minimal frame */}
                            <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                            <div className="absolute -inset-1 border border-white/10 group-hover:border-white/20 transition-colors duration-300"></div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 rounded group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>

                            <Image
                                src="/images/image.jpg"
                                alt="Destine Joe"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up"
                    style={{ animationDelay: "1s" }}
                >
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-white/40 text-xs font-light tracking-widest uppercase">Scroll</p>
                        <div className="animate-bounce">
                            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
