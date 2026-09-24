import './Home.css';
import Booking from '../Booking/Booking';

export default function Home({ booking, setBooking, onBook, onSignup }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="eyebrow">
          <span /> SMARTER MOBILITY BY TEZTECCH
        </div>
        <h1>
          Go anywhere.
          <br />
          <strong>
            Go <em>TEZGO.</em>
          </strong>
        </h1>
        <p className="hero-copy">
          Reliable rides, simple booking and a smoother way to move around your
          city.
        </p>
        <div className="hero-points">
          <span>✓ Easy booking</span>
          <span>✓ Live tracking</span>
          <span>✓ Safer journeys</span>
        </div>
        <div className="hero-cta">
          <a href="#rides" className="primary-cta">
            Explore rides <span>→</span>
          </a>
          <button className="text-cta" onClick={onSignup}>
            Create account <span>↗</span>
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="map-card">
          <img src="/images/hero-map.png" alt="TEZGO route map" />
          <div className="map-topbar">
            <span className="live-dot" />
            <strong>TEZGO Live</strong>
            <span>City mobility</span>
          </div>
        </div>
        <div className="floating-card floating-ride">
          <div className="mini-icon">↗</div>
          <div>
            <small>Ride status</small>
            <strong>Driver arriving</strong>
          </div>
          <b>3 min</b>
        </div>
        <div className="floating-card floating-price">
          <small>Starting from</small>
          <strong>₹ 99</strong>
          <span>Quick & convenient</span>
        </div>
      </div>
      <Booking booking={booking} setBooking={setBooking} onBook={onBook} />
    </section>
  );
}
