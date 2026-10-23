import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreelakshmi A — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Sreelakshmi A — Electronics & Communication Engineering graduate currently pursuing a data analytics course, with real-time machine-vision and embedded systems projects.",
      },
      { property: "og:title", content: "Sreelakshmi A — Portfolio" },
      {
        property: "og:description",
        content:
          "Electronics & Communication Engineering graduate moving into data analytics — real-time machine vision, embedded systems and sensor-driven projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Real-Time License Plate Recognition Using Raspberry Pi",
    tag: "B.Tech Major Project",
    points: [
      "Developed an automated License Plate Recognition (LPR) system using Raspberry Pi, a camera module, and a YOLO-based deep learning model for real-time vehicle detection.",
      "Integrated OCR and an SQLite database to validate authorized vehicles and automate gate control via a GPIO-driven servo motor.",
      "Implemented a web dashboard for real-time monitoring and secure logging of vehicle entry data.",
    ],
    tags: ["YOLO · Deep Learning", "OCR", "SQLite", "Raspberry Pi · GPIO", "Web Dashboard"],
  },
  {
    title: "Smart Bridge",
    tag: "Embedded Systems Project",
    points: [
      "Designed and developed a smart movable bridge model integrating flood monitoring, automatic height adjustment for boat passage, and collision avoidance for vehicles.",
      "Implemented sensor-based control with automated road barriers and alert mechanisms to ensure safety during bridge movement.",
    ],
    tags: ["Flood Monitoring", "Collision Avoidance", "Sensor Control", "Automated Barriers"],
  },
];

const credentials = [
  {
    title: "NPTEL Online Certification",
    detail: "Robotics",
  },
  {
    title: "Internship",
    detail: "Keltron",
  },
  {
    title: "Participation Certificates",
    detail: "Technical workshops",
  },
];

const skills = [
  "Python",
  "Data Analytics",
  "YOLO / Deep Learning",
  "OCR",
  "SQLite",
  "Raspberry Pi & GPIO",
  "Sensor Integration",
  "Web Dashboards",
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Sreelakshmi A
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#credentials" className="transition-colors hover:text-foreground">
              Certifications
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-4 flex items-center gap-2 text-sm font-medium tracking-widest text-primary uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Electronics & Communication Engineering · Data Analytics
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm Sreelakshmi A.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              An Electronics and Communication Engineering graduate currently building my
              data analytics skillset. I enjoy working where hardware meets
              intelligence — real-time machine vision, embedded systems and
              sensor-driven automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border scroll-mt-20 bg-secondary/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight">About</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">Education</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">
                    B.Tech — Electronics and Communication Engineering
                  </span>
                  <br />
                  Currently pursuing a Data Analytics course alongside my degree.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">Skills & Tools</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight">Projects</h2>
            <div className="mt-8 space-y-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {project.tag}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Experience */}
        <section id="credentials" className="border-b border-border scroll-mt-20 bg-secondary/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Certifications & Experience
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {credentials.map((item) => (
                <div
                  key={item.title + item.detail}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="font-display font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight">Let's Connect</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I'm open to internships, entry-level data roles and exciting
              collaborations. The best way to reach me is by email.
            </p>
            <a
              href="mailto:sreelakshmia2006@gmail.com"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              sreelakshmia2006@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sreelakshmi A · Portfolio
        </p>
      </footer>
    </div>
  );
}
