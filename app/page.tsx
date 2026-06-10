import Header from "@/components/Header";
import HomeCard from "@/components/HomeCard";
import { homes } from "@/data/homes";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="hero">
        <div>
          <p className="kicker">Premium furnished homes · 1–12 months</p>
          <h1>Live beautifully, for as long as you need.</h1>
          <p className="lead">
            Move into design-led apartments with furniture, bills, Wi‑Fi, workspace and support included.
            Flexible monthly stays without traditional rental stress.
          </p>

          <form className="searchBox" action="#homes">
            <div>
              <label>City</label>
              <select name="city">
                <option>Any city</option>
                <option>Athens</option>
                <option>Thessaloniki</option>
                <option>Lisbon</option>
                <option>Barcelona</option>
              </select>
            </div>
            <div>
              <label>Move-in</label>
              <input type="month" />
            </div>
            <div>
              <label>Stay</label>
              <select name="stay">
                <option>1+ month</option>
                <option>3+ months</option>
                <option>6+ months</option>
              </select>
            </div>
            <button>Search</button>
          </form>
        </div>

        <div className="heroVisual">
          <div className="floatCard">
            <strong>Ready to move in</strong>
            <span>Bills · Wi‑Fi · Furniture · Support</span>
          </div>
        </div>
      </section>

      <section className="trust">
        <div>Fully furnished</div>
        <div>Professionally managed</div>
        <div>Monthly contracts</div>
        <div>Work-from-home ready</div>
      </section>

      <main id="homes" className="section container">
        <div className="sectionHead">
          <div>
            <p className="kicker">Available homes</p>
            <h2>Choose your next monthly home</h2>
          </div>
          <div className="filters">
            <span className="filter">Athens</span>
            <span className="filter">1+ month</span>
            <span className="filter">Bills included</span>
          </div>
        </div>

        <div className="grid">
          {homes.map((home, index) => (
            <HomeCard home={home} index={index} key={home.id} />
          ))}
        </div>
      </main>

      <section id="how" className="section container split">
        <div>
          <p className="kicker">How it works</p>
          <h2>Book like a hotel. Live like home.</h2>
          <p className="lead">
            Find a home, request your dates, verify your profile and move in.
            Every apartment is prepared before arrival and supported during your stay.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <b>01</b>
            <h3>Pick a city and dates</h3>
            <p className="meta">Compare homes by lifestyle, location and monthly budget.</p>
          </div>
          <div className="step">
            <b>02</b>
            <h3>Send a request</h3>
            <p className="meta">We confirm availability, documents and payment setup.</p>
          </div>
          <div className="step">
            <b>03</b>
            <h3>Move in</h3>
            <p className="meta">Arrive to a furnished, equipped apartment with support included.</p>
          </div>
        </div>
      </section>

      <section id="corporate" className="section container split">
        <div>
          <p className="kicker">Corporate housing</p>
          <h2>Flexible housing for teams and relocations.</h2>
          <p className="lead">
            A housing platform for companies that need monthly homes for employees,
            projects, relocation and temporary assignments.
          </p>
          <Link className="pill" href="/login">Request company access</Link>
        </div>
        <div className="panel">
          <h3>Company features</h3>
          <p className="meta">Monthly invoicing, employee profiles, verified apartments, booking requests, support and maintenance tracking.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container row">
          <strong>Noma Homes</strong>
          <span className="meta">Premium monthly furnished rentals.</span>
        </div>
      </footer>
    </>
  );
}
