"use client"

import * as React from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { cn } from "@/lib/utils"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false)

    return (
        <div className="min-h-screen bg-background">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                setIsCollapsed={setIsSidebarCollapsed}
            />
            <div
                className={cn(
                    "transition-all duration-300 ease-in-out flex flex-col min-h-screen",
                    isSidebarCollapsed ? "pl-[80px]" : "pl-[280px]"
                )}
            >
                <Topbar />
                <main className="flex-1 p-6 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
}
