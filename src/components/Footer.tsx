import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-black text-foreground">Вам</span>
              <span className="text-xl font-black text-primary">Лям!</span>
            </div>
            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
              B2B лидогенерация в нишах частных инвестиций, франшиз и недвижимости. С 2018 года помогаем компаниям расти.
            </p>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-4 text-sm uppercase tracking-wide">Навигация</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "О компании" },
                { href: "#services", label: "Направления" },
                { href: "#cases", label: "Кейсы" },
                { href: "#pricing", label: "Тарифы" },
                { href: "#contact", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-foreground/55 hover:text-primary transition-colors font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-4 text-sm uppercase tracking-wide">Направления</h4>
            <ul className="space-y-2">
              {[
                { to: "/investments", label: "Частные инвестиции" },
                { to: "/franchise", label: "Франшизы" },
                { to: "/realty", label: "Недвижимость" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-foreground/55 hover:text-primary transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-foreground/40">© 2025 Вам Лям! Все права защищены.</p>
          <p className="text-xs text-foreground/40">B2B лидогенерация с 2018 года</p>
        </div>
      </div>
    </footer>
  )
}