import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/db/firebase";
import { ArrowLeft } from "lucide-react";

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!email.includes("@")) {
      setError("Invalid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      setLoading(true);
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      onLoginSuccess?.(user);
    } catch (err) {
      setError("Invalid email address and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-left mt-3">
          <a href="/" className="text-blue-500 hover:underline">
            ← Back to main page
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
