import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"
import Icon from "@/components/ui/icon"

const benefits = [
  { icon: "UserCheck", title: "Только верифицированные инвесторы", desc: "Каждый лид проходит предварительную квалификацию: наличие капитала, готовность к инвестиции, реальный интерес." },
  { icon: "TrendingUp", title: "Капитал от 500 тыс. ₽", desc: "Работаем с аудиторией, у которой есть реальные средства для инвестирования в ваши продукты." },
  { icon: "Zap", title: "Первые лиды за 24 часа", desc: "Запускаем кампанию в день согласования — без лишних ожиданий и согласований." },
  { icon: "RefreshCw", title: "Замена нецелевых", desc: "Если лид оказался нецелевым — заменяем без доплат и без вопросов." },
]

const cases = [
  {
    company: "ИК «АльфаКапитал»",
    result: "847 лидов / 71 сделка",
    period: "30 дней",
    desc: "Привлекали частных инвесторов с капиталом от 1 млн ₽. Конверсия из лида в договор — 8.4%.",
    metrics: [{ v: "847", l: "Лидов" }, { v: "71", l: "Сделок" }, { v: "2.3 млн", l: "Средний чек" }],
  },
  {
    company: "УК «Вектор»",
    result: "200+ лидов/мес × 6 мес",
    period: "6 месяцев",
    desc: "Вышли на стабильный поток инвесторов. Оборот вырос в 2.4 раза за полгода совместной работы.",
    metrics: [{ v: "200+", l: "Лидов/мес" }, { v: "2.4×", l: "Рост выручки" }, { v: "40 млн", l: "Оборот" }],
  },
]

const steps = [
  { n: "01", t: "Заявка", d: "Заполняете форму — мы изучаем ваш продукт и целевую аудиторию инвесторов" },
  { n: "02", t: "Прогноз", d: "Рассчитываем количество лидов, конверсию в сделку и ROI для вашей ниши" },
  { n: "03", t: "Запуск", d: "Через 24 часа после согласования запускаем кампанию по нужным каналам" },
  { n: "04", t: "Лиды", d: "Передаём контакты с кратким досье: капитал, интерес, готовность к встрече" },
]

const testimonials = [
  {
    quote: "За первые две недели получили 89 лидов по инвесторам. 7 из них уже закрыли сделки на сумму более 14 млн ₽.",
    name: "Алексей Т.",
    role: "Директор по продажам, ИК",
  },
  {
    quote: "Мы попробовали с тестовым бюджетом. Убедились в качестве — масштабировали в три раза. Теперь работаем больше года.",
    name: "Ольга К.",
    role: "CEO, управляющая компания",
  },
]

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Лидогенерация для инвестиционного бизнеса</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-[#404040] leading-tight">
            Частные инвесторы — <span className="text-primary">в вашу воронку</span>
          </h1>
          <p className="text-xl text-[#404040]/70 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Привлекаем квалифицированных частных инвесторов с капиталом от 500 тыс. ₽ в ваши продукты. Каждый лид проверен и готов к диалогу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg group shadow-lg shadow-primary/25" asChild>
              <a href="#contact-inv">
                Получить лиды по инвесторам
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[["3.5+ млрд ₽", "привлечено инвестиций"], ["250+", "клиентов в нише"], ["8.4%", "средняя конверсия"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-black text-primary">{v}</div>
                <div className="text-sm text-[#404040]/60 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="border border-border bg-white hover:border-primary/40 hover:shadow-lg transition-all group">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary transition-all flex-shrink-0 h-fit">
                    <Icon name={b.icon} fallback="CheckCircle" size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#404040] mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                    <p className="text-sm text-[#404040]/65 leading-relaxed">{b.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-primary/20 mb-3">{s.n}</div>
                <h3 className="font-black text-[#404040] mb-2">{s.t}</h3>
                <p className="text-sm text-[#404040]/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground text-center mb-12">
            Кейсы в нише инвестиций
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <Card key={i} className="border border-border bg-white hover:border-primary/40 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <p className="text-sm font-bold text-primary mb-1">{c.company}</p>
                  <h3 className="text-xl font-black text-[#404040] mb-1">{c.result}</h3>
                  <p className="text-xs text-[#404040]/50 mb-4">Период: {c.period}</p>
                  <p className="text-sm text-[#404040]/70 leading-relaxed mb-6">{c.desc}</p>
                  <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {c.metrics.map((m) => (
                      <div key={m.l} className="text-center">
                        <div className="text-lg font-black text-[#404040]">{m.v}</div>
                        <div className="text-xs text-[#404040]/55 font-medium">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border border-border bg-background">
                <CardContent className="p-8">
                  <Icon name="Quote" size={24} className="text-primary mb-4" />
                  <p className="text-[#404040] leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                  <div>
                    <p className="font-black text-[#404040]">{t.name}</p>
                    <p className="text-sm text-[#404040]/60">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-inv" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Готовы получить первых инвесторов?
          </h2>
          <p className="text-white/80 text-lg mb-8 font-medium">
            Оставьте заявку — рассчитаем прогноз и запустим кампанию за 24 часа.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-black text-lg px-10 py-6 shadow-xl" asChild>
            <a href="/#contact">
              Получить бесплатный прогноз
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}