"use client"

import { WelcomeHeader } from "@/components/modules/dashboard/welcome-header"
import { ProfileCard } from "@/components/modules/dashboard/profile-card"
import { ProgressChart } from "@/components/modules/dashboard/progress-chart"
import { TimeTracker } from "@/components/modules/dashboard/time-tracker"
import { OnboardingTasks } from "@/components/modules/dashboard/onboarding-tasks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, UserPlus } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-10 pb-10 px-4 sm:px-6 lg:px-8 pt-6">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <WelcomeHeader />

                {/* Top Right Stats */}
                <div className="flex gap-8 lg:gap-16">
                    <div className="text-center">
                        <div className="text-5xl font-light flex items-center justify-center gap-2">
                            <Users className="h-6 w-6 text-muted-foreground" />
                            78
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 font-medium">Employees</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-light flex items-center justify-center gap-2">
                            <UserPlus className="h-6 w-6 text-muted-foreground" />
                            56
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 font-medium">Hirings</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-light flex items-center justify-center gap-2">
                            <Briefcase className="h-6 w-6 text-muted-foreground" />
                            203
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 font-medium">Projects</div>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

                {/* Left Column - Profile & Info */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="h-[380px]">
                        <ProfileCard />
                    </div>

                    {/* Accordion-style info widgets */}
                    <Card className="border-none shadow-sm bg-white/40 dark:bg-black/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex justify-between items-center cursor-pointer group">
                                <span className="font-medium text-lg">Pension contributions</span>
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">↓</span>
                            </div>
                            <div className="flex justify-between items-center cursor-pointer group">
                                <span className="font-medium text-lg">Devices</span>
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">↑</span>
                            </div>
                            <div className="pl-4 border-l-2 border-primary/20">
                                <div className="flex items-center gap-4 p-3 bg-white/60 dark:bg-black/60 rounded-2xl shadow-sm backdrop-blur-sm">
                                    <div className="h-10 w-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                                        <span className="text-white dark:text-black text-sm"></span>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">MacBook Air</p>
                                        <p className="text-xs text-muted-foreground">Version M1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center cursor-pointer group">
                                <span className="font-medium text-lg">Compensation Summary</span>
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">↓</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Middle Column - Charts & Calendar */}
                <div className="lg:col-span-6 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[320px]">
                        <ProgressChart />
                        <TimeTracker />
                    </div>

                    {/* Calendar Section */}
                    <Card className="border-none shadow-sm bg-white/40 dark:bg-black/40 backdrop-blur-md min-h-[350px]">
                        <CardHeader className="flex flex-row items-center justify-between pb-4 pt-6 px-6">
                            <CardTitle className="text-xl font-medium text-muted-foreground">September 2024</CardTitle>
                            <div className="flex gap-3">
                                <Button variant="ghost" size="sm" className="text-xs rounded-full px-4 bg-white/20 hover:bg-white/40">August</Button>
                                <Button variant="ghost" size="sm" className="text-xs rounded-full px-4 bg-white/20 hover:bg-white/40">October</Button>
                            </div>
                        </CardHeader>
                        <CardContent className="px-6 pb-8">
                            <div className="flex justify-between text-center mb-8">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                                    <div key={day} className="flex flex-col gap-2">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{day}</span>
                                        <span className={`text-lg font-medium ${i === 3 ? 'text-primary' : ''}`}>{22 + i}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Timeline Events */}
                            <div className="relative space-y-6 pl-20 border-l border-dashed border-muted-foreground/20 ml-6">
                                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                                <div className="relative bg-zinc-900 text-white p-5 rounded-3xl shadow-lg transform hover:scale-[1.01] transition-transform cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-base">Weekly Team Sync</h4>
                                            <p className="text-sm text-zinc-400 mt-1">Discuss progress on projects</p>
                                        </div>
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-700" />
                                            ))}
                                        </div>
                                    </div>
                                    <span className="absolute top-5 -left-24 text-sm text-muted-foreground font-medium">8:00 am</span>
                                </div>

                                <div className="relative bg-white/80 dark:bg-zinc-800/80 p-5 rounded-3xl shadow-sm border border-border/50 transform hover:scale-[1.01] transition-transform mt-8 cursor-pointer backdrop-blur-sm">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-base">Onboarding Session</h4>
                                            <p className="text-sm text-muted-foreground mt-1">Introduction for new hires</p>
                                        </div>
                                        <div className="flex -space-x-3">
                                            <div className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200" />
                                            <div className="h-8 w-8 rounded-full border-2 border-white bg-zinc-300" />
                                        </div>
                                    </div>
                                    <span className="absolute top-5 -left-24 text-sm text-muted-foreground font-medium">10:00 am</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Tasks & Onboarding */}
                <div className="lg:col-span-3 space-y-8">
                    {/* Onboarding Progress */}
                    <Card className="border-none shadow-sm bg-white/40 dark:bg-black/40 backdrop-blur-md p-8">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <h3 className="text-xl font-medium">Onboarding</h3>
                                <p className="text-sm text-muted-foreground mt-1">30% Completed</p>
                            </div>
                            <span className="text-3xl font-light">18%</span>
                        </div>
                        <div className="flex gap-1 h-14">
                            <div className="flex-1 bg-primary rounded-l-2xl flex items-center justify-center text-sm font-medium text-primary-foreground">Task</div>
                            <div className="flex-1 bg-zinc-900 flex items-center justify-center text-sm font-medium text-white">25%</div>
                            <div className="w-10 bg-zinc-400/30 rounded-r-2xl"></div>
                        </div>
                    </Card>

                    <div className="h-[500px]">
                        <OnboardingTasks />
                    </div>
                </div>

            </div>
        </div>
    )
}
