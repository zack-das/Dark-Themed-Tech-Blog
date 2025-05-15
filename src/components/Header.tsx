import React, { useState } from 'react';
import { MenuIcon, XIcon, SearchIcon, CodeIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <CodeIcon className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              TechByte
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Articles
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Tutorials
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </a>
          </nav>
          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-cyan-400">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button className="md:hidden text-gray-300 hover:text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Home
            </a>
            <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Articles
            </a>
            <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Tutorials
            </a>
            <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Resources
            </a>
            <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
              About
            </a>
          </nav>}
      </div>
    </header>;
}