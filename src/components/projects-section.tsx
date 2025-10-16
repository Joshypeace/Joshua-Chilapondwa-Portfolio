"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function ProjectsSection() {
  const { ref, isInView } = useInView()

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      techStack: ["Next.js", "Express.js", "Python", "PostgreSQL"],
      image: "/modern-ecommerce-dashboard.png",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress analytics, and social features.",
      techStack: ["Flutter", "Dart", "Firebase"],
      image: "/fitness-app-interface.png",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting.",
      techStack: ["React Native", "Express.js", "MongoDB"],
      image: "/task-management-dashboard.png",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation platform that generates blog posts, social media content, and marketing copy.",
      techStack: ["Next.js", "Python", "OpenAI API"],
      image: "/ai-content-generator-interface.png",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      techStack: ["Next.js", "Express.js", "PostgreSQL"],
      image: "/real-estate-property-listing.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
      techStack: ["Flutter", "Java", "MySQL"],
      image: "/learning-management-system.png",
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
