import { motion } from 'motion/react'
import { Code2, Cloud, GraduationCap, MapPin } from 'lucide-react'

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <motion.div
//   initial={{ opacity: 0, y: 30 }}
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
//   transition={{ duration: 0.6, ease: 'easeOut' }}
transition={{ duration: 1.5, ease: 'easeOut' }}

className="mb-14"
>
          <p className="mb-3 font-mono text-sm text-blue-400">
            01. ABOUT ME
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Building My Career in Cloud & DevOps
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            My engineering journey started with electronics and software
            development then gradually expanded into cloud infrastructure,
            automation, containers, and DevOps.
          </p>
</motion.div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">

            <h3 className="text-2xl font-semibold text-white">
              Mohamed Mubeen H.
            </h3>

            <p className="mt-2 text-blue-400">
              Cloud & DevOps Focused Engineer
            </p>

            <div className="mt-6 space-y-5 leading-7 text-slate-400">

              <p>
                  I'm a 2026 Electronics and Communication Engineering graduate who developed
  a strong interest in software, cloud computing, and DevOps during my
  engineering journey.
              </p>

              <p>
                My practical experience is focused on AWS infrastructure, Docker,
  Kubernetes, Jenkins CI/CD, Terraform, CloudFormation, Linux, and
  application deployment through hands-on labs, internships, and projects.

              </p>

              <p>
               I also have a foundation in backend development using Java, Spring Boot,
  REST APIs, and MySQL, which helps me understand the application side of
  the systems I deploy and automate.
              </p>

            </div>

          </div> */}
          {/* LEFT */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
>
  <h3 className="text-2xl font-semibold text-white">
    Mohamed Mubeen H.
  </h3>

  <p className="mt-2 text-blue-400">
    Cloud & DevOps Focused Engineer
  </p>

  <div className="mt-6 space-y-5 leading-7 text-slate-400">
    <p>
      I'm a 2026 Electronics and Communication Engineering graduate who
      developed a strong interest in software, cloud computing, and DevOps
      during my engineering journey.
    </p>

    <p>
      My practical experience is focused on AWS infrastructure, Docker,
      Kubernetes, Jenkins CI/CD, Terraform, CloudFormation, Linux, and
      application deployment through hands-on labs, internships, and projects.
    </p>

    <p>
      I also have a foundation in backend development using Java, Spring Boot,
      REST APIs, and MySQL, which helps me understand the application side of
      the systems I deploy and automate.
    </p>
  </div>
</motion.div>


          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <GraduationCap className="text-blue-400" size={21} />
              </div>

              <p className="text-sm text-slate-500">Education</p>

              <p className="mt-1 font-medium text-white">
                B.E. Electronics & Communication Engineering
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                <Cloud className="text-violet-400" size={21} />
              </div>

              <p className="text-sm text-slate-500">Current Focus</p>

              <p className="mt-1 font-medium text-white">
                Cloud Infrastructure & DevOps
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <Code2 className="text-emerald-400" size={21} />
              </div>

              <p className="text-sm text-slate-500">Additional Skills</p>

              <p className="mt-1 font-medium text-white">
                Java • Spring Boot • IoT
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                <MapPin className="text-cyan-400" size={21} />
              </div>

              <p className="text-sm text-slate-500">Located In</p>

              <p className="mt-1 font-medium text-white">
                Chennai, Tamil Nadu, India
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About