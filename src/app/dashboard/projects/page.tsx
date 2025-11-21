"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, Calendar, DollarSign, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const projects = [
    {
        id: "PROJ-001",
        name: "Website Redesign",
        client: "Acme Corp",
        status: "In Progress",
        dueDate: "Dec 15, 2023",
        budget: "$5,000",
        progress: 65,
        team: [1, 2, 3],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        id: "PROJ-002",
        name: "Mobile App Development",
        client: "Globex Inc",
        status: "Planning",
        dueDate: "Feb 20, 2024",
        budget: "$12,000",
        progress: 15,
        team: [4, 5],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
        id: "PROJ-003",
        name: "SEO Optimization",
        client: "Soylent Corp",
        status: "Completed",
        dueDate: "Oct 30, 2023",
        budget: "$2,500",
        progress: 100,
        team: [2],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    },
    {
        id: "PROJ-004",
        name: "Cloud Migration",
        client: "Umbrella Corp",
        status: "In Progress",
        dueDate: "Jan 10, 2024",
        budget: "$8,000",
        progress: 45,
        team: [1, 3, 4, 5],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
        id: "PROJ-005",
        name: "Data Analytics Dashboard",
        client: "Stark Ind",
        status: "Review",
        dueDate: "Nov 25, 2023",
        budget: "$15,000",
        progress: 90,
        team: [1, 2, 5],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
]

export default function ProjectsPage() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-light tracking-tight">Projects</h1>
                    <p className="text-muted-foreground mt-1">
                        Manage your ongoing and completed projects.
                    </p>
                </div>
                <Button className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Card key={project.id} className="group overflow-hidden border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <div className="h-48 w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <Badge
                                    className={`
                                        ${project.status === 'Completed' ? 'bg-emerald-500 hover:bg-emerald-600' :
                                            project.status === 'In Progress' ? 'bg-blue-500 hover:bg-blue-600' :
                                                'bg-amber-500 hover:bg-amber-600'} text-white border-none
                                    `}
                                >
                                    {project.status}
                                </Badge>
                            </div>
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-20 text-white hover:bg-white/20">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <h3 className="font-semibold text-xl line-clamp-1">{project.name}</h3>
                                <p className="text-sm text-muted-foreground">{project.client}</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span className="font-medium">{project.progress}%</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary transition-all duration-500 ease-out"
                                        style={{ width: `${project.progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                <div className="flex -space-x-2">
                                    {project.team.map((member, i) => (
                                        <Avatar key={i} className="border-2 border-background w-8 h-8">
                                            <AvatarImage src={`https://i.pravatar.cc/150?u=${member}`} />
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {project.dueDate}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <DollarSign className="h-4 w-4" />
                                        {project.budget}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
