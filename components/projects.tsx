"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Machine Learning", "Analysis"]

const projects = [
  {
    id: 1,
    title: "From Reviews to Reservations: A Data Science Approach to Hotel Recommendations",
    description:
      "Built a recommendation engine using NLP, machine learning, RNN, BERT, and k-means clustering to match guests with ideal hotels based on reviews.",
    image: "/images/hotel-recommender.png",
    category: "Machine Learning",
    technologies: ["NLP", "ML", "RNN", "BERT", "K-means clustering"],
    githubLink: "https://github.com/saar2599/Hotel_Recommendation_System",
    hasCode: true,
  },
  {
    id: 2,
    title: "Smart Inventory Management in Retail and Warehousing: A Data-Driven Approach",
    description:
      "Developed a predictive inventory system using GCP, HDFS, BigQuery, IoT sensors, and predictive analysis to optimize stock management.",
    image: "/images/smart-inventory.png",
    category: "Machine Learning",
    technologies: ["GCP", "HDFS", "BigQuery", "IoT", "Predictive Analysis"],
    githubLink: "#",
    hasCode: false,
  },
  {
    id: 3,
    title: "Advancing Non-Profit Fundraising with the Construction of Models",
    description:
      "Used EDA and regression models with SAS Enterprise Miner and ML libraries to identify donation drivers and optimize fundraising strategies.",
    image: "/images/nonprofit-fundraising.png",
    category: "Analysis",
    technologies: ["EDA", "Predictive Analysis", "Regression", "SAS Enterprise Miner", "ML"],
    githubLink: "#",
    hasCode: false,
  },
  {
    id: 4,
    title: "Text-Based Question Answering System Using SQuAD Dataset",
    description:
      "Developed a QA system fine-tuned on the SQuAD v1.1 dataset using pre-trained BERT models. Utilized Hugging Face Transformers for tokenization and model handling; implemented Flask for model interaction. Achieved over 85% EM and F1 score on validation set.",
    image: "/images/text-based-qa.png",
    category: "Analysis",
    technologies: ["NLP", "BERT", "Flask", "Python", "Transformers", "PyTorch"],
    githubLink: "https://github.com/saar2599/INFO-5731_Computational-Methods",
    hasCode: true,
  },
  {
    id: 5,
    title: "Reimagining Security: Revealing the Zero Trust Approach to Cyber Defense",
    description:
      "Explored Zero Trust Architecture (ZTA), Cybersecurity domains (CISSP), DLP, and Cloud Security (CASB) for modern cyber defense. This comprehensive analysis provides a framework for implementing robust security measures in today's digital landscape.",
    image: "/images/reimagining-security.png",
    category: "Analysis",
    technologies: ["ZTA", "Cybersecurity", "CISSP", "DLP", "CASB"],
    githubLink: "#",
    hasCode: false,
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  function prevProject() {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))
  }

  function nextProject() {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1))
  }

  function changeCategory(category) {
    setActiveCategory(category)
    setCurrentIndex(0)
  }

  return (
    <section id="projects" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="blue-gradient-text">Projects</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-600 text-white hover:bg-blue-600/20"
              }
              onClick={() => changeCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Main Project Card with Arrows */}
        <div className="relative max-w-3xl mx-auto">
          {filteredProjects.length > 0 && <ProjectCard project={filteredProjects[currentIndex]} />}

          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextProject}
            aria-label="Next project"
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center flex-wrap gap-3 mt-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-20 h-16 border-2 rounded overflow-hidden cursor-pointer transition-all duration-300 ${
                currentIndex === idx ? "border-blue-500 scale-105" : "border-gray-600"
              }`}
            >
              <Image
                src={proj.image || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-blue-500 transition-all duration-300 group">
      <div className="relative overflow-hidden h-80">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-end">
            {project.hasCode && (
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">{project.category}</span>
        </div>
        <p className="text-white/70 mb-4 text-base">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-black/50 border border-blue-500/50 text-blue-400 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
