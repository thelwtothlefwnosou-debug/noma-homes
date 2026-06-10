import Header from "@/components/Header";
import Link from "next/link";

export default function HostPage() {
  return (
    <>
      <Header />
      <main className="section container split">
        <div>
          <p className="kicker">For property owners</p>
          <h1 style={{ fontSize: "clamp(52px,6vw,86px)" }}>Turn your property into a premium monthly home.</h1>
          <p className="lead">
            List furnished apartments for monthly stays, manage booking requests and attract verified guests:
            professionals, companies, relocations and remote workers.
          </p>
          <Link href="/login" className="pill">Start hosting</Link>
        </div>

        <form className="panel">
          <label>Property title</label>
          <input placeholder="e.g. Design apartment in Kolonaki" />
          <label>City</label>
          <input placeholder="Athens" />
          <label>Monthly price</label>
          <input placeholder="1850" />
          <label>Minimum stay</label>
          <select>
            <option>1 month</option>
            <option>3 months</option>
            <option>6 months</option>
          </select>
          <button type="button" className="pill" style={{ width: "100%", marginTop: 12 }}>
            Save demo listing
          </button>
        </form>
      </main>
    </>
  );
}
