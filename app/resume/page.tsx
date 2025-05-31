"use client"

import { Download } from 'lucide-react'
import { useEffect } from "react"
import Link from "next/link"

export default function ResumePage() {
  const handlePrint = () => {
    const originalTitle = document.title
    document.title = 'Sanjay_Kumar_Machanapally_Resume'
    window.print()
    setTimeout(() => {
      document.title = originalTitle
    }, 1000)
  }

  useEffect(() => {
    document.title = "Sanjay Kumar Machanapally - Resume"
    
    // Hide navbar
    const navbar = document.querySelector('nav')
    if (navbar) {
      navbar.style.display = 'none'
    }
    
    return () => {
      if (navbar) {
        navbar.style.display = 'block'
      }
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @media print {
          nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          body { margin: 0; padding: 0; }
          @page { margin: 0.5in; }
        }
      `}</style>
      
      <div className="bg-white text-black min-h-screen">
        <button
          onClick={handlePrint}
          className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors print:hidden z-[100]"
        >
          <Download className="h-4 w-4" /> Download PDF
        </button>

        <Link
          href="/"
          className="fixed top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors print:hidden z-[100]"
        >
          Back to Portfolio
        </Link>

        <div className="max-w-[800px] mx-auto p-8 print:p-0 print:mx-0 print:max-w-none pt-20">
          {/* Header */}
          <div className="text-center border-b-2 border-blue-600 pb-4 mb-6">
            <h1 className="text-3xl font-bold mb-2">Sanjay Kumar Machanapally</h1>
            <div className="text-gray-600">
              940-977-4602 | sanjaykumarm2599@gmail.com |{" "}
              <a
                href="https://linkedin.com/in/sanjay-kumar-machanapally-2617b81b7"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/sanjay-kumar-machanapally-2617b81b7
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">Objective</h2>
            <p className="text-sm text-justify">
              Analytical and detail-oriented AI Data Science professional with hands-on experience in machine learning,
              natural language processing, and data visualization. Proven ability to derive actionable insights from complex
              datasets and develop intelligent solutions for real-world problems. Adept in Python, SQL, NLP, Tableau, and
              cloud-based platforms with a focus on predictive modeling, deep learning, and feature engineering.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">Experience</h2>

            <div className="mb-4">
              <div className="font-bold">Database Architect Intern</div>
              <div className="italic text-blue-600">Local Grown Salads</div>
              <div className="text-xs text-gray-600 mb-2">February 2025 - May 2025 | Denton, Texas, United States</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Engineered and optimized PostgreSQL databases handling complex, high-volume data for enriched AI-driven
                  querying and retrieval.
                </li>
                <li>
                  Automated ETL workflows using Python and SQL, accelerating data processing efficiency by 30%, enabling
                  real-time analytics and faster knowledge enrichment.
                </li>
                <li>
                  Developed performant query procedures boosting report generation speed by 30%, enhancing decision-making with
                  up-to-date semantic data access.
                </li>
                <li>
                  Partnered with cross-disciplinary Agile teams to deliver intuitive dashboards and reports supporting ontology-based
                  knowledge graph applications.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="font-bold">Data Scientist</div>
              <div className="italic text-blue-600">University of North Texas</div>
              <div className="text-xs text-gray-600 mb-2">June 2023 - May 2024 | Denton, Texas</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Built advanced NLP models incorporating sentence-transformers and embeddings to power semantic search,
                  clustering, and sentiment analysis on large datasets.
                </li>
                <li>
                  Integrated structured data and unstructured text through vector similarity techniques and clustering (K-means),
                  enhancing AI recommendation systems.
                </li>
                <li>
                  Developed and deployed Flask APIs simulating real-world AI service environments, enabling seamless interaction
                  with ML models via REST interfaces.
                </li>
                <li>
                  Delivered interactive Tableau and Power BI dashboards visualizing model insights and embedding-driven knowledge
                  representations for stakeholders.
                </li>
                <li>
                  Applied rigorous model evaluation combining human-in-the-loop qualitative feedback with quantitative metrics to
                  optimize performance and coherence.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="font-bold">Project Engineer</div>
              <div className="italic text-blue-600">Wipro Technologies</div>
              <div className="text-xs text-gray-600 mb-2">July 2021 - December 2022 | Hyderabad, India</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Automated over 500 weekly transactions via UiPath RPA workflows, reducing manual handling time by 40%,
                  streamlining data acquisition for AI pipelines.
                </li>
                <li>
                  Led quality assurance for 100+ enterprise applications, reducing post-deployment defects by 30% through
                  test-driven development and automation scripting (Python).
                </li>
                <li>
                  Provided analytics on deployment performance and error rates, informing iterative improvements to automation
                  robustness and reliability.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">Projects</h2>

            <div className="mb-3">
              <div className="font-bold">AI Lung Cancer Detection Chatbot</div>
              <div className="italic text-xs text-blue-600">Python, PyTorch, Streamlit, Transformers</div>
              <div className="text-xs text-gray-600 mb-1">May 2025</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Built a multilingual clinical chatbot integrating advanced image classification (Swin, ViT) and domain-specific NLP
                  (BioBERT) for lung cancer detection.
                </li>
                <li>
                  Leveraged multimodal embeddings (CLIP) and cross-lingual models (NLLB) to enable accurate, context-aware
                  responses across languages.
                </li>
                <li>
                  Delivered an interactive Streamlit interface, improving clinical decision support with real-time image analysis and
                  conversational AI.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="font-bold">Text-Based Question Answering System using SQuAD Dataset</div>
              <div className="italic text-xs text-blue-600">Python, Transformers, PyTorch, Flask</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Developed a QA system fine-tuned on the SQuAD v1.1 dataset using pre-trained BERT models.
                </li>
                <li>
                  Utilized Hugging Face Transformers for tokenization and model handling; implemented Flask for model interaction.
                </li>
                <li>Achieved over 85% EM and F1 score on validation set; deployed locally with REST API support.</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="font-bold">Hotel Review Sentiment Analysis & Recommendation Engine</div>
              <div className="italic text-xs text-blue-600">Python, NLP, Clustering, Flask</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Scraped and cleaned 2,000+ TripAdvisor reviews; applied sentence-transformer embeddings and K-means clustering
                  to enable personalized, semantic search-based hotel recommendations.
                </li>
                <li>
                  Built a user-centric Flask interface delivering tailored suggestions through vector similarity and ontology-like
                  feature groupings.
                </li>
              </ul>
            </div>
          </div>

          {/* Community & Leadership */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">
              Community & Leadership
            </h2>

            <div className="mb-4">
              <div className="font-bold">Coordinator</div>
              <div className="italic text-blue-600">Swagath – International Student Welcome Community</div>
              <div className="text-xs text-gray-600 mb-2">March 2023 – Present | Denton, Texas</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Organized large-scale events facilitating integration of international students, improving community engagement
                  and support.
                </li>
                <li>
                  Coordinated logistics and collaborated with university stakeholders to ensure smooth execution of events.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <span className="font-bold">Languages & Tools:</span> Python, SQL, R, Bash, Tableau, Power BI, Jupyter
              </div>
              <div>
                <span className="font-bold">Data Science & Analytics:</span> Data Cleaning, Predictive Modeling, NLP, Statistical Analysis, Sentiment Analysis, Feature Engineering
              </div>
              <div>
                <span className="font-bold">GenAI & NLP:</span> Hugging Face Transformers, PyTorch, TensorFlow, sentence-transformers, semantic search, embeddings, clustering (K-means)
              </div>
              <div>
                <span className="font-bold">Machine Learning Frameworks:</span> PyTorch, TensorFlow, Scikit-learn, BERT, RNN
              </div>
              <div>
                <span className="font-bold">Data Engineering & Storage:</span> PostgreSQL, BigQuery, GCP
              </div>
              <div>
                <span className="font-bold">Data Visualization & BI:</span> Tableau, Power BI, matplotlib, seaborn
              </div>
              <div>
                <span className="font-bold">Other Tools:</span> UiPath (RPA), ERD Design, Agile, JIRA
              </div>
              <div>
                <span className="font-bold">Soft Skills:</span> Strong analytical thinking, problem solving, effective communication, collaboration & teamwork, attention to detail, adaptability & flexibility, time management, customer obsession, self-motivation & initiative, critical thinking
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">Education</h2>

            <div className="mb-3">
              <div className="font-bold">Master's in Data Science</div>
              <div className="italic text-blue-600">University of North Texas</div>
              <div className="text-xs text-gray-600">January 2023 – May 2024 | Denton, Texas, USA</div>
            </div>

            <div className="mb-3">
              <div className="font-bold">Bachelor's in Electronics and Communication Engineering</div>
              <div className="italic text-blue-600">Jawaharlal Nehru Technological University</div>
              <div className="text-xs text-gray-600">August 2017 – May 2021 | Hyderabad, India</div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-lg font-bold text-blue-600 border-b border-blue-600 pb-1 mb-3 uppercase">
              Certifications
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-bold">Data Analytics and Visualization Job Simulation</div>
              </div>
              <div>
                <div className="font-bold">Data Science Job Simulation</div>
              </div>
              <div>
                <div className="font-bold">SQL and Relational Databases</div>
              </div>
              <div>
                <div className="font-bold">Data Analysis Using Excel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
