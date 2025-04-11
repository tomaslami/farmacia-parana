import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"

export default function WhyChooseSection() {
  return (
    <section className="py-16 px-4" id="beneficios">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          ¿Por qué elegir una <span className="text-[#0D9488]">Receta Magistral</span>?
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Adapted Dosage */}
          <div className="flex items-start">
            <div className="bg-[#0D9488]/10 rounded-full p-1 mr-4 mt-1">
              <Check className="h-5 w-5 text-[#0D9488]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Dosificación adaptada</h3>
              <p className="text-sm text-[#1E1E1E]">
                Ajustamos la dosis exacta según tus necesidades específicas, evitando excesos o defectos en la
                medicación.
              </p>
            </div>
          </div>

          {/* Without Allergens */}
          <div className="flex items-start">
            <div className="bg-[#0D9488]/10 rounded-full p-1 mr-4 mt-1">
              <Check className="h-5 w-5 text-[#0D9488]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Sin alergenos</h3>
              <p className="text-sm text-[#1E1E1E]">
                Eliminamos componentes que causan alergias o intolerancias, garantizando un tratamiento seguro.
              </p>
            </div>
          </div>

          {/* Available Alternatives */}
          <div className="flex items-start">
            <div className="bg-[#0D9488]/10 rounded-full p-1 mr-4 mt-1">
              <Check className="h-5 w-5 text-[#0D9488]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Alternativas disponibles</h3>
              <p className="text-sm text-[#1E1E1E]">
                Ofrecemos soluciones para medicamentos descontinuados o de difícil acceso en el mercado.
              </p>
            </div>
          </div>

          {/* Complete Personalization */}
          <div className="flex items-start">
            <div className="bg-[#0D9488]/10 rounded-full p-1 mr-4 mt-1">
              <Check className="h-5 w-5 text-[#0D9488]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Personalización completa</h3>
              <p className="text-sm text-[#1E1E1E]">
                Adaptamos el formato y vía de administración según tus preferencias y necesidades específicas.
              </p>
            </div>
          </div>
        </div>

        {/* Veterinary Use - Centered in its own row */}
        <div className="flex items-start justify-center mb-12">
          <div className="max-w-md flex items-start">
            <div className="bg-[#0D9488]/10 rounded-full p-1 mr-4 mt-1">
              <Check className="h-5 w-5 text-[#0D9488]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Uso veterinario</h3>
              <p className="text-sm text-[#1E1E1E]">
                Disponibilidad para uso veterinario, con fórmulas adaptadas según especie y tamaño de la mascota.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="#solicitud"
            className="border-[#0D9488] border-[1px] inline-flex items-center rounded-md bg-[#CCFBF1] px-5 py-2.5 text-sm font-medium text-[#0D9488] hover:bg-[#0D9488]/20"
          >
            Solicitar Receta
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
