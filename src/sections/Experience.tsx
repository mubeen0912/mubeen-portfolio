import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
} from 'lucide-react'

const experiences = [
  {
    number: '01',
    role: 'Cloud DevOps Intern',
    company: 'Bdreamz Global Solutions',
    type: 'Internship',
    period: 'April 2026 – Present',
    focus: 'Cloud & DevOps',
    description:
      'Gained hands-on experience in AWS Cloud and DevOps, working with cloud infrastructure, automation, containerization, CI/CD, and Linux-based environments.',
    highlights: [
      'Worked with AWS cloud services covering compute, networking, storage, IAM, monitoring, and container platforms.',
      'Gained hands-on experience with Linux, Git, Docker, Kubernetes, Helm, and cloud-based deployment workflows.',
      'Used Terraform and AWS CloudFormation to provision and manage infrastructure through Infrastructure as Code practices.',
      'Worked with Jenkins, Maven, SonarQube, and Docker to understand CI/CD automation, build processes, code quality, and deployment workflows.',

    ],
    technologies: [
      'AWS',
      'Linux',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Terraform',
      'Prometheus',
      'Grafana',
    ],
    icon: Cloud,
  },
  {
    number: '02',
    role: 'Java Intern',
    company: 'Bigbucks Private Limited',
    type: 'Internship',
    period: 'july 2025 – August 2026',
    focus: 'Backend Development',
    description:
      'Worked on backend application development using Java and Spring Boot, focusing on REST API development and MySQL database integration.',
    highlights: [
      'Built backend functionality using Java and Spring Boot.',
      'Worked with Spring Data JPA and MySQL for database operations and application persistence.',
      'Implemented CRUD operations and used Postman to test and validate REST APIs.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'REST APIs',
      'Postman',
    ],
    icon: Code2,
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-14">

          <p className="mb-3 font-mono text-sm text-blue-400">
            04. INTERNSHIP EXPERIENCE
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            From development to cloud infrastructure
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Internship experience that helped me build a foundation in
            backend development and progress toward cloud engineering and
            DevOps.
          </p>

        </div>

        {/* Career path */}
        <div className="mb-10 flex flex-wrap items-center gap-3 font-mono text-xs">

          <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-400">
            Backend Development
          </span>

          <ArrowUpRight
            className="rotate-45 text-slate-600"
            size={16}
          />

          <span className="rounded-md border border-blue-500/30 bg-blue-500/5 px-3 py-2 text-blue-300">
            Cloud & DevOps
          </span>

        </div>

        {/* Experience cards */}
        <div className="relative">

          {/* Vertical timeline */}
          <div className="absolute bottom-0 left-[21px] top-0 hidden w-px bg-slate-800 md:block" />

          <div className="space-y-8">

            {experiences.map((experience) => {
              const Icon = experience.icon

              return (
                <div
                  key={experience.number}
                  className="relative md:pl-16"
                >

                  {/* Timeline icon */}
                  <div className="absolute left-0 top-7 z-10 hidden h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-slate-950 md:flex">
                    <Icon
                      className="text-blue-400"
                      size={20}
                    />
                  </div>

                  {/* Card */}
                  <article className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition duration-300 hover:border-blue-500/30">

                    {/* Top */}
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

                      <div>

                        <div className="mb-3 flex flex-wrap items-center gap-2">

                          <span className="font-mono text-xs text-blue-400">
                            EXPERIENCE {experience.number}
                          </span>

                          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-400">
                            {experience.type}
                          </span>

                        </div>

                        <h3 className="text-xl font-semibold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-slate-400">
                          {experience.company}
                        </p>

                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <BriefcaseBusiness size={16} />
                        {experience.focus}
                      </div>
                      <p className="mt-2 font-mono text-xs text-slate-500">
    {experience.period}
  </p>

                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-4xl leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 grid gap-3">

                      {experience.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-slate-400"
                        >

                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                          <span>{highlight}</span>

                        </div>
                      ))}

                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-800/80 pt-6">

                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </article>

                </div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience