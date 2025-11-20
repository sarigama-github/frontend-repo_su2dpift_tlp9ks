export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="text-white/80 uppercase tracking-widest text-xs mb-4">Welcome to</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">pao Ristorante</h1>
          <p className="mt-6 text-lg text-white/90">Experience a world of flavor where every dish celebrates pao. Crafted with passion, served with heart.</p>
          <div className="mt-8 flex gap-4">
            <a href="#menu" className="px-5 py-3 bg-white text-slate-900 rounded-full font-medium hover:opacity-90">Explore Menu</a>
            <a href="#contact" className="px-5 py-3 bg-transparent border border-white/40 text-white rounded-full font-medium hover:bg-white/10">Reserve</a>
          </div>
        </div>
      </div>
    </section>
  )
}
