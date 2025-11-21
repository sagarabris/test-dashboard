"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, Monitor, Users, FileText, Ruler, Link as LinkIcon } from "lucide-react"

const tasks = [
    { id: 1, title: "Interview", time: "Sep 13, 08:30", icon: Monitor, completed: true },
    { id: 2, title: "Team Meeting", time: "Sep 13, 10:30", icon: Users, completed: true },
    { id: 3, title: "Project Update", time: "Sep 13, 13:00", icon: FileText, completed: false },
    { id: 4, title: "Discuss Q3 Goals", time: "Sep 13, 14:45", icon: Ruler, completed: false },
    { id: 5, title: "HR Policy Review", time: "Sep 13, 16:30", icon: LinkIcon, completed: false },
]

export function OnboardingTasks() {
    return (
        <Card className="h-full border-none shadow-xl bg-zinc-900 text-white overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg font-medium text-zinc-400">Onboarding Task</CardTitle>
                </div>
                <span className="text-3xl font-light">2/8</span>
            </CardHeader>
            <CardContent className="p-0">
                <div className="space-y-0">
                    {tasks.map((task, i) => (
                        <div key={task.id} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <task.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{task.title}</p>
                                    <p className="text-xs text-zinc-500">{task.time}</p>
                                </div>
                            </div>
                            {task.completed ? (
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                            ) : (
                                <Circle className="h-5 w-5 text-zinc-700" />
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
