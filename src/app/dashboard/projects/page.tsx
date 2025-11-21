"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const projects = [
    {
        id: "PROJ-001",
        name: "Website Redesign",
        client: "Acme Corp",
        status: "In Progress",
        dueDate: "2023-12-15",
        budget: "$5,000",
    },
    {
        id: "PROJ-002",
        name: "Mobile App Development",
        client: "Globex Inc",
        status: "Planning",
        dueDate: "2024-02-20",
        budget: "$12,000",
    },
    {
        id: "PROJ-003",
        name: "SEO Optimization",
        client: "Soylent Corp",
        status: "Completed",
        dueDate: "2023-10-30",
        budget: "$2,500",
    },
    {
        id: "PROJ-004",
        name: "Cloud Migration",
        client: "Umbrella Corp",
        status: "In Progress",
        dueDate: "2024-01-10",
        budget: "$8,000",
    },
    {
        id: "PROJ-005",
        name: "Data Analytics Dashboard",
        client: "Stark Ind",
        status: "Review",
        dueDate: "2023-11-25",
        budget: "$15,000",
    },
]

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">
                        Manage your ongoing and completed projects.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Projects</CardTitle>
                    <CardDescription>
                        A list of all projects including their status and due dates.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Project ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Due Date</TableHead>
                                <TableHead className="text-right">Budget</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project.id}>
                                    <TableCell className="font-medium">{project.id}</TableCell>
                                    <TableCell>{project.name}</TableCell>
                                    <TableCell>{project.client}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                project.status === "Completed"
                                                    ? "secondary"
                                                    : project.status === "In Progress"
                                                        ? "default"
                                                        : "outline"
                                            }
                                        >
                                            {project.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{project.dueDate}</TableCell>
                                    <TableCell className="text-right">{project.budget}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
