import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-slate-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-semibold">pao</p>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} pao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
