"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectInfoProps {
  project: any
  onClose: () => void
}

export default function ProjectInfo({ project, onClose }: ProjectInfoProps) {
  return (
    <div className="bg-card border-b border-border p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Project ID:</span>
              <div className="font-semibold text-foreground">{project.id}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Type:</span>
              <div className="font-semibold text-foreground">{project.type}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Period:</span>
              <div className="font-semibold text-foreground">
                {project.startDate} to {project.endDate}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-3">
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{project.status}</span>
          <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">v6</span>
        </div>
         <div className="flex gap-3 mt-2">
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Funded Rev:1000</span>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Funded Cost:1000</span>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Revenue:1000</span>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Backlog:1000</span>
           
        </div>
      </div>
    </div>
  )
}
