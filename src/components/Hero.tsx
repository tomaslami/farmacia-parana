import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        {/* Text Content */}
        <div className="w-full md:w-2/3 ">
          <h1 className="w-full text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-black mb-4">
            Medicamentos Personalizados, Preparados Especialmente para <span className="text-[#0D9488]">Vos</span>
          </h1>
          <p className="w-full text-sm md:text-base text-[#1E1E1E] mb-4">
            Desarrollamos soluciones únicas según tu prescripción médica.
          </p>
          <Link
            href="#solicitar"
            className="inline-flex items-center rounded-md bg-[#0D9488] px-5 py-3 text-sm font-medium text-white hover:bg-[#0D9488]/90"
          >
            Solicita tu Receta Magistral
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Images */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <Image
              src="/images/farm.png"
              alt="Farmacéutico trabajando en laboratorio"
              fill
              className="object-cover"
              priority
            />
        </div>
      </div>
    </section>
  )
}

