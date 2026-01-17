"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState(false)

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

        const section = document.getElementById("contact")
        if (section) observer.observe(section)

        return () => observer.disconnect()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Create mailto link
        const mailtoLink = `mailto:jonathandestinec@gmail.com?subject=${encodeURIComponent(`Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className={`text-4xl md:text-5xl font-bold mb-4 tracking-tighter transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                >
                    Let&apos;s Work Together
                </h2>
                <p
                    className={`text-xl text-white/60 mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ transitionDelay: "100ms" }}
                >
                    Have a project in mind? I&apos;d love to help bring it to life.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 hover:border-white/30 focus:border-white px-4 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:outline-none rounded-lg"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 hover:border-white/30 focus:border-white px-4 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:outline-none rounded-lg"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 hover:border-white/30 focus:border-white px-4 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:outline-none rounded-lg resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 rounded-lg"
                            >
                                {submitted ? "✓ Message Sent" : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div
                        className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div className="border border-white/10 hover:border-white/30 p-8 rounded-xl transition-all duration-300 hover:bg-white/5">
                            <h3 className="text-lg font-semibold mb-4">Direct Contact</h3>
                            <Link
                                href="mailto:jonathandestinec@gmail.com"
                                className="text-white/70 hover:text-white transition-colors text-lg break-all"
                            >
                                jonathandestinec@gmail.com
                            </Link>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Connect With Me</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "GitHub", url: "https://github.com/jonathandestinec", icon: "gh" },
                                    { label: "LinkedIn", url: "https://linkedin.com/in/jonathandestinec", icon: "in" },
                                    { label: "Photography", url: "https://my-gallery-gules.vercel.app/", icon: "ph" },
                                ].map((link) => (
                                    <Link
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 hover:bg-white/5 group"
                                    >
                                        <span className="w-8 h-8 flex items-center justify-center border border-white/20 group-hover:border-white text-white/60 group-hover:text-white transition-colors text-sm font-semibold rounded">
                                            {link.icon}
                                        </span>
                                        <span className="text-white/70 group-hover:text-white transition-colors">{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
