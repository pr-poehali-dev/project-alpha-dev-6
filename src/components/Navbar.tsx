import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-border shadow-sm" : "bg-white border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-7">
            <a href="#about" className="text-sm font-semibold text-[#404040] hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#services" className="text-sm font-semibold text-[#404040] hover:text-primary transition-colors">
              Направления
            </a>
            <a href="#cases" className="text-sm font-semibold text-[#404040] hover:text-primary transition-colors">
              Кейсы
            </a>
            <a href="#pricing" className="text-sm font-semibold text-[#404040] hover:text-primary transition-colors">
              Тарифы
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-bold shadow-sm"
              asChild
            >
              <a href="#contact">Получить лиды</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
