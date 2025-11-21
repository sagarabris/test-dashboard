"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, Circle, Clock, MoreHorizontal, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tasks = [
    {
        id: 1,
        title: "Review client proposal",
        status: "In Progress",
        priority: "High",
        due: "Today",
        assignees: [1, 2],
        tag: "Design"
    },
    {
        id: 2,
        title: "Update project documentation",
        status: "Todo",
        priority: "Medium",
        due: "Tomorrow",
        assignees: [3],
        tag: "Documentation"
    },
    {
        id: 3,
        title: "Team meeting preparation",
        status: "Done",
        priority: "High",
        due: "Yesterday",
        assignees: [1, 4],
        tag: "Meeting"
    },
    {
        id: 4,
        title: "Fix navigation bug",
        status: "In Progress",
        priority: "Low",
        due: "Next Week",
        assignees: [2],
        tag: "Bug"
    },
    {
        id: 5,
        title: "Create marketing assets",
        status: "Todo",
        priority: "Medium",
        due: "In 2 days",
        assignees: [5],
        tag: "Marketing"
    },
]

export default function TasksPage() {
    return (
        <div className="space-y-8 h-[calc(100vh-100px)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-light tracking-tight">Tasks</h1>
                    <p className="text-muted-foreground mt-1">Manage your team's workflow and priorities.</p>
                </div>
                <Button className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Task
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 flex-1 min-h-0">
                {/* Todo Column */}
                <TaskColumn title="To Do" status="Todo" color="bg-zinc-500/10 text-zinc-500" />

                {/* In Progress Column */}
                <TaskColumn title="In Progress" status="In Progress" color="bg-blue-500/10 text-blue-500" />

                {/* Done Column */}
                <TaskColumn title="Done" status="Done" color="bg-emerald-500/10 text-emerald-500" />
            </div>
        </div>
    )
}

function TaskColumn({ title, status, color }: { title: string, status: string, color: string }) {
    return (
        <Card className="bg-white/50 dark:bg-black/40 backdrop-blur-sm border-none shadow-sm flex flex-col h-full">
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
                        {title}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 min-h-0">
                <ScrollArea className="h-full px-6 pb-6">
                    <div className="space-y-4">
                        {tasks.filter(t => t.status === status).map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

function TaskCard({ task }: { task: any }) {
    return (
        <div className="group bg-card hover:bg-accent/50 p-4 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start mb-3">
                <Badge variant="outline" className="rounded-md font-normal text-[10px] opacity-70">
                    {task.tag}
                </Badge>
                <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-3 w-3" />
                </Button>
            </div>

            <h4 className="font-medium text-sm mb-3 line-clamp-2">{task.title}</h4>

            <div className="flex items-center justify-between pt-3 border-t border-border/30">
                <div className="flex -space-x-2">
                    {task.assignees.map((id: number) => (
                        <Avatar key={id} className="h-6 w-6 border-2 border-card">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${id}`} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-medium ${task.priority === 'High' ? 'text-rose-500' :
                        task.priority === 'Medium' ? 'text-amber-500' : 'text-emerald-500'
                    }`}>
                    <Clock className="h-3 w-3" />
                    {task.due}
                </div>
            </div>
        </div>
    )
}
