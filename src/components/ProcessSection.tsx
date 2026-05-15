import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fragment } from "react"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "MessageSquare",
    title: "Заявка и брифинг",
    description:
      "Вы оставляете заявку — мы связываемся, изучаем вашу нишу, продукт и цели по продажам. Определяем KPI и условия гарантии.",
    number: "01",
  },
  {
    icon: "BarChart3",
    title: "Прогноз и канал",
    description:
      "Исходя из ниши подбираем наиболее эффективный канал и рассчитываем реалистичный прогноз — сколько лидов и за какое время.",
    number: "02",
  },
  {
    icon: "Zap",
    title: "Запуск за 24 часа",
    description:
      "Согласовываем условия и запускаем кампанию. Уже через 24 часа вы получаете первые целевые лиды с контактами и краткой информацией.",
    number: "03",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия и замена",
    description:
      "Нецелевые лиды фиксируем и заменяем без дополнительной оплаты. Менеджер на связи и контролирует качество каждого обращения.",
    number: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f6fd] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Как мы работаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[#404040]">От начала до первых лидов</h2>
          <p className="text-lg text-[#404040]/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Прозрачный процесс без лишних шагов — вы видите каждый этап и всегда знаете, что происходит с вашим бюджетом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-border hover:border-primary/30"
              >
                <div className="absolute top-0 right-0 text-[100px] font-black text-primary/5 leading-none p-4 select-none">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 w-fit group-hover:scale-110">
                    <Icon name={step.icon} fallback="CheckCircle2" size={22} />
                  </div>
                  <CardTitle className="text-lg font-black text-[#404040] group-hover:text-primary transition-colors leading-snug">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#404040]/65 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${(index + 1) * 25 - 2.5}%` }}
                >
                  <ArrowRight className="h-6 w-6 text-primary/40" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}