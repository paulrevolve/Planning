"use client"
import { Search } from "lucide-react"
import { useState } from "react"

const mockProjects = [
  {
    id: "20001.00.000100.0000",
    name: "USAF LABOR BASE YEAR",
    type: "BUD",
    status: "In Progress",
    startDate: "01/01/2025",
    endDate: "12/31/2025",
  },
  { 
    id: "20002.00.000200.0000",
    name: "AIRFORCE PROGRAM",
    type: "EAC",
    status: "Active",
    startDate: "01/01/2025",
    endDate: "12/31/2025",
  },
  {
    id: "20003.00.000300.0000",
    name: "DEFENSE PROJECT",
    type: "BUD",
    status: "In Progress",
    startDate: "01/01/2025",
    endDate: "12/31/2025",
  },
]

interface ProjectSelectorProps {
  // this should navigate / show project info page
  onSelect: (project: any) => void
}

export default function ProjectSelector({ onSelect }: ProjectSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const filteredProjects = mockProjects.filter(
    (p) =>
      p.id.includes(searchTerm) ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRowClick = (projectId: string) => {
    setSelectedProjectId(projectId)
  }

  const handleDetailsClick = (project: any) => {
    onSelect(project) // call your existing logic to open project info page
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* search input */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none"
          placeholder="Search by Project ID or Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filteredProjects.map((project) => {
          const isSelected = selectedProjectId === project.id

          return (
            <div
              key={project.id}
              onClick={() => handleRowClick(project.id)}
              className={`cursor-pointer rounded-2xl border px-6 py-4 transition ${
                isSelected
                  ? "border-sky-300 bg-sky-50"
                  : "border-slate-200 bg-white hover:border-sky-200"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {project.name}
                  </div>
                  <div className="text-xs text-slate-500">{project.id}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {project.startDate} to {project.endDate}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {project.type}
                  </span>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                    {project.status}
                  </span>
                </div>
              </div>

              {isSelected && (
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-sky-700"
                    onClick={(e) => {
                      e.stopPropagation() // prevent re‑triggering row click
                      handleDetailsClick(project)
                    }}
                  >
                    Details
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
