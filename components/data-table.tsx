"use client"

import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const mockData = [
  { id: 1, type: "Other", name: "key test", warning: "test", jan: 174, feb: 162, mar: 186, apr: 180, may: 180 },
  { id: 2, type: "Employee", name: "Edmund", warning: "-", jan: 0, feb: 0, mar: 0, apr: 0, may: 0 },
  { id: 3, type: "Vendor", name: "S0021", warning: "-", jan: 0, feb: 0, mar: 0, apr: 0, may: 0 },
  { id: 4, type: "Other", name: "PLC", warning: "C00095 - USAF Technician", jan: 0, feb: 0, mar: 0, apr: 0, may: 0 },
]

interface DataTableProps {
  project: any
  activeTab: string
}

export default function DataTable({ project, activeTab }: DataTableProps) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"]

  return (
    <div className="flex-1 flex flex-col p-4 gap-3 overflow-hidden">
      {/* Action Buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-1" />
          New
        </Button>
        <Button size="sm" variant="outline">
          Find / Replace
        </Button>
        <Button size="sm" variant="destructive">
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </Button>
        <Button size="sm" variant="outline">
          Save Date
        </Button>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto overflow-y-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 bg-muted">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground border-b border-border w-10">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground border-b border-border min-w-24">
                  Type
                </th>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground border-b border-border min-w-32">
                  Name
                </th>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground border-b border-border min-w-28">
                  Warning
                </th>
                {months.map((month) => (
                  <th
                    key={month}
                    className="px-3 py-2 text-center font-semibold text-muted-foreground border-b border-border min-w-16"
                  >
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockData.map((row, idx) => (
                <tr key={row.id} className={idx % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <td className="px-3 py-2 border-b border-border">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-3 py-2 border-b border-border text-foreground">{row.type}</td>
                  <td className="px-3 py-2 border-b border-border text-foreground font-medium">{row.name}</td>
                  <td className="px-3 py-2 border-b border-border text-muted-foreground text-xs">{row.warning}</td>
                  {months.map((month) => (
                    <td key={month} className="px-3 py-2 border-b border-border text-center">
                      <input
                        type="number"
                        defaultValue={row[month.toLowerCase() as keyof typeof row] || ""}
                        className="w-full px-2 py-1 text-center border border-border rounded bg-input text-foreground text-sm"
                      />
                    </td>
                  ))}
                </tr>
              ))}
              {/* Total Row */}
              <tr className="bg-accent/20 font-semibold">
                <td colSpan={4} className="px-3 py-2 text-right border-t border-accent">
                  Total:
                </td>
                {months.map((month) => (
                  <td key={month} className="px-3 py-2 text-center border-t border-accent">
                    696
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
