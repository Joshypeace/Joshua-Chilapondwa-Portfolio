"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image placeholder */}
              <div className="order-2 md:order-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                  <Image src="/professional-developer-portrait.png" alt="Joshua Chilapondwa" fill className="object-cover" />
                </div>
              </div>

              {/* Text content */}
              <div className="order-1 md:order-2 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in both frontend and backend development. I
                  specialize in creating modern, responsive, and high-quality digital solutions that solve real-world
                  problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in UI/UX design principles and a problem-solving mindset, I transform ideas
                  into elegant, user-friendly applications. I'm dedicated to writing clean, maintainable code and
                  staying up-to-date with the latest technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
