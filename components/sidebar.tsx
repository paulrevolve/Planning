"use client"

import { ChevronRight, BarChart3, Settings, FileText, Layers } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onToggle: (open: boolean) => void
}

const menuItems = [
  {
    icon: BarChart3,
    label: "Planning",
    submenu: ["Project Planning", "Reporting", "Mass Utility", "New Business Budget"],
  },
  { icon: Layers, label: "Forecasting", submenu: ["Monthly Forecast", "Labor Categories", "Revenue"] },
  { icon: FileText, label: "Reports", submenu: ["Budget Reports", "Cost Reports"] },
  { icon: Settings, label: "Configuration", submenu: ["Settings", "Users"] },
]

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const shouldShowExpanded = isOpen || isHovered

  return (
    <div
      className="flex transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (!isOpen) setExpandedMenu(null)
      }}
    >
      {/* Collapsed Sidebar - Always visible, expands to show full menu on hover or click */}
      <div
        className={`${shouldShowExpanded ? "hidden" : "flex"} w-20 bg-sidebar border-r border-sidebar-border flex-col items-center py-4 gap-2`}
      >
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="p-3 hover:bg-sidebar-accent rounded-lg transition-colors text-sidebar-foreground"
            onClick={() => onToggle(!isOpen)}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Expanded Sidebar - Shows on hover or when clicked */}
      {shouldShowExpanded && (
        <div className="w-56 bg-sidebar border-r border-sidebar-border overflow-y-auto">
          <div className="p-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors text-sm font-medium"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${expandedMenu === item.label ? "rotate-90" : ""}`}
                  />
                </button>
                {expandedMenu === item.label && (
                  <div className="pl-8 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem}
                        className="w-full text-left px-3 py-2 text-xs rounded hover:bg-sidebar-accent/50 text-sidebar-foreground/80 transition-colors"
                      >
                        {subitem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
