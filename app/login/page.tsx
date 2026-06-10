import Header from "@/components/Header";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="section container" style={{ maxWidth: 560 }}>
        <div className="panel">
          <p className="kicker">Account</p>
          <h2>Log in or create account</h2>
          <p className="meta">
            Demo account screen. In the next version this connects to Supabase authentication.
          </p>

          <label>Email</label>
          <input placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <button className="pill" style={{ width: "100%", marginTop: 14 }}>Continue</button>

          <p className="meta" style={{ marginTop: 18 }}>
            New here? <Link href="/host"><strong>List your property</strong></Link> or request a monthly home.
          </p>
        </div>
      </main>
    </>
  );
}
