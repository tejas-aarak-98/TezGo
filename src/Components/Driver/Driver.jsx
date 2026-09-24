import './Driver.css';
const benefits = [
  ['/images/driver.png', 'Flexible Hours', 'Choose when you want to drive.'],
  [
    '/images/business.png',
    'More Opportunities',
    'Connect with passengers looking for reliable rides.',
  ],
  [
    '/images/shield.png',
    'Driver Support',
    'Get support throughout your TEZGO journey.',
  ],
];
export default function DriverSection({ onDriver }) {
  return (
    <section id="driver" className="split-section driver-section">
      <div className="driver-content">
        <div className="eyebrow light">
          <span /> DRIVE WITH TEZGO
        </div>
        <h2>
          Earn on your own <em>schedule.</em>
        </h2>
        <p>
          Join TEZGO as a driver and turn your time on the road into an
          opportunity.
        </p>
        <button onClick={onDriver}>
          Become a TEZGO Driver <span>→</span>
        </button>
      </div>
      <div className="driver-benefits">
        {benefits.map((x) => (
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
