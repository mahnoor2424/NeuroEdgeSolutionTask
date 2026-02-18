import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const plans = [
  "Foundation Strategy - $80",
  "Strategy + Technical Deep Dive - $100",
  "Complete Business & Growth - $150",
];

const dates = ["24 Feb", "25 Feb", "26 Feb", "27 Feb", "28 Feb"];
const times = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

const BookConsultation = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
    }, 1500);
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Convert date + time to calendar-friendly UTC string
  const formatCalendarDate = (dateStr, timeStr) => {
    const [day, month] = dateStr.split(" ");
    const monthMap = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
    };
    const [hour, minPart] = timeStr.split(":");
    const [min, meridiem] = [minPart.slice(0,2), minPart.slice(3)];
    let hour24 = meridiem === "PM" && +hour !== 12 ? +hour + 12 : +hour;
    if (meridiem === "AM" && +hour === 12) hour24 = 0;
    const dayPadded = day.padStart(2, "0");
    return `2026${monthMap[month]}${dayPadded}T${hour24.toString().padStart(2,"0")}${min}00Z`;
  };

  const calendarLink = selectedDate && selectedTime
    ? `https://www.google.com/calendar/render?action=TEMPLATE&text=NeuroEdge%20Consultation%3A%20${encodeURIComponent(
        selectedPlan
      )}&dates=${formatCalendarDate(selectedDate, selectedTime)}/${formatCalendarDate(selectedDate, selectedTime)}&details=Your%203%20Hours%20strategy%20session&location=Virtual+Meeting`
    : "#";

  return (
    <section className="booking-section">
      <div className="hero-badge services-badge">Services GROWTH</div>
      <h1 className="con">
        Initialize <span className="highlightt">Strategy</span>
      </h1>

      <div className="steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`line ${step >= 2 ? "active" : ""}`}></div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`line ${step >= 3 ? "active" : ""}`}></div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && !showConfirmation && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step-container"
          >
            <div className="card-grid container">
              {plans.map((plan, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPlan(plan)}
                  className={`select-card-btn ${selectedPlan === plan ? "active-card" : ""}`}
                >
                  <div className="icon-boxx">⚡</div>
                  <div className="card-body">
                    <div className="plan-duration">2 Hours Intensive</div>
                    <h3 className="plan-title">{plan.split(" - ")[0]}</h3>
                  </div>
                  <div className="plan-price">{plan.split(" - ")[1]}</div>
                </button>
              ))}
            </div>
            <div className="step-buttons">
              <button
                disabled={!selectedPlan}
                onClick={() => setStep(2)}
                className={`proceed-btn ${selectedPlan ? "enabled" : "disabled"}`}
              >
                Proceed →
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && !showConfirmation && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step-container"
          >
            <h2 className="Node">Temporal Node <span className="highlightt">Sync</span></h2>

            <div className="date-grid mb-5">
              {dates.map((date, i) => {
                const dayNames = ["MON","TUE","WED","THU","FRI"];
                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                    className={`date-btn ${selectedDate === date ? "active-date" : ""}`}
                  >
                    <span className="day">{dayNames[i]}</span>
                    <span className="day-num">{date.split(" ")[0]}</span>
                    <span className="month">{date.split(" ")[1].toUpperCase()}</span>
                  </button>
                );
              })}
            </div>

            <div className="time-container">
              <h2 className="Nodee mb-4">Available Cycles (UTC)</h2>
              <div className="time-grid">
                {times.map((time, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTime(time)}
                    disabled={!selectedDate}
                    className={`time-btn ${selectedTime === time ? "active-time" : ""}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="step-buttons">
              <button onClick={() => setStep(1)} className="prev-btn">← Previous</button>
              <button
                disabled={!selectedTime}
                onClick={() => setStep(3)}
                className={`next-btn ${selectedTime ? "enabled" : "disabled"}`}
              >
                Proceed →
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && !showConfirmation && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="floating-form"
          >
            <form className="final-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Finalize <span className="highlight-blue">Uplink</span></h2>
                <p className="form-subtitle">Establish your technical identity</p>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>Operator Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-field">
                  <label>Digital Address</label>
                  <input type="email" placeholder="operator@neural-net.com" required />
                </div>
              </div>

              <div className="form-field">
                <label>Objective Brief</label>
                <textarea
                  placeholder="Describe your technical roadmap..."
                  rows="5"
                  required
                />
              </div>

              <div className="integration-summary">
                <h4>Integration Summary</h4>
                <div className="summary-info">
                  <p>{selectedPlan}</p>
                  <p>Scheduled: {selectedDate} @ {selectedTime} (UTC)</p>
                </div>
              </div>

              <button type="submit" className="submit-btn-full" disabled={loading}>
                {loading ? "Processing..." : "Confirm Session Terminal"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {showConfirmation && (
        <motion.div
          key="confirmation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="confirmation-screen"
        >
          <div className="confirmation-content">
            <div className="confirmation-icon">
              <svg className="w-12 h-12 text-[#00d4ff] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2>Booking <span className="highlight-blue text-glow">Confirmed</span></h2>
            <p>Your neural link for the consultation has been established.</p>

            <div className="summary-card">
              <div><span>Selected Node</span><span>{selectedPlan}</span></div>
              <div><span>Temporal Node</span><span>{selectedDate} @ {selectedTime}</span></div>
            </div>

            <div className="confirmation-buttons">
              <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="calendar-btn">
                Add to Calendar
              </a>
              <a href="home" className="back-btn">Back to Terminal</a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BookConsultation;
