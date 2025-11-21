"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { name: "Completed", value: 400, color: "hsl(var(--chart-1))" },
    { name: "In Progress", value: 300, color: "hsl(var(--chart-2))" },
    { name: "Planning", value: 300, color: "hsl(var(--chart-3))" },
    { name: "On Hold", value: 200, color: "hsl(var(--chart-4))" },
]

export function ProjectDistributionChart() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Project Distribution</CardTitle>
                <CardDescription>Current status of all active projects</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                            itemStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
