import Link from "next/link";
import { Home } from "@/data/homes";

export default function HomeCard({ home, index }: { home: Home; index: number }) {
  return (
    <Link href={`/homes/${home.id}`} className="homeCard">
      <div className={`homeImage alt${index % 4}`}>
        <span className="badge">{home.minStay}+ month{home.minStay > 1 ? "s" : ""}</span>
      </div>
      <div className="cardBody">
        <div className="row">
          <h3>{home.title}</h3>
          <strong>★ {home.rating}</strong>
        </div>
        <p className="meta">
          {home.city} · {home.area} · {home.size} m² · {home.bedrooms} bed
        </p>
        <div className="tags">
          {home.tags.slice(0, 3).map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="row">
          <span className="price">€{home.price}/mo</span>
          <span className="meta">{home.style}</span>
        </div>
      </div>
    </Link>
  );
}
