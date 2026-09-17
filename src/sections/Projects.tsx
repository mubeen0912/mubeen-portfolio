import { useState } from 'react'
import ArchitectureModal from '../components/ArchitectureModal'


import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  GitBranch,
  Layers3,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'GitOps CI/CD Pipeline with Jenkins',
    description:
      'Built an end-to-end CI/CD and GitOps workflow for building, analyzing, containerizing, publishing, and continuously deploying an application.',
    highlights: [
      'Automated Maven builds and SonarQube analysis with Jenkins',
      'Built and published Docker images to Docker Hub',
      'Implemented continuous deployment using Argo CD and Helm',
    ],
    workflow: ['Jenkins', 'Docker', 'Argo CD', 'Kubernetes'],

    architecture: [
  'GitHub',
  'Jenkins',
  'Maven',
  'SonarQube',
  'Docker',
  'Docker Hub',
  'Argo CD',
  'Kubernetes',
],
    technologies: [
      'Jenkins',
      'Maven',
      'SonarQube',
      'Docker',
      'Argo CD',
      'Kubernetes',
      'Helm',
    ],
    github:
      'https://github.com/mubeen0912/java-maven-sonar-argocd-helm-k8s',
    icon: GitBranch,
    featured: true,
  },
  {
    number: '02',
    title: 'AWS EKS Application Deployment with Fargate',
    description:
      'Deployed a containerized 2048 application on Amazon EKS using Fargate, Kubernetes resources, and an internet-facing Application Load Balancer.',
    highlights: [
      'Provisioned EKS cluster and Fargate environment',
      'Configured Kubernetes Deployment, Service, and Ingress',
      'Configured OIDC and IRSA for AWS Load Balancer Controller',
    ],
    workflow: ['EKS', 'Fargate', 'Kubernetes', 'ALB'],

    architecture: [
  'Internet',
  'ALB',
  'Ingress',
  'EKS',
  'Fargate',
  'Kubernetes Service',
  '2048 Pods',
],

    technologies: [
      'AWS EKS',
      'Fargate',
      'ALB',
      'IAM/IRSA',
      'Helm',
      'eksctl',
      'kubectl',
    ],
    github: null,
    icon: Boxes,
    featured: true,
  },
  {
    number: '03',
    title: 'Kubernetes Observability & Monitoring',
    description:
      'Implemented a Kubernetes monitoring stack using Prometheus and Grafana to collect, visualize, and analyze cluster and application metrics.',
    highlights: [
      'Monitored cluster, node, pod, and application metrics including CPU and memory utilization',
      'Configured Prometheus alerting rules to detect pod failures and high resource utilization',
      'Used Grafana dashboards and monitoring data to troubleshoot application performance and availability',
    ],
    workflow: ['Kubernetes', 'Prometheus', 'Grafana', 'Alertmanager'],

    architecture: [
  'Prometheus',
      'Grafana',
      'Alertmanager',
      'Kubernetes',
      'Node Exporter',
      'Kube-State-Metrics',
],

    technologies: [
      'Prometheus',
      'Grafana',
      'Alertmanager',
      'Kubernetes',
      'Node Exporter',
      'Kube-State-Metrics',
    ],
    github: null,
    icon: CloudCog,
    featured: false,
  },
  {
    number: '04',
    title: 'AWS Blue-Green Deployment with Terraform',
    description:
      'Automated an AWS blue-green deployment architecture using Terraform, EC2, Auto Scaling, and an Application Load Balancer for controlled application releases.',
    highlights: [
      'Provisioned separate Blue and Green environments using Terraform',
      'Configured ALB health checks and traffic switching between application versions',
      'Integrated Jenkins for deployment automation and enabled quick rollback when required',
    ],
    workflow: ['Terraform', 'EC2', 'Auto Scaling', 'ALB', 'Jenkins'],

    architecture: [
    'GitHub',
    'Jenkins',
    'Terraform',
    'Application Load Balancer',
    'Target Groups',
    'Blue Environment',
    'Green Environment',
    'EC2 Auto Scaling',
],

    technologies: [
      'Terraform', 
      'EC2',
      'AWS ALB',
      'Jenkins',
      'IAM',
      'CloudWatch',
    ],
    github: null,
    icon: Layers3,
    featured: false,
  },
]

function Projects() {

     const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null)

  return (
    <>
    <section
      id="projects"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-blue-400">
            03. FEATURED PROJECTS
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Building through hands-on projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Practical projects covering cloud infrastructure, CI/CD,
            Kubernetes, serverless automation, and Infrastructure as Code.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              >

                {/* Project header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon
                        className="text-blue-400"
                        size={23}
                      />
                    </div>

                    <div>
                      <p className="font-mono text-xs text-blue-400">
                        PROJECT {project.number}
                      </p>

                      {project.featured && (
                        <p className="mt-1 text-xs text-emerald-400">
                          Featured Project
                        </p>
                      )}
                    </div>

                  </div>

                  <ArrowUpRight
                    className="text-slate-600 transition group-hover:text-blue-400"
                    size={21}
                  />

                </div>

                {/* Project title */}
                <h3 className="mt-6 text-xl font-semibold leading-7 text-white">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Workflow */}
                <div className="mt-6">

                  <p className="mb-3 font-mono text-xs text-slate-500">
                    WORKFLOW
                  </p>

                  <div className="flex flex-wrap items-center gap-2">

                    {project.workflow.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-2"
                      >

                        <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 font-mono text-xs text-blue-300">
                          {step}
                        </span>

                        {index < project.workflow.length - 1 && (
                          <span className="text-slate-600">
                            →
                          </span>
                        )}

                      </div>
                    ))}

                  </div>
                </div>

                {/* Project highlights */}
                <div className="mt-6 space-y-3">

                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >

                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                      <span>
                        {highlight}
                      </span>

                    </div>
                  ))}

                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-800/60 px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Project actions */}
                <div className="mt-auto flex gap-5 border-t border-slate-800/80 pt-6">

                  {/* Only display GitHub when repository exists */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-400 transition hover:text-white"
                    >
                      GitHub

                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-blue-400"
                  >
                    <CloudCog size={17} />
                    Architecture
                  </button>

                </div>

              </article>
            )
          })}

        </div>
      </div>
    </section>

     <ArchitectureModal
      isOpen={selectedProject !== null}
      onClose={() => setSelectedProject(null)}
      title={selectedProject?.title ?? ''}
      workflow={selectedProject?.architecture ?? []}
    />
  </>
  )
}

export default Projects