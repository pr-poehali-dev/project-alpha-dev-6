import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { EditableText } from "@/components/EditableText"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const cases = [
  {
    niche: "Частные инвестиции",
    nicheIcon: "TrendingUp",
    company: "Инвестиционная платформа «АльфаКапитал»",
    result: "847 лидов за 30 дней",
    conversion: "Конверсия в сделку 8.4%",
    description:
      "Привлекали частных инвесторов с капиталом от 1 млн ₽. За месяц передали 847 квалифицированных контактов, 71 из которых стали реальными клиентами.",
    metrics: [
      { label: "Лидов", value: "847" },
      { label: "Сделок", value: "71" },
      { label: "Средний чек", value: "2.3 млн ₽" },
    ],
    tag: "Инвестиции",
  },
  {
    niche: "Франшизы",
    nicheIcon: "Store",
    company: "Сеть кофеен «МорнингКофе»",
    result: "120 лидов за 14 дней",
    conversion: "Конверсия в договор 12%",
    description:
      "Задача — открыть 15 новых точек по франшизе за квартал. Запустили лидогенерацию, за 2 недели получили 120 целевых заявок от предпринимателей.",
    metrics: [
      { label: "Лидов", value: "120" },
      { label: "Договоров", value: "14" },
      { label: "Срок старта", value: "24 ч" },
    ],
    tag: "Франшизы",
  },
  {
    niche: "Недвижимость",
    nicheIcon: "Building2",
    company: "Застройщик «ГрандСтрой»",
    result: "312 лидов за 45 дней",
    conversion: "7 объектов продано",
    description:
      "Генерировали лиды покупателей новостроек в Москве и МО. Работали с аудиторией с ипотечным одобрением — конверсия из лида в просмотр объекта 34%.",
    metrics: [
      { label: "Лидов", value: "312" },
      { label: "Продаж", value: "7" },
      { label: "ROI", value: "810%" },
    ],
    tag: "Недвижимость",
  },
  {
    niche: "Частные инвестиции",
    nicheIcon: "TrendingUp",
    company: "Управляющая компания «Вектор»",
    result: "200+ лидов в месяц",
    conversion: "Рост выручки 2.4х",
    description:
      "Вышли на стабильный поток 200+ квалифицированных инвесторов в месяц. Масштабировались с нуля до оборота 40 млн ₽ за 6 месяцев совместной работы.",
    metrics: [
      { label: "Лидов/мес", value: "200+" },
      { label: "Рост выручки", value: "2.4×" },
      { label: "Срок", value: "6 мес" },
    ],
    tag: "Инвестиции",
  },
]

export function PortfolioSection() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal(0.1)

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div ref={headRef} className="reveal text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <EditableText as="span">Кейсы</EditableText>
          </div>
          <EditableText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-foreground">
            Реальные результаты
          </EditableText>
          <EditableText as="p" className="text-lg text-foreground/65 max-w-3xl mx-auto leading-relaxed font-medium">
            Не обещания, а цифры. Посмотрите, что мы сделали для компаний в ваших нишах.
          </EditableText>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300">
                      <Icon name={item.nicheIcon} fallback="TrendingUp" size={20} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs font-semibold bg-primary/10 text-primary border-0 mb-1">
                        {item.tag}
                      </Badge>
                      <EditableText as="p" className="text-sm font-bold text-foreground">{item.company}</EditableText>
                    </div>
                  </div>
                </div>

                <EditableText as="h3" className="text-xl font-black text-primary mb-1">{item.result}</EditableText>
                <EditableText as="p" className="text-sm text-foreground/55 font-semibold mb-4">{item.conversion}</EditableText>

                <EditableText as="p" className="text-foreground/65 text-sm leading-relaxed mb-6">{item.description}</EditableText>

                <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {item.metrics.map((m, mi) => (
                    <div key={mi} className="text-center">
                      <EditableText as="div" className="text-lg font-black text-foreground">{m.value}</EditableText>
                      <EditableText as="div" className="text-xs text-foreground/50 font-medium mt-0.5">{m.label}</EditableText>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
