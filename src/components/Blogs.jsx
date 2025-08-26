import { getApp, getApps, initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAH2ArRPc9o7QZ9Q42MNcNlQZ2g_Z9Ot1E",
  authDomain: "b2m-business.firebaseapp.com",
  databaseURL: "https://b2m-business-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "b2m-business",
  messagingSenderId: "951763166839",
  appId: "1:951763166839:web:4f2d47bc0f7e9c6264c872",
};

// Init Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

function useOverflow(ref, deps = []) {
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const check = () => setOverflowing(el.scrollHeight > el.clientHeight + 1);

    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, deps);

  return overflowing;
}

export function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-100 flex flex-col">
      <img src={post.image} alt={post.title} className="w-full h-48 md:h-52 object-cover" loading="lazy" />
      <div className="p-5 flex flex-col gap-3 grow">
        <h2 className="text-lg md:text-xl font-semibold leading-snug text-[#02033B]">{post.title}</h2>
        <p className="text-gray-600 text-sm md:text-base">{post.description}</p>
        <div className="mt-auto flex items-center justify-end text-sm text-gray-500 pt-2">
          <time>{post.date}</time>
        </div>
        <a
          href={`/blogs/${post.id}`}
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#02033B] text-white px-4 py-2 text-sm md:text-base hover:opacity-95"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);
  const containerRef = useRef(null);

  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    setPosts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const isOverflowing = useOverflow(containerRef);

  return (
    <section id="blogs" className="bg-gray-50 px-6 lg:px-20 py-16 scroll-m-6">
      <div className="py-6">
        <header className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#02033B]">Latest Blogs</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Browse hand‑picked articles. Click Read More to jump to the full post.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-4">
          <div
            ref={containerRef}
            className="relative transition-[max-height] duration-300 ease-linear max-h-[65rem] overflow-hidden"
          >
            {posts.length === 0 ? (
              <div className="text-center py-20 text-gray-500">No posts found.</div>
            ) : (
              <div className="grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
                {isOverflowing && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
                )}
              </div>
            )}
          </div>
          {posts.length > 0 && isOverflowing && (
            <div className="flex justify-center mt-10">
              <a
                href="/blogs"
                className="rounded-2xl border border-gray-300 bg-white px-24 py-3 text-sm md:text-base hover:shadow-md"
              >
                Load more
              </a>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
