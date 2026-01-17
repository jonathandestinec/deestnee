"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface ExperienceItem {
  title: string
  company: string
  url?: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Nexorra Studio",
    url: "#",
    description:
      "Built client websites using Next.js, Tailwind CSS, and React.js. Focused on creating performant, accessible, and responsive web applications. Contributed to dashboards, landing pages, and full-stack collaborative projects.",
    skills: ["Next.js", "React.js", "Tailwind CSS", "Web Performance"],
  },
  {
    title: "Freelance & Team Projects",
    company: "Independent Developer",
    description:
      "Collaborated with other developers on small to large-scale web applications. Roles included front-end and full-stack development, real-time features, and database integration.",
    skills: ["Full-Stack", "Real-time Features", "Database Design", "Team Collaboration"],
  },
]

export default function Experience() {
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

    const section = document.getElementById("experience")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 tracking-tighter transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className={`group transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="border border-white/10 hover:border-white/30 p-8 rounded-xl transition-all duration-300 hover:bg-white/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    {exp.url ? (
                      <Link
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors underline"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      <p className="text-white/60">{exp.company}</p>
                    )}
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
