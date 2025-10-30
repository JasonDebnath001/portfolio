import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "CloudStack - Cloud Storage Solution",
    description:
      "CloudStack is a secure cloud storage app built with Next.js, TailwindCSS, and Appwrite. It helps users easily upload, manage, and access files from anywhere, solving the problem of safe and convenient file storage and sharing.",
    image:
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1751284815/Screenshot_2025-06-30_172958_yu0dcn.png",
    bg: "bg-gradient-to-br from-[#00c39a] to-[#00e6d8]",
    github: "https://github.com/JasonDebnath001/cloudstack-storage",
    live: "https://cloudstack-storage.vercel.app",
    textColor: "text-white",
    buttonBg: "linear-gradient(90deg, #00c39a 60%, #00e6d8 100%)",
    buttonHoverBg: "linear-gradient(90deg, #00e6d8 60%, #00c39a 100%)",
  },
  {
    title: "Resumind - AI Resume Analyzer",
    description:
      "Resumind is an advanced AI-powered resume analyzer that evaluates your resume against targeted job descriptions. Leveraging artificial intelligence, it delivers actionable insights and personalized suggestions to optimize your resume, ensuring alignment with specific job requirements. Built with React, Tailwind CSS, and Puter.js.",
    image:
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1753271932/Screenshot_2025-07-23_172425_jufyg2.png",
    bg: "bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#007cf0]",
    github: "https://github.com/JasonDebnath001/AI-Resume-Analyzer",
    live: "https://puter.com/app/resumind-ai-resume-analyzer-1",
    textColor: "text-white",
    buttonBg: "linear-gradient(90deg, #00c39a 60%, #00e6d8 100%)",
    buttonHoverBg: "linear-gradient(90deg, #00e6d8 60%, #00c39a 100%)",
  },
  {
    title: "Healthcare Doctor Appointment Platform",
    description:
      "A modern healthcare platform for booking doctor appointments online. Built with React and Node.js.",
    image:
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1751284488/Screenshot_2025-06-30_172403_z6jh65.png",
    bg: "bg-gradient-to-br from-[#ffefdb] to-[#ffbfae]",
    github: "https://github.com/JasonDebnath001/carepulse",
    live: "https://carepulse-ecru-three.vercel.app/",
    textColor: "text-white",
    buttonBg: "linear-gradient(90deg, #00c39a 60%, #00e6d8 100%)",
    buttonHoverBg: "linear-gradient(90deg, #00e6d8 60%, #00c39a 100%)",
  },
  {
    title: "Interactive 3D Apple Landing Page",
    description:
      "A high-fidelity, responsive clone of Apple's modern landing page, built to capture its signature 3D experience. This project features complex, scroll-driven animations using GSAP and 3D model rendering with Three.js. The UI is built with React, Vite, and Tailwind CSS.",
    image:
      "https://ik.imagekit.io/jasondebnath/Screenshot%202025-10-28%20213632.png?updatedAt=1761673285686",
    bg: "bg-gradient-to-br from-[#ffe7eb] to-[#ffb6c1]",
    github: "https://github.com/JasonDebnath001/Apple-Website-Clone",
    live: "https://spiffy-medovik-c70fa7.netlify.app/",
    textColor: "text-white",
    buttonBg: "linear-gradient(90deg, #00c39a 60%, #00e6d8 100%)",
    buttonHoverBg: "linear-gradient(90deg, #00e6d8 60%, #00c39a 100%)",
  },
];

const Showcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase"
      style={{
        padding: "4rem 0",
        background: "#0a0a0a",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-10 text-center"
          style={{
            letterSpacing: "0.02em",
            color: "#fff",
          }}
        >
          Featured Projects
        </h2>
        <div
          className="grid gap-8 md:grid-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 group hover:-translate-y-2 hover:shadow-2xl`}
              style={{
                background: "#18181b",
                border: "1px solid #232329",
                minHeight: 420,
                height: "100%",
                boxShadow:
                  "0 4px 24px 0 rgba(0,0,0,0.12), 0 1.5px 4px 0 rgba(0,0,0,0.08)",
                transform: "translateY(0)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                className="group"
              >
                <div
                  className={`w-full h-56 ${project.bg} flex items-center justify-center`}
                  style={{
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    borderBottom: "2px solid #232329",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s",
                    }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div
                  className="p-6 flex flex-col flex-1 justify-between"
                  style={{
                    minHeight: "220px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <h3 className={`text-2xl font-semibold mb-2 text-white`}>
                      {project.title}
                    </h3>
                    <p
                      className={`mb-4 text-base leading-relaxed text-white`}
                      style={{ opacity: 0.85 }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "0.5rem 1.25rem",
                        background: project.buttonBg,
                        color: "#fff",
                        borderRadius: "0.5rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition:
                          "background 0.2s, transform 0.2s, color 0.2s",
                        border: "none",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.background =
                          project.buttonHoverBg)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.background = project.buttonBg)
                      }
                    >
                      View Github
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "0.5rem 1.25rem",
                        background: "#232329",
                        color: "#fff",
                        borderRadius: "0.5rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition:
                          "background 0.2s, transform 0.2s, color 0.2s",
                        border: "none",
                      }}
                      className="hover:bg-[#333]"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
