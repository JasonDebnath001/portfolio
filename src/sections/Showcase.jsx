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
      className="app-showcase py-16 bg-[#0a0a0a] min-h-screen"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center tracking-wider text-white">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 group hover:-translate-y-2 hover:shadow-2xl bg-[#18181b] border border-[#232329] min-h-[420px] h-full"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full group"
              >
                <div
                  className={`w-full h-56 ${project.bg} flex items-center justify-center overflow-hidden transition-transform duration-300 border-b-2 border-[#232329]`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between min-h-[220px]">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-white opacity-85">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 text-white rounded-lg font-semibold no-underline shadow-md transition-all duration-200"
                      style={{ background: project.buttonBg }}
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
                      className="inline-block px-5 py-2 bg-[#232329] text-white rounded-lg font-semibold no-underline shadow-md transition-all duration-200 hover:bg-[#333]"
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
