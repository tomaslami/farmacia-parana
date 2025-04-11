"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function handleSubmit(formData: FormData) {
  try {
    console.log("API Key exists:", !!process.env.RESEND_API_KEY)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const prescriptionType = formData.get("prescriptionType") as string
    const message = formData.get("message") as string
    const file = formData.get("prescription") as File | null

    if (!name || !email || !phone || !file) {
      console.log("Missing required fields")
      return {
        status: 400,
        message: "Por favor complete todos los campos requeridos",
      }
    }

    console.log("Processing form submission with file:", file?.name)

    // Convert file to base64 for email attachment
    let fileBase64: string | undefined
    let fileName: string | undefined

    if (file) {
      const fileArrayBuffer = await file.arrayBuffer()
      const fileBuffer = Buffer.from(fileArrayBuffer)
      fileBase64 = fileBuffer.toString("base64")
      fileName = file.name
    }

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: "Solicitud@farmacianuevaparana.com.ar",
      to: ["tomaslamiguralnik@gmail.com"],
      subject: "Nueva solicitud de Receta",
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Tipo:</strong> ${prescriptionType}</p>
        <p><strong>Mensaje:</strong> ${message || "No se proporcionó mensaje"}</p>
      `,
      attachments:
        fileBase64 && fileName
          ? [
              {
                filename: fileName,
                content: fileBase64,
              },
            ]
          : [],
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        status: 500,
        message: "Error al enviar el email. Por favor intente nuevamente.",
      }
    }

    console.log("Email sent successfully:", data)
    return {
      status: 200,
      message: "Solicitud enviada exitosamente. Nos pondremos en contacto a la brevedad.",
    }
  } catch (error) {
    console.error("Full error object:", error)
    return {
      status: 500,
      message: "Error al enviar el email. Por favor intente nuevamente.",
    }
  }
}
