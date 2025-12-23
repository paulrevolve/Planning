"use client"

import { cn } from "@/lib/utils"

interface PlanningTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "labor", label: "Labor" },
  { id: "cost-pools", label: "Cost Pools" },
  { id: "burden", label: "Burden" },
  { id: "gna", label: "G&A" },
  { id: "summary", label: "Summary" },
]

export default function PlanningTabs({ activeTab, onTabChange }: PlanningTabsProps) {
  return (
    <div className="border-b border-border bg-card">
      <nav className="flex gap-1 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap",
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
