import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const values = [
  { icon: "ShieldCheck", title: "Гарантия качества", description: "Нецелевые лиды заменяем без вопросов — это наш стандарт, а не исключение" },
  { icon: "Zap", title: "Скорость запуска", description: "Первые лиды уже через 24 часа после согласования условий и бюджета" },
  { icon: "BarChart3", title: "Прогноз по продажам", description: "До старта рассчитываем реалистичный прогноз достижения вашего плана" },
  { icon: "Target", title: "Точная аудитория", description: "Подбираем канал под нишу: только те, кто реально готов к покупке или инвестиции" },
  { icon: "Users", title: "Личный менеджер", description: "За каждым клиентом закреплён менеджер, который ведёт кампанию от запуска до результата" },
  { icon: "RefreshCw", title: "Без лишних рисков", description: "Работаем по чёткому KPI и заменяем некачественные лиды — вы платите только за результат" },
]

const stats = [
  { number: "250+", label: "Компаний выросли с нами" },
  { number: "120", label: "Лидов за 24 часа" },
  { number: "3.5+ млрд", label: "Рублей инвестиций" },
  { number: "2018", label: "Год основания" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="Sparkles" size={16} />
            О компании Вам Лям!
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[#404040]">
            Лидогенерация, которая{" "}
            <span className="text-primary relative">
              работает
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="#392ae7" strokeWidth="2" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-[#404040]/70 max-w-3xl mx-auto leading-relaxed font-medium">
            С 2018 года мы помогаем B2B-компаниям в нишах частных инвестиций, франшиз и недвижимости получать стабильный поток целевых клиентов. Исходя из вашей ниши — определяем эффективный канал, считаем прогноз и запускаем уже завтра.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300 flex-shrink-0 mt-0.5">
                    <Icon name={value.icon} fallback="CheckCircle2" size={20} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1.5 text-[#404040] group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#404040]/65 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#f8f6fd] rounded-2xl p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-[#404040]/70 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
