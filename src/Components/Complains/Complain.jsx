import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Complain.css";

const Complaints = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Complaint");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    emailjs.init("FlQ8N9yhcmea5FaGu");
  }, []);

  useEffect(() => {
    let timer;
    if (submitted) {
      setCountdown(5);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setSubmitted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!message.trim()) {
      setError("⚠ Please enter your message.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send("service_s9djnj8", "template_fflcjac", {
        name: name.trim() || "Anonymous",
        type,
        message: message.trim(),
      });

      setSubmitted(true);
      setName("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send feedback. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="complaints-wrapper popup">
      <div className="complaints-container">
        <h2>Complaints & Recommendations</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="complaints-form popup">
            <label>
              Name (Optional):
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name (optional)"
              />
            </label>

            <label>
              Type:
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Complaint">Complaint</option>
                <option value="Recommendation">Recommendation</option>
              </select>
            </label>

            <label>
              Your Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your feedback here..."
                required
              />
            </label>

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>
        ) : (
          <div className="thank-you fade-in">
            ✅ Thank you {name ? name : "Anonymous"} for your{" "}
            {type.toLowerCase()}. We value your opinion.
            <p>
              Closing in {countdown} second{countdown !== 1 ? "s" : ""}...
            </p>
          </div>
        )}
      </div>

      <div className="contact-info">
        <h3>📍 Our Contact Information</h3>
     <p>
    <strong>Address:</strong>{" "}
    <a 
      href="https://www.google.com/maps/place/Demo+General+Hospital/@14.5133578,121.0570999,17z/data=!3m1!4b1!4m6!3m5!1s0x3397cf4bac11dc89:0x59adfff4d973db7b!8m2!3d14.5133526!4d121.0596748!16s%2Fg%2F1hc3sg7v1?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" 
      target="_blank" 
      rel="noopener noreferrer"
      className="address-link"
    >
      68 Sampaloc Extension, North Signal Village, Taguig City, 1630
    </a>
  </p>
        <p>
          <strong>Phone:</strong> (02) 8808-5950 / (02) 8837-9769
        </p>
        <p>
          <strong>Email:</strong> Demomedical@gmail.com
        </p>
        <h3>🕒 Service Hours</h3>
        <p>
          <strong>Pharmacy:</strong> 24/7
        </p>
        <p>
          <strong>Consultation:</strong> 7:00 AM – 7:00 PM
        </p>
        <p>
          <strong>Visiting Hours:</strong> 10:00 AM – 7:00 PM
        </p>
      </div>
    </div>
  );
};

export default Complaints;