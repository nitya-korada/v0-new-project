import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Forage",
    date: "2023",
  },
  {
    title: "Data Science Job Simulation",
    issuer: "Forage",
    date: "2023",
  },
  {
    title: "SQL and Relational Databases",
    issuer: "IBM",
    date: "2022",
  },
  {
    title: "Data Analysis Using Excel",
    issuer: "Microsoft",
    date: "2022",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          <span className="blue-gradient-text">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-white/10 hover:border-blue-500 transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <Award className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <p className="text-blue-400">{cert.issuer}</p>
                    <p className="text-white/70 text-sm">{cert.date}</p>
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
