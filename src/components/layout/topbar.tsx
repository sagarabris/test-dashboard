"use client"

import { Bell, Search, Sun, Moon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { useUser } from "@/context/user-context"

export function Topbar() {
    const { setTheme } = useTheme()
    const { name } = useUser()

    return (
        <header className="h-16 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-30 px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 max-w-md">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full pl-9 bg-background/50 rounded-xl border-none shadow-inner"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <ThemeCustomizer />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" size="icon" className="relative rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
                </Button>

                <div className="flex items-center gap-3 pl-4 border-l ml-2">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-medium">{name || "Guest"}</p>
                        <p className="text-xs text-muted-foreground">Admin</p>
                    </div>
                    <Avatar className="h-9 w-9 border-2 border-background shadow-sm">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name || "Guest"}`} />
                        <AvatarFallback>{name ? name[0].toUpperCase() : "G"}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}
