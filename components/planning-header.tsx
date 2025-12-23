"use client"

import { ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlanningHeader() {
  return (
    <header className="border-b border-border bg-card px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Project Selector */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-semibold">
              P
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Project</p>
              <button className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition">
                Strategic Initiative 2025
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-border" />

          {/* Fiscal Year Info */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Fiscal Year</p>
              <p className="font-semibold text-foreground">FY 2025</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Version</p>
              <p className="font-semibold text-foreground">v1.2</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Revision</p>
              <p className="font-semibold text-foreground">Rev 3</p>
            </div>
          </div>
        </div>

        {/* Right Side - Status Badge */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-600" />
            <span className="text-sm font-medium">Open</span>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            Jan 2025
          </Button>
        </div>
      </div>
    </header>
  )
}
