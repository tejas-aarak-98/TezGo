import './Tracking.css';
export default function TrackingSection() {
  return (
    <section id="tracking" className="split-section dark-section">
      <div className="tracking-content">
        <div className="eyebrow">
          <span /> LIVE EXPERIENCE
        </div>
        <h2>
          Know where your ride <em>is.</em>
        </h2>
        <p>
          Stay in control from pickup to destination with a simple, transparent
          ride experience.
        </p>
        <div className="feature-list">
          <div>
            <b>01</b>
            <span>
              <strong>Real-time tracking</strong> Follow your ride on the map.
            </span>
          </div>
          <div>
            <b>02</b>
            <span>
              <strong>Driver details</strong> Know who is picking you up.
            </span>
          </div>
          <div>
            <b>03</b>
            <span>
              <strong>Arrival updates</strong> Stay informed every step.
            </span>
          </div>
        </div>
      </div>
      <div className="tracking-visual">
        <div className="tracking-window">
          <div className="tracking-top">
            <span className="live-dot" /> LIVE TRIP <span>●●●</span>
          </div>
          <img src="/images/hero-map.png" alt="TEZGO live trip map" />
          <div className="trip-bottom">
            <div>
              <div className="driver-avatar">T</div>
              <div>
                <small>Your TEZGO</small>
                <strong>Driver is on the way</strong>
              </div>
            </div>
            <span>3 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}
