"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Mail, Phone, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const clients = [
    {
        id: 1,
        name: "Acme Corp",
        contact: "John Doe",
        email: "john@acme.com",
        phone: "+1 (555) 123-4567",
        status: "Active",
        projects: 3,
        logo: "AC",
    },
    {
        id: 2,
        name: "Globex Inc",
        contact: "Jane Smith",
        email: "jane@globex.com",
        phone: "+1 (555) 987-6543",
        status: "Active",
        projects: 1,
        logo: "GL",
    },
    {
        id: 3,
        name: "Soylent Corp",
        contact: "Bob Williams",
        email: "bob@soylent.com",
        phone: "+1 (555) 456-7890",
        status: "Inactive",
        projects: 0,
        logo: "SC",
    },
    {
        id: 4,
        name: "Umbrella Corp",
        contact: "Alice Cooper",
        email: "alice@umbrella.com",
        phone: "+1 (555) 789-0123",
        status: "Active",
        projects: 5,
        logo: "UC",
    },
    {
        id: 5,
        name: "Stark Industries",
        contact: "Tony Stark",
        email: "tony@stark.com",
        phone: "+1 (555) 000-1111",
        status: "Active",
        projects: 12,
        logo: "SI",
    },
    {
        id: 6,
        name: "Wayne Enterprises",
        contact: "Bruce Wayne",
        email: "bruce@wayne.com",
        phone: "+1 (555) 222-3333",
        status: "Active",
        projects: 8,
        logo: "WE",
    },
]

export default function ClientsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                <h2 className="text-3xl font-bold tracking-tight">Client Management</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Client
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search clients..."
                        className="pl-9 bg-background"
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {clients.map((client) => (
                    <Card key={client.id} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border">
                                    <AvatarFallback>{client.logo}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base">{client.name}</CardTitle>
                                    <CardDescription className="text-xs">{client.contact}</CardDescription>
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Edit Client</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">Delete Client</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex flex-col gap-1">
                                    <span className="text-muted-foreground text-xs">Status</span>
                                    <Badge variant={client.status === "Active" ? "default" : "secondary"} className="w-fit">
                                        {client.status}
                                    </Badge>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-muted-foreground text-xs">Projects</span>
                                    <span className="font-medium">{client.projects} Active</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 pt-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Mail className="h-3 w-3" />
                                    {client.email}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Phone className="h-3 w-3" />
                                    {client.phone}
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button variant="outline" className="w-full text-xs h-8">View Profile</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
