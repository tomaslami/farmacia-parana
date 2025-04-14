import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Preparation() {
  return (
    <section className="bg-[#F7F7F7] py-16 px-4 flex items-center justify-center" id="proceso">
      <div className="container xl:max-w-[1480px] lg:max-w-6xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Preparación <span className="text-[#0D9488]">controlada</span> y{" "}
          <span className="text-[#0D9488]">profesional</span>
        </h2>

        {/* Description */}
        <p className="text-center text-sm md:text-base max-w-3xl mx-auto mb-12">
          Cada fórmula se elabora en condiciones higiénicas controladas, cumpliendo con protocolos de calidad y
          trazabilidad. El farmacéutico evalúa la receta —médica o veterinaria—, selecciona los ingredientes, la
          prepara, la rotula y registra toda la trazabilidad del preparado.
        </p>

        {/* Four steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 ">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0D9488]/10 rounded-full w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-[#0D9488] text-3xl font-extrabold">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Evaluación</h3>
            <p className="text-sm">Análisis detallado de la prescripción médica</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0D9488]/10 rounded-full w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-[#0D9488] text-3xl font-extrabold">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Selección</h3>
            <p className="text-sm">Elección de ingredientes de alta calidad</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0D9488]/10 rounded-full w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-[#0D9488] text-3xl font-extrabold">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Preparación</h3>
            <p className="text-sm">Elaboración en ambiente controlado</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0D9488]/10 rounded-full w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-[#0D9488] text-3xl font-extrabold">4</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Control</h3>
            <p className="text-sm">Verificación, etiquetado y registro</p>
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
