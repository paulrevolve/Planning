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
  onSelect: (project: any) => void
}

export default function ProjectSelector({ onSelect }: ProjectSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = mockProjects.filter(
    (p) => p.id.includes(searchTerm) || p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 flex flex-col p-6 gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-4">Select a Project</h1>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by Project ID or Name..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-3">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => onSelect(project)}
              className="text-left p-4 border border-border rounded-lg hover:bg-accent/10 hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold text-foreground">{project.name}</div>
                  <div className="text-sm text-muted-foreground">{project.id}</div>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{project.type}</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">{project.status}</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {project.startDate} to {project.endDate}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
