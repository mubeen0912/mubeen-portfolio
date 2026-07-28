import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  Cloud,
  GitCommitHorizontal,
  Package,
  RotateCcw,
} from 'lucide-react'

type Stage = {
  name: string
  subtitle: string
  icon?: string
  fallback?: React.ReactNode
}

const ciStages: Stage[] = [
  {
    name: 'GitHub',
    subtitle: 'Source Code',
    icon: '/tech/github.svg',
  },
  {
    name: 'Jenkins',
    subtitle: 'CI Pipeline',
    icon: '/tech/jenkins.svg',
  },
  {
    name: 'Maven',
    subtitle: 'Build & Test',
    icon: '/tech/maven.svg',
  },
  {
    name: 'SonarQube',
    subtitle: 'Code Quality',
    icon: '/tech/sonarqube.svg',
  },
  {
    name: 'Docker',
    subtitle: 'Build Image',
    icon: '/tech/docker.svg',
  },
  {
    name: 'Registry',
    subtitle: 'Push Image',
    fallback: <Package size={30} />,
  },
]

const cdStages: Stage[] = [
  {
    name: 'Jenkins',
    subtitle: 'Update Manifest',
    icon: '/tech/jenkins.svg',
  },
  {
    name: 'Manifest Repo',
    subtitle: 'Git Updated',
    icon: '/tech/github.svg',
  },
  {
    name: 'Argo CD',
    subtitle: 'Detect & Sync',
    icon: '/tech/argocd.svg',
  },
  {
    name: 'AWS EKS',
    subtitle: 'Running',
    icon: '/tech/aws.svg',
  },
]

const allStages = [...ciStages, ...cdStages]

function CICDPipeline() {
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStage((current) => {
        if (current >= allStages.length) {
          return 0
        }

        return current + 1
      })
    }, 1100)

    return () => window.clearInterval(interval)
  }, [])

  const pipelineComplete = activeStage === allStages.length

  const getStatus = (globalIndex: number) => {
    if (pipelineComplete || globalIndex < activeStage) {
      return 'complete'
    }

    if (globalIndex === activeStage) {
      return 'active'
    }

    return 'waiting'
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur md:p-8">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Header */}
      <div className="relative mb-8 flex items-center justify-between border-b border-slate-800 pb-5">

        <div>
          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                pipelineComplete
                  ? 'bg-emerald-400'
                  : 'animate-pulse bg-blue-400'
              }`}
            />

            <p className="font-mono text-xs tracking-wider text-blue-400">
              PRODUCTION PIPELINE
            </p>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            {pipelineComplete
              ? 'Deployment completed successfully'
              : 'Automated CI/CD workflow running'}
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 font-mono text-xs text-slate-500 sm:flex">
          <GitCommitHorizontal size={15} />
          pipeline #42
        </div>

      </div>

      {/* CI */}
      <div className="relative">

        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
            CONTINUOUS INTEGRATION
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">

          {ciStages.map((stage, index) => (
            <PipelineStage
              key={stage.name}
              stage={stage}
              status={getStatus(index)}
              showConnector={index !== ciStages.length - 1}
            />
          ))}

        </div>
      </div>

      {/* Transition */}
      <div className="relative my-7 flex items-center justify-center">

        <div className="absolute left-0 right-0 h-px bg-slate-800" />

        <motion.div
          animate={
            activeStage >= ciStages.length
              ? {
                  borderColor: 'rgba(59,130,246,0.5)',
                  boxShadow: '0 0 25px rgba(59,130,246,0.12)',
                }
              : {}
          }
          className="relative z-10 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-4 py-2"
        >
          <RotateCcw
            size={14}
            className={
              activeStage >= ciStages.length
                ? 'text-blue-400'
                : 'text-slate-600'
            }
          />

          <span className="font-mono text-[10px] tracking-wider text-slate-500">
            GITOPS HANDOFF
          </span>
        </motion.div>

      </div>

      {/* CD */}
      <div className="relative">

        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
            CONTINUOUS DELIVERY
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">

          {cdStages.map((stage, index) => {
            const globalIndex = ciStages.length + index

            return (
              <PipelineStage
                key={`${stage.name}-${index}`}
                stage={stage}
                status={getStatus(globalIndex)}
                showConnector={index !== cdStages.length - 1}
              />
            )
          })}

        </div>
      </div>


      {/* Completion */}
      {pipelineComplete && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative mt-5 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 py-3 text-sm text-emerald-400"
        >
          <Check size={17} />

          Deployment healthy on AWS EKS
        </motion.div>
      )}

    </div>
  )
}

function PipelineStage({
  stage,
  status,
  showConnector,
}: {
  stage: Stage
  status: 'waiting' | 'active' | 'complete'
  showConnector: boolean
}) {
  return (
    <div className="relative min-w-0">

      {/* Connector */}
      {showConnector && (
        <div className="absolute left-[calc(100%-2px)] top-[45px] z-0 hidden h-px w-3 xl:block">

          <div className="absolute inset-0 bg-slate-700" />

          {status === 'complete' && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 origin-left bg-blue-500"
            />
          )}

          {status === 'active' && (
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-px w-2 bg-blue-300 shadow-[0_0_8px_rgba(96,165,250,0.9)]"
            />
          )}

        </div>
      )}

      <motion.div
        animate={
          status === 'active'
            ? {
                y: [0, -3, 0],
                borderColor: [
                  'rgba(59,130,246,0.35)',
                  'rgba(59,130,246,0.8)',
                  'rgba(59,130,246,0.35)',
                ],
              }
            : {}
        }
        transition={{
          duration: 1.1,
          repeat: status === 'active' ? Infinity : 0,
        }}
        className={`relative flex min-h-[118px] flex-col items-center justify-center rounded-xl border px-3 py-4 text-center transition-all duration-500 ${
          status === 'active'
            ? 'border-blue-500/60 bg-blue-500/10 shadow-lg shadow-blue-500/10'
            : status === 'complete'
              ? 'border-emerald-500/20 bg-emerald-500/[0.03]'
              : 'border-slate-800 bg-slate-950/40'
        }`}
      >

        {/* Completed */}
        {status === 'complete' && (
          <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
            <Check
              size={12}
              className="text-emerald-400"
            />
          </div>
        )}

        {/* Active pulse */}
        {status === 'active' && (
          <motion.div
            animate={{
              scale: [1, 1.7],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="absolute right-3 top-3 h-2 w-2 rounded-full bg-blue-400"
          />
        )}

        {/* Icon */}
        <div
          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
            status === 'active'
              ? 'bg-blue-500/10'
              : 'bg-slate-900'
          }`}
        >
          {stage.icon ? (
            <img
              src={stage.icon}
              alt={`${stage.name} logo`}
              className={`h-7 w-7 object-contain transition duration-500 ${
                status === 'waiting'
                  ? 'opacity-40 grayscale'
                  : 'opacity-100'
              }`}
            />
          ) : (
            <div
              className={
                status === 'waiting'
                  ? 'text-slate-600'
                  : 'text-blue-400'
              }
            >
              {stage.fallback ?? <Cloud size={28} />}
            </div>
          )}
        </div>

        <p
          className={`text-sm font-semibold ${
            status === 'waiting'
              ? 'text-slate-500'
              : 'text-white'
          }`}
        >
          {stage.name}
        </p>

        <p
          className={`mt-1 font-mono text-[9px] uppercase tracking-wider ${
            status === 'active'
              ? 'text-blue-400'
              : status === 'complete'
                ? 'text-emerald-500'
                : 'text-slate-600'
          }`}
        >
          {status === 'active'
            ? stage.subtitle
            : status === 'complete'
              ? 'Completed'
              : 'Waiting'}
        </p>

      </motion.div>

    </div>
  )
}

export default CICDPipeline