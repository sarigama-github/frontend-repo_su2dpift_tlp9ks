export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
            alt="pao cuisine"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">The Heart of pao</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At pao, every plate is a love letter to simple, beautiful ingredients. Our chefs transform pao into
            unforgettable dishes — from rustic classics to contemporary creations — all paired with thoughtful wines and warm hospitality.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Whether it's a quiet dinner or a celebration, pao welcomes you with ambience, flavor, and care.
          </p>
        </div>
      </div>
    </section>
  )
}
