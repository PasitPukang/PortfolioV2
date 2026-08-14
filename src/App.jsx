import { useState, useEffect } from 'react'
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">

      {/* Dynamic Mouse Spotlight Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`
        }}
      />

      {/* Secondary Ambient Accent Orbs */}
      <div className="fixed top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Responsive Main Container: Full Width on PC (max-w-[1536px]), Padding for Mobile */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 lg:py-14 relative z-10">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-start relative">

          {/* Left Panel - Sticky Sidebar on PC, Stacked Top Card on Mobile */}
          <header className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[450px] lg:shrink-0 lg:sticky lg:top-12 lg:max-h-[calc(100vh-60px)] lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-1">
            <LeftSection />
          </header>

          {/* Right Panel - Main Content Scroll Area */}
          <main id="right-panel" className="flex-1 w-full min-w-0 space-y-8 sm:space-y-10">
            <RightSection />
          </main>

        </div>

      </div>
    </div>
  )
}


export default App
