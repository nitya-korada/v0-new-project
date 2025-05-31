"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { downloadResume } from "./resume-utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="blue-gradient-text">Sanjay Kumar</span>
            </Link>
            <p className="mt-2 text-white/60 max-w-md">
              Data Scientist and Analyst with a passion for extracting insights from data and creating impactful
              visualizations.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/saar2599"
              aria-label="GitHub"
              className="text-white/80 hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/sanjay-kumar-machanapally-2617b81b7"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:sanjaykumarm2599@gmail.com"
              aria-label="Email"
              className="text-white/80 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail />
            </a>
            <button
              onClick={downloadResume}
              aria-label="Resume"
              className="text-white/80 hover:text-blue-400 transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
            >
              <FileText />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">© {currentYear} Sanjay Kumar Machanapally. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
