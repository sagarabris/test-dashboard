"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ArrowUpRight, TrendingUp, Users, DollarSign, Activity } from "lucide-react"

const monthlyData = [
    { name: "Jan", revenue: 4000, expenses: 2400, profit: 2400 },
    { name: "Feb", revenue: 3000, expenses: 1398, profit: 2210 },
    { name: "Mar", revenue: 2000, expenses: 9800, profit: 2290 },
    { name: "Apr", revenue: 2780, expenses: 3908, profit: 2000 },
    { name: "May", revenue: 1890, expenses: 4800, profit: 2181 },
    { name: "Jun", revenue: 2390, expenses: 3800, profit: 2500 },
    { name: "Jul", revenue: 3490, expenses: 4300, profit: 2100 },
]

const projectStatusData = [
    { name: "Completed", value: 45, color: "hsl(var(--primary))" },
    { name: "In Progress", value: 30, color: "hsl(var(--muted-foreground))" },
    { name: "On Hold", value: 15, color: "hsl(var(--destructive))" },
    { name: "Planning", value: 10, color: "hsl(var(--secondary))" },
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-card/95 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-xl">
                <p className="font-medium mb-2">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-muted-foreground capitalize">{entry.name}:</span>
                        <span className="font-medium">
                            {entry.name === 'revenue' || entry.name === 'expenses' || entry.name === 'profit'
                                ? `$${entry.value}`
                                : entry.value}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
    return null
}

export default function ReportsPage() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-light tracking-tight">Financial Reports</h1>
                <p className="text-muted-foreground">Overview of your business performance and growth.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <span className="text-emerald-500 flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +20.1%
                            </span>
                            from last month
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <span className="text-emerald-500 flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +4
                            </span>
                            new this week
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Client Growth</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <span className="text-emerald-500 flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +201
                            </span>
                            since last hour
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$12,234</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <span className="text-emerald-500 flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +19%
                            </span>
                            margin
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                {/* Main Revenue Chart */}
                <Card className="col-span-4 bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                        <CardDescription>
                            Comparing revenue vs expenses over the last 7 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={monthlyData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorRevenue)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="expenses"
                                        stroke="hsl(var(--muted-foreground))"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorExpenses)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Project Status Pie Chart */}
                <Card className="col-span-3 bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Project Distribution</CardTitle>
                        <CardDescription>
                            Current status of all active projects
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[350px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={projectStatusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {projectStatusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-3xl font-bold">100%</span>
                                <span className="text-sm text-muted-foreground">Projects</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {projectStatusData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm text-muted-foreground">{item.name}</span>
                                    <span className="text-sm font-medium ml-auto">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
