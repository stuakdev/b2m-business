import { auth } from "@/db/firebase";
import { getApp, getApps, initializeApp } from "firebase/app";
import { signOut } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

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

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    date: new Date().toDateString(),
  });
  const [editingId, setEditingId] = useState(null);

  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    setBlogs(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      const ref = doc(db, "blogs", editingId);
      await updateDoc(ref, {
        ...form,
      });
      setEditingId(null);
    } else {
      try {
        await addDoc(collection(db, "blogs"), {
          ...form,
        });
      } catch (err) {
        console.error("Firestore write error:", err);
      }
    }
    setForm({ title: "", author: "", description: "", image: "", date: new Date().toDateString() });
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setForm({
      title: blog.title,
      author: blog.author,
      description: blog.description,
      image: blog.image,
      date: blog.date,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
  };

  const resetFormHandler = () => {
    setForm({ title: "", author: "", description: "", image: "", date: new Date().toDateString() });
    setEditingId(null);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/#blogs" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </a>
          <div className="flex text-sm text-gray-500">
            <p className="hover:cursor-default">Add Blogs</p>
            <a onClick={async () => await signOut(auth)} className="ml-6 text-black hover:cursor-pointer hover:opacity-95">
              Sign Out
            </a>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border rounded-lg p-3"
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className="w-full border rounded-lg p-3"
            required
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border rounded-lg p-3"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full border rounded-lg p-3"
            required
          />
          <p className="text-gray-400 text-sm"><span className="text-red-600">*</span> The Uploading Image resolution should be minimum 1080 x 720 px - Provide image address only.</p>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:cursor-pointer">
            {editingId ? "Update Blog" : "Add Blog"}
          </button>
          {editingId && (
            <button
              onClick={resetFormHandler}
              className="border border-black px-6 py-2 rounded-lg ml-4 hover:bg-black hover:text-white hover:cursor-pointer"
            >
              Reset
            </button>
          )}
        </form>

        {/* Blog List */}
        <div className="mt-10 space-y-4">
          {blogs.length === 0 ? (
            <p className="mt-3 text-gray-600 text-center">No Blogs Found.</p>
          ) : (
            blogs.map((b) => (
              <div key={b.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.date}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(b)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:cursor-pointer hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:cursor-pointer hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AddBlog;
