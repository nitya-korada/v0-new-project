"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Database,
  BarChart,
  Brain,
  LineChart,
  Layers,
  PieChart,
  AreaChart,
  Sigma,
  Braces,
  FileCode,
  Cpu,
  Table,
  Calculator,
  BookOpen,
  Terminal,
  FileJson,
  Microscope,
  Network,
  Sparkles,
  BarChart2,
  BarChart3,
} from "lucide-react"

const skillCategories = [
  {
    id: "languages",
    title: "Languages & Tools",
    skills: [
      {
        name: "Python",
        level: 90,
        icon: Code,
        tooltip: "High-level programming language, great for automation and data science.",
      },
      {
        name: "R",
        level: 85,
        icon: Calculator,
        tooltip: "Statistical computing and graphics language widely used in data analysis.",
      },
      {
        name: "SQL (PostgreSQL, MySQL)",
        level: 95,
        icon: Database,
        tooltip: "Language to manage and query relational databases.",
      },
      {
        name: "Java",
        level: 75,
        icon: Code,
        tooltip: "General-purpose object-oriented programming language.",
      },
      {
        name: "Scala",
        level: 60,
        icon: Braces,
        tooltip: "Strongly-typed language combining functional and object-oriented programming.",
      },
      {
        name: "Bash Scripting",
        level: 70,
        icon: Terminal,
        tooltip: "Command-line scripting to automate system tasks.",
      },
    ],
  },
  {
    id: "datascience",
    title: "Data Science",
    skills: [
      {
        name: "Machine Learning",
        level: 85,
        icon: Brain,
        tooltip: "Techniques that allow computers to learn from data.",
      },
      {
        name: "Statistical Analysis",
        level: 90,
        icon: Sigma,
        tooltip: "Applying statistics to interpret data.",
      },
      {
        name: "Natural Language Processing",
        level: 80,
        icon: FileJson,
        tooltip: "Techniques for computers to understand human language.",
      },
      {
        name: "Deep Learning",
        level: 75,
        icon: Network,
        tooltip: "Neural network-based machine learning.",
      },
      {
        name: "Predictive Modeling",
        level: 85,
        icon: LineChart,
        tooltip: "Creating models to forecast future data.",
      },
      {
        name: "Feature Engineering",
        level: 90,
        icon: Layers,
        tooltip: "Creating useful input variables for models.",
      },
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization",
    skills: [
      {
        name: "Tableau",
        level: 85,
        icon: PieChart,
        tooltip: "Visual analytics platform.",
      },
      {
        name: "Power BI",
        level: 80,
        icon: BarChart,
        tooltip: "Business analytics service by Microsoft.",
      },
      {
        name: "Matplotlib",
        level: 90,
        icon: LineChart,
        tooltip: "Plotting library for Python.",
      },
      {
        name: "Seaborn",
        level: 85,
        icon: AreaChart,
        tooltip: "Statistical data visualization built on Matplotlib.",
      },
      {
        name: "Plotly",
        level: 80,
        icon: BarChart2,
        tooltip: "Interactive graphing library.",
      },
      {
        name: "D3.js",
        level: 70,
        icon: BarChart3,
        tooltip: "JavaScript library for dynamic data visualizations.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Frameworks",
    skills: [
      {
        name: "Scikit-learn",
        level: 90,
        icon: Microscope,
        tooltip: "Machine learning in Python.",
      },
      {
        name: "TensorFlow",
        level: 80,
        icon: Cpu,
        tooltip: "Open-source deep learning framework.",
      },
      {
        name: "PyTorch",
        level: 75,
        icon: Sparkles,
        tooltip: "Deep learning framework with dynamic computation.",
      },
      {
        name: "Pandas",
        level: 95,
        icon: Table,
        tooltip: "Data manipulation and analysis library.",
      },
      {
        name: "NumPy",
        level: 90,
        icon: Calculator,
        tooltip: "Scientific computing library for Python.",
      },
      {
        name: "Jupyter Notebook",
        level: 95,
        icon: BookOpen,
        tooltip: "Interactive computing environment.",
      },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="blue-gradient-text">Skills</span>
        </h2>

        <Tabs defaultValue="datascience" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-6">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="bg-black/50 border border-white/10">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function SkillBar({ skill }) {
  const [showValue, setShowValue] = useState(false)
  const Icon = skill.icon

  return (
    <div
      className="mb-4 cursor-default"
      onMouseEnter={() => setShowValue(true)}
      onMouseLeave={() => setShowValue(false)}
    >
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2" title={skill.tooltip}>
          <Icon
            className={`h-7 w-7 text-blue-400 transition-transform duration-300 ease-in-out
              hover:scale-110 hover:rotate-3
            `}
            aria-label={skill.name}
          />
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span
          className={`text-blue-400 transition-opacity duration-300 ${
            showValue ? "opacity-100" : "opacity-0"
          }`}
        >
          {skill.level}%
        </span>
      </div>
      <Progress
        value={skill.level}
        className="h-2 bg-white/10"
        indicatorClassName="bg-gradient-to-r from-blue-600 to-blue-400"
      />
    </div>
  )
}
