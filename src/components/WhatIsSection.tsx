import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

// Define the card data structure to avoid repetition
const cards = [
  {
    icon: "/icons/health.svg",
    title: "Médico",
    description: "Prescribe la fórmula personalizada según tus necesidades específicas",
  },
  {
    icon: "/icons/vet.svg",
    title: "Veterinario",
    description: "Formula medicación adaptada para cada especie animal",
  },
  {
    icon: "/icons/doc.svg",
    title: "Farmacéutico",
    description: "Elabora el preparado siguiendo estrictos protocolos de calidad",
  },
  {
    icon: "/icons/people.svg",
    title: "Paciente",
    description: "Recibe un medicamento adaptado específicamente a sus necesidades",
  },
  {
    icon: "/icons/paw.svg",
    title: "Mascota",
    description: "Tratamiento formulado según especie, peso y necesidades específicas",
  },
]

export default function WhatIsSection() {
  return (
    <section className="bg-[#F7F7F7] py-12 md:py-20" id="que-es">
      <div className="container mx-auto xl:max-w-[1280px] lg:max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          ¿Qué es una <span className="text-[#0D9488]">Receta Magistral</span>?
        </h2>

        {/* Description */}
        <p className="text-center text-sm md:text-base max-w-3xl mx-auto mb-8 md:mb-12">
          Las recetas magistrales son preparados realizados por un farmacéutico a partir de una fórmula médica o
          veterinaria individualizada. Se utilizan cuando un medicamento no se encuentra disponible en el mercado o
          cuando es necesario adaptar dosis, formas o componentes para un paciente específico, ya sea humano o animal.
        </p>

        {/* Five columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 mb-10 md:mb-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center h-full">
              <div className="bg-[#0D9488]/10 rounded-full p-6 flex justify-center items-center mb-4">
                <Image
                  src={card.icon || "/placeholder.svg"}
                  width={35}
                  height={35}
                  alt=""
                  className="w-[35px] h-[35px]"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="#solicitud"
            className="border-[#0D9488] border-[1px] inline-flex items-center rounded-md bg-[#CCFBF1] px-5 py-2.5 text-sm font-medium text-[#0D9488] hover:bg-[#0D9488]/20 transition-colors"
          >
            Solicitar Receta
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
