import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (!phone.trim() || !password.trim()) {
      setError('Please enter your phone number and password.');
      return;
    }
    alert('TEZGO login successful.');
    navigate('/');
  };
  return (
    <div className="login-page">
      <div className="login-left">
        <Link to="/" className="login-brand">
          TEZ<span>GO</span>
        </Link>
        <div className="login-copy">
          <div className="eyebrow light">
            <span /> SMARTER MOBILITY BY TEZTECCH
          </div>
          <h1>
            Welcome back.
            <br />
            Go <em>TEZGO.</em>
          </h1>
          <p>
            Sign in to book rides, track your journeys and manage your TEZGO
            experience.
          </p>
          <div className="login-perks">
            <span>✓ Fast booking</span>
            <span>✓ Live tracking</span>
            <span>✓ Safer journeys</span>
          </div>
        </div>
        <div className="login-footer-note">
          Smarter mobility, designed by Teztecch.
        </div>
      </div>
      <div className="login-right">
        <div className="login-card">
          <div className="login-card-top">
            <span className="small-label">TEZGO ACCOUNT</span>
            <Link to="/">← Back to home</Link>
          </div>
          <h2>Welcome back</h2>
          <p className="login-subtitle">Log in to continue your journey.</p>
          <form onSubmit={submit}>
            <label>
              PHONE NUMBER
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
              />
            </label>
            <label>
              PASSWORD
              <div className="password-wrap">
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <button type="button" onClick={() => setShow((v) => !v)}>
                  {show ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>
            <div className="login-options">
              <label className="remember">
                <input type="checkbox" /> Remember me
              </label>
              <button
                type="button"
                className="forgot"
                onClick={() =>
                  alert('Password reset flow can be connected here.')
                }
              >
                Forgot password?
              </button>
            </div>
            {error && <p className="login-error">{error}</p>}
            <button className="login-submit" type="submit">
              Log in <span>→</span>
            </button>
          </form>
          <div className="login-divider">
            <span>OR</span>
          </div>
          <p className="create-account">
            Don't have an account? <Link to="/">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
