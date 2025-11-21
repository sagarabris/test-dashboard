"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Clock, ArrowUpRight } from "lucide-react"

export function TimeTracker() {
    return (
        <Card className="h-full border-none shadow-sm bg-white/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">Time tracker</CardTitle>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-6 pb-8">
                <div className="relative h-40 w-40 flex items-center justify-center">
                    {/* Circular Progress Background */}
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                            className="text-muted/30 stroke-current"
                            strokeWidth="8"
                            fill="transparent"
                            r="42"
                            cx="50"
                            cy="50"
                        />
                        {/* Progress */}
                        <circle
                            className="text-primary stroke-current transition-all duration-1000 ease-out"
                            strokeWidth="8"
                            strokeLinecap="round"
                            fill="transparent"
                            r="42"
                            cx="50"
                            cy="50"
                            strokeDasharray="263.89"
                            strokeDashoffset="60"
                        />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-3xl font-bold tabular-nums">02:35</span>
                        <span className="text-xs text-muted-foreground">Work Time</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full justify-between px-4">
                    <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-none shadow-sm bg-white hover:bg-gray-50">
                            <Play className="h-4 w-4 fill-current" />
                        </Button>
                        <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                            <Pause className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button size="icon" className="rounded-full h-10 w-10 bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg">
                        <Clock className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
