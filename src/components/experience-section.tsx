"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Camera } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  const experiences = [
    {
      title: "System Developer",
      company: "Let's Go Travel and Tours",
      period: "June 2024 – August 2024",
      description:
        "Designed and developed a modern, responsive static website to showcase travel services and enhance online presence.",
      icon: Briefcase,
    },
    {
      title: "Photographer",
      company: "Jay Arts Multimedia",
      period: "2018 – Present",
      description:
        "Professional photography services specializing in events, portraits, and creative multimedia content.",
      icon: Camera,
    },
  ]

  return (
    <section id="experience" className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative" style={{ animationDelay: `${index * 150}ms` }}>
                    <Card className="p-6 sm:p-8 sm:ml-16 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex absolute -left-16 top-8 w-12 h-12 rounded-full bg-primary/10 items-center justify-center border-4 border-background">
                        <exp.icon className="h-5 w-5 text-primary" />
                      </div>

                      <div className="flex items-start gap-4 sm:hidden mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <exp.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="hidden sm:block">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                          <span className="text-sm text-primary font-medium">{exp.period}</span>
                        </div>
                        <p className="text-accent font-medium mb-3">{exp.company}</p>
                      </div>

                      <span className="sm:hidden text-sm text-primary font-medium block mb-3">{exp.period}</span>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
