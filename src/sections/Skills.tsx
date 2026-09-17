import {
  Cloud,
  Code2,
  Container,
  GitBranch,
  Server,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Cloud',
    icon: Cloud,
    skills: [
      'AWS',
      'EC2',
      'VPC',
      'S3',
      'IAM',
      'Lambda',
      'CloudWatch',
      'ECR',
      'ECS',
      'EKS',
      'CloudFront',
'CloudTrail',
'SNS',
'ALB',
'Auto Scaling',
    ],
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    skills: [
      'Jenkins',
      'Docker',
      'Kubernetes',
      'ArgoCD',
      'Maven',
      'SonarQube',
    ],
  },
  {
    title: 'Networking',
    icon: Server,
    skills: [
      ' CCNA (Intermediate)', 'TCP/IP', 'DNS', 'DHCP', 'VLANs', 'Routing', 'Subnetting',
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: Container,
    skills: [
      'Prometheus',
      'Grafana',
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    skills: [
      'Java',
      'Spring Boot',
      'Python',
    ],
  },
  {
    title: 'Systems & Tools',
    icon: Wrench,
    skills: [
      'Linux',
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-blue-400">
            02. SKILLS & TECHNOLOGIES
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Technologies I've worked with
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Tools and technologies I've used through projects,
            hands-on practice, coursework, and development.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              >
                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Icon
                      className="text-blue-400"
                      size={21}
                    />
                  </div>

                  <h3 className="font-semibold text-white">
                    {group.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-1.5 font-mono text-xs text-slate-400 transition group-hover:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Skills