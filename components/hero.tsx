"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "AI & Data Science Professional | ML Engineer • Analyst • Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hello, I'm <span className="blue-gradient-text">Sanjay Kumar Machanapally</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 h-8">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Analytical and detail-oriented professional with experience in data analysis, visualization, and delivering
          actionable insights from complex datasets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 text-white hover:bg-blue-600/20 text-lg px-8 py-6"
            asChild
          >
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-blue-400 h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
