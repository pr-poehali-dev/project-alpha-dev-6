import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "TrendingUp",
    title: "Частные инвестиции",
    description:
      "Привлекаем квалифицированных частных инвесторов с капиталом от 500 тыс. рублей. Лиды проверяются на платёжеспособность и реальный интерес к инвестиционным продуктам.",
    stat: "3.5+ млрд ₽",
    statLabel: "привлечено инвестиций",
    href: "/investments",
    color: "from-primary/5 to-primary/10",
  },
  {
    icon: "Store",
    title: "Франшизы",
    description:
      "Генерируем целевые обращения от предпринимателей, готовых открыть бизнес по франшизе. Фокус на аудиторию с бюджетом и серьёзным намерением.",
    stat: "700+",
    statLabel: "открыто филиалов",
    href: "/franchise",
    color: "from-primary/5 to-primary/10",
  },
  {
    icon: "Building2",
    title: "Недвижимость",
    description:
      "Поставляем лиды покупателей новостроек, коммерческой и инвестиционной недвижимости. Работаем с застройщиками, агентствами и частными агентами.",
    stat: "100+",
    statLabel: "объектов продано",
    href: "/realty",
    color: "from-primary/5 to-primary/10",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f6fd]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Наши направления
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-[#404040]">
            Три ниши — <span className="text-primary">один стандарт качества</span>
          </h2>
          <p className="text-[#404040]/70 text-lg max-w-2xl mx-auto font-medium">
            Мы специализируемся на трёх высококонкурентных нишах и знаем, как получать в каждой из них лиды с высокой конверсией.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 w-fit group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon} fallback="TrendingUp" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-black text-[#404040] group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-[#404040]/70 text-sm leading-relaxed">{service.description}</p>
                <div className="border-t border-border pt-4">
                  <div className="text-2xl font-black text-primary">{service.stat}</div>
                  <div className="text-xs text-[#404040]/60 font-medium mt-0.5">{service.statLabel}</div>
                </div>
                <Button variant="ghost" className="w-full justify-between text-primary hover:bg-primary/5 font-semibold p-0 h-auto" asChild>
                  <Link to={service.href}>
                    Подробнее о направлении
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
