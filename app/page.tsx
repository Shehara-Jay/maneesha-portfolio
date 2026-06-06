export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
{/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Full-Stack Web Developer & Product Builder
              </p>

              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I&apos;m Maneesha. I build modern websites, web apps and digital products.
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                I help startups, small businesses and agencies turn ideas into clean,
                responsive and user-friendly digital experiences using React, Next.js,
                Node.js, Tailwind CSS and Figma.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "Tailwind CSS", "Figma"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

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

              <p className="mt-6 text-sm text-slate-400">
                Available for remote freelance, contract and collaboration opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/40">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="mb-4 text-sm font-medium text-blue-400">
                  What I build
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Websites",
                      description: "Modern, responsive websites for businesses and personal brands.",
                    },
                    {
                      title: "Landing Pages",
                      description: "Clear, conversion-focused pages for products and services.",
                    },
                    {
                      title: "Web Apps",
                      description: "Dashboards, forms, interfaces and full-stack features.",
                    },
                    {
                      title: "Digital Products",
                      description: "Product ideas turned into useful, user-friendly experiences.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                    >
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                About Me
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                I build practical digital products with clean design and reliable code.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                I’m a full-stack web developer and product builder from Sri Lanka,
                focused on helping startups, small businesses and agencies create
                modern websites, web apps and digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">
                  My development background
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  I have hands-on experience in web development, mobile application
                  development and software engineering projects. My technical
                  background includes React, Next.js, JavaScript, Node.js, Flutter,
                  Kotlin, Python, PHP, REST API integration, MySQL, Git and responsive
                  UI development.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">
                  Product builder mindset
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  I’m also building TravelBozz, a tour guide planning tool designed to
                  help users plan travel experiences more easily. Working on my own
                  product has helped me think beyond code and focus on user needs,
                  product structure, usability and practical business value.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    value: "2+",
                    label: "Years of software development experience",
                  },
                  {
                    value: "4+",
                    label: "Web, mobile and product projects",
                  },
                  {
                    value: "Remote",
                    label: "Open to international opportunities",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-2xl font-bold text-slate-950">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Web solutions for startups, businesses and agencies
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              I help turn ideas, designs and business needs into clean, responsive
              and practical digital experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Websites",
                description:
                  "Professional websites for small businesses, consultants and personal brands that need a trustworthy online presence.",
              },
              {
                title: "Landing Pages",
                description:
                  "Focused pages for products, services and campaigns with clear messaging, strong layout and conversion-focused sections.",
              },
              {
                title: "Web Applications",
                description:
                  "Practical web apps, dashboards, forms and user interfaces with frontend and backend integration.",
              },
              {
                title: "Figma to React / Next.js",
                description:
                  "Turning Figma designs into responsive, clean and reusable frontend code using React, Next.js and Tailwind CSS.",
              },
              {
                title: "MVP Development",
                description:
                  "Helping founders and product teams build early versions of digital products with clear structure and usable features.",
              },
              {
                title: "Website Improvements",
                description:
                  "Improving existing websites through redesign, bug fixes, mobile responsiveness, performance and content updates.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  {service.title.charAt(0)}
                </div>

                <h3 className="text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Selected projects and product work
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A mix of product, academic, mobile and web development projects that
              show my ability to design, build and think through practical digital
              solutions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "TravelBozz",
                type: "Product / Tour Guide Planning Tool",
                description:
                  "A travel planning product designed to help users plan trips and explore destinations more easily. This project shows my product thinking, UI planning and ability to build user-focused digital solutions.",
                tech: ["React", "UI/UX", "Product Planning", "Web Development"],
                status: "Own Product",
              },
              {
                title: "Serendib Yathra",
                type: "Final Year Project / Intelligent Travel Planner",
                description:
                  "A machine learning-driven tour guide planner for personalized travel experiences in Sri Lanka. The system uses user preferences, recommendation logic and route optimization to generate useful travel plans.",
                tech: ["React", "Python", "Flask", "Machine Learning"],
                status: "Academic Project",
              },
              {
                title: "SpeakLing",
                type: "Research Project / AI Voice Assistant",
                description:
                  "An AI-based voice assistant system designed to support autistic children through interactive communication. The project combines mobile development, AI concepts and user-focused problem solving.",
                tech: ["Flutter", "Java", "Python", "Firebase"],
                status: "Research Project",
              },
              {
                title: "Modern SaaS Landing Page",
                type: "Portfolio Sample / Website Design",
                description:
                  "A modern landing page concept for a startup product, focused on clean visual design, clear messaging, responsive layout and strong call-to-action sections.",
                tech: ["Next.js", "React", "Tailwind CSS", "Figma"],
                status: "Portfolio Sample",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
                      {project.status}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
                  >
                    Discuss a similar project →
                  </a>
                </div>
              </article>
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