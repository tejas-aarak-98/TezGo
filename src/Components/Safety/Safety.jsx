import './Safety.css';
const items = [
  [
    '/images/shield.png',
    'Verified Drivers',
    'Driver information and verification are part of the TEZGO experience.',
  ],
  [
    '/images/tracking.png',
    'Trip Tracking',
    'Follow your journey and stay informed throughout your ride.',
  ],
  [
    '/images/business.png',
    'Ride Details',
    'View important driver and vehicle information before your trip.',
  ],
  [
    '/images/shield.png',
    'Support',
    'Get help whenever you need assistance with your journey.',
  ],
];
export default function SafetySection() {
  return (
    <section id="safety" className="section soft-section">
      <div className="section-heading">
        <div className="eyebrow center">
          <span /> YOUR SAFETY MATTERS <span />
        </div>
        <h2>
          Built around <em>safer journeys.</em>
        </h2>
        <p>
          Every part of the TEZGO experience is designed to keep you informed
          and comfortable.
        </p>
      </div>
      <div className="safety-grid">
        {items.map((x) => (
          <article key={x[1]}>
            <img src={x[0]} alt="" />
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
