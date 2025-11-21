"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    Briefcase,
    FileText,
    Settings,
    Calendar as CalendarIcon,
    BarChart3,
    BookOpen,
    CheckSquare,
    PanelLeftClose,
    PanelLeftOpen,
    LogOut,
    Command
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTheme } from "next-themes"
import { useUser } from "@/context/user-context"

const sidebarNavItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Leads",
        href: "/dashboard/leads",
        icon: Users,
    },
    {
        title: "Projects",
        href: "/dashboard/projects",
        icon: Briefcase,
    },
    {
        title: "Tasks",
        href: "/dashboard/tasks",
        icon: CheckSquare,
    },
    {
        title: "Calendar",
        href: "/dashboard/calendar",
        icon: CalendarIcon,
    },
    {
        title: "Reports",
        href: "/dashboard/reports",
        icon: BarChart3,
    },
    {
        title: "Invoices",
        href: "/dashboard/invoices",
        icon: FileText,
    },
    {
        title: "Knowledge Base",
        href: "/dashboard/knowledge",
        icon: BookOpen,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
]

interface SidebarProps {
    isCollapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const pathname = usePathname()
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)
    const { logout } = useUser()
    const router = useRouter()

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const handleLogout = () => {
        logout()
        router.push("/login")
    }

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-card/50 backdrop-blur-xl transition-all duration-300 ease-in-out",
                isCollapsed ? "w-[80px]" : "w-[280px]",
                isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}>

                {/* Header */}
                <div className="flex h-20 items-center justify-between px-6">
                    <Link href="/dashboard" className={cn("flex items-center gap-3 transition-all", isCollapsed && "justify-center w-full")}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                            <Command className="h-6 w-6" />
                        </div>
                        {!isCollapsed && (
                            <span className="text-xl font-semibold tracking-tight">
                                Consul<span className="text-primary">tio</span>
                            </span>
                        )}
                    </Link>
                    {!isCollapsed && (
                        <Button variant="ghost" size="icon" onClick={toggleCollapse} className="hidden md:flex h-8 w-8 text-muted-foreground hover:text-foreground">
                            <PanelLeftClose className="h-5 w-5" />
                        </Button>
                    )}
                </div>

                {/* Navigation */}
                <ScrollArea className="flex-1 px-4 py-4">
                    <nav className="grid gap-2">
                        {sidebarNavItems.map((item, index) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                                        isActive ? "bg-primary/10 text-primary hover:bg-primary/15" : "text-muted-foreground",
                                        isCollapsed && "justify-center px-2"
                                    )}
                                >
                                    <item.icon className={cn("h-5 w-5 transition-colors", isActive && "text-primary")} />
                                    {!isCollapsed && <span>{item.title}</span>}
                                    {isCollapsed && (
                                        <span className="sr-only">{item.title}</span>
                                    )}
                                </Link>
                            )
                        })}
                    </nav>
                </ScrollArea>

                {/* Footer */}
                <div className="p-4 border-t border-border/50">
                    {isCollapsed ? (
                        <div className="flex flex-col gap-4 items-center">
                            <Button variant="ghost" size="icon" onClick={toggleCollapse} className="hidden md:flex">
                                <PanelLeftOpen className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={handleLogout} className="text-muted-foreground hover:text-destructive">
                                <LogOut className="h-5 w-5" />
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">My Account</span>
                                    <span className="text-xs text-muted-foreground">Manage</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={handleLogout} className="text-muted-foreground hover:text-destructive">
                                <LogOut className="h-5 w-5" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Toggle Button (Visible only on mobile when sidebar is closed) */}
            {!isMobileOpen && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="fixed top-4 left-4 z-40 md:hidden"
                    onClick={() => setIsMobileOpen(true)}
                >
                    <PanelLeftOpen className="h-6 w-6" />
                </Button>
            )}
        </>
    )
}
