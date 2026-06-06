export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Full-Stack Web Developer & Product Builder
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building modern websites, web apps and digital products.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              I’m Maneesha, a full-stack web developer with a strong frontend
              and UI/UX focus. I help startups, small businesses and agencies
              build clean, responsive websites, landing pages, dashboards and
              web applications using React, Next.js, Node.js and Figma.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-blue-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-white">Websites</h3>
              <p className="mt-2 text-sm text-slate-400">
                Clean, responsive business websites.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-white">Landing Pages</h3>
              <p className="mt-2 text-sm text-slate-400">
                High-converting pages for products and services.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-white">Web Apps</h3>
              <p className="mt-2 text-sm text-slate-400">
                Functional web applications and dashboards.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-white">UI/UX Design</h3>
              <p className="mt-2 text-sm text-slate-400">
                User-focused interfaces with modern design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A developer who thinks beyond code.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I have experience in web development, mobile application
                development and software engineering projects. My background
                includes React, JavaScript, Node.js, Flutter, Kotlin, Python,
                PHP, REST APIs and responsive user interfaces.
              </p>

              <p>
                I’m also building TravelBozz, a tour guide planning product
                designed to help users plan travel experiences more easily.
                This product experience helps me understand design, development,
                user experience and real product thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I can help you build
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Website Development",
                description:
                  "Modern, responsive websites for startups, small businesses, consultants and personal brands.",
              },
              {
                title: "Landing Pages",
                description:
                  "Clean landing pages designed to explain your offer clearly and turn visitors into leads.",
              },
              {
                title: "Web Applications",
                description:
                  "Functional web apps, dashboards, forms and simple full-stack features.",
              },
              {
                title: "Figma to React / Next.js",
                description:
                  "Converting UI designs into clean, responsive and reusable frontend code.",
              },
              {
                title: "UI/UX Design",
                description:
                  "User-friendly interfaces with clear structure, good spacing and modern visual design.",
              },
              {
                title: "Website Improvements",
                description:
                  "Redesign, maintenance, bug fixes, performance improvements and content updates.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Projects
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Selected work and product experience
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "TravelBozz",
                type: "Product / Travel Planning Tool",
                description:
                  "A tour guide planning product designed to help users plan travel experiences more easily.",
                tech: "React, Product Planning, UI/UX",
              },
              {
                title: "Serendib Yathra",
                type: "Final Year Project / ML Travel Planner",
                description:
                  "An intelligent tour guide planner for personalized travel experiences in Sri Lanka using machine learning and route optimization.",
                tech: "React, Python, Flask, Machine Learning",
              },
              {
                title: "SpeakLing",
                type: "Research Project / AI Voice Assistant",
                description:
                  "An AI-based voice assistant system designed to support autistic children through interactive communication.",
                tech: "Flutter, Java, Python, Firebase",
              },
              {
                title: "Modern SaaS Landing Page",
                type: "Portfolio Sample",
                description:
                  "A clean landing page concept for a startup product, focused on clear messaging, responsive layout and strong call-to-action flow.",
                tech: "Next.js, React, Tailwind CSS, Figma",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="mb-3 text-sm font-medium text-blue-600">
                  {project.type}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-slate-800">
                  Tech: {project.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Skills
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies I work with
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "Node.js",
              "Tailwind CSS",
              "Figma",
              "Flutter",
              "Kotlin",
              "Python",
              "PHP",
              "REST APIs",
              "MySQL",
              "Git",
              "GitHub",
              "Responsive Design",
              "UI/UX Design",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s build something professional together.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            I’m open to remote freelance, contract and collaboration
            opportunities with startups, small businesses and digital agencies.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:maneeshashehara5@gmail.com"
              className="rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/maneesha-shehara-463a9b222/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}