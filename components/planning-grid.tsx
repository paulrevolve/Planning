"use client"
import { ChevronRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlanningGridProps {
  activeTab: string
  selectedRow: number | null
  onRowSelect: (row: number | null) => void
}

// Sample data
const sampleData = [
  {
    id: 1,
    category: "Engineering",
    subcategory: "Senior Engineers",
    open: true,
    months: [45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000],
  },
  {
    id: 2,
    category: "Engineering",
    subcategory: "Junior Engineers",
    open: true,
    months: [28000, 28000, 28000, 28000, 28000, 28000, 28000, 28000, 28000, 28000, 28000, 28000],
  },
  {
    id: 3,
    category: "Engineering",
    subcategory: "QA Engineers",
    open: false,
    months: [22000, 22000, 22000, 22000, 22000, 22000, 22000, 22000, 22000, 22000, 22000, 22000],
  },
  {
    id: 4,
    category: "Operations",
    subcategory: "Project Manager",
    open: true,
    months: [32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000],
  },
  {
    id: 5,
    category: "Operations",
    subcategory: "Coordinator",
    open: true,
    months: [18000, 18000, 18000, 18000, 18000, 18000, 18000, 18000, 18000, 18000, 18000, 18000],
  },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function PlanningGrid({ activeTab, selectedRow, onRowSelect }: PlanningGridProps) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      {/* Grid Container */}
      <div className="flex-1 overflow-auto relative">
        <div className="inline-block min-w-full">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-muted border-b border-border">
            <div className="flex">
              {/* Frozen columns header */}
              <div className="sticky left-0 z-30 w-64 bg-muted border-r border-border flex-shrink-0">
                <div className="h-12 px-4 flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Category
                </div>
              </div>

              {/* Months header */}
              <div className="flex">
                {months.map((month) => (
                  <div
                    key={month}
                    className="w-24 h-12 px-3 flex items-center justify-center border-r border-border text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center flex-shrink-0"
                  >
                    {month}
                  </div>
                ))}
                {/* Total column */}
                <div className="w-28 h-12 px-3 flex items-center justify-center bg-primary/5 border-l-2 border-primary text-xs font-bold text-primary uppercase tracking-wide flex-shrink-0">
                  Total
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="bg-card">
            {sampleData.map((row, idx) => {
              const total = row.months.reduce((a, b) => a + b, 0)
              const isSelected = selectedRow === row.id
              const isClosed = !row.open

              return (
                <div
                  key={row.id}
                  className={cn(
                    "flex border-b border-border transition",
                    isSelected && "bg-accent/10",
                    idx % 2 === 0 && !isSelected && "bg-muted/30",
                    isClosed && "opacity-60",
                  )}
                  onClick={() => onRowSelect(isSelected ? null : row.id)}
                >
                  {/* Frozen column */}
                  <div className="sticky left-0 z-10 w-64 px-4 py-3 flex items-center gap-2 border-r border-border bg-inherit flex-shrink-0 cursor-pointer hover:bg-accent/5">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{row.subcategory}</p>
                      <p className="text-xs text-muted-foreground">{row.category}</p>
                    </div>
                    {isClosed && <Lock className="w-4 h-4 text-destructive flex-shrink-0" />}
                  </div>

                  {/* Data cells */}
                  <div className="flex">
                    {row.months.map((value, mIdx) => (
                      <div
                        key={mIdx}
                        className={cn(
                          "w-24 px-3 py-3 border-r border-border flex items-center justify-end text-sm font-mono flex-shrink-0",
                          isClosed ? "bg-muted/50 text-muted-foreground" : "bg-white text-foreground hover:bg-accent/5",
                        )}
                      >
                        ${(value / 1000).toFixed(0)}K
                      </div>
                    ))}
                    {/* Total cell */}
                    <div className="w-28 px-3 py-3 flex items-center justify-end bg-primary/5 border-l-2 border-primary font-bold text-primary text-sm font-mono flex-shrink-0">
                      ${(total / 1000).toFixed(0)}K
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary Row */}
          <div className="sticky bottom-0 bg-primary/10 border-t-2 border-primary flex">
            {/* Frozen column */}
            <div className="sticky left-0 z-10 w-64 px-4 py-3 border-r border-border font-bold text-primary text-sm flex-shrink-0">
              Total Budget
            </div>

            {/* Totals */}
            <div className="flex">
              {months.map((_, mIdx) => {
                const monthTotal = sampleData.reduce((sum, row) => sum + row.months[mIdx], 0)
                return (
                  <div
                    key={mIdx}
                    className="w-24 px-3 py-3 border-r border-border flex items-center justify-end text-sm font-mono font-bold text-primary flex-shrink-0"
                  >
                    ${(monthTotal / 1000).toFixed(0)}K
                  </div>
                )
              })}
              {/* Grand total */}
              <div className="w-28 px-3 py-3 flex items-center justify-end bg-primary text-primary-foreground border-l-2 border-primary font-bold text-sm font-mono flex-shrink-0">
                ${(sampleData.reduce((sum, row) => sum + row.months.reduce((a, b) => a + b, 0), 0) / 1000).toFixed(0)}K
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="border-t border-border bg-muted/50 px-6 py-2 text-xs text-muted-foreground flex items-center justify-between">
        <span>{sampleData.length} rows</span>
        <span>All fields editable • Closed periods read-only</span>
      </div>
    </div>
  )
}
