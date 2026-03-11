import React, { useState, useEffect } from "react";
import "./Events.css";
import event1 from "../../assets/Test-1.png";
import event3 from "../../assets/Test-3.png";
import event4 from "../../assets/Test-1.png";

const images = [event1, event3, event4];

const EventsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [closing, setClosing] = useState(false); 
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Swipe gestures
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipe = 50;
    if (distance > minSwipe) nextSlide();
    if (distance < -minSwipe) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Open image modal
  const openModal = (img) => {
    setModalImage(img);
    setShowModal(true);
    setClosing(false);
  };

  // Close with fade-out
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setModalImage(null);
      setClosing(false);
    }, 300); // matches fade-out animation time
  };

  return (
    <div className="events-wrapper">
      <div
        className="events-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <img
              src={img}
              alt={`Event ${index + 1}`}
              onClick={() => openModal(img)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}

        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>

        <div className="dots"> 
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? "active-dot" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <div
          className={`modal-overlay ${closing ? "fade-out" : "fade-in"}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${closing ? "zoom-out" : "zoom-in"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Full view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsSlider;