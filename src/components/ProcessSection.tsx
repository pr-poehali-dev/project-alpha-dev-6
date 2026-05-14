import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fragment } from "react"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import { EditableText } from "@/components/EditableText"
import { useScrollReveal } from "@/hooks/useScrollReveal"

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
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal(0.1)

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={headRef} className="reveal text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <EditableText as="span">Как мы работаем</EditableText>
          </div>
          <EditableText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-foreground">От начала до первых лидов</EditableText>
          <EditableText as="p" className="text-lg text-foreground/65 max-w-3xl mx-auto leading-relaxed font-medium">
            Прозрачный процесс без лишних шагов — вы видите каждый этап и всегда знаете, что происходит с вашим бюджетом.
          </EditableText>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border hover:border-primary/30"
              >
                <div className="absolute top-0 right-0 text-[100px] font-black text-primary/5 leading-none p-4 select-none">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 w-fit group-hover:scale-110">
                    <Icon name={step.icon} fallback="CheckCircle2" size={22} />
                  </div>
                  <CardTitle className="text-lg font-black text-foreground group-hover:text-primary transition-colors leading-snug">
                    <EditableText as="span">{step.title}</EditableText>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableText as="p" className="text-foreground/60 text-sm leading-relaxed">{step.description}</EditableText>
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
