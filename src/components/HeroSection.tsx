import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-semibold text-primary">B2B лидогенерация с 2018 года</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 animate-fade-in-up text-[#404040] leading-[1.05]">
          До 120 клиентов{" "}
          <span className="text-primary relative inline-block">
            за 24 часа
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C50 2 150 2 198 6"
                stroke="#392ae7"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-[#404040]/70 mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed font-medium">
          Определяем наиболее эффективный канал, рассчитываем прогноз и передаём качественные лиды в нишах частных инвестиций, франшиз и недвижимости.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-14">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
            asChild
          >
            <a href="#contact">
              Получить лиды
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-[#404040] hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg"
            asChild
          >
            <a href="#cases">Наши кейсы</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#404040] text-sm">250+ компаний</div>
              <div className="text-xs text-[#404040]/60">помогли вырасти</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#404040] text-sm">3.5+ млрд ₽</div>
              <div className="text-xs text-[#404040]/60">привлечённых инвестиций</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#404040] text-sm">Старт за 24 ч</div>
              <div className="text-xs text-[#404040]/60">с гарантией качества</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
