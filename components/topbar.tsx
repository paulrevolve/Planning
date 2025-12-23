"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Topbar() {
  return (
    <div className="bg-primary text-primary-foreground px-6 py-3 flex items-center justify-between border-b border-border">
      <div className="text-lg font-semibold">FinAxis</div>
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
        <LogOut className="w-5 h-5" />
      </Button>
    </div>
  )
}
