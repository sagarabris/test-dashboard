"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone, Building2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
        phone: "+1 (555) 000-1111",
        status: "New",
        source: "Website",
        date: "Nov 20, 2023",
        avatar: "https://i.pravatar.cc/150?u=alice"
    },
    {
        id: "LEAD-002",
        name: "Bob Smith",
        company: "Global Logistics",
        email: "bob@globallogistics.com",
        phone: "+1 (555) 000-2222",
        status: "Contacted",
        source: "LinkedIn",
        date: "Nov 19, 2023",
        avatar: "https://i.pravatar.cc/150?u=bob"
    },
    {
        id: "LEAD-003",
        name: "Charlie Brown",
        company: "Creative Solutions",
        email: "charlie@creative.com",
        phone: "+1 (555) 000-3333",
        status: "Qualified",
        source: "Referral",
        date: "Nov 18, 2023",
        avatar: "https://i.pravatar.cc/150?u=charlie"
    },
    {
        id: "LEAD-004",
        name: "Diana Prince",
        company: "Amazonia",
        email: "diana@amazonia.com",
        phone: "+1 (555) 000-4444",
        status: "Proposal",
        source: "Conference",
        date: "Nov 17, 2023",
        avatar: "https://i.pravatar.cc/150?u=diana"
    },
    {
        id: "LEAD-005",
        name: "Evan Wright",
        company: "Wright & Co.",
        email: "evan@wright.com",
        phone: "+1 (555) 000-5555",
        status: "Lost",
        source: "Website",
        date: "Nov 16, 2023",
        avatar: "https://i.pravatar.cc/150?u=evan"
    },
]

export default function LeadsPage() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-light tracking-tight">Leads</h1>
                    <p className="text-muted-foreground mt-1">
                        Track and manage your potential business opportunities.
                    </p>
                </div>
                <Button className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Lead
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search leads by name, company or email..."
                        className="pl-10 rounded-full border-border/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm focus:bg-background transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <Select>
                        <SelectTrigger className="w-[160px] rounded-full border-border/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
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
                        <SelectTrigger className="w-[160px] rounded-full border-border/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {leads.map((lead) => (
                    <Card key={lead.id} className="group border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="flex flex-row items-start justify-between pb-2">
                            <div className="flex gap-4">
                                <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                    <AvatarImage src={lead.avatar} />
                                    <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold text-lg leading-tight">{lead.name}</h3>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                        <Building2 className="h-3 w-3" />
                                        {lead.company}
                                    </p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="rounded-full px-3 font-normal">
                                    {lead.source}
                                </Badge>
                                <Badge
                                    className={`rounded-full px-3 font-normal text-white border-none ${lead.status === 'New' ? 'bg-blue-500 hover:bg-blue-600' :
                                            lead.status === 'Qualified' ? 'bg-emerald-500 hover:bg-emerald-600' :
                                                lead.status === 'Lost' ? 'bg-rose-500 hover:bg-rose-600' :
                                                    'bg-amber-500 hover:bg-amber-600'
                                        }`}
                                >
                                    {lead.status}
                                </Badge>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-border/50">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                    <Mail className="h-4 w-4" />
                                    {lead.email}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                    <Phone className="h-4 w-4" />
                                    {lead.phone}
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button className="w-full rounded-xl bg-primary/10 text-primary hover:bg-primary/20 shadow-none border-none">
                                    View Profile
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
