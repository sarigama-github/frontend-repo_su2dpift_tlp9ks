const images = [
  'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543335572-51576a3f3c9a?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1400&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center">Gallery</h2>
        <p className="text-slate-600 text-center mt-2">A visual feast of pao</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`pao ${idx + 1}`} className="w-full h-52 object-cover rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}
