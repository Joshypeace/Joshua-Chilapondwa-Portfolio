"use client"

import { Card } from "@/components/ui/card"
import { Zap, Target, Users, Clock, BookOpen, Music } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function StrengthsSection() {
  const { ref, isInView } = useInView()

  const strengths = [
    { icon: Zap, title: "Quick Learner", description: "Rapidly adapt to new technologies and frameworks" },
    { icon: Target, title: "Problem Solver", description: "Creative approach to complex technical challenges" },
    { icon: Users, title: "Independent Worker", description: "Self-motivated and productive without supervision" },
    { icon: Clock, title: "Works Under Pressure", description: "Delivers quality results within tight deadlines" },
  ]

  const hobbies = [
    { icon: BookOpen, title: "Coding", description: "Building side projects and exploring new tech" },
    { icon: Target, title: "UI/UX Design", description: "Creating beautiful and intuitive interfaces" },
    { icon: Music, title: "Piano", description: "Playing and composing music in free time" },
    { icon: BookOpen, title: "Documentation", description: "Reading technical docs and staying updated" },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Strengths */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Key <span className="text-primary">Strengths</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 group"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <strength.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">{strength.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Hobbies & <span className="text-accent">Interests</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {hobbies.map((hobby, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 border-border/50 group"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <hobby.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">{hobby.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{hobby.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
