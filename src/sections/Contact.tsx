import {
  ArrowUpRight,
  Download,
   Code2,
  Mail,
  UserRound,
} from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <p className="mb-3 font-mono text-sm text-blue-400">
              06. LET'S CONNECT
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Looking for an opportunity to
              <span className="text-blue-500"> prove my skills.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
               I've built a strong foundation in Cloud and DevOps through hands-on
  learning, internships, and practical projects. I'm now looking for an
  opportunity where I can put these skills into practice, contribute to
  a real engineering team, and prove my capabilities through the work I do.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="mailto:mubeemax2004@gmail.com"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="/Mohamed_Mubeen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
              >
                <Download size={18} />
                View Resume
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">

            <p className="font-mono text-xs text-blue-400">
              CONTACT INFORMATION
            </p>

            <div className="mt-6 space-y-3">

              {/* Email */}
              <a
                href="mailto:mubeemax2004@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition hover:border-blue-500/30"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Mail
                      className="text-blue-400"
                      size={19}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      mubeemax2004@gmail.com
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  className="text-slate-600 transition group-hover:text-blue-400"
                  size={18}
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mubeen0912"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition hover:border-blue-500/30"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Code2
                      className="text-blue-400"
                      size={19}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      GitHub
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      github.com/mubeen0912
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  className="text-slate-600 transition group-hover:text-blue-400"
                  size={18}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohamed-mubeen-hilal-9553883a3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition hover:border-blue-500/30"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <UserRound
                      className="text-blue-400"
                      size={19}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      Connect on LinkedIn
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  className="text-slate-600 transition group-hover:text-blue-400"
                  size={18}
                />
              </a>

            </div>

            {/* Status */}
            <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <p className="text-sm text-slate-400">
                Open to Cloud & DevOps opportunities
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact