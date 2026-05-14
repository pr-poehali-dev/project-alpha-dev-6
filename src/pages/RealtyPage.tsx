import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const benefits = [
  { icon: "Home", title: "Покупатели с одобренной ипотекой", desc: "Работаем с аудиторией, у которой уже есть одобрение банка или собственные средства на покупку." },
  { icon: "MapPin", title: "Конкретный объект или район", desc: "Настраиваем кампанию под ваш объект: ЖК, район, тип недвижимости — коммерческая, жилая, инвест." },
  { icon: "Zap", title: "Старт за 24 часа", desc: "С момента согласования до первых заявок от реальных покупателей — не более суток." },
  { icon: "BarChart3", title: "Конверсия в просмотр 30%+", desc: "Наши лиды приходят на просмотры: средняя конверсия из лида в показ объекта — 30–40%." },
]

const cases = [
  {
    company: "Застройщик «ГрандСтрой»",
    result: "312 лидов / 7 продаж",
    period: "45 дней",
    desc: "Лиды покупателей новостроек в Москве и МО. Конверсия из лида в просмотр — 34%. ROI кампании — 810%.",
    metrics: [{ v: "312", l: "Лидов" }, { v: "7", l: "Продаж" }, { v: "810%", l: "ROI" }],
  },
  {
    company: "АН «Горизонт»",
    result: "180 лидов за месяц",
    period: "30 дней",
    desc: "Работали с вторичкой в СПб. 180 лидов покупателей, 23 из которых вышли на сделку в течение 60 дней.",
    metrics: [{ v: "180", l: "Лидов" }, { v: "23", l: "Сделки" }, { v: "34%", l: "Конверсия в показ" }],
  },
]

const steps = [
  { n: "01", t: "Брифинг", d: "Рассказываете об объектах, ЦА, бюджете покупателя и географии продаж" },
  { n: "02", t: "Прогноз", d: "Считаем количество лидов, конверсию в показ и прогноз по сделкам" },
  { n: "03", t: "Запуск", d: "Через 24 часа кампания активна — заявки поступают вашим менеджерам" },
  { n: "04", t: "Контроль", d: "Отслеживаем качество каждого лида и заменяем нецелевые без доплат" },
]

const testimonials = [
  {
    quote: "Сделали прогноз, запустились за сутки, через 48 часов были первые заявки от реальных покупателей. Рекомендую всем застройщикам.",
    name: "Сергей М.",
    role: "Руководитель отдела продаж, АН",
  },
  {
    quote: "Раньше тратили огромные бюджеты на рекламу с неизвестным результатом. Теперь знаем точно: за каждый рубль — прогнозируемые обращения.",
    name: "Дмитрий В.",
    role: "Коммерческий директор, застройщик",
  },
]

export default function RealtyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Icon name="Building2" size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Лидогенерация для недвижимости</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-[#404040] leading-tight">
            Покупатели недвижимости — <span className="text-primary">уже завтра</span>
          </h1>
          <p className="text-xl text-[#404040]/70 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Привлекаем покупателей новостроек, вторичного жилья и коммерческой недвижимости. Средняя конверсия из лида в просмотр — 30–40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg group shadow-lg shadow-primary/25" asChild>
              <a href="#contact-re">
                Получить лиды по недвижимости
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[["100+", "объектов продано"], ["34%", "конверсия в просмотр"], ["24 ч", "до первых лидов"]].map(([v, l]) => (
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black text-[#404040] text-center mb-12">Кейсы в нише недвижимости</h2>
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
      <section id="contact-re" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Готовы продавать больше объектов?</h2>
          <p className="text-white/80 text-lg mb-8 font-medium">
            Рассчитаем прогноз по вашим объектам и запустим кампанию за 24 часа.
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