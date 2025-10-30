import React, { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRef = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate angle based on mouse position relative to card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle =
      Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

    // Normalize angle to be between 0 and 360
    const normalizedAngle = (angle + 360) % 360;

    // Update the CSS custom property for the glow effect
    card.style.setProperty("--start", normalizedAngle);
  };

  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl pt-10 relative overflow-hidden mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt={"star"} key={i} className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
