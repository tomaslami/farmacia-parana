"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Home, Menu, X, FileText, Star, Users, Clock, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Navigation items with icons
const navItems = [
  { name: "Inicio", href: "/", icon: <Home className="h-4 w-4 mr-2 text-black" /> },
  {
    name: "Secciones",
    isSection: true,
    items: [
      { name: "¿Qué es?", href: "#que-es", icon: <FileText className="h-4 w-4 mr-2" /> },
      { name: "Beneficios", href: "#beneficios", icon: <Star className="h-4 w-4 mr-2" /> },
      { name: "Proceso", href: "#proceso", icon: <Clock className="h-4 w-4 mr-2" /> },
      { name: "Solicitud", href: "#solicitud", icon: <Users className="h-4 w-4 mr-2" /> },
      { name: "Ubicación", href: "#ubicacion", icon: <MapPin className="h-4 w-4 mr-2" /> },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        "sticky top-0 z-50 w-full border-b border-gray-200 transition-all duration-200",
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white",
      )}
    >
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold text-black">
          Farmacia Paraná
        </Link>

        {/* Desktop Navigation */}
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
          className="hidden md:inline-flex items-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white hover:bg-[#0D9488]/90"
        >
          Solicitar Receta
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-black cursor-pointer">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 bg-[#d6d6d6] text-white border-l-0" hideCloseButton={true}>
          <SheetTitle></SheetTitle>
            <AnimatePresence>
              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  staggerChildren: 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Sidebar Header */}
                <motion.div
                  className="flex items-center justify-between p-4 border-b border-gray-800"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/" className="text-lg font-semibold text-black" onClick={() => setIsOpen(false)}>
                    Farmacia Paraná
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black flex items-center cursor-pointer"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Cerrar menú</span>
                  </button>
                </motion.div>

                {/* Sidebar Navigation */}
                <div className="flex-1 overflow-auto py-2">
                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item, index) =>
                      item.isSection ? (
                        <motion.div
                          key={item.name}
                          className="px-2 py-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        >
                          <div className="text-black text-sm font-medium px-3 py-2">{item.name}</div>
                          <div className="mt-1 space-y-1">
                            {item.items?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: 0.2 + (index + subIndex) * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-white text-black "
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.icon}
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        >
                          <Link
                            href={item.href || "#"}
                            className="flex items-center text-sm px-5 py-2 hover:bg-[#ffff] text-black"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        </motion.div>
                      ),
                    )}
                  </nav>
                </div>

                {/* Sidebar Footer */}
                <motion.div
                  className="p-4 border-t border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                    <Link
                      href="#solicitar"
                      className="flex items-center justify-center w-full rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white hover:bg-[#0D9488]/90"
                      onClick={() => setIsOpen(false)}
                    >
                      Solicitar Receta
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
