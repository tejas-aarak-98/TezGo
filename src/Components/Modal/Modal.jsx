import './Modal.css';
import { useState } from 'react';
export default function Modal({ modal, close, showNotice }) {
  const [form, setForm] = useState({});
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (modal.type === 'booking')
      return showNotice(
        `Ride request for ${modal.data?.ride || 'TEZGO Go'} submitted.`
      );
    const labels = {
      signup: 'Your TEZGO account has been created.',
      driver: 'Your driver application has been submitted.',
      business: 'Our business team will contact you soon.',
    };
    showNotice(labels[modal.type] || 'Submitted successfully.');
  };
  const configs = {
    signup: [
      'Create your TEZGO account',
      [
        ['name', 'Full Name', 'text', 'Enter your name'],
        ['phone', 'Phone Number', 'tel', 'Enter phone number'],
        ['email', 'Email', 'email', 'Enter email'],
        ['password', 'Password', 'password', 'Create password'],
      ],
      'Create Account',
    ],
    driver: [
      'Drive with TEZGO',
      [
        ['name', 'Full Name', 'text', 'Enter your name'],
        ['phone', 'Phone Number', 'tel', 'Enter phone number'],
        ['city', 'City', 'text', 'Enter your city'],
      ],
      'Apply to Drive',
    ],
    business: [
      'TEZGO Business',
      [
        ['company', 'Company Name', 'text', 'Enter company name'],
        ['email', 'Business Email', 'email', 'Enter business email'],
        ['phone', 'Phone Number', 'tel', 'Enter phone number'],
      ],
      'Contact Business Team',
    ],
  };
  return (
    <div
      className="modal active"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="modal-content">
        <button className="close-modal" onClick={close}>
          ×
        </button>
        {modal.type === 'booking' ? (
          <>
            <h2>Confirm your ride</h2>
            <div className="booking-summary">
              <p>
                <strong>Ride</strong>
                <span>{modal.data?.ride || 'TEZGO Go'}</span>
              </p>
              <p>
                <strong>Pickup</strong>
                <span>{modal.data?.pickup}</span>
              </p>
              <p>
                <strong>Destination</strong>
                <span>{modal.data?.destination}</span>
              </p>
              <p>
                <strong>Schedule</strong>
                <span>
                  {modal.data?.type === 'later' ? 'Ride later' : 'Ride now'}
                </span>
              </p>
            </div>
            <button id="confirm-booking" onClick={submit}>
              Confirm Ride
            </button>
          </>
        ) : (
          <>
            <h2>{configs[modal.type][0]}</h2>
            <form onSubmit={submit}>
              {configs[modal.type][1].map(
                ([name, label, type, placeholder]) => (
                  <label key={name}>
                    {label}
                    <input
                      required
                      name={name}
                      type={type}
                      value={form[name] || ''}
                      onChange={update}
                      placeholder={placeholder}
                    />
                  </label>
                )
              )}
              <button type="submit">{configs[modal.type][2]}</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
