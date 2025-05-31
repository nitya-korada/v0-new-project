"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitMessage("Thank you! Your message has been sent successfully.")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage("")
    }, 5000)
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    console.log("Email button clicked")
    window.location.href = "mailto:sanjaykumarm2599@gmail.com"
  }

  return (
    <section id="contact" className="bg-black py-10">
      <div className="section-container">
        <h2 className="section-title">
          Contact <span className="blue-gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white">Get in Touch</h3>
            <p className="text-white/80 mb-6">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
              projects, data science challenges, or opportunities to be part of your team.
            </p>

            <div className="space-y-4">
              <button
                onClick={handleEmailClick}
                className="flex items-start space-x-3 p-3 rounded-lg border border-white/10 hover:border-blue-500 transition-colors duration-300 w-full text-left bg-transparent"
              >
                <div className="mt-1">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-white/70">sanjaykumarm2599@gmail.com</p>
                </div>
              </button>
              <a
                href="tel:9409774602"
                className="flex items-start space-x-3 p-3 rounded-lg border border-white/10 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="mt-1">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-white/70">940-977-4602</p>
                </div>
              </a>
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-white/10 hover:border-blue-500 transition-colors duration-300">
                <div className="mt-1">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-white/70">Denton, Texas, USA</p>
                </div>
              </div>
              <a
                href="https://linkedin.com/in/sanjay-kumar-machanapally-2617b81b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 p-3 rounded-lg border border-white/10 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="mt-1">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <p className="text-white/70">Sanjay Kumar Machanapally</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-black/50 border border-white/10">
              <CardContent className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-white mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/20 text-white focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/20 text-white focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-white mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-white/20 text-white focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-white mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-black/50 border-white/20 text-white focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    {submitMessage && <p className="mt-4 text-green-400">{submitMessage}</p>}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
