"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-200 transition-all duration-200 ",
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white",
      )}
    >
      <div className="mx-auto max-w-6xl flex h-16 items-center justify-between ">
        <Link href="/" className="text-xl font-semibold text-black">
          Farmacia Paraná
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#que-es" className="text-sm font-medium text-black hover:text-[#0D9488]">
            ¿Qué es?
          </Link>
          <Link href="#beneficios" className="text-sm font-medium text-black hover:text-[#0D9488]">
            Beneficios
          </Link>
          <Link href="#proceso" className="text-sm font-medium text-black hover:text-[#0D9488]">
            Proceso
          </Link>
          <Link href="#solicitud" className="text-sm font-medium text-black hover:text-[#0D9488]">
            Solicitud
          </Link>
          <Link href="#ubicacion" className="text-sm font-medium text-black hover:text-[#0D9488]">
            Ubicación
          </Link>
        </nav>

        <Link
          href="#solicitar"
          className="inline-flex items-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white hover:bg-[#0D9488]/90"
        >
          Solicitar Receta
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

