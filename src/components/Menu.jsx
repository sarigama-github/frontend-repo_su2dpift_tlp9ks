const items = [
  { name: 'Pao Bruschetta', desc: 'Grilled bread topped with marinated pao, basil, and olive oil', price: '€8' },
  { name: 'Pao Risotto', desc: 'Creamy risotto infused with slow-cooked pao and Parmigiano', price: '€16' },
  { name: 'Pao Alla Parmigiana', desc: 'Layers of pao, tomato, mozzarella, and basil', price: '€18' },
  { name: 'Pao Tagliatelle', desc: 'Fresh pasta tossed with wild mushroom pao ragù', price: '€15' },
  { name: 'Grilled Pao Steak', desc: 'Charred to perfection, herbed butter, roasted garlic', price: '€24' },
  { name: 'Pao Tiramisu', desc: 'Classic tiramisù reimagined with pao notes', price: '€9' },
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center">Menu</h2>
        <p className="text-slate-600 text-center mt-2">Seasonal specialties celebrating pao</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="bg-white rounded-xl p-6 shadow border border-slate-200/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{it.name}</h3>
                  <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
                </div>
                <span className="text-slate-900 font-semibold">{it.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
