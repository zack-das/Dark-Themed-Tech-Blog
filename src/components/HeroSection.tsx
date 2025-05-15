import React from 'react';
import { ClockIcon, UserIcon, TagIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="w-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-400 text-xs font-semibold rounded-full mb-4">
              FEATURED
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The Future of Quantum Computing: Breaking New Boundaries
            </h1>
            <div className="flex items-center text-gray-400 text-sm mb-6 space-x-4">
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                <span>Alex Chen</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="h-4 w-4 mr-1" />
                <span>Quantum Tech</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore how quantum computing is revolutionizing the tech
              landscape and what it means for the future of data processing,
              encryption, and artificial intelligence.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
              Read Article
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg shadow-cyan-500/10">
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Quantum Computing Visualization" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}