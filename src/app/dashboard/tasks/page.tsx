"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, Circle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const tasks = [
    {
        id: 1,
        title: "Review client proposal",
        status: "In Progress",
        priority: "High",
        due: "Today",
    },
    {
        id: 2,
        title: "Update project documentation",
        status: "Todo",
        priority: "Medium",
        due: "Tomorrow",
    },
    {
        id: 3,
        title: "Team meeting preparation",
        status: "Done",
        priority: "High",
        due: "Yesterday",
    },
    {
        id: 4,
        title: "Fix navigation bug",
        status: "In Progress",
        priority: "Low",
        due: "Next Week",
    },
]

export default function TasksPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Task
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {/* Todo Column */}
                <Card className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground">To Do</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {tasks.filter(t => t.status === "Todo").map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </CardContent>
                </Card>

                {/* In Progress Column */}
                <Card className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium uppercase tracking-wider text-blue-500">In Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {tasks.filter(t => t.status === "In Progress").map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </CardContent>
                </Card>

                {/* Done Column */}
                <Card className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium uppercase tracking-wider text-green-500">Done</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {tasks.filter(t => t.status === "Done").map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function TaskCard({ task }: { task: any }) {
    return (
        <Card className="bg-background shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 space-y-2">
                <div className="flex justify-between items-start">
                    <span className="font-medium text-sm">{task.title}</span>
                    {task.status === "Done" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Circle className="h-4 w-4 text-muted-foreground" />}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-[10px] px-1 py-0 h-5">{task.priority}</Badge>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {task.due}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
