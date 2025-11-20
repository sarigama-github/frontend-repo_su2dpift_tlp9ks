export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_40%)]"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Reserve your table</h2>
          <p className="mt-3 text-white/80">Plan your perfect pao experience. Well confirm your reservation promptly.</p>
          <div className="mt-6 space-y-2 text-white/80">
            <p>Address: Via Pao 1, Milano</p>
            <p>Phone: +39 000 000 000</p>
            <p>Email: booking@pao.it</p>
          </div>
        </div>
        <form className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder-white/60 text-white" placeholder="Name" />
            <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder-white/60 text-white" placeholder="Email" />
            <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder-white/60 text-white sm:col-span-2" placeholder="Date" />
            <textarea className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder-white/60 text-white sm:col-span-2" rows="4" placeholder="Notes" />
          </div>
          <button type="button" className="mt-4 w-full bg-white text-slate-900 font-medium rounded-lg py-3 hover:opacity-90">Send</button>
        </form>
      </div>
    </section>
  )
}
