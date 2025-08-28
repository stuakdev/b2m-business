import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

const BlogSpecificPage = ({ post }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 hover:cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </a>
          <div className="text-sm text-gray-500">MyBlog</div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
        >
          {post.title}
        </motion.h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="inline-flex items-center gap-3">
            <span className="font-medium">Author Name: {post.author}</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {post.date}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl shadow-sm">
          <img src={post.image} alt={post.title} className="w-full h-[46vh] md:h-[60vh] object-cover" />
        </div>
        <div className="max-w-5xl mx-auto py-8">
          <p className="leading-relaxed text-gray-700 text-justify whitespace-pre-wrap">{post.description}</p>
        </div>
      </section>
    </div>
  );
};

export default BlogSpecificPage;
