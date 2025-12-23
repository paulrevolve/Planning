// "use client"
// import { Search } from "lucide-react"
// import { useState } from "react"

// const mockProjects = [
//   {
//     id: "20001.00.000100.0000",
//     name: "USAF LABOR BASE YEAR",
//     type: "BUD",
//     status: "In Progress",
//     startDate: "01/01/2025",
//     endDate: "12/31/2025",
//   },
//   { 
//     id: "20002.00.000200.0000",
//     name: "AIRFORCE PROGRAM",
//     type: "EAC",
//     status: "Active",
//     startDate: "01/01/2025",
//     endDate: "12/31/2025",
//   },
//   {
//     id: "20003.00.000300.0000",
//     name: "DEFENSE PROJECT",
//     type: "BUD",
//     status: "In Progress",
//     startDate: "01/01/2025",
//     endDate: "12/31/2025",
//   },
// ]

// interface ProjectSelectorProps {
//   // this should navigate / show project info page
//   onSelect: (project: any) => void
// }

// export default function ProjectSelector({ onSelect }: ProjectSelectorProps) {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

//   const filteredProjects = mockProjects.filter(
//     (p) =>
//       p.id.includes(searchTerm) ||
//       p.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   const handleRowClick = (projectId: string) => {
//     setSelectedProjectId(projectId)
//   }

//   const handleDetailsClick = (project: any) => {
//     onSelect(project) // call your existing logic to open project info page
//   }

//   return (
//     <div className="flex-1 flex flex-col">
//       {/* search input */}
//       <div className="relative mb-6">
//         <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//         <input
//           className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none"
//           placeholder="Search by Project ID or Name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="space-y-3">
//         {filteredProjects.map((project) => {
//           const isSelected = selectedProjectId === project.id

//           return (
//             <div
//               key={project.id}
//               onClick={() => handleRowClick(project.id)}
//               className={`cursor-pointer rounded-2xl border px-6 py-4 transition ${
//                 isSelected
//                   ? "border-sky-300 bg-sky-50"
//                   : "border-slate-200 bg-white hover:border-sky-200"
//               }`}
//             >
//               <div className="flex items-center justify-between gap-4">
//                 <div>
//                   <div className="text-sm font-semibold text-slate-900">
//                     {project.name}
//                   </div>
//                   <div className="text-xs text-slate-500">{project.id}</div>
//                   <div className="mt-1 text-xs text-slate-500">
//                     {project.startDate} to {project.endDate}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
//                     {project.type}
//                   </span>
//                   <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
//                     {project.status}
//                   </span>
//                 </div>
//               </div>

//               {isSelected && (
//                 <div className="mt-3 flex justify-end">
//                   <button
//                     type="button"
//                     className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-sky-700"
//                     onClick={(e) => {
//                       e.stopPropagation() // prevent re‑triggering row click
//                       handleDetailsClick(project)
//                     }}
//                   >
//                     Details
//                   </button>
//                 </div>
//               )}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

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
    version: "v6",
  },
  {
    id: "20002.00.000200.0000",
    name: "AIRFORCE PROGRAM",
    type: "EAC",
    status: "Active",
    startDate: "01/01/2025",
    endDate: "12/31/2025",
    version: "v3",
  },
  {
    id: "20003.00.000300.0000",
    name: "DEFENSE PROJECT",
    type: "BUD",
    status: "In Progress",
    startDate: "01/01/2025",
    endDate: "12/31/2025",
    version: "v1",
  },
]

interface ProjectSelectorProps {
  onSelect: (project: any) => void
  onCreateBudget?: (project: any) => void
  onCreateBlankBudget?: (project: any) => void
  onCreateEac?: (project: any) => void
  onSubmit?: (project: any) => void
  onApprove?: (project: any) => void
  onConclude?: (project: any) => void
}

export default function ProjectSelector({
  onSelect,
  onCreateBudget,
  onCreateBlankBudget,
  onCreateEac,
  onSubmit,
  onApprove,
  onConclude,
}: ProjectSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const filteredProjects = mockProjects.filter(
    (p) =>
      p.id.includes(searchTerm) ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedProject =
    filteredProjects.find((p) => p.id === selectedProjectId) ?? null

  const handleRowClick = (projectId: string) => {
    setSelectedProjectId(projectId)
  }

  const withSelected = (cb?: (p: any) => void) => {
    if (!cb || !selectedProject) return
    cb(selectedProject)
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Search */}
      <div className="mb-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-sky-400 focus:bg-white"
            placeholder="Search by Project ID or Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Action bar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            className="rounded-full bg-sky-600 px-4 py-1.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => selectedProject && onSelect(selectedProject)}
          >
            Details
          </button>

          <button
            type="button"
            className="rounded-full bg-slate-900 px-4 py-1.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => withSelected(onCreateBudget)}
          >
            New Budget
          </button>

          <button
            type="button"
            className="rounded-full bg-slate-700 px-4 py-1.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => withSelected(onCreateBlankBudget)}
          >
            New Blank Budget
          </button>

          <button
            type="button"
            className="rounded-full bg-indigo-600 px-4 py-1.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => withSelected(onCreateEac)}
          >
            New EAC
          </button>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            className="rounded-full border border-sky-500 px-4 py-1.5 font-medium text-sky-600 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => withSelected(onSubmit)}
          >
            Submit
          </button>
          <button
            type="button"
            className="rounded-full border border-emerald-500 px-4 py-1.5 font-medium text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => withSelected(onApprove)}
          >
            Approve
          </button>
          <button
            type="button"
            className="rounded-full border border-amber-500 px-4 py-1.5 font-medium text-amber-600 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedProject}
            onClick={() => withSelected(onConclude)}
          >
            Conclude
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="w-10 px-4 py-3">#</th>
              <th className="px-4 py-3">Project Name</th>
              <th className="px-4 py-3">Project ID</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Version</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">End Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => {
              const isSelected = selectedProjectId === project.id
              return (
                <tr
                  key={project.id}
                  onClick={() => handleRowClick(project.id)}
                  className={`cursor-pointer border-t border-slate-100 text-slate-800 transition hover:bg-sky-50 ${
                    isSelected ? "bg-sky-50/80" : ""
                  }`}
                >
                  <td className="px-4 py-2.5 text-xs text-slate-500">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2.5 font-medium">
                    {project.name}
                  </td>
                  <td className="px-4 py-2.5 tabular-nums text-xs text-slate-600">
                    {project.id}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                      {project.type}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        project.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-sky-50 text-sky-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-xs font-semibold text-slate-700">
                    {project.version}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-slate-600">
                    {project.startDate}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-slate-600">
                    {project.endDate}
                  </td>
                </tr>
              )
            })}

            {filteredProjects.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-6 text-center text-xs text-slate-400"
                >
                  No projects match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
