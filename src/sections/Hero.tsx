import { Terminal } from 'lucide-react'
import CICDPipeline from '../components/CICDPipeline'


function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background effects */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-violet-600/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1500px] items-center gap-16 px-6 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm text-blue-300">
              Open to Cloud & DevOps Opportunities
            </span>
          </div>

          <p className="mb-4 flex items-center gap-2 font-mono text-sm tracking-wider text-blue-400">
            <Terminal size={16} />
            hello_world
          </p>

<h1 className="max-w-[650px] text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl xl:text-[64px]">            Building scalable{' '}
            <span className="text-blue-500">
              cloud infrastructure
            </span>{' '}
            through automation.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">            I build and automate cloud infrastructure while developing
            hands-on experience with CI/CD, containers, Infrastructure as Code,
            and Kubernetes.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Animated CI/CD Pipeline */}
<div className="hidden lg:block">
  <CICDPipeline />
</div>

        
      </div>
    </section>
  )
}

export default Hero