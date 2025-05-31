"use client"

import Image from "next/image"
import { FileDown } from 'lucide-react'
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="blue-gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-blue-500 blue-glow">
              <Image
                src="/images/profile.png"
                alt="Sanjay Kumar Machanapally"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              A passionate AI & Data Science Professional based in Denton, Texas
            </h3>

            <p className="text-white/80 mb-4">
              I apply data science and analytics to solve real-world problems through intelligent, data-driven
              solutions. With experience in both machine learning engineering and data analysis, I bridge the gap
              between building AI systems and delivering actionable insights. From predictive modeling and deep learning
              to statistical analysis and visualization, I work across the AI and analytics spectrum using tools like
              Python, SQL, PyTorch, and Tableau — always focused on transforming complex data into meaningful impact.
            </p>

            <p className="text-white/80 mb-6">
              I believe data is more than just numbers — it's about uncovering patterns, solving problems, and
              generating intuitive insights that drive smarter decisions and business success.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-blue-400 font-bold mb-1">Name:</h4>
                <p className="text-white">Sanjay Kumar Machanapally</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-1">Email:</h4>
                <p className="text-white">sanjaykumarm2599@gmail.com</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-1">Location:</h4>
                <p className="text-white">Denton, Texas, USA</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-1">Phone:</h4>
                <p className="text-white">940-977-4602</p>
              </div>
            </div>

            <Link
              href="/resume"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center w-fit"
            >
              <FileDown className="mr-2 h-4 w-4" />
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
