import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#about", label: "О нас", isRoute: false },
    { href: "#services", label: "Направления", isRoute: false },
    { href: "#cases", label: "Кейсы", isRoute: false },
    { href: "#pricing", label: "Тарифы", isRoute: false },
    { href: "#contact", label: "Оставить заявку", isRoute: false },
  ]

  const routes = [
    { to: "/investments", label: "Частные инвестиции" },
    { to: "/franchise", label: "Франшизы" },
    { to: "/realty", label: "Недвижимость" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white">
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="font-black text-[#404040]">Вам</span>
            <span className="font-black text-primary">Лям!</span>
          </SheetTitle>
          <SheetDescription className="text-left text-xs text-[#404040]/50">B2B лидогенерация с 2018 года</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-[#404040] hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs font-bold text-[#404040]/40 uppercase tracking-wide px-4 mb-2">Направления</p>
            {routes.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[#404040]/70 hover:text-primary hover:bg-primary/5 transition-all py-2.5 px-4 rounded-lg flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
