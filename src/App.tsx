import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import InteractiveText from './InteractiveText';
import HeroGraphics from './HeroGraphics';
import CursorTrail from './CursorTrail';
import './App.css'
import sparkle2 from './assets/confetti2.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Events from './EventsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black relative">
      <CursorTrail />
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif text-white font-bold tracking-wider transform hover:scale-105 transition-transform cursor-pointer">SPANDAN'25</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#theme" className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Theme</a>
              <a href="#events" className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Events</a>
              <a href="#contact" className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Contact</a>
              <button className="bg-[#a22a40] text-white px-6 py-2 text-sm uppercase tracking-widest font-bold rounded-full hover:bg-white hover:text-[#E2725B] transition-all hover:scale-110 transform">
  Register Now
</button>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#ff7559] hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <ChevronRight size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg- bg-black flex flex-col items-center justify-center space-y-8 px-8 ">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X size={32} />
          </button>

          {/* Menu Items */}
          <a href="#theme" className="text-white text-3xl font-bold uppercase tracking-wider hover:scale-110 transition-transform transform">
            Theme
          </a>
          <a href="#events" className="text-white text-3xl font-bold uppercase tracking-wider hover:scale-110 transition-transform transform">
            Events
          </a>
          <a href="#contact" className="text-white text-3xl font-bold uppercase tracking-wider hover:scale-110 transition-transform transform">
            Contact
          </a>
          <button className="bg-white text-[#E2725B] px-6 py-3 text-lg uppercase tracking-widest font-bold hover:bg-[#E2725B] hover:text-white transition-all transform hover:scale-105">
            Register Now
          </button>
        </div>
      )}





      {/* Main Content (Homepage) */}
      <div className={isMenuOpen ? 'hidden' : 'relative'}>
        {/* Hero Section with Video Background */}
        <div className="relative h-screen overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            poster="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
          >
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38adf350de14c9159&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80 z-10" />

          {/* 🔥 Animated Graphics Layer */}
          <HeroGraphics />

          {/* Hero Text Content */}
          <div className="relative h-full flex items-center justify-center text-center z-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <HeroGraphics />

              <InteractiveText className="mb-6">
                <h1 className="text-5xl md:text-2xl font-serif text-[#f8785e] font-normal tracking-wider mt-24">
                  SPANDAN 2025 
                </h1>
              </InteractiveText>

              <InteractiveText className="mb-6">
                <h1 className="ignite-glow text-5xl md:text-9xl font-serif text-[#d2bf32] font-black tracking-normal ">
                  IGNITE
                </h1>
              </InteractiveText>

              <InteractiveText className="mb-6">
                <h1 className="text-5xl md:text-3xl font-serif text-[#ff7559] font-medium tracking-normal mt-8">
                  SPARK WITH CULTURE <br />&<br /> INNOVATION 
                </h1>
              </InteractiveText>

              <InteractiveText className="mb-4">
                <p className="text-2xl text-[#ff7559] tracking-widest uppercase font-bold mt-20">
                  April 18-19, 2025
                </p>
              </InteractiveText>

              <InteractiveText className="mb-12">
                <p className="text-xl text-[#ff7559]/90 tracking-wider">
                  The Annual Cultural Festival of SRMS CETR
                </p>
              </InteractiveText>

              <InteractiveText className="-mb-8">
  <button className="border-2 border-[#E2725B] text-[#E2725B] px-8 py-4 text-lg uppercase tracking-widest font-bold rounded-full hover:bg-[#a22a40] hover:text-white transition-all hover:scale-110 transform flex items-center mx-auto">
    Register Now
    <ChevronRight className="ml-2" size={24} />
  </button>
</InteractiveText>

            </div>
          </div>
        </div>

{/* Theme Section */}
<section id='theme' className="relative py-20 bg-black overflow-hidden">
  <div className="absolute inset-0">
    {/* Background Graphics */}
    <div className="absolute inset-0 flex justify-center items-center">
      {/* Left sparkle - comes in from left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-8 top-20 bg-no-repeat bg-center w-[400px] h-[400px] rotate-180"
        style={{
          backgroundImage: `url(${sparkle2})`,
          backgroundSize: '200% 200%',
        }}
      ></motion.div>

      {/* Right sparkle - comes in from right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute right-10 bottom-20 bg-no-repeat bg-center w-[400px] h-[400px]"
        style={{
          backgroundImage: `url(${sparkle2})`,
          backgroundSize: '200% 200%',
        }}
      ></motion.div>
    </div>
  </div>

  <div className="relative z-10 text-center">
    <h2 className="text-7xl md:text-9xl font-poppins text-[#ff7559] font-bold mb-6 mt-12 tracking-wider transform hover:scale-105 transition-transform">
      IGNITE
    </h2>
    <h3 className="text-2xl text-white font-thin mb-14 tracking-wider">
      WHAT OUR THEME SAYS
    </h3>
    <p className="text-2xl text-white/70 font-extralight max-w-5xl mx-auto leading-relaxed">
      This year's theme celebrates the dynamic synergy between tradition and innovation.
      At the heart of our fest lies a cultural spark that not only honors our roots but also fuels a future of bold, creative expression.
      <br /><br />
      <strong>Ignite</strong> represents the burst of fresh ideas and youthful energy, while <strong>Culture & Innovation</strong> reflects the harmony between preserving timeless heritage and embracing transformative change.
      <br /><br />
      From electrifying performances to cutting-edge showcases, this fest is where legacy meets possibility.
    </p>
  </div>
</section>

        {/* Events Section */}
        <section id='events' className="py-20 bg-black pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-7xl md:text-9xl font-poppins text-[#ff7559] font-bold mb-4 tracking-wider transform hover:scale-105 transition-transform">
                Featured Events
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto tracking-wider uppercase">
                Three Days of Music, Dance, and Drama
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {['Group Dance', 'Street Play', 'Battle of Bands'].map((event) => (
                <div key={event} className="bg-black/30 p-8 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 group">
                  <h3 className="text-2xl font-serif text-[#ff7559] font-bold mb-4 tracking-wider group-hover:text-white transition-colors">
                    {event}
                  </h3>
                  <p className="text-white/70 mb-6 tracking-wider">
                    Experience the thrill of live performances and showcase your talent on the biggest stage.
                  </p>

                  <a href="https://google.com" className="text-[#E2725B] font-bold hover:text-white flex items-center uppercase text-sm tracking-widest group-hover:translate-x-2 transition-transform">
                    Learn more <ChevronRight className="ml-1" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
