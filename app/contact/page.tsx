"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { sendContactEmail } from "../../lib/actions/contact"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: "", 
        subject: "Contact Request from Website", 
        message: formData.message,
        inquiryType: "general", 
      })

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        })

        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" })
          setFormData({
            name: "",
            email: "",
            message: "",
          })
        }, 3000)
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 1600px at 50% 50%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
          minHeight: "100vh",
        }}
      />
      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans text-white mb-16 leading-tight">
                Let's Get
                <br />
                in Touch
              </h1>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white font-sans mb-2">Phone Number</h3>
                  <a
                    href="tel:+8188775066"
                    className="text-xl text-cyan-400 font-sans hover:text-cyan-300 transition-colors duration-200"
                  >
                    +818 877-5066
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-sans mb-2">Email</h3>
                  <a
                    href="mailto:sshsrboticclub@gmail.com"
                    className="text-xl text-cyan-400 font-sans hover:text-cyan-300 transition-colors duration-200"
                  >
                    sshsroboticsclub@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-sans mb-2">Address</h3>
                  <a
                    href="https://maps.google.com/?q=3570+Cochran+St,+Simi+Valley,+CA+93063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-cyan-400 font-sans hover:text-cyan-300 transition-colors duration-200"
                  >
                    3570 Cochran St, Simi Valley, CA 93063
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end pl-8">
              <Card className="w-full max-w-lg bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 hover:bg-white/8">
                <CardContent className="p-8">
                  {submitStatus.type === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold text-white font-sans mb-2">Message Sent!</h3>
                      <p className="text-white/80 font-sans">
                        Your message has been delivered to our team. We'll get back to you soon!
                      </p>
                    </div>
                  ) : (
                    <>
                      {submitStatus.type === "error" && (
                        <Alert className="mb-6 bg-red-500/20 border-red-400/50 text-red-300">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="font-sans">{submitStatus.message}</AlertDescription>
                        </Alert>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Your Name */}
                        <div className="relative">
                          <label htmlFor="name" className="block text-white font-sans text-lg mb-4">
                            Your Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none pb-2 text-lg font-sans transition-colors duration-200"
                            placeholder=""
                          />
                        </div>
                        {/* Your Email */}
                        <div className="relative">
                          <label htmlFor="email" className="block text-white font-sans text-lg mb-4">
                            Your Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none pb-2 text-lg font-sans transition-colors duration-200"
                            placeholder=""
                          />
                        </div>
                        {/* Share your thoughts */}
                        <div className="relative">
                          <label htmlFor="message" className="block text-white font-sans text-lg mb-4">
                            Share your thoughts
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={1}
                            className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none pb-2 text-lg font-sans resize-none transition-colors duration-200 min-h-[1.5rem] overflow-hidden"
                            placeholder=""
                            style={{
                              height: "auto",
                            }}
                            onInput={(e) => {
                              const target = e.target as HTMLTextAreaElement
                              target.style.height = "auto"
                              target.style.height = target.scrollHeight + "px"
                            }}
                          />
                        </div>
                        {/* Submit Button */}
                        <div className="pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            size="lg"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-105 font-sans px-8 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </div>
                            ) : (
                              <>
                                Send Message
                                <Send className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
