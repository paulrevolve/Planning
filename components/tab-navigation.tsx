"use client"

const tabs = [
  { id: "hours", label: "Hours" },
  { id: "cost", label: "Other Cost" },
  { id: "forecast", label: "Monthly Forecast" },
  { id: "labor", label: "Labor Categories" },
  { id: "revenue", label: "Revenue Definition" },
  { id: "adjustment", label: "Adjustment" },
  { id: "funding", label: "Funding" },
  { id: "warning", label: "Warning" },
]

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="bg-card border-b border-border px-4 py-2 flex gap-2 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap ${
            activeTab === tab.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
