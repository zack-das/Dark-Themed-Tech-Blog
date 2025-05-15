import React from 'react';
import { BlogCard } from './BlogCard';
import { ChevronRightIcon } from 'lucide-react';
export function BlogList() {
  const blogPosts = [{
    id: 1,
    title: 'AI Ethics: Navigating the Complex Landscape of Machine Learning Bias',
    excerpt: 'As AI systems become more prevalent, addressing inherent biases in algorithms and training data is crucial for ethical implementation.',
    author: 'Maya Johnson',
    date: '2023-10-12',
    readTime: '8 min read',
    category: 'AI & Ethics',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    title: 'Web3 Development: Building the Decentralized Future',
    excerpt: 'Explore the tools, frameworks, and best practices for developing applications in the Web3 ecosystem.',
    author: 'Raj Patel',
    date: '2023-10-08',
    readTime: '6 min read',
    category: 'Blockchain',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    title: 'The Rise of Serverless Architecture: Benefits and Challenges',
    excerpt: 'Serverless computing is changing how we build and deploy applications. Learn about its advantages, limitations, and implementation strategies.',
    author: 'Sarah Kim',
    date: '2023-10-05',
    readTime: '4 min read',
    category: 'Cloud Computing',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    title: 'Cybersecurity in 2023: Emerging Threats and Defense Strategies',
    excerpt: 'An in-depth look at the evolving landscape of cyber threats and how organizations can strengthen their security posture.',
    author: 'Marcus Williams',
    date: '2023-10-01',
    readTime: '7 min read',
    category: 'Security',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    title: 'Optimizing React Performance: Advanced Techniques',
    excerpt: 'Take your React applications to the next level with these performance optimization strategies for complex user interfaces.',
    author: 'Emma Chen',
    date: '2023-09-28',
    readTime: '5 min read',
    category: 'Frontend',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 6,
    title: 'Microservices vs. Monoliths: Choosing the Right Architecture',
    excerpt: 'Compare these two architectural approaches and learn which one might be best suited for your next project.',
    author: 'David Rodriguez',
    date: '2023-09-25',
    readTime: '6 min read',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }];
  const categories = ['AI & Ethics', 'Blockchain', 'Cloud Computing', 'Security', 'Frontend', 'Backend', 'DevOps', 'Data Science', 'Mobile Dev', 'IoT'];
  return <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content - Blog posts */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <div className="flex items-center text-cyan-400 hover:text-cyan-300 cursor-pointer">
                <span className="text-sm font-medium">View all</span>
                <ChevronRightIcon className="h-4 w-4 ml-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map(post => <BlogCard key={post.id} title={post.title} excerpt={post.excerpt} author={post.author} date={post.date} readTime={post.readTime} category={post.category} imageUrl={post.imageUrl} />)}
            </div>
            <div className="mt-10 flex justify-center">
              <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
          {/* Sidebar */}
          <div className="md:w-1/4">
            {/* Categories */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-5 mb-6">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => <a key={index} href="#" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-gray-300 transition-colors">
                    {category}
                  </a>)}
              </div>
            </div>
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 p-5 mb-6">
              <h3 className="text-lg font-bold mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest tech articles directly in your inbox
              </p>
              <form>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 mb-3 focus:outline-none focus:border-cyan-500" />
                <button type="submit" className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            {/* Trending Tags */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-5">
              <h3 className="text-lg font-bold mb-4">Trending Topics</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">#MachineLearning</span>
                  <span className="text-xs text-cyan-400">124 articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">#Cybersecurity</span>
                  <span className="text-xs text-cyan-400">98 articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">#CloudComputing</span>
                  <span className="text-xs text-cyan-400">87 articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">#DevOps</span>
                  <span className="text-xs text-cyan-400">76 articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">#Blockchain</span>
                  <span className="text-xs text-cyan-400">65 articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}