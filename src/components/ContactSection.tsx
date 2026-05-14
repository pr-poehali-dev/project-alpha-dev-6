import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    niche: "",
    volume: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[Вам Лям!] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f6fd]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Оставить заявку
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#404040] mb-4">
            Получите <span className="text-primary">прогноз бесплатно</span>
          </h2>
          <p className="text-[#404040]/70 text-lg max-w-2xl mx-auto font-medium">
            Оставьте заявку — мы свяжемся, изучим вашу нишу и рассчитаем реалистичный прогноз по лидам и сделкам.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="border border-border shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-[#404040]">Заявка на лидогенерацию</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#404040]">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-[#404040]">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 900 123-45-67"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="niche" className="text-sm font-bold text-[#404040]">
                      Ваша ниша *
                    </label>
                    <select
                      id="niche"
                      name="niche"
                      value={formData.niche}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md border border-border bg-white text-[#404040] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Выберите направление</option>
                      <option value="investments">Частные инвестиции</option>
                      <option value="franchise">Франшизы</option>
                      <option value="realty">Недвижимость</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volume" className="text-sm font-bold text-[#404040]">
                      Желаемый объём лидов в месяц
                    </label>
                    <Input
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      placeholder="Например: 50 лидов в месяц"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold group shadow-lg shadow-primary/20">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Получить бесплатный прогноз
                  </Button>
                  <p className="text-xs text-[#404040]/50 text-center">Свяжемся в течение 30 минут в рабочее время</p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: "Clock",
                title: "Запуск за 24 часа",
                desc: "С момента оплаты до первых лидов — не более суток",
              },
              {
                icon: "ShieldCheck",
                title: "Гарантия замены",
                desc: "Нецелевые лиды заменяем бесплатно без обсуждений",
              },
              {
                icon: "PhoneCall",
                title: "Telegram / WhatsApp",
                desc: "Менеджер на связи в рабочие часы для любых вопросов",
              },
            ].map((item, i) => (
              <Card key={i} className="border border-border bg-white hover:border-primary/40 hover:shadow-md transition-all group">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                      <Icon name={item.icon} fallback="CheckCircle" size={20} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#404040] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#404040]/60">{item.desc}</p>
                    </div>
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
