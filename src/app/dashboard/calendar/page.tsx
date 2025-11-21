"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
            <div className="grid gap-4 md:grid-cols-[300px_1fr]">
                <Card>
                    <CardContent className="p-4">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Schedule for {date?.toDateString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 border rounded-lg">
                                <div className="w-16 text-center">
                                    <span className="block text-sm font-bold text-muted-foreground">09:00 AM</span>
                                </div>
                                <div className="h-10 w-1 bg-blue-500 rounded-full"></div>
                                <div>
                                    <h4 className="font-semibold">Client Meeting - Acme Corp</h4>
                                    <p className="text-sm text-muted-foreground">Discuss Q4 Strategy</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border rounded-lg">
                                <div className="w-16 text-center">
                                    <span className="block text-sm font-bold text-muted-foreground">11:30 AM</span>
                                </div>
                                <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
                                <div>
                                    <h4 className="font-semibold">Team Sync</h4>
                                    <p className="text-sm text-muted-foreground">Weekly development sync</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border rounded-lg">
                                <div className="w-16 text-center">
                                    <span className="block text-sm font-bold text-muted-foreground">02:00 PM</span>
                                </div>
                                <div className="h-10 w-1 bg-orange-500 rounded-full"></div>
                                <div>
                                    <h4 className="font-semibold">Project Review</h4>
                                    <p className="text-sm text-muted-foreground">Review designs with design team</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
