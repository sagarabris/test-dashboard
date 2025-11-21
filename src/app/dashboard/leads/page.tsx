"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const leads = [
    {
        id: "LEAD-001",
        name: "Alice Johnson",
        company: "TechStart Inc.",
        email: "alice@techstart.com",
        status: "New",
        source: "Website",
        date: "2023-11-20",
    },
    {
        id: "LEAD-002",
        name: "Bob Smith",
        company: "Global Logistics",
        email: "bob@globallogistics.com",
        status: "Contacted",
        source: "LinkedIn",
        date: "2023-11-19",
    },
    {
        id: "LEAD-003",
        name: "Charlie Brown",
        company: "Creative Solutions",
        email: "charlie@creative.com",
        status: "Qualified",
        source: "Referral",
        date: "2023-11-18",
    },
    {
        id: "LEAD-004",
        name: "Diana Prince",
        company: "Amazonia",
        email: "diana@amazonia.com",
        status: "Proposal",
        source: "Conference",
        date: "2023-11-17",
    },
    {
        id: "LEAD-005",
        name: "Evan Wright",
        company: "Wright & Co.",
        email: "evan@wright.com",
        status: "Lost",
        source: "Website",
        date: "2023-11-16",
    },
]

export default function LeadsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                <h2 className="text-3xl font-bold tracking-tight">Leads Management</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Lead
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Leads</CardTitle>
                    <CardDescription>
                        Manage and track your potential clients.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search leads..."
                                className="pl-9"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Statuses</SelectItem>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="contacted">Contacted</SelectItem>
                                    <SelectItem value="qualified">Qualified</SelectItem>
                                    <SelectItem value="proposal">Proposal</SelectItem>
                                    <SelectItem value="lost">Lost</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Source" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Sources</SelectItem>
                                    <SelectItem value="website">Website</SelectItem>
                                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                                    <SelectItem value="referral">Referral</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Source</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leads.map((lead) => (
                                <TableRow key={lead.id}>
                                    <TableCell className="font-medium">{lead.name}</TableCell>
                                    <TableCell>{lead.company}</TableCell>
                                    <TableCell>{lead.email}</TableCell>
                                    <TableCell>{lead.source}</TableCell>
                                    <TableCell>{lead.date}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                lead.status === "New"
                                                    ? "default"
                                                    : lead.status === "Qualified" || lead.status === "Proposal"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {lead.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">
                                            View
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
