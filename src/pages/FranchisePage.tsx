import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const benefits = [
  { icon: "UserCheck", title: "Предприниматели с бюджетом", desc: "Квалифицируем лиды по наличию стартового капитала и серьёзному намерению открыть бизнес по франшизе." },
  { icon: "MapPin", title: "Нужный регион", desc: "Таргетируемся на конкретные города и регионы, где вы хотите открыть новые точки." },
  { icon: "Zap", title: "Запуск за 24 часа", desc: "Первые заявки от франчайзи — уже на следующий день после старта кампании." },
  { icon: "RefreshCw", title: "Гарантия замены", desc: "Нецелевые лиды (без бюджета, без интереса) заменяем без обсуждений и доплат." },
]

const cases = [
  {
    company: "Сеть кофеен «МорнингКофе»",
    result: "120 лидов за 14 дней",
    period: "2 недели",
    desc: "Задача — открыть 15 точек за квартал. Запустили лидогенерацию, за 2 недели получили 120 заявок, 14 подписали договоры.",
    metrics: [{ v: "120", l: "Лидов" }, { v: "14", l: "Договоров" }, { v: "12%", l: "Конверсия" }],
  },
  {
    company: "Детская студия «Кидс Арт»",
    result: "63 лида → 9 франчайзи",
    period: "21 день",
    desc: "Привлекали владельцев детских клубов и мам-предпринимателей. Конверсия в подписание договора — 14.3%.",
    metrics: [{ v: "63", l: "Лидов" }, { v: "9", l: "Франчайзи" }, { v: "24 ч", l: "Старт" }],
  },
]

const steps = [
  { n: "01", t: "Заявка", d: "Рассказываете о франшизе: паушальный взнос, регионы, профиль идеального партнёра" },
  { n: "02", t: "Стратегия", d: "Подбираем каналы для вашей аудитории и рассчитываем прогноз по лидам" },
  { n: "03", t: "Запуск", d: "Через 24 часа кампания работает, заявки идут к вам напрямую" },
  { n: "04", t: "Масштаб", d: "Увеличиваем объём по мере роста сети — без потери качества" },
]

const testimonials = [
  {
    quote: "Открыли 12 новых точек за квартал — это рекорд для нас. Лиды приходили проверенные, с реальным бюджетом.",
    name: "Марина С.",
    role: "Руководитель франчайзинга",
  },
  {
    quote: "Раньше тратили деньги на выставки. Сейчас за тот же бюджет получаем в 4 раза больше целевых заявок от франчайзи.",
    name: "Илья Р.",
    role: "Собственник сети студий",
  },
]

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-[#f8f6fd]">
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Icon name="Store" size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Лидогенерация для франчайзинга</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-[#404040] leading-tight">
            Новые франчайзи — <span className="text-primary">за 24 часа</span>
          </h1>
          <p className="text-xl text-[#404040]/70 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Привлекаем предпринимателей с бюджетом, готовых открыть бизнес по вашей франшизе. Помогли открыть более 700 точек по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg group shadow-lg shadow-primary/25" asChild>
              <a href="#contact-fr">
                Получить лиды по франшизам
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[["700+", "открыто филиалов"], ["250+", "компаний-клиентов"], ["24 ч", "до первых лидов"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-black text-primary">{v}</div>
                <div className="text-sm text-[#404040]/60 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f6fd]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">Наши преимущества</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">Как мы работаем</h2>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f6fd]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">Кейсы в нише франшиз</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border border-border bg-[#f8f6fd]">
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
      <section id="contact-fr" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Откройте новые точки быстрее</h2>
          <p className="text-white/80 text-lg mb-8 font-medium">
            Рассчитаем прогноз по вашей франшизе и запустим кампанию за 24 часа.
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
