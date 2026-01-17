"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
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

        const section = document.getElementById("about")
        if (section) observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className={`text-4xl md:text-5xl font-bold mb-16 tracking-tighter transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                >
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
                        <p className="text-lg text-white/70 leading-relaxed">
                            I&apos;m 20, currently pursuing studies in Computer Science and Mechanical Engineering. My passion lies at
                            the intersection of technology and creative problem-solving.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Interests & Hobbies</h3>
                            <ul className="space-y-2 text-white/60">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                                    Music production and listening
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                                    Anime enthusiast (Tensura, Re:Zero)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                                    Video games and gaming communities
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                                    Nature photography
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <p className="text-white/60 mb-4">Check out my photography work:</p>
                            <Link
                                href="https://my-gallery-gules.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-300 rounded text-sm text-white/70 hover:text-white"
                            >
                                Photography Gallery
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`relative transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                            <Image
                                src="/images/sunset.jpg"
                                alt="Destine's nature photography"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
