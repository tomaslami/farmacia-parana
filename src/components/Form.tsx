"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prescriptionType: "humano",
    prescription: null as File | null,
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, prescription: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      prescriptionType: "humano",
      prescription: null,
      message: "",
    })
    alert("Solicitud enviada con éxito. Nos pondremos en contacto a la brevedad.")
  }

  return (
    <section className="py-16 px-4" id="solicitar">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Solicitá tu <span className="text-[#0D9488]">Receta Magistral</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">Completá el formulario y nos pondremos en contacto a la brevedad</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
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
                  checked={formData.prescriptionType === "humano"}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300"
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
                  checked={formData.prescriptionType === "veterinario"}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300"
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
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                />
              </label>
              {formData.prescription && (
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Archivo seleccionado: {formData.prescription.name}
                </p>
              )}
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
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
          className="w-full flex items-center justify-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white hover:bg-[#0D9488]/90 cursor-pointer"
                  >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  )
}
