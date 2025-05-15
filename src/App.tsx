import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BlogList } from './components/BlogList';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BlogList />
      </main>
      <Footer />
    </div>;
}