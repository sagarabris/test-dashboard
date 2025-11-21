"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, Cell } from "recharts"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const data = [
    { day: "S", value: 2.5, active: false },
    { day: "M", value: 4.5, active: false },
    { day: "T", value: 3.0, active: false },
    { day: "W", value: 5.5, active: false },
    { day: "T", value: 4.0, active: true }, // Highlighted
    { day: "F", value: 3.5, active: false },
    { day: "S", value: 2.0, active: false },
]

export function ProgressChart() {
    return (
        <Card className="h-full border-none shadow-sm bg-white/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div>
                    <CardTitle className="text-lg font-medium text-muted-foreground">Progress</CardTitle>
                    <div className="mt-2">
                        <span className="text-4xl font-light">6.1 h</span>
                        <span className="text-xs text-muted-foreground ml-2 block">Work Time this week</span>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="p-0 relative">
                <div className="h-[180px] w-full px-6 pb-6">
                    {/* Floating Badge for the active bar */}
                    <div className="absolute top-0 right-12 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                        5h 23m
                    </div>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                                dy={10}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ background: 'hsl(var(--card))', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={8}>
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.active ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'}
                                        className="transition-all duration-300 hover:opacity-80"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
