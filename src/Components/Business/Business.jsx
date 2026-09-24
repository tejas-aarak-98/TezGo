import './Business.css';
const features = [
  [
    '/images/business.png',
    'Corporate Rides',
    'Make business transportation easier for your teams.',
  ],
  [
    '/images/tracking.png',
    'Centralized Management',
    'Manage business trips and transportation from one place.',
  ],
  [
    '/images/app.png',
    'Reports & Billing',
    'Keep track of company travel and simplify billing.',
  ],
];
export default function BusinessSection({ onBusiness }) {
  return (
    <section id="business" className="split-section business-section">
      <div className="business-content">
        <div className="eyebrow">
          <span /> TEZGO FOR BUSINESS
        </div>
        <h2>
          Move your business <em>forward.</em>
        </h2>
        <p>
          Simplify employee transportation, business travel and corporate
          mobility with TEZGO.
        </p>
        <button onClick={onBusiness}>
          Explore Business <span>→</span>
        </button>
      </div>
      <div className="business-features">
        {features.map((x) => (
          <article key={x[1]}>
            <img src={x[0]} alt="" />
            <div>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
