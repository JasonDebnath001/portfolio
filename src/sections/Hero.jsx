import React from "react";
import { Helmet } from "react-helmet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroImage from "../components/heroModels/HeroImage";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Freelance Full-Stack Web Developer | Affordable Websites & Apps —
          Aritra Debnath
        </title>
        <meta
          name="description"
          content="Hire Aritra Debnath, a freelance full-stack web developer and software engineer. Fast, SEO-friendly, affordable websites and web apps for startups and small businesses."
        />
        <link rel="canonical" href="https://aritradebnath.site/" />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aritradebnath.site/" />
        <meta
          property="og:title"
          content="Freelance Full-Stack Web Developer — Aritra Debnath"
        />
        <meta
          property="og:description"
          content="Affordable, high-performance websites and apps. React, Node, SEO, Core Web Vitals."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202025-10-30%20at%2020.47.57_4fdd2308.jpg?updatedAt=1761837581394"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Freelance Full-Stack Web Developer — Aritra Debnath"
        />
        <meta
          name="twitter:description"
          content="Affordable, high-performance websites and apps. React, Node, SEO, Core Web Vitals."
        />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202025-10-30%20at%2020.47.57_4fdd2308.jpg?updatedAt=1761837581394"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://aritradebnath.site/",
                name: "Aritra Debnath",
                jobTitle:
                  "Freelance Full-Stack Web Developer, Software Engineer",
                url: "https://aritradebnath.site/",
                image:
                  "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202025-10-30%20at%2020.47.57_4fdd2308.jpg?updatedAt=1761837581394",
                sameAs: [
                  "https://github.com/JasonDebnath001",
                  "https://www.linkedin.com/in/aritra-debnath-ab2b2b259/",
                  "https://x.com/AritraD82730329",
                ],
                knowsAbout: [
                  "web development",
                  "full-stack development",
                  "React",
                  "Node.js",
                  "SEO",
                  "Core Web Vitals",
                  "frontend",
                  "backend",
                  "REST APIs",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://aritradebnath.site/",
                url: "https://aritradebnath.site/",
                name: "Aritra Debnath — Freelance Full-Stack Web Developer",
                inLanguage: "en",
                publisher: { "@id": "https://aritradebnath.site/" },
              },
            ],
          })}
        </script>
      </Helmet>

      <section
        id="hero"
        className="relative overflow-hidden"
        aria-labelledby="hero-h1"
        itemScope
        itemType="https://schema.org/Person"
      >
        <h1 id="hero-h1" className="sr-only">
          Aritra Debnath — Freelance Full-Stack Web Developer and Software
          Engineer in India. Affordable web developer for startups and small
          businesses.
        </h1>

        <div className="absolute top-0 left-0 z-10" aria-hidden="true">
          <img
            src="/images/bg.png"
            alt=""
            loading="lazy"
            width="1600"
            height="900"
          />
        </div>

        <div className="hero-layout flex-col sm:flex-row">
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={`${word.text} icon`}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                            loading="lazy"
                            width="48"
                            height="48"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>Into Real Projects</h1>
                <h1>That Deliver Results</h1>
              </div>
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm Aritra, a freelance full-stack web developer and
                software engineer building fast, SEO-friendly, affordable
                websites and web apps that grow traffic and conversions.
              </p>
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="See My Work"
              />
            </div>
          </header>
          <figure
            className="w-full h-full flex justify-center items-center"
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <HeroImage />
            <meta
              itemProp="caption"
              content="Aritra Debnath — Freelance Full-Stack Web Developer"
            />
          </figure>
        </div>

        <AnimatedCounter />

        <meta itemProp="name" content="Aritra Debnath" />
        <meta
          itemProp="jobTitle"
          content="Freelance Full-Stack Web Developer, Software Engineer"
        />
        <meta itemProp="url" content="https://aritradebnath.site/" />
        <link itemProp="sameAs" href="https://github.com/JasonDebnath001" />
        <link
          itemProp="sameAs"
          href="https://www.linkedin.com/in/aritra-debnath-ab2b2b259/"
        />
        <link itemProp="sameAs" href="https://x.com/AritraD82730329" />
      </section>
    </>
  );
};

export default Hero;
