import './Booking.css';

export default function Booking({ booking, setBooking, onBook }) {
  const submit = (e) => {
    e.preventDefault();
    if (!booking.pickup.trim())
      return alert('Please enter your pickup location.');
    if (!booking.destination.trim())
      return alert('Please enter your destination.');
    onBook(booking);
  };

  return (
    <div className="booking-box">
      <div className="booking-head">
        <div>
          <span className="small-label">BOOK A RIDE</span>
          <h2>Where are you going?</h2>
        </div>
        <span className="booking-badge">TEZGO</span>
      </div>
      <form onSubmit={submit}>
        <div className="form-field location-field">
          <span className="field-marker pickup-marker" />
          <div>
            <label>PICKUP LOCATION</label>
            <input
              value={booking.pickup}
              onChange={(e) =>
                setBooking({ ...booking, pickup: e.target.value })
              }
              placeholder="Enter pickup location"
            />
          </div>
        </div>
        <div className="route-line" />
        <div className="form-field location-field">
          <span className="field-marker destination-marker" />
          <div>
            <label>DESTINATION</label>
            <input
              value={booking.destination}
              onChange={(e) =>
                setBooking({ ...booking, destination: e.target.value })
              }
              placeholder="Where do you want to go?"
            />
          </div>
        </div>
        <div className="booking-actions">
          <button
            type="button"
            className={booking.type === 'now' ? 'active' : ''}
            onClick={() => setBooking({ ...booking, type: 'now' })}
          >
            Ride now
          </button>
          <button
            type="button"
            className={booking.type === 'later' ? 'active' : ''}
            onClick={() => setBooking({ ...booking, type: 'later' })}
          >
            Ride later
          </button>
        </div>
        <button type="submit" className="book-button">
          Find a ride <span>→</span>
        </button>
      </form>
    </div>
  );
}
