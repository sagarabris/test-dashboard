import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
    {
        user: "Alice Johnson",
        action: "created a new project",
        target: "Website Redesign",
        time: "2 hours ago",
        avatar: "AJ",
    },
    {
        user: "Bob Smith",
        action: "updated the status of",
        target: "Mobile App",
        time: "4 hours ago",
        avatar: "BS",
    },
    {
        user: "Charlie Brown",
        action: "commented on",
        target: "SEO Strategy",
        time: "5 hours ago",
        avatar: "CB",
    },
    {
        user: "Diana Prince",
        action: "uploaded a file to",
        target: "Marketing Assets",
        time: "Yesterday",
        avatar: "DP",
    },
    {
        user: "Evan Wright",
        action: "completed task",
        target: "Review Q3 Report",
        time: "Yesterday",
        avatar: "EW",
    },
]

export function RecentActivity() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions performed by your team</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex items-center">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback>{activity.avatar}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {activity.user} <span className="text-muted-foreground font-normal">{activity.action}</span> <span className="font-medium">{activity.target}</span>
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
