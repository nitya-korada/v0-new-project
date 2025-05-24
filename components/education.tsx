import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master's in Data Science",
    institution: "University of North Texas",
    location: "Denton, Texas, USA",
    period: "January 2023 – May 2024",
    description: "Focused on advanced data engineering, machine learning, and statistical analysis techniques.",
  },
  {
    degree: "Bachelor's in Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    period: "August 2017 – May 2021",
    description: "Developed strong analytical and problem-solving skills through engineering coursework and projects.",
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          <span className="blue-gradient-text">Education</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-white/10 hover:border-blue-500 transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-white/70 bg-blue-900/20 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-400 mt-1">{edu.institution}</p>
                    <p className="text-white/70 text-sm">{edu.location}</p>
                    <p className="text-white/80 mt-3">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
