import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 lg:w-3/5">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight text-black mb-4">
            Medicamentos Personalizados, Preparados Especialmente para <span className="text-[#0D9488]">Vos</span>
          </h1>
          <p className="text-sm md:text-base text-[#1E1E1E] mb-6 md:mb-8">
            Desarrollamos soluciones únicas según tu prescripción médica.
          </p>
          <Link
            href="#solicitud"
            className="inline-flex items-center rounded-md bg-[#0D9488] px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-white hover:bg-[#0D9488]/90 transition-colors"
          >
            Solicita tu Receta Magistral
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Images */}
        <div className="w-full md:w-1/2 lg:w-2/5 mt-8 md:mt-0">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/12] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/farm.png"
              alt="Farmacéutico trabajando en laboratorio"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
