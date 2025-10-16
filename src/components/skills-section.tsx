"use client"

import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export function SkillsSection() {
  const { ref, isInView } = useInView()

  const skills = [
    // Languages & Frameworks
    { name: "Flutter", level: 90, category: "framework", icon: "🦋" },
    { name: "Python", level: 85, category: "language", icon: "🐍" },
    { name: "Next.js", level: 88, category: "framework", icon: "▲" },
    { name: "React Native", level: 85, category: "framework", icon: "⚛️" },
    { name: "Express.js", level: 82, category: "framework", icon: "🚂" },
    { name: "JavaScript", level: 90, category: "language", icon: "JS" },
    { name: "Dart", level: 88, category: "language", icon: "🎯" },
    { name: "Java", level: 80, category: "language", icon: "☕" },
    // Tools & Platforms
    { name: "GitHub", level: 90, category: "tool", icon: "🐙" },
    { name: "VS Code", level: 95, category: "tool", icon: "💻" },
    { name: "Android Studio", level: 85, category: "tool", icon: "🤖" },
  ]

  return (
    <section id="skills" className="py-20 sm:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6 flex flex-col items-center justify-between h-full min-h-[160px]">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-3xl">{skill.icon}</span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-base font-semibold text-card-foreground text-center mb-4">{skill.name}</h3>

                  {/* Progress Bar at Bottom */}
                  <div className="w-full mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Proficiency</span>
                      <span className="text-xs font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isInView ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 50}ms`,
                        }}
                      />
                    </div>
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
