import {
  Award,
  Lightbulb,
  Medal,
  Trophy,
  Users,
} from 'lucide-react'

const achievements = [
  {
    title: "People's Choice Award",
    organization: 'La Trobe University, Australia',
    description:
      'Received ₹1,00,000 for the People’s Choice Award in the Innovation Program.',
    icon: Trophy,
  },
  {
    title: 'Innovation Funding',
    organization: 'La Trobe University, Australia',
    description:
      'Received AUD 800 in innovation funding for project development.',
    icon: Lightbulb,
  },
  {
    title: 'Project Competition Runner-up',
    organization: 'ECE Department Project Competition',
    description:
      'Secured runner-up position for an IoT-based Avalanche Detection System.',
    icon: Medal,
  },
  {
    title: 'ELECTROMINDZ Hackathon Winner',
    organization: 'Vivanta · 2023',
    description:
      'Won the ELECTROMINDZ Hackathon through project development and technical innovation.',
    icon: Award,
  },
  {
    title: 'Smart India Hackathon Finalist',
    organization: 'Government of India',
    description:
      'Reached the finalist stage of the Smart India Hackathon.',
    icon: Users,
  },
]

function Achievements() {
  const featuredAchievement = achievements[0]
  const FeaturedIcon = featuredAchievement.icon

  return (
    <section
      id="achievements"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-blue-400">
            05. ACHIEVEMENTS
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Beyond the code
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Recognition from project competitions, hackathons, and
            innovation programs that shaped my engineering journey.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.95fr]">

          {/* Featured achievement */}
          <article className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-slate-900/60 to-slate-900/40 p-8">

            {/* Background glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                <FeaturedIcon
                  className="text-blue-400"
                  size={28}
                />
              </div>

              <p className="font-mono text-xs text-blue-400">
                FEATURED ACHIEVEMENT
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                {featuredAchievement.title}
              </h3>

              <p className="mt-2 text-sm text-blue-300">
                {featuredAchievement.organization}
              </p>

              <p className="mt-6 leading-7 text-slate-400">
                {featuredAchievement.description}
              </p>

              <div className="mt-10 border-t border-slate-700/60 pt-6">

                <p className="font-mono text-xs text-slate-500">
                  RECOGNITION
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  ₹1,00,000
                </p>

                <p className="mt-1 text-sm text-slate-500">
                    Cash Prize                </p>

              </div>

            </div>
          </article>

          {/* Other achievements */}
          <div className="grid gap-5 sm:grid-cols-2">

            {achievements.slice(1).map((achievement) => {
              const Icon = achievement.icon

              return (
                <article
                  key={achievement.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                    <Icon
                      className="text-blue-400"
                      size={22}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 text-sm text-blue-400">
                    {achievement.organization}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {achievement.description}
                  </p>

                </article>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements