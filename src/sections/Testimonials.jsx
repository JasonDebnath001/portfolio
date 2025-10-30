import React from "react";
import Title from "../components/Title";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Title
          title={"What People Say About Me?"}
          sub={"⭐ Client feedback highlights"}
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
