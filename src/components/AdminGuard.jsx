import { auth } from "@/db/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import LoginPage from "./Login";

export default function AdminGuard({ children }) {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecked(true);
    });
    return () => unsub();
  }, []);

  if (!checked) return <p>Loading...</p>;

  if (!user) {
    return <LoginPage onLoginSuccess={setUser} />;
  }

  return <>{children}</>;
}
