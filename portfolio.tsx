"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-primary">Alex Johnson</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  I create beautiful, functional, and user-centered digital experiences. With 5+ years of experience in
                  web development and design.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Alex Johnson"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital
                experiences. With over 5 years of experience in the industry, I've had the privilege of working with
                diverse clients and projects.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans across modern web technologies, from React and Next.js to Node.js and cloud
                platforms. I believe in writing clean, maintainable code and creating intuitive user interfaces that
                solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    San Francisco, CA
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>Creating beautiful and responsive user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Building robust and scalable server-side applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
                <CardDescription>Development tools and cloud platforms I use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Vercel", "Figma"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Some of my recent work that I'm proud of</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "A modern e-commerce platform built with Next.js and Stripe integration",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                github: "#",
                live: "#",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["React", "Node.js", "Socket.io", "MongoDB"],
                github: "#",
                live: "#",
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website for a creative agency",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["React", "Framer Motion", "Tailwind CSS"],
                github: "#",
                live: "#",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key milestones
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Senior Full Stack Developer",
                  company: "TechCorp Inc.",
                  period: "2022 - Present",
                  description:
                    "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
                },
                {
                  title: "Full Stack Developer",
                  company: "StartupXYZ",
                  period: "2020 - 2022",
                  description:
                    "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect user interfaces.",
                },
                {
                  title: "Frontend Developer",
                  company: "Digital Agency",
                  period: "2019 - 2020",
                  description:
                    "Created responsive websites and web applications for various clients. Specialized in React development and modern CSS frameworks.",
                },
              ].map((job, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in hearing about new projects and opportunities. Whether you're a company
                  looking to hire, or you're someone with an idea, I'd love to hear from you.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2024 Alex Johnson. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
