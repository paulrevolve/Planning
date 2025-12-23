"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectInfoProps {
  project: any
  onClose: () => void
}

export default function ProjectInfo({ project, onClose }: ProjectInfoProps) {
  return (
    <div className="rounded-2xl border-l-4 border-sky-500 bg-sky-50/80 px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-4">
        {/* Left content */}
        <div className="flex-1 space-y-2 text-sm text-slate-900">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-1">
            <div>
              <span className="font-semibold">Project ID:</span>{" "}
              <span className="tabular-nums">{project.id}</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 font-medium text-emerald-700">
                {project.status || "In Progress"}
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
                Type: {project.type}
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
                v6
              </span>
              <span className="font-semibold">Period of Performance:</span>{" "}
              <span className="text-slate-800">
                Start Date: {project.startDate} | End Date: {project.endDate}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-sky-100" />

          {/* Row 2 */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-1">
            

            <div>
              <span className="font-semibold">Funded Fee:</span>{" "}
              <span className="text-slate-800">0</span>
            </div>
            <div>
              <span className="font-semibold">Funded Cost:</span>{" "}
              <span className="text-slate-800">0</span>
            </div>
            <div>
              <span className="font-semibold">Funded Rev:</span>{" "}
              <span className="text-slate-800">0</span>
            </div>
            <div>
              <span className="font-semibold">Revenue:</span>{" "}
              <span className="text-slate-800">374,887</span>
            </div>
            <div>
              <span className="font-semibold">Backlog:</span>{" "}
              <span className="text-slate-800">374,887</span>
            </div>
          </div>    
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-800"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}


