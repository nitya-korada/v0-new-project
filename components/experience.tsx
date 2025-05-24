import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Database Architect Intern",
    company: "Local Grown Salads",
    location: "Denton, Texas, USA",
    period: "February 2025 - May 2025",
    description: [
      "Designed and optimized scalable PostgreSQL databases supporting operational data workflows aligned with business needs.",
      "Developed complex SQL queries to extract, aggregate, and transform large datasets for reporting and analytics.",
      "Created and maintained detailed Entity Relationship Diagrams (ERDs) to improve data integrity and query efficiency.",
      "Collaborated with cross-functional Agile teams using JIRA to translate requirements into robust database solutions.",
      "Delivered presentations to stakeholders on database design improvements and performance optimization.",
    ],
    skills: ["PostgreSQL", "SQL", "Data Modeling", "ERD", "JIRA", "Agile"],
  },
  {
    title: "Data Scientist",
    company: "University of North Texas",
    location: "Denton, Texas",
    period: "June 2023 - May 2024",
    description: [
      "Developed a hotel recommendation system using NLP and machine learning to analyze customer reviews and match guests with ideal hotels.",
      "Applied sentiment analysis and topic modeling on customer reviews to extract key insights and improve service strategies.",
      "Built and evaluated predictive models using RNN, BERT, and k-means clustering with 85% accuracy.",
      "Created interactive dashboards in Tableau and Power BI to visualize customer sentiment and preference patterns.",
    ],
    skills: ["Python", "NLP", "Machine Learning", "BERT", "Sentiment Analysis", "Tableau"],
  },
  {
    title: "Project Engineer",
    company: "Wipro Technologies",
    location: "Hyderabad, India",
    period: "July 2021 - December 2022",
    description: [
      "Developed and optimized robotic process automation (RPA) workflows using UiPath, reducing manual processing time by 40%.",
      "Authored detailed test plans and automated scripts, ensuring high-quality data workflows and defect reduction by 30%.",
      "Employed Python scripting to automate data validation and extraction processes.",
      "Collaborated with engineering and QA teams to improve data accuracy and workflow reliability.",
    ],
    skills: ["UiPath", "RPA", "Python", "Test Automation", "Process Optimization"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          Work <span className="blue-gradient-text">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-white/10 hover:border-blue-500 transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-white/70 bg-blue-900/20 px-3 py-1 rounded-full text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="list-disc pl-5 mb-3 space-y-1 text-white/80">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/50"
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
  )
}
