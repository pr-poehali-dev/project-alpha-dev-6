import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    quote:
      "За первые две недели получили 89 лидов по инвесторам. 7 из них уже закрыли сделки на сумму более 14 млн ₽. Таких результатов не давал ни один канал, который мы пробовали раньше.",
    name: "Алексей Т.",
    role: "Директор по продажам, инвестиционная компания",
    niche: "Частные инвестиции",
  },
  {
    quote:
      "Открыли 12 новых точек за квартал — это рекорд для нас. Лиды приходили уже проверенные, предприниматели с реальным бюджетом. Команда Вам Лям! работает как часы.",
    name: "Марина С.",
    role: "Руководитель франчайзинга, сеть кофеен",
    niche: "Франшизы",
  },
  {
    quote:
      "Раньше тратили огромные бюджеты на рекламу с неизвестным результатом. Сейчас знаем точно: за каждый рубль получаем прогнозируемое количество целевых обращений.",
    name: "Дмитрий В.",
    role: "Коммерческий директор, застройщик",
    niche: "Недвижимость",
  },
  {
    quote:
      "Попробовали с небольшим бюджетом, убедились в качестве и масштабировали. Сейчас работаем уже год, поток лидов стабильный, замену некачественных делают без вопросов.",
    name: "Ольга К.",
    role: "CEO, управляющая компания",
    niche: "Частные инвестиции",
  },
  {
    quote:
      "Сделали прогноз, запустились за сутки, через 48 часов были первые заявки от реальных покупателей. Я такого не ожидал, честно. Рекомендую всем застройщикам.",
    name: "Сергей М.",
    role: "Руководитель отдела продаж, АН",
    niche: "Недвижимость",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f6fd] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Отзывы клиентов
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#404040] mb-4">
            Говорят наши клиенты
          </h2>
          <p className="text-center text-[#404040]/70 max-w-2xl mx-auto font-medium">
            Более 250 компаний уже получили результат. Вот что они говорят о работе с нами.
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border border-border shadow-sm bg-white">
                <CardContent className="p-8">
                  <Icon name="Quote" size={28} className="text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-[#404040] min-h-[100px] font-medium">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-[#404040]">{testimonial.name}</p>
                      <p className="text-[#404040]/60 text-sm">{testimonial.role}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {testimonial.niche}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
