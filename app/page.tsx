"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}
