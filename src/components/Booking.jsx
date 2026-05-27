import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import stylists from '../data/stylists';
import { useAuth } from '../context/AuthContext';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const stylistId = searchParams.get('stylist');
  const serviceName = searchParams.get('service');
  const servicePrice = searchParams.get('price');

  const stylist = stylistId ? stylists.find((s) => s.id === Number(stylistId)) : null;

  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [paid, setPaid] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  ];

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('viya_bookings') || '[]');
    bookings.push({
      id: Date.now(),
      userId: user?.id,
      stylistName: stylist?.name || 'Any Stylist',
      service: serviceName,
      price: Number(servicePrice) || 0,
      date,
      time,
      notes,
      bookedAt: new Date().toISOString(),
    });
    localStorage.setItem('viya_bookings', JSON.stringify(bookings));
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <div className="page-content">
      <div className="page-hero" style={{ minHeight: 'auto', padding: '10rem 0 3rem' }}>
        <div className="section-inner">
          <div className="section-tag reveal"><span>Booking</span></div>
          <h1 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>
            Complete Your <em style={{ color: 'var(--gold-light)' }}>Booking</em>
          </h1>
        </div>
      </div>

      <div className="section-inner" style={{ padding: '2rem 4rem 5rem' }}>
        {bookingConfirmed ? (
          <div className="booking-confirmed reveal" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', marginBottom: '1rem' }}>Booking Confirmed!</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              <strong>{serviceName}</strong> with <strong>{stylist?.name || 'Your Stylist'}</strong>
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              📅 {date} at ⏰ {time}
            </p>
            <div style={{ background: 'var(--gold-pale)', padding: '1.5rem', marginBottom: '2rem', maxWidth: 400, margin: '0 auto 2rem' }}>
              <p style={{ fontSize: '0.82rem', color: 'var(--bronze)' }}>
                <strong>📍 Viya Salon</strong><br />
                Kukatpally, Hyderabad<br />
                Please arrive 10 minutes before your appointment.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/" className="btn-primary"><span>Go Home</span></Link>
              <Link to="/stylists" className="btn-ghost"><span>Book Another</span></Link>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Left: Booking Summary */}
            <div className="reveal">
              <div style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>Booking Summary</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {stylist && (
                    <div className="booking-summary-item">
                      <span className="bs-label">Stylist</span>
                      <span className="bs-value">{stylist.name}</span>
                    </div>
                  )}
                  <div className="booking-summary-item">
                    <span className="bs-label">Service</span>
                    <span className="bs-value">{serviceName || 'Not specified'}</span>
                  </div>
                  <div className="booking-summary-item">
                    <span className="bs-label">Price</span>
                    <span className="bs-value" style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', color: 'var(--gold)' }}>
                      ₹{Number(servicePrice || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  {date && (
                    <div className="booking-summary-item">
                      <span className="bs-label">Date</span>
                      <span className="bs-value">{date}</span>
                    </div>
                  )}
                  {time && (
                    <div className="booking-summary-item">
                      <span className="bs-label">Time</span>
                      <span className="bs-value">{time}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* UPI QR Payment */}
              <div style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)', padding: '2rem', marginTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>💳 Payment</h3>
                <div style={{ textAlign: 'center' }}>
                  <div className="qr-wrapper">                        <div className="qr-placeholder">
                      <QRCodeSVG
                        value={`upi://pay?pa=viyasalon@upi&pn=Viya%20Salon&am=${servicePrice || 0}&tn=Booking%20${encodeURIComponent(serviceName || 'Service')}`}
                        size={160}
                        bgColor="#ffffff"
                        fgColor="#0f2218"
                        level="H"
                        includeMargin
                      />
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '1rem 0 0.5rem' }}>
                    Scan with any UPI app
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    UPI ID: <strong style={{ color: 'var(--gold)' }}>viyasalon@upi</strong>
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <button
                      onClick={() => setPaid(true)}
                      className={`btn-primary ${paid ? 'paid-btn' : ''}`}
                      style={{ padding: '0.6rem 1.4rem', fontSize: '0.72rem' }}
                    >
                      <span>{paid ? '✓ Payment Received' : 'I\'ve Paid (Simulate)'}</span>
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                    <span className="upi-badge">Google Pay</span>
                    <span className="upi-badge">PhonePe</span>
                    <span className="upi-badge">Paytm</span>
                    <span className="upi-badge">BHIM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="reveal">
              <div style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                  {step === 1 ? '📅 Select Date & Time' : '✏️ Additional Notes'}
                </h3>

                {step === 1 ? (
                  <>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="booking-date">Preferred Date</label>
                      <input
                        id="booking-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={minDateStr}
                        required
                      />
                    </div>
                    {date && (
                      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label>Preferred Time</label>
                        <div className="time-slots">
                          {timeSlots.map((t) => (
                            <button
                              key={t}
                              onClick={() => setTime(t)}
                              className={`time-slot ${time === t ? 'selected' : ''}`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => setStep(2)}
                      disabled={!date || !time}
                      className="btn-primary"
                      style={{ opacity: !date || !time ? 0.5 : 1, marginTop: '1rem' }}
                    >
                      <span>Continue →</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="notes">Special Requests or Notes</label>
                      <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="E.g., Allergic to certain products, specific style reference, etc."
                        rows={4}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button onClick={() => setStep(1)} className="btn-ghost">
                        <span>← Back</span>
                      </button>
                      <button
                        onClick={handleConfirmBooking}
                        disabled={!paid}
                        className="btn-primary"
                        style={{ opacity: !paid ? 0.5 : 1 }}
                      >
                        <span>{!paid ? 'Please complete payment first' : '✓ Confirm Booking'}</span>
                      </button>
                    </div>
                    {!paid && (
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                        💡 Scroll down and complete the payment to continue.
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
