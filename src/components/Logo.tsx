export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-xl font-black tracking-tight text-foreground">Вам</span>
        <span className="text-xl font-black tracking-tight text-primary">Лям!</span>
      </div>
    </div>
  )
}
