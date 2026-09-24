import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            TEZ<span>GO</span>
          </h2>
          <p>Smarter mobility, designed by Tejas Aarak.</p>
          <div className="footer-chip">Tejas Aarak × TEZGO</div>
        </div>
        <div className="footer-links">
          <div>
            <h3>TEZGO</h3>
            <a href="#rides">Ride</a>
            <a href="#tracking">Track</a>
            <a href="#safety">Safety</a>
            <a href="#help">Help</a>
          </div>
          <div>
            <h3>DRIVE</h3>
            <a href="#driver">Drive with TEZGO</a>
            <a href="#driver">Driver benefits</a>
            <a href="#driver">Driver support</a>
          </div>
          <div>
            <h3>BUSINESS</h3>
            <a href="#business">TEZGO Business</a>
            <a href="#business">Corporate rides</a>
            <a href="#business">Business support</a>
          </div>
          <div>
            <h3>COMPANY</h3>
            <a href="#home">About TEZGO</a>
            <a href="#safety">Safety</a>
            <a href="#help">Help Center</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 TEZGO. All rights reserved.</p>
        <p>Powered by Tejas Aarak</p>
      </div>
    </footer>
  );
}
