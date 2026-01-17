"use client"

import { useState } from "react"
import Link from "next/link"

interface HeaderProps {
    isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
        setMenuOpen(false)
    }

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link href="/" className="font-serif font-light text-2xl tracking-tight animate-fade-in-down">
                    DJ
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {[
                        { label: "About", id: "about" },
                        { label: "Skills", id: "skills" },
                        { label: "Projects", id: "projects" },
                        { label: "Experience", id: "experience" },
                        { label: "Contact", id: "contact" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-xs text-white/70 hover:text-white transition-colors duration-300 relative group font-light tracking-wide uppercase"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
                    <div
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                    ></div>
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></div>
                    <div
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    ></div>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 px-4 py-4 space-y-4 animate-fade-in-down">
                    {[
                        { label: "About", id: "about" },
                        { label: "Skills", id: "skills" },
                        { label: "Projects", id: "projects" },
                        { label: "Experience", id: "experience" },
                        { label: "Contact", id: "contact" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left text-white/70 hover:text-white transition-colors py-2 font-light text-xs uppercase tracking-wide"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    )
}
