"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
  Code,
  Palette,
  Zap,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50)

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
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Florelyn Gregorio
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
                  )}
                </button>
              ))}
              {/* Resume Link */}
              <Link
                href="/resume"
                className="text-sm font-medium transition-all duration-300 hover:text-primary text-muted-foreground flex items-center space-x-1"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20">
                  <Star className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">Available for new projects</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Florelyn Gregorio
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer & Creative Designer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  I craft beautiful, functional, and user-centered digital experiences that solve real-world problems.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-600/5 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href="/resume">
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Link>
                </Button>
              </div>
              <div className="flex space-x-6">
                <Link
                  href="https://github.com/mutgregorio"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/florelyn-gregorio-4bb116341/"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 p-2 backdrop-blur-sm border border-white/20">
                  <Image
                    src="/profile.png"
                    alt="Florelyn Gregorio"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover w-full h-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Passionate About Digital Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating meaningful digital experiences that make a difference
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I offer web and app development services, specializing in creating custom websites and mobile
                applications tailored to your unique needs. From responsive website designs and e-commerce solutions to
                cross-platform mobile apps and seamless UI/UX design, I provide comprehensive solutions to help you
                achieve your digital goals. With a focus on quality, performance, and user satisfaction, I ensure your
                digital presence stands out.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Cacao, Zamboanga City
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Experience</h3>
                  <p className="text-muted-foreground">1+ year small capstone client</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "50+", label: "Projects Completed", icon: Code },
                { number: "30+", label: "Happy Clients", icon: Star },
                { number: "1+", label: "Years Experience", icon: Zap },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 hover:from-primary/5 hover:to-purple-600/5"
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Skills & Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Technologies I Master
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern digital solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Creating beautiful and responsive user interfaces",
                skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Flutter"],
                gradient: "from-blue-500 to-cyan-500",
                icon: Code,
              },
              {
                title: "Backend Development",
                description: "Building robust and scalable server-side applications",
                skills: ["Node.js", "PHP", "Dart", "MongoDB", "API Development", "MySQL"],
                gradient: "from-green-500 to-emerald-500",
                icon: Zap,
              },
              {
                title: "Tools & Platforms",
                description: "Development tools and cloud platforms I use",
                skills: ["Git", "XAMPP", "VS Code", "Figma"],
                gradient: "from-purple-500 to-pink-500",
                icon: Palette,
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 hover:from-primary/5 hover:to-purple-600/5 overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${category.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Projects I'm Proud Of
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FTC Online Payment",
                description: "A secure online payment system with modern UI and seamless user experience.",
                image: "/p2.png",
                tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                github: "#",
                live: "#",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                title: "Cinematic",
                description: "A movie database application with search and filtering capabilities.",
                image: "/project1.png",
                tags: ["HTML", "CSS", "PHP", "XAMPP"],
                github: "#",
                live: "#",
                gradient: "from-green-500 to-teal-600",
              },
              {
                title: "Portfolio",
                description: "A responsive portfolio website showcasing creative work and projects.",
                image: "/port.png",
                tags: ["React", "Framer Motion", "Tailwind CSS"],
                github: "#",
                live: "#",
                gradient: "from-pink-500 to-orange-500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-primary/10 hover:border-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 hover:bg-primary/5 hover:border-primary/20 bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                    >
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

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate to bring your ideas to life
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Ready to start your project?</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you're a company
                  looking to hire, or you're someone with an innovative idea, I'd love to hear from you.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "gregorioflorelyn413@gmail.com", href: "mailto:gregorioflorelyn413@gmail.com" },
                  { icon: Phone, label: "+63 99058822711", href: "tel:+6399058822711" },
                  { icon: MapPin, label: "Philippines, Zamboanga City", href: "#" },
                ].map((contact, index) => (
                  <Link
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-background to-muted/30 hover:from-primary/5 hover:to-purple-600/5 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-background to-muted/30 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-3">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Mut" className="h-12 border-2 focus:border-primary/50" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-3">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Gregorio" className="h-12 border-2 focus:border-primary/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="mut@example.com"
                      className="h-12 border-2 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-3">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="h-12 border-2 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="border-2 focus:border-primary/50 resize-none"
                    />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-gradient-to-r from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2025 Florelyn Gregorio. All rights reserved.</p>
              <p className="text-sm text-muted-foreground mt-1">Built with Next.js and Tailwind CSS</p>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/mutgregorio", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/florelyn-gregorio-4bb116341/", label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
