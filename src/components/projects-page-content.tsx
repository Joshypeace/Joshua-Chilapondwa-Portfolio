"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe, Grid3x3 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

type ProjectCategory = "all" | "web" | "mobile"

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  demoLink: string
  githubLink: string
  category: "web" | "mobile"
  features: string[]
}

export function ProjectsPageContent() {
  const { ref, isInView } = useInView()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      techStack: ["Next.js", "Express.js", "Python", "PostgreSQL"],
      image: "/modern-ecommerce-dashboard.png",
      demoLink: "#",
      githubLink: "#",
      category: "web",
      features: ["Payment Integration", "Real-time Tracking", "Admin Dashboard", "Inventory Management"],
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress analytics, and social features.",
      techStack: ["Flutter", "Dart", "Firebase"],
      image: "/fitness-app-interface.png",
      demoLink: "#",
      githubLink: "#",
      category: "mobile",
      features: ["Workout Tracking", "Progress Analytics", "Social Features", "Custom Plans"],
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting.",
      techStack: ["React Native", "Express.js", "MongoDB"],
      image: "/task-management-dashboard.png",
      demoLink: "#",
      githubLink: "#",
      category: "mobile",
      features: ["Real-time Collaboration", "Team Chat", "Advanced Reporting", "Task Automation"],
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation platform that generates blog posts, social media content, and marketing copy.",
      techStack: ["Next.js", "Python", "OpenAI API"],
      image: "/ai-content-generator-interface.png",
      demoLink: "#",
      githubLink: "#",
      category: "web",
      features: ["AI-Powered Generation", "Multiple Content Types", "SEO Optimization", "Export Options"],
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      techStack: ["Next.js", "Express.js", "PostgreSQL"],
      image: "/real-estate-property-listing.jpg",
      demoLink: "#",
      githubLink: "#",
      category: "web",
      features: ["Virtual Tours", "Advanced Search", "Agent Management", "Property Analytics"],
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
      techStack: ["Flutter", "Java", "MySQL"],
      image: "/learning-management-system.png",
      demoLink: "#",
      githubLink: "#",
      category: "mobile",
      features: ["Course Creation", "Progress Tracking", "Interactive Assessments", "Offline Access"],
    },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  const filterButtons = [
    { id: "all" as ProjectCategory, label: "All Projects", icon: Grid3x3 },
    { id: "web" as ProjectCategory, label: "Web Apps", icon: Globe },
    { id: "mobile" as ProjectCategory, label: "Mobile Apps", icon: Smartphone },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Welcome Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Explore a collection of my work spanning web and mobile applications. Each project represents a unique
              challenge solved with modern technologies and best practices.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterButtons.map((filter) => {
              const Icon = filter.icon
              return (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "hover:bg-primary/10"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {filter.label}
                </Button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:-translate-y-1 flex flex-col"
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
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs rounded-full font-medium flex items-center gap-1">
                      {project.category === "web" ? (
                        <>
                          <Globe className="h-3 w-3" />
                          Web
                        </>
                      ) : (
                        <>
                          <Smartphone className="h-3 w-3" />
                          Mobile
                        </>
                      )}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
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

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
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

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
