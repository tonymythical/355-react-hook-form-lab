import { SEATING } from "../data/tonight.js";

function BookingList({ bookings }) {
  const guests = bookings.reduce((total, booking) => total + booking.partySize, 0);

  return (
    <section className="panel bookings">
      <div className="panel-head">
        <h2 className="panel-title">Tonight</h2>
        <span className="bookings-total">
          {guests} guests in {bookings.length} bookings
        </span>
      </div>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking">
            <div className="booking-top">
              <span className="booking-time">{booking.time}</span>
              <span className="booking-name">{booking.name}</span>
              <span className="booking-party">Party of {booking.partySize}</span>
            </div>
            <div className="booking-details">
              <span>{booking.contact.phone}</span>
              {booking.contact.email && <span>{booking.contact.email}</span>}
              {booking.seating && <span>{SEATING[booking.seating]}</span>}
              {booking.celebrating && <span className="booking-flag">Celebrating</span>}
            </div>
            {booking.notes && <p className="booking-notes">{booking.notes}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookingList;