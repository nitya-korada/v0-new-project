"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, Award } from "lucide-react"

const categories = ["All", "Machine Learning", "Analysis"]

const featuredProject = {
  id: 1,
  title: "From Reviews to Reservations: A Data Science Approach to Hotel Recommendations",
  subtitle: "Master's Capstone Project",
  description:
    "Built an intelligent recommendation engine using advanced NLP techniques, machine learning algorithms, and deep learning models. The system analyzes customer reviews using RNN, BERT, and k-means clustering to match guests with their ideal hotels based on sentiment analysis and preference patterns.",
  detailedDescription: [
    "Implemented sentence-transformers and embeddings for semantic search capabilities",
    "Applied sentiment analysis and topic modeling on 10,000+ customer reviews",
    "Developed RNN and BERT models achieving 85% accuracy in recommendation matching",
    "Created interactive dashboards in Tableau and Power BI for stakeholder insights",
    "Built Flask API for real-time recommendation serving",
  ],
  image: "/images/hotel-recommender.png",
  category: "Machine Learning",
  technologies: ["NLP", "Machine Learning", "RNN", "BERT", "K-means clustering", "Flask", "Tableau", "Python"],
  githubLink: "https://github.com/saar2599/Hotel_Recommendation_System",
  hasCode: true,
  isFeatured: true,
  achievements: ["85% Accuracy", "10K+ Reviews Analyzed", "Real-time API", "Interactive Dashboards"],
}

const otherProjects = [
  {
    id: 2,
    title: "Smart Inventory Management in Retail and Warehousing",
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
    title: "Advancing Non-Profit Fundraising with Data Models",
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
      "Developed a QA system fine-tuned on the SQuAD v1.1 dataset using pre-trained BERT models. Achieved over 85% EM and F1 score on validation set.",
    image: "/images/text-based-qa.png",
    category: "Analysis",
    technologies: ["NLP", "BERT", "Flask", "Python", "Transformers", "PyTorch"],
    githubLink: "https://github.com/saar2599/INFO-5731_Computational-Methods",
    hasCode: true,
  },
  {
    id: 5,
    title: "Reimagining Security: Zero Trust Approach to Cyber Defense",
    description:
      "Explored Zero Trust Architecture (ZTA), Cybersecurity domains (CISSP), DLP, and Cloud Security (CASB) for modern cyber defense.",
    image: "/images/reimagining-security.png",
    category: "Analysis",
    technologies: ["ZTA", "Cybersecurity", "CISSP", "DLP", "CASB"],
    githubLink: "#",
    hasCode: false,
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? otherProjects : otherProjects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="bg-black py-16">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="blue-gradient-text">Projects</span>
        </h2>

        {/* Featured Project - Hotel Recommender */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">Featured Capstone Project</h3>
            <Star className="h-6 w-6 text-yellow-400" />
          </div>

          <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-500/50 overflow-hidden hover:border-blue-400 transition-all duration-300 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative overflow-hidden h-80 lg:h-auto">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-black font-bold">
                    <Star className="h-3 w-3 mr-1" />
                    CAPSTONE
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-600/20 text-blue-400 border border-blue-500/50">
                      {featuredProject.category}
                    </Badge>
                    <Badge className="bg-green-600/20 text-green-400 border border-green-500/50">Master's Thesis</Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
                  <p className="text-blue-400 font-medium mb-4">{featuredProject.subtitle}</p>

                  <p className="text-white/80 mb-4 leading-relaxed">{featuredProject.description}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Implementations:</h4>
                    <ul className="space-y-2">
                      {featuredProject.detailedDescription.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-white/70 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Achievements:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {featuredProject.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-3 text-center"
                        >
                          <div className="text-blue-400 font-bold text-sm">{achievement}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-black/50 border border-blue-500/50 text-blue-400 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1" asChild>
                    <a href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/20">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>

          {/* Category Filter */}
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
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-blue-500 transition-all duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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

      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <Badge className="bg-blue-600/20 text-blue-400 border border-blue-500/50 text-xs">{project.category}</Badge>
          </div>

          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
          <p className="text-white/70 mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-black/50 border border-blue-500/50 text-blue-400 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-blue-400">+{project.technologies.length - 3} more</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
