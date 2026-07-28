

import { X } from 'lucide-react'

type ArchitectureModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  workflow: string[]
}

function ArchitectureModal({
  isOpen,
  onClose,
  title,
  workflow,
}: ArchitectureModalProps) {

  // If the modal is closed, render nothing.
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
      onClick={onClose}
    >

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-950 p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg border border-slate-800 p-2 text-slate-400 transition hover:border-slate-600 hover:text-white"
          aria-label="Close architecture"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="pr-12">

          <p className="font-mono text-xs text-blue-400">
            PROJECT ARCHITECTURE
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            High-level workflow showing how the main technologies
            in this project connect together.
          </p>

        </div>

        {/* Architecture workflow */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

          {workflow.map((step, index) => (
            <div
              key={`${step}-${index}`}
              className="flex items-center gap-3"
            >

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-4 text-center">
                <p className="font-mono text-sm font-medium text-blue-300">
                  {step}
                </p>
              </div>

              {index < workflow.length - 1 && (
                <span className="text-xl text-slate-600">
                  →
                </span>
              )}

            </div>
          ))}

        </div>

        {/* Bottom note */}
        <div className="mt-10 border-t border-slate-800 pt-5">

          <p className="text-xs leading-5 text-slate-500">
            Select the close button or click outside this window to return
            to the project.
          </p>

        </div>

      </div>
    </div>
  )
}

export default ArchitectureModal