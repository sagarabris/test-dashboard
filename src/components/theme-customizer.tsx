"use client"

import * as React from "react"
import { Check, Palette } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const themes = [
    { name: "Zinc", color: "240 5.9% 10%", hex: "#18181b" },
    { name: "Red", color: "0 72.2% 50.6%", hex: "#ef4444" },
    { name: "Rose", color: "346.8 77.2% 49.8%", hex: "#f43f5e" },
    { name: "Orange", color: "24.6 95% 53.1%", hex: "#f97316" },
    { name: "Green", color: "142.1 76.2% 36.3%", hex: "#16a34a" },
    { name: "Blue", color: "221.2 83.2% 53.3%", hex: "#3b82f6" },
    { name: "Yellow", color: "45 90% 60%", hex: "#facc15" },
    { name: "Violet", color: "262.1 83.3% 57.8%", hex: "#8b5cf6" },
]

export function ThemeCustomizer() {
    const [mounted, setMounted] = React.useState(false)
    const [activeTheme, setActiveTheme] = React.useState("Yellow")

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const setTheme = (theme: typeof themes[number]) => {
        const root = document.documentElement
        root.style.setProperty("--primary", `hsl(${theme.color})`)
        root.style.setProperty("--ring", `hsl(${theme.color})`)

        if (theme.name === "Yellow" || theme.name === "Orange" || theme.name === "Green") {
            root.style.setProperty("--primary-foreground", "hsl(240 5.9% 10%)")
        } else {
            root.style.setProperty("--primary-foreground", "hsl(0 0% 98%)")
        }

        setActiveTheme(theme.name)
    }

    if (!mounted) {
        return null
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-2 shadow-sm hover:shadow-md transition-all">
                    <Palette className="h-5 w-5" />
                    <span className="sr-only">Customize Theme</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 p-4 rounded-3xl shadow-xl border-none bg-white/80 backdrop-blur-xl">
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <h4 className="font-semibold leading-none tracking-tight">Theme Color</h4>
                        <p className="text-sm text-muted-foreground">
                            Customize your dashboard vibe.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        <TooltipProvider>
                            {themes.map((theme) => (
                                <Tooltip key={theme.name}>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => setTheme(theme)}
                                            className={cn(
                                                "group relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                                activeTheme === theme.name ? "border-primary shadow-lg scale-110" : "hover:border-muted-foreground/25"
                                            )}
                                            style={{ backgroundColor: theme.hex }}
                                        >
                                            {activeTheme === theme.name && (
                                                <Check className={cn("h-5 w-5", theme.name === "Yellow" || theme.name === "Orange" ? "text-black" : "text-white")} />
                                            )}
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" className="rounded-xl text-xs">
                                        {theme.name}
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
