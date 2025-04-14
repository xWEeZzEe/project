import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <h1 className="text-3xl font-serif text-white font-bold tracking-wider">SPANDAN'25</h1>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#ff7559] hover:text-white font-bold text-sm uppercase tracking-widest hover:scale-110">Home</Link>
            <a href="#contact" className="text-[#ff7559] hover:text-white font-bold text-sm uppercase tracking-widest hover:scale-110">Contact</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-28 px-4 max-w-6xl mx-auto">
        {/* Graphic */}
        <div className="flex justify-center mb-10">
          <img src="/your-graphic.png" alt="Events Graphic" className="w-40 h-40 object-contain" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-6xl font-bold text-[#ff7559] mb-4">Competition</h2>

        {/* Solo Events */}
        <h3 className="text-3xl font-semibold mt-16 mb-6 text-[#f1dc3a]">Solo Events</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Replace src paths with your local image paths */}
          {['solo1.png', 'solo2.png', 'solo3.png'].map((img, i) => (
            <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
              <img src={`/assets/${img}`} alt={`Solo Event ${i + 1}`} className="w-full h-56 object-cover rounded" />
              <p className="mt-2 text-center text-[#ff7559] font-bold">Solo Event {i + 1}</p>
            </div>
          ))}
        </div>

        {/* Group Events */}
        <h3 className="text-3xl font-semibold mt-20 mb-6 text-[#f1dc3a]">Group Events</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['group1.png', 'group2.png', 'group3.png'].map((img, i) => (
            <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:scale-105 transition">
              <img src={`/assets/${img}`} alt={`Group Event ${i + 1}`} className="w-full h-56 object-cover rounded" />
              <p className="mt-2 text-center text-[#ff7559] font-bold">Group Event {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="mt-20 bg-black py-10 text-center border-t border-white/10">
        <p className="text-[#ff7559] tracking-wider">© 2025 SPANDAN. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Events;
