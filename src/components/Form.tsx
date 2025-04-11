"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"
import { handleSubmit } from "@/actions/contact-action"
import { toast, Toaster } from "sonner"

export default function RequestForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName(null)
    }
  }

  async function onSubmit(formData: FormData) {
    setIsLoading(true)

    try {
      const res = await handleSubmit(formData)

      if (res.status === 200) {
        toast.success(res.message)
        // Reset the form
        const form = document.getElementById("solicitud") as HTMLFormElement
        form?.reset()
        setFileName(null)
      } else {
        const messages = Array.isArray(res.message) ? res.message : [res.message]
        messages.forEach((msg: string) => toast.error(msg))
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 px-4" id="solicitar">
      <Toaster position="top-center" duration={3000} richColors />
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Solicitá tu <span className="text-[#0D9488]">Receta Magistral</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">Completá el formulario y nos pondremos en contacto a la brevedad</p>
        </div>

        <form id="solicitud" action={onSubmit}  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
            />
          </div>

          {/* Phone field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
            />
          </div>

          {/* Prescription type radio buttons */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-1">¿La receta es para uso humano o veterinario?</p>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="humano"
                  name="prescriptionType"
                  value="humano"
                  defaultChecked
                  className="custom-radio"
                />
                <label htmlFor="humano" className="ml-2 text-sm text-gray-700">
                  Humano
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="veterinario"
                  name="prescriptionType"
                  value="veterinario"
                  className="custom-radio"
                />
                <label htmlFor="veterinario" className="ml-2 text-sm text-gray-700">
                  Veterinario
                </label>
              </div>
            </div>
          </div>

          {/* File upload */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-1">Subir Receta Médica</p>
            <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
              <label
                htmlFor="prescription"
                className="flex flex-col items-center justify-center cursor-pointer text-center"
              >
                <Upload className="h-6 w-6 text-gray-400 mb-2" />
                <p className="text-xs text-gray-500">Haz clic para subir o arrastra y suelta aquí</p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG o PDF (máx. 10MB)</p>
                <input
                  type="file"
                  id="prescription"
                  name="prescription"
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {fileName && <p className="text-xs text-gray-600 mt-2 text-center">Archivo seleccionado: {fileName}</p>}
            </div>
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje (Opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white hover:bg-[#0D9488]/90 cursor-pointer disabled:opacity-70"
          >
            {isLoading ? "Enviando..." : "Enviar Solicitud"}
          </button>
        </form>
      </div>
    </section>
  )
}
