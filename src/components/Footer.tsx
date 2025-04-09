import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 sm:py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-24">
          {/* Column 1: Farmacia Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Farmacia Paraná</h3>
            <p className="text-sm text-gray-600 mb-4 w-full md:w-[250px] lg:w-[300px]">
              Especialistas en formulación magistral y medicamentos personalizados.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-[#0D9488]">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-[#0D9488]">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-[#0D9488]">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-[#0D9488]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#que-es" className="text-sm text-gray-600 hover:text-[#0D9488]">
                  ¿Qué es?
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-sm text-gray-600 hover:text-[#0D9488]">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#solicitud" className="text-sm text-gray-600 hover:text-[#0D9488]">
                  Solicitud
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm text-gray-600 hover:text-[#0D9488]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
