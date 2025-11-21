"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Clock, MapPin, Users, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const events = [
    {
        id: 1,
        title: "Team Standup",
        time: "09:00 AM - 09:30 AM",
        description: "Daily sync with the engineering team",
        location: "Google Meet",
        attendees: 8,
        type: "work",
        date: new Date()
    },
    {
        id: 2,
        title: "Product Review",
        time: "11:00 AM - 12:30 PM",
        description: "Reviewing Q3 roadmap and features",
        location: "Conference Room A",
        attendees: 12,
        type: "work",
        date: new Date()
    },
    {
        id: 3,
        title: "Lunch with Client",
        time: "01:00 PM - 02:00 PM",
        description: "Discussing the new project proposal",
        location: "Downtown Cafe",
        attendees: 3,
        type: "personal",
        date: new Date()
    },
    {
        id: 4,
        title: "Design Workshop",
        time: "03:00 PM - 05:00 PM",
        description: "Brainstorming session for the new UI",
        location: "Design Studio",
        attendees: 6,
        type: "work",
        date: new Date(new Date().setDate(new Date().getDate() + 1))
    }
]

export default function CalendarPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="space-y-6 h-[calc(100vh-100px)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
                    <p className="text-muted-foreground mt-1">Manage your schedule and upcoming events</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="gap-2 rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                            <Plus className="h-4 w-4" />
                            New Event
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add New Event</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Event Title</Label>
                                <Input id="title" placeholder="e.g. Team Lunch" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>Start Time</Label>
                                    <Input type="time" />
                                </div>
                                <div className="grid gap-2">
                                    <Label>End Time</Label>
                                    <Input type="time" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="work">Work</SelectItem>
                                        <SelectItem value="personal">Personal</SelectItem>
                                        <SelectItem value="important">Important</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button className="w-full">Create Event</Button>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
                {/* Calendar View */}
                <Card className="lg:col-span-8 border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-border/50">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-semibold">
                                {date?.toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </h2>
                            <div className="flex gap-1">
                                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex bg-muted/50 p-1 rounded-lg">
                            <Button variant="ghost" size="sm" className="h-7 text-xs rounded-md bg-background shadow-sm">Month</Button>
                            <Button variant="ghost" size="sm" className="h-7 text-xs rounded-md">Week</Button>
                            <Button variant="ghost" size="sm" className="h-7 text-xs rounded-md">Day</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 flex items-center justify-center overflow-hidden">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="w-full h-full p-6 [&_.rdp-month]:w-full [&_.rdp-table]:w-full [&_.rdp-cell]:h-24 [&_.rdp-cell]:w-full [&_.rdp-day]:h-full [&_.rdp-day]:w-full [&_.rdp-day]:text-lg [&_.rdp-day_button]:w-full [&_.rdp-day_button]:h-full [&_.rdp-day_button]:hover:bg-accent/50 [&_.rdp-day_selected]:bg-primary [&_.rdp-day_selected]:text-primary-foreground [&_.rdp-day_selected]:hover:bg-primary/90"
                        />
                    </CardContent>
                </Card>

                {/* Side Panel - Timeline */}
                <Card className="lg:col-span-4 border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm flex flex-col h-full">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle>Schedule</CardTitle>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {date?.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 min-h-0">
                        <ScrollArea className="h-full px-6">
                            <div className="space-y-6 py-6 relative">
                                {/* Timeline Line */}
                                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-border/50" />

                                {events.map((event, index) => (
                                    <div
                                        key={event.id}
                                        className="group relative pl-10"
                                    >
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-3 top-1.5 h-4 w-4 rounded-full border-4 border-background ${event.type === 'work' ? 'bg-primary' :
                                                event.type === 'personal' ? 'bg-blue-500' : 'bg-rose-500'
                                            } z-10 shadow-sm`} />

                                        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-card hover:bg-accent/50 transition-all border border-border/50 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 duration-300">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h4 className="font-semibold text-base">{event.title}</h4>
                                                    <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">{event.description}</p>
                                                </div>
                                                <span className={`text-[10px] font-medium px-2 py-1 rounded-full uppercase tracking-wider ${event.type === 'work' ? 'bg-primary/10 text-primary' :
                                                        event.type === 'personal' ? 'bg-blue-500/10 text-blue-500' : 'bg-rose-500/10 text-rose-500'
                                                    }`}>
                                                    {event.type}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 pt-2 border-t border-border/30 mt-1">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    {event.location}
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-1">
                                                <div className="flex -space-x-2">
                                                    {[...Array(Math.min(3, event.attendees))].map((_, i) => (
                                                        <div key={i} className="h-6 w-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px]">
                                                            {String.fromCharCode(65 + i)}
                                                        </div>
                                                    ))}
                                                    {event.attendees > 3 && (
                                                        <div className="h-6 w-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px]">
                                                            +{event.attendees - 3}
                                                        </div>
                                                    )}
                                                </div>
                                                <Button variant="ghost" size="sm" className="h-7 text-xs">Details</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
