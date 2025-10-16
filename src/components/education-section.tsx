"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function EducationSection() {
  const { ref, isInView } = useInView()

  const education = [
    {
      degree: "BSc in Information and Communication Technology",
      institution: "Daeyang University",
      period: "2022 – Present",
      description:
        "Pursuing comprehensive studies in software development, systems analysis, and modern web technologies.",
    },
    {
      degree: "Malawi School Certificate of Education (MSCE)",
      institution: "Kings Foundation Private Secondary School",
      period: "2020 – 2021",
      description: "Completed secondary education with strong performance in mathematics and sciences.",
    },
  ]

  return (
    <section id="education" className="py-20 sm:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-card-foreground">{item.degree}</h3>
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                    </div>
                    <p className="text-accent font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
