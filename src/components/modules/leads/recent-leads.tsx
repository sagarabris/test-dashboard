import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const leads = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: "$1,999.00",
        status: "New",
        avatar: "OM",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: "$39.00",
        status: "Contacted",
        avatar: "JL",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: "$299.00",
        status: "Qualified",
        avatar: "IN",
    },
    {
        name: "William Kim",
        email: "will@email.com",
        amount: "$99.00",
        status: "New",
        avatar: "WK",
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        amount: "$39.00",
        status: "Proposal",
        avatar: "SD",
    },
]

export function RecentLeads() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Recent Leads</CardTitle>
                <CardDescription>
                    You have 5 new leads this week.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Avatar</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leads.map((lead) => (
                            <TableRow key={lead.email}>
                                <TableCell>
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.name}`} />
                                        <AvatarFallback>{lead.avatar}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{lead.name}</div>
                                    <div className="text-xs text-muted-foreground">
                                        {lead.email}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={lead.status === "New" ? "default" : "secondary"}>
                                        {lead.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">{lead.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
