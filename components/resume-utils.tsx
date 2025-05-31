const resumeData = {
  name: "Sanjay Kumar Machanapally",
  phone: "940-977-4602",
  email: "sanjaykumarm2599@gmail.com",
  linkedin: "https://linkedin.com/in/sanjay-kumar-machanapally-2617b81b7",
  objective:
    "Analytical and detail-oriented AI & Data Science professional with hands-on experience in machine learning, natural language processing, and data visualization. Proven ability to derive actionable insights from complex datasets and develop intelligent solutions for real-world problems. Adept in Python, SQL, NLP, Tableau, and cloud-based platforms with a focus on predictive modeling, deep learning, and feature engineering.",
  experience: [
    {
      role: "Database Architect Intern",
      dates: "February 2025 - May 2025",
      company: "Local Grown Salads",
      location: "Denton, Texas, United States",
      bullets: [
        "Engineered and optimized PostgreSQL databases handling complex, high-volume data for enriched AI-driven querying and retrieval.",
        "Automated ETL workflows using Python and SQL, accelerating data processing efficiency by 30%, enabling real-time analytics and faster knowledge enrichment.",
        "Developed performant query procedures boosting report generation speed by 30%, enhancing decision-making with up-to-date semantic data access.",
        "Partnered with cross-disciplinary Agile teams to deliver intuitive dashboards and reports supporting ontology-based knowledge graph applications.",
      ],
    },
    {
      role: "Data Scientist",
      dates: "June 2023 - May 2024",
      company: "University of North Texas",
      location: "Denton, Texas",
      bullets: [
        "Built advanced NLP models incorporating sentence-transformers and embeddings to power semantic search, clustering, and sentiment analysis on large datasets.",
        "Integrated structured data and unstructured text through vector similarity techniques and clustering (K-means), enhancing AI recommendation systems.",
        "Developed and deployed Flask APIs simulating real-world AI service environments, enabling seamless interaction with ML models via REST interfaces.",
        "Delivered interactive Tableau and Power BI dashboards visualizing model insights and embedding-driven knowledge representations for stakeholders.",
        "Applied rigorous model evaluation combining human-in-the-loop qualitative feedback with quantitative metrics to optimize performance and coherence.",
      ],
    },
    {
      role: "Project Engineer",
      dates: "July 2021 - December 2022",
      company: "Wipro Technologies",
      location: "Hyderabad, India",
      bullets: [
        "Automated over 500 weekly transactions via UiPath RPA workflows, reducing manual handling time by 40%, streamlining data acquisition for AI pipelines.",
        "Led quality assurance for 100+ enterprise applications, reducing post-deployment defects by 30% through test-driven development and automation scripting (Python).",
        "Provided analytics on deployment performance and error rates, informing iterative improvements to automation robustness and reliability.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Lung Cancer Detection Chatbot",
      tech: "Python, PyTorch, Streamlit, Transformers",
      bullets: [
        "Built a multilingual clinical chatbot integrating advanced image classification (Swin, ViT) and domain-specific NLP (BioBERT) for lung cancer detection.",
        "Leveraged multimodal embeddings (CLIP) and cross-lingual models (NLLB) to enable accurate, context-aware responses across languages.",
        "Delivered an interactive Streamlit interface, improving clinical decision support with real-time image analysis and conversational AI.",
      ],
    },
    {
      title: "Text-Based Question Answering System using SQuAD Dataset",
      tech: "Python, Transformers, PyTorch, Flask",
      bullets: [
        "Developed a QA system fine-tuned on the SQuAD v1.1 dataset using pre-trained BERT models.",
        "Utilized Hugging Face Transformers for tokenization and model handling; implemented Flask for model interaction.",
        "Achieved over 85% EM and F1 score on validation set; deployed locally with REST API support.",
      ],
    },
    {
      title: "Hotel Review Sentiment Analysis & Recommendation Engine",
      tech: "Python, NLP, Clustering, Flask",
      bullets: [
        "Scraped and cleaned 2,000+ TripAdvisor reviews; applied sentence-transformer embeddings and K-means clustering to enable personalized, semantic search-based hotel recommendations.",
        "Built a user-centric Flask interface delivering tailored suggestions through vector similarity and ontology-like feature groupings.",
      ],
    },
  ],
  community: [
    {
      role: "Coordinator",
      dates: "March 2023 – Present",
      org: "Swagath – International Student Welcome Community",
      location: "Denton, Texas",
      bullets: [
        "Organized large-scale events facilitating integration of international students, improving community engagement and support.",
        "Coordinated logistics and collaborated with university stakeholders to ensure smooth execution of events.",
      ],
    },
  ],
  technicalSkills: [
    "Python",
    "SQL",
    "R",
    "Bash",
    "Tableau",
    "Power BI",
    "Jupyter",
    "Data Cleaning",
    "Predictive Modeling",
    "NLP",
    "Statistical Analysis",
    "Sentiment Analysis",
    "Feature Engineering",
    "Hugging Face Transformers",
    "PyTorch",
    "TensorFlow",
    "sentence-transformers",
    "semantic search",
    "clustering (K-means)",
    "Scikit-learn",
    "BERT",
    "RNN",
    "PostgreSQL",
    "BigQuery",
    "GCP",
    "matplotlib",
    "seaborn",
    "UiPath (RPA)",
    "ERD Design",
    "Agile",
    "JIRA",
    "Strong analytical thinking",
    "problem solving",
    "effective communication",
    "collaboration & teamwork",
    "attention to detail",
    "adaptability & flexibility",
    "time management",
    "customer obsession",
    "self-motivation & initiative",
    "critical thinking",
  ],
  certifications: [
    "Data Analytics and Visualization Job Simulation",
    "Data Science Job Simulation",
    "SQL and Relational Databases",
    "Data Analysis Using Excel",
  ],
  education: [
    {
      school: "University of North Texas",
      location: "Denton, Texas, USA",
      degree: "Master's in Data Science",
      dates: "January 2023 -- May 2024",
    },
    {
      school: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      degree: "Bachelor's in Electronics and Communication Engineering",
      dates: "August 2017 -- May 2021",
    },
  ],
}

const Resume = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>{resumeData.name}</h1>
        <div style={styles.contact}>
          <span>{resumeData.phone} | </span>
          <a href={`mailto:${resumeData.email}`} style={styles.link}>
            {resumeData.email}
          </a>{" "}
          |{" "}
          <a href={resumeData.linkedin} target="_blank" rel="noreferrer" style={styles.link}>
            {resumeData.linkedin}
          </a>
        </div>
      </header>

      {/* Objective */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Objective</h2>
        <p style={styles.paragraph}>{resumeData.objective}</p>
      </section>

      {/* Experience */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        {resumeData.experience.map((exp, idx) => (
          <div key={idx} style={styles.subSection}>
            <div style={styles.subheadingRow}>
              <strong>{exp.role}</strong>
              <span style={styles.dates}>{exp.dates}</span>
            </div>
            <div style={styles.subheadingRow}>
              <em>
                {exp.company}, {exp.location}
              </em>
            </div>
            <ul style={styles.list}>
              {exp.bullets.map((item, i) => (
                <li key={i} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        {resumeData.projects.map((proj, idx) => (
          <div key={idx} style={styles.subSection}>
            <div style={styles.subheadingRow}>
              <strong>{proj.title}</strong>
              <span style={styles.dates}>{proj.tech}</span>
            </div>
            <ul style={styles.list}>
              {proj.bullets.map((item, i) => (
                <li key={i} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Community & Leadership */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Community & Leadership</h2>
        {resumeData.community.map((com, idx) => (
          <div key={idx} style={styles.subSection}>
            <div style={styles.subheadingRow}>
              <strong>{com.role}</strong>
              <span style={styles.dates}>{com.dates}</span>
            </div>
            <div style={styles.subheadingRow}>
              <em>
                {com.org}, {com.location}
              </em>
            </div>
            <ul style={styles.list}>
              {com.bullets.map((item, i) => (
                <li key={i} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Technical Skills */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <ul style={styles.skillsList}>
          {resumeData.technicalSkills.map((skill, idx) => (
            <li key={idx} style={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Certifications</h2>
        <ul style={styles.list}>
          {resumeData.certifications.map((cert, idx) => (
            <li key={idx} style={styles.listItem}>
              {cert}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {resumeData.education.map((edu, idx) => (
          <div key={idx} style={styles.subSection}>
            <strong>{edu.school}</strong>, {edu.location}
            <br />
            <em>{edu.degree}</em> | <span style={styles.dates}>{edu.dates}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "'Times New Roman', Times, serif",
    maxWidth: 800,
    margin: "auto",
    padding: 20,
    lineHeight: 1.5,
    color: "#222",
  },
  header: {
    borderBottom: "2px solid black",
    marginBottom: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
  name: {
    fontSize: "2.2rem",
    margin: 0,
    fontWeight: "bold",
  },
  contact: {
    marginTop: 5,
    fontSize: "0.9rem",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    borderBottom: "1px solid #444",
    paddingBottom: 4,
    marginBottom: 10,
  },
  subSection: {
    marginBottom: 12,
  },
  subheadingRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1rem",
    marginBottom: 4,
  },
  dates: {
    fontStyle: "italic",
    color: "#666",
    fontSize: "0.9rem",
  },
  paragraph: {
    fontSize: "1rem",
    margin: 0,
  },
  list: {
    marginTop: 0,
    marginLeft: 20,
  },
  listItem: {
    marginBottom: 6,
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 0,
    marginLeft: 0,
  },
  skillItem: {
    marginRight: 15,
    marginBottom: 8,
    padding: "4px 8px",
    backgroundColor: "#eee",
    borderRadius: 4,
    fontSize: "0.9rem",
  },
}

// Function to download resume as text file
export function downloadResume() {
  const resumeText = `SANJAY KUMAR MACHANAPALLY
Data Scientist & ML Engineer
Email: sanjaykumarm2599@gmail.com
Phone: 940-977-4602
Location: Denton, Texas, USA

EDUCATION
---------
Master's in Data Science
University of North Texas, Denton, Texas, USA
January 2023 – May 2024

Bachelor's in Electronics and Communication Engineering
Jawaharlal Nehru Technological University, Hyderabad, India
August 2017 – May 2021

EXPERIENCE
----------
Database Architect Intern
Local Grown Salads, Denton, Texas, USA
February 2025 - May 2025

Data Scientist
University of North Texas, Denton, Texas
June 2023 - May 2024

Project Engineer
Wipro Technologies, Hyderabad, India
July 2021 - December 2022

SKILLS
------
Languages & Tools: Python, R, SQL, Java, Scala, Bash
Data Science: Machine Learning, Statistical Analysis, NLP, Deep Learning
Visualization: Tableau, Power BI, Matplotlib, Seaborn, Plotly
Tools & Frameworks: Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy

PROJECTS
--------
- AI Lung Cancer Detection Chatbot
- Text-Based Question Answering System using SQuAD Dataset
- Hotel Review Sentiment Analysis & Recommendation Engine
- Smart Inventory Management System
- Non-Profit Fundraising Analysis

CERTIFICATIONS
--------------
- Data Analytics and Visualization Job Simulation
- Data Science Job Simulation
- SQL and Relational Databases
- Data Analysis Using Excel`

  // Create a Blob with the text content
  const blob = new Blob([resumeText], { type: "text/plain" })

  // Create a URL for the blob
  const url = URL.createObjectURL(blob)

  // Create a link element
  const link = document.createElement("a")
  link.href = url
  link.download = "Sanjay_Kumar_Resume.txt"

  // Append to the document, click it, and remove it
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Clean up the URL object
  URL.revokeObjectURL(url)
}

export default Resume
