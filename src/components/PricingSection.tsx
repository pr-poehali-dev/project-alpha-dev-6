import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Старт",
    leads: "30–50 лидов",
    period: "в месяц",
    features: [
      "Одно направление на выбор",
      "Запуск за 24 часа",
      "Замена нецелевых лидов",
      "Личный менеджер",
      "Ежедневная отчётность",
    ],
    highlighted: false,
    cta: "Начать",
  },
  {
    name: "Рост",
    leads: "50–120 лидов",
    period: "в месяц",
    features: [
      "Одно–два направления",
      "Запуск за 24 часа",
      "Замена нецелевых лидов",
      "Приоритетный менеджер",
      "Прогноз по продажам",
      "Аналитика по каждому лиду",
    ],
    highlighted: true,
    cta: "Выбрать",
  },
  {
    name: "Масштаб",
    leads: "120+ лидов",
    period: "в месяц",
    features: [
      "Все направления",
      "Запуск за 24 часа",
      "Полная гарантия качества",
      "Выделенная команда",
      "Кастомная стратегия",
      "Интеграция с вашей CRM",
    ],
    highlighted: false,
    cta: "Обсудить",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Тарифы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#404040]">
            Выберите <span className="text-primary">объём лидов</span>
          </h2>
          <p className="text-[#404040]/70 text-lg max-w-2xl mx-auto font-medium">
            Гибкие условия под ваш план продаж. Точную стоимость рассчитываем индивидуально после брифинга.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary border-2 shadow-xl bg-white scale-[1.02]"
                  : "border border-border hover:border-primary/40 hover:shadow-lg bg-white"
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-black text-[#404040] mb-2">{tier.name}</CardTitle>
                <div className="mt-3">
                  <span className="text-3xl font-black text-primary">{tier.leads}</span>
                  <div className="text-sm text-[#404040]/60 font-medium mt-1">{tier.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#404040]/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-bold ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                      : "bg-primary/10 hover:bg-primary hover:text-white text-primary"
                  } transition-all`}
                  asChild
                >
                  <a href="#contact">{tier.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#404040]/60 font-medium">
            Нецелевые лиды{" "}
            <span className="text-primary font-bold">заменяются бесплатно</span> во всех тарифах. Без скрытых условий.
          </p>
        </div>
      </div>
    </section>
  )
}
