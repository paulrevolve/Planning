"use client"

import { useState } from "react"
import Topbar from "@/components/topbar"
import Sidebar from "@/components/sidebar"
import ProjectSelector from "@/components/project-selector"
import ProjectInfo from "@/components/project-info"
import TabNavigation from "@/components/tab-navigation"
import DataTable from "@/components/data-table"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("hours")

  return (
    <div className="flex flex-col h-screen bg-background">
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onToggle={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 overflow-auto flex flex-col">
          {/* Project Selector or Project Info */}
          {!selectedProject ? (
            <ProjectSelector onSelect={setSelectedProject} />
          ) : (
            <>
              {/* Project Summary Bar */}
              <ProjectInfo project={selectedProject} onClose={() => setSelectedProject(null)} />

              {/* Tab Navigation */}
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Data Table */}
              <DataTable project={selectedProject} activeTab={activeTab} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
