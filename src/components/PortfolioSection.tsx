import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

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
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Кейсы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[#404040]">
            Реальные результаты
          </h2>
          <p className="text-lg text-[#404040]/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Не обещания, а цифры. Посмотрите, что мы сделали для компаний в ваших нишах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
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
                      <p className="text-sm font-bold text-[#404040]">{item.company}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-black text-primary mb-1">{item.result}</h3>
                <p className="text-sm text-[#404040]/60 font-semibold mb-4">{item.conversion}</p>

                <p className="text-[#404040]/70 text-sm leading-relaxed mb-6">{item.description}</p>

                <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {item.metrics.map((m, mi) => (
                    <div key={mi} className="text-center">
                      <div className="text-lg font-black text-[#404040]">{m.value}</div>
                      <div className="text-xs text-[#404040]/55 font-medium mt-0.5">{m.label}</div>
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
