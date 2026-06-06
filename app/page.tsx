const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites for small businesses, consultants and personal brands that need a trustworthy online presence.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M8 14h4m-4 2h8" />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for products, services and campaigns with clear messaging, strong layout and conversion-focused sections.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18 4.5 4.5M12 3 7.5 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 14.5A7 7 0 0 0 19 14.5" />
      </svg>
    ),
  },
  {
    title: "Web Applications",
    description:
      "Practical web apps, dashboards, forms and user interfaces with frontend and backend integration.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h3m3 0h2M8 15h8" />
      </svg>
    ),
  },
  {
    title: "Figma to React / Next.js",
    description:
      "Turning Figma designs into responsive, clean and reusable frontend code using React, Next.js and Tailwind CSS.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-4 3 4 3m8-6 4 3-4 3M14 5l-4 14" />
      </svg>
    ),
  },
  {
    title: "MVP Development",
    description:
      "Helping founders and product teams build early versions of digital products with clear structure and usable features.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 7 8l5 13 5-13-5-5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10" />
      </svg>
    ),
  },
  {
    title: "Website Improvements",
    description:
      "Improving existing websites through redesign, bug fixes, mobile responsiveness, performance and content updates.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13.5V19h5.5L20 8.5 15.5 4 4 15.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m14 5 5 5" />
      </svg>
    ),
  },
];

const projects = [
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
];

const skillLogos = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-sm font-bold tracking-wide text-white">
            Maneesha<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Full-Stack Web Developer & Product Builder
              </p>

              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I&apos;m Maneesha. I build modern websites, web apps and
                digital products.
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                I help startups, small businesses and agencies turn ideas into
                clean, responsive and user-friendly digital experiences using
                React, Next.js, Node.js, Tailwind CSS and Figma.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "Tailwind CSS", "Figma"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-blue-400 hover:text-white"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-full bg-blue-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-400"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
                >
                  Contact Me
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Available for remote freelance, contract and collaboration
                opportunities.
              </p>
            </div>

            {/* Hero Preview Card */}
            <div className="animate-float rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/40">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative mb-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-400">
                    Project workflow
                  </p>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                </div>

                <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        portfolio.tsx
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Building digital products
                      </p>
                    </div>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      Live
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="animate-code-line w-10/12 rounded bg-slate-800/90 px-3 py-2 text-blue-300">
                      const product = &quot;Web App&quot;;
                    </div>

                    <div className="animate-code-line-delay w-8/12 rounded bg-slate-800/70 px-3 py-2 text-cyan-300">
                      buildResponsiveUI();
                    </div>

                    <div className="animate-code-line-slow w-11/12 rounded bg-slate-800/80 px-3 py-2 text-slate-300">
                      connectAPI().deploy();
                    </div>

                    <div className="animate-code-line w-7/12 rounded bg-slate-800/70 px-3 py-2 text-blue-300">
                      return solution;
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Plan", text: "Understand goals" },
                    { title: "Design", text: "Create clean UI" },
                    { title: "Build", text: "Develop features" },
                    { title: "Launch", text: "Deploy online" },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 transition hover:-translate-y-1 hover:border-blue-500/40 ${
                        index % 2 === 0
                          ? "animate-card-float"
                          : "animate-card-float-delay"
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative overflow-hidden bg-white px-6 py-24 lg:px-8"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                About Me
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                I combine software engineering, product thinking and modern UI
                design.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                I’m Maneesha, a full-stack web developer and product builder
                from Sri Lanka. I focus on building practical digital solutions
                that are clean, responsive and useful for real users.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                My experience covers web development, mobile application
                development, REST API integration and software engineering
                projects. I enjoy taking an idea from concept to interface, then
                turning it into a working product using modern technologies.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                  >
                    <p className="text-2xl font-bold text-blue-600">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="animate-card-float rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-blue-400">
                        Product Builder Workflow
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Idea to working digital product
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                      Active
                    </span>
                  </div>

                  <div className="relative grid gap-4">
                    {[
                      {
                        step: "01",
                        title: "Understand",
                        text: "Clarify user needs, goals and product direction.",
                      },
                      {
                        step: "02",
                        title: "Design",
                        text: "Plan clean interfaces, user flow and responsive layout.",
                      },
                      {
                        step: "03",
                        title: "Develop",
                        text: "Build frontend, connect APIs and create working features.",
                      },
                      {
                        step: "04",
                        title: "Improve",
                        text: "Test, refine and prepare the product for real use.",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.step}
                        className={`group relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 transition hover:-translate-y-1 hover:border-blue-500/50 ${
                          index % 2 === 0
                            ? "animate-card-float"
                            : "animate-card-float-delay"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-300 group-hover:bg-blue-500 group-hover:text-white">
                            {item.step}
                          </div>

                          <div>
                            <h3 className="font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <p className="mb-4 text-sm font-semibold text-white">
                      Current product focus
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "TravelBozz",
                        "Tour planning",
                        "User experience",
                        "Web product",
                        "Responsive UI",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-blue-400 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Web solutions for startups, businesses and agencies
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              I help turn ideas, designs and business needs into clean,
              responsive and practical digital experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
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
              A mix of product, academic, mobile and web development projects
              that show my ability to design, build and think through practical
              digital solutions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
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
      <section
        id="skills"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-8"
      >
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.08]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Skills
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Technologies I use to build modern digital products.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              My stack includes frontend, backend, mobile, database, design and
              development tools used to build responsive websites, web apps,
              dashboards and product experiences.
            </p>
          </div>

          {/* Animated Logo Cloud */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-indigo-500/30 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-blue-950/50">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {skillLogos.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-center transition duration-300 hover:-translate-y-3 hover:border-blue-400/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 opacity-0 transition group-hover:from-blue-500/10 group-hover:to-cyan-500/10 group-hover:opacity-100" />

                    <div
                      className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 transition duration-300 group-hover:scale-110 ${
                        index % 4 === 0
                          ? "animate-logo-spin-float"
                          : index % 4 === 1
                          ? "animate-logo-float"
                          : index % 4 === 2
                          ? "animate-logo-pulse"
                          : "animate-logo-rotate-slow"
                      }`}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    <p className="relative mt-4 text-xs font-semibold text-slate-300 group-hover:text-white">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-slate-950 px-6 py-16 text-white shadow-2xl shadow-slate-200 sm:px-10 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Contact
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Have a website, web app or product idea to build?
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                  I’m open to remote freelance, contract and collaboration
                  opportunities with startups, small businesses, founders and
                  digital agencies. Let’s discuss how I can help turn your idea
                  into a clean, responsive and practical digital experience.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:maneeshashehara5@gmail.com"
                    className="rounded-full bg-blue-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-400"
                  >
                    Send Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/maneesha-shehara-463a9b222/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-7">
                <h3 className="text-xl font-semibold">Open to</h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Remote freelance projects",
                    "Startup MVP development",
                    "Website and landing page projects",
                    "Agency collaboration and overflow work",
                    "Frontend, full-stack and UI-focused roles",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:maneeshashehara5@gmail.com"
                    className="mt-1 block text-sm font-semibold text-white hover:text-blue-300"
                  >
                    maneeshashehara5@gmail.com
                  </a>

                  <p className="mt-5 text-sm text-slate-400">GitHub</p>
                  <a
                    href="https://github.com/Shehara-Jay"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-semibold text-white hover:text-blue-300"
                  >
                    github.com/Shehara-Jay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          <p>© 2026 Maneesha. All rights reserved.</p>
          {/* <p>Built with Next.js, React and Tailwind CSS.</p> */}
        </div>
      </footer>
    </main>
  );
}