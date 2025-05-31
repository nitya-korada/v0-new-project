"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code, Database, BarChart, Brain, LineChart, Layers, PieChart, AreaChart,
  Sigma, Braces, FileCode, Cpu, Table, Calculator, BookOpen, Terminal,
  FileJson, Microscope, Network, Sparkles, BarChart2, BarChart3,
} from "lucide-react"

const skillCategories = [
  {
    id: "languages",
    title: "Languages & Tools",
    skills: [
      { name: "Python", icon: Code, tooltip: "High-level programming language, great for automation and data science." },
      { name: "R", icon: Calculator, tooltip: "Statistical computing and graphics language widely used in data analysis." },
      { name: "SQL (PostgreSQL, MySQL)", icon: Database, tooltip: "Language to manage and query relational databases." },
      { name: "Java", icon: Code, tooltip: "General-purpose object-oriented programming language." },
      { name: "Scala", icon: Braces, tooltip: "Strongly-typed language combining functional and object-oriented programming." },
      { name: "Bash Scripting", icon: Terminal, tooltip: "Command-line scripting to automate system tasks." },
    ],
  },
  {
    id: "datascience",
    title: "Data Science",
    skills: [
      { name: "Machine Learning", icon: Brain, tooltip: "Techniques that allow computers to learn from data." },
      { name: "Statistical Analysis", icon: Sigma, tooltip: "Applying statistics to interpret data." },
      { name: "Natural Language Processing", icon: FileJson, tooltip: "Techniques for computers to understand human language." },
      { name: "Deep Learning", icon: Network, tooltip: "Neural network-based machine learning." },
      { name: "Predictive Modeling", icon: LineChart, tooltip: "Creating models to forecast future data." },
      { name: "Feature Engineering", icon: Layers, tooltip: "Creating useful input variables for models." },
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization",
    skills: [
      { name: "Tableau", icon: PieChart, tooltip: "Visual analytics platform." },
      { name: "Power BI", icon: BarChart, tooltip: "Business analytics service by Microsoft." },
      { name: "Matplotlib", icon: LineChart, tooltip: "Plotting library for Python." },
      { name: "Seaborn", icon: AreaChart, tooltip: "Statistical data visualization built on Matplotlib." },
      { name: "Plotly", icon: BarChart2, tooltip: "Interactive graphing library." },
      { name: "D3.js", icon: BarChart3, tooltip: "JavaScript library for dynamic data visualizations." },
    ],
  },
  {
    id: "tools",
    title: "Tools & Frameworks",
    skills: [
      { name: "Scikit-learn", icon: Microscope, tooltip: "Machine learning in Python." },
      { name: "TensorFlow", icon: Cpu, tooltip: "Open-source deep learning framework." },
      { name: "PyTorch", icon: Sparkles, tooltip: "Deep learning framework with dynamic computation." },
      { name: "Pandas", icon: Table, tooltip: "Data manipulation and analysis library." },
      { name: "NumPy", icon: Calculator, tooltip: "Scientific computing library for Python." },
      { name: "Jupyter Notebook", icon: BookOpen, tooltip: "Interactive computing environment." },
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md"
                        title={skill.tooltip}
                      >
                        <skill.icon className="h-6 w-6 text-blue-400" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
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
