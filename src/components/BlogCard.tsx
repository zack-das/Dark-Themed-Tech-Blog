import React from 'react';
import { ClockIcon, UserIcon } from 'lucide-react';
type BlogCardProps = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
};
export function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  imageUrl,
  featured = false
}: BlogCardProps) {
  return <article className={`bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-transform duration-300 hover:transform hover:-translate-y-1 ${featured ? 'col-span-2' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-gray-900/70 text-cyan-400 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-cyan-400 transition-colors">
          {title}
        </h2>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center text-gray-400 text-xs">
          <div className="flex items-center">
            <UserIcon className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>;
}