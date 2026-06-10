import Header from "@/components/Header";
import { getHome, homes } from "@/data/homes";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return homes.map((home) => ({ id: home.id }));
}

export default function HomeDetailPage({ params }: { params: { id: string } }) {
  const home = getHome(params.id);
  if (!home) notFound();

  const firstPayment = Math.round(home.price * 1.58);

  return (
    <>
      <Header />

      <main className="detailHero">
        <Link href="/#homes" className="lightPill">← Back to homes</Link>

        <div className="detailTop" style={{ marginTop: 26 }}>
          <section>
            <p className="kicker">{home.city} · {home.area}</p>
            <h1 style={{ fontSize: "clamp(52px,6vw,82px)" }}>{home.title}</h1>
            <p className="lead">{home.description}</p>

            <div className="gallery">
              <div />
              <div />
              <div />
            </div>

            <h2 style={{ fontSize: 44 }}>Included in your stay</h2>
            <div className="amenities">
              {home.tags.map((tag) => (
                <div className="amenity" key={tag}>✓ {tag}</div>
              ))}
              <div className="amenity">✓ Fully furnished</div>
              <div className="amenity">✓ Maintenance support</div>
              <div className="amenity">✓ {home.bedrooms} bedroom(s)</div>
              <div className="amenity">✓ {home.baths} bathroom(s)</div>
            </div>
          </section>

          <aside className="booking">
            <div className="row">
              <span className="price">€{home.price}/mo</span>
              <strong>★ {home.rating}</strong>
            </div>

            <label>Move-in</label>
            <input type="month" />

            <label>Length of stay</label>
            <select>
              <option>{home.minStay} month minimum</option>
              <option>3 months</option>
              <option>6 months</option>
              <option>12 months</option>
            </select>

            <hr />
            <div className="row"><span>Monthly rent</span><strong>€{home.price}</strong></div>
            <div className="row"><span>Service package</span><strong>€{Math.round(home.price * 0.08)}</strong></div>
            <div className="row"><span>Deposit estimate</span><strong>€{Math.round(home.price * 0.5)}</strong></div>
            <hr />
            <div className="row"><span>First payment</span><strong>€{firstPayment}</strong></div>

            <Link className="pill" style={{ width: "100%", marginTop: 18 }} href="/login">
              Request booking
            </Link>
            <p className="meta">Demo flow. Payments and verification will be added in the next version.</p>
          </aside>
        </div>
      </main>
    </>
  );
}
