"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, FileText, Book } from "lucide-react"

const articles = [
    {
        id: 1,
        title: "Getting Started with ConsultPro",
        category: "Onboarding",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Managing Client Invoices",
        category: "Billing",
        readTime: "3 min read",
    },
    {
        id: 3,
        title: "Advanced Reporting Features",
        category: "Analytics",
        readTime: "8 min read",
    },
    {
        id: 4,
        title: "Team Collaboration Best Practices",
        category: "Workflow",
        readTime: "6 min read",
    },
    {
        id: 5,
        title: "Security & Compliance Guide",
        category: "Security",
        readTime: "10 min read",
    },
]

export default function KnowledgeBasePage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold tracking-tight">Knowledge Base</h2>
                <div className="relative max-w-md">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search articles..."
                        className="w-full pl-9 bg-background"
                    />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <Card key={article.id} className="hover:bg-muted/50 transition-colors cursor-pointer">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <Book className="h-5 w-5 text-primary" />
                                <span className="text-xs text-muted-foreground">{article.category}</span>
                            </div>
                            <CardTitle className="text-lg mt-2">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <FileText className="mr-1 h-3 w-3" />
                                {article.readTime}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
