import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';
import CursorTrail from './CursorTrail';
import './App.css'
import { ChevronRight, X } from 'lucide-react';
import ContactFooter from "./ContactFooter";


function Events() { 
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      
      
      
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
              <Link to='/' className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Home</Link>
              <a href="/" className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Theme</a>
              <a href="/events" className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Events</a>
              {/* <a href="#contact" className="text-[#ff7559] hover:text-white font-bold tracking-widest text-sm uppercase hover:scale-110 transition-transform">Contact</a> */}
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










      {/* Page Content */}
      <div className="pt-28 px-4 max-w-6xl mx-auto">
        {/* Graphic */}
        <div className="flex justify-center mb-8">
          <img src="/src/assets/events.png" alt="Events Graphic" className="w-44 h-44 object-contain" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-7xl md:text-7xl font-bold text-[#ff7559] mb-4 font-poppins">EVENT LIST</h2>

        {/* Solo Events */}
        <h3 className="text-3xl font-semibold mt-16 mb-6 text-white">Solo Events</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/solo-dance'><img src="/src/assets/event/2.png" alt="Solo Event 1" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/magic-of-voice'><img src="/src/assets/event/4.png" alt="Solo Event 2" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/media-canvas'><img src="/src/assets/event/9.png" alt="Solo Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/mandala-art'><img src="/src/assets/event/13.png" alt="Solo Event 4" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/doodle-art'><img src="/src/assets/event/14.png" alt="Solo Event 5" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/spandan-got-talent'><img src="/src/assets/event/12.png" alt="Solo Event 6" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
        </div>

        {/* Group Events */}
        <h3 className="text-3xl font-semibold mt-20 mb-6 text-white">Group Events</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/group-dance'><img src="/src/assets/event/3.png" alt="Group Event 1" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/clash-of-bands'><img src="/src/assets/event/5.png" alt="Group Event 2" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/street-play'><img src="/src/assets/event/6.png" alt="Group Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/movie-spoof'><img src="/src/assets/event/7.png" alt="Group Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/antakshari'><img src="/src/assets/event/8.png" alt="Group Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/treasure-hunt'><img src="/src/assets/event/10.png" alt="Group Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/short-play'><img src="/src/assets/event/11.png" alt="Group Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
            <Link to='/register/pirates-hunt'><img src="/src/assets/event/1.png" alt="Group Event 3" className="w-full h-29rem object-cover rounded" /></Link>
            <p className="mt-2 text-center text-[#ff7559] font-bold"></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      
      <footer id="contact">
      <ContactFooter />
      </footer>
    </div>
  );
}

export default Events;
