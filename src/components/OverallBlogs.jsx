import { ArrowLeft } from "lucide-react";
import { BlogCard } from "./Blogs";

const OverallBlogs = ({ posts }) => {
  return (
    <section id="blogs" className="min-h-screen bg-gray-50 px-6 scroll-m-6">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/#blogs" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" /> Back
          </a>
          <div className="text-sm text-gray-500">All Blogs</div>
        </div>
      </header>
      <div className="min-h-screen bg-gray-50 lg:px-20 py-16">
        <header className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#02033B]">Featured Blogs</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Browse hand‑picked articles. Click Read More to jump to the full post.
          </p>
        </header>
        <main className="max-w-7xl mx-auto px-4">
          <div className="relative transition-[max-height] duration-300 ease-linear">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default OverallBlogs;
