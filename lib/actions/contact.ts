"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  inquiryType: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {

    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }


    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission - Killer Instinct Robotics</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0891b2, #06b6d4); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #06b6d4; }
        .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #06b6d4; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        .timestamp { color: #666; font-size: 12px; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Killer Instinct Robotics Team</p>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <div class="value">${formData.name}</div>
            </div>
            
            <div class="field">
                <span class="label">Email Address:</span>
                <div class="value">${formData.email}</div>
            </div>
            
            <div class="field">
                <span class="label">Subject:</span>
                <div class="value">${formData.subject}</div>
            </div>
            
            <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${formData.message}</div>
            </div>
            
            <div class="timestamp">
                Submitted on: ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
            </div>
        </div>
        
        <div class="footer">
            <p>This message was sent through the Killer Instinct Robotics contact form.</p>
            <p>Team 20381 | Santa Susana High School</p>
        </div>
    </div>
</body>
</html>
    `

    const { data, error } = await resend.emails.send({
      from: "Killer Instinct Contact Form <onboarding@resend.dev>",
      to: ["sshsroboticsclub@gmail.com"],
      replyTo: formData.email,
      subject: `[Contact Form] ${formData.subject}`,
      html: emailContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        error: "Failed to send email. Please try again or contact us directly.",
      }
    }

    console.log("Email sent successfully:", data)
    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
