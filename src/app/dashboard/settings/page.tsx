"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Lock, Bell, Moon, Sun, Monitor, Globe, Shield } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="space-y-8 pb-10">
            <div>
                <h1 className="text-4xl font-light tracking-tight">Settings</h1>
                <p className="text-muted-foreground mt-1">
                    Manage your account, preferences, and workspace settings.
                </p>
            </div>

            <Tabs defaultValue="profile" className="w-full flex flex-col lg:flex-row gap-8">
                <TabsList className="flex flex-col h-auto w-full lg:w-64 bg-transparent space-y-2 p-0 justify-start">
                    <TabsTrigger value="profile" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-xl transition-all">
                        <User className="mr-3 h-4 w-4" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="account" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-xl transition-all">
                        <Lock className="mr-3 h-4 w-4" />
                        Account
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-xl transition-all">
                        <Bell className="mr-3 h-4 w-4" />
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="appearance" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-xl transition-all">
                        <Monitor className="mr-3 h-4 w-4" />
                        Appearance
                    </TabsTrigger>
                </TabsList>

                <div className="flex-1">
                    <TabsContent value="profile" className="space-y-6 mt-0">
                        <Card className="border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>
                                    Update your photo and personal details here.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-2">
                                        <Button variant="outline" className="rounded-full">Change Avatar</Button>
                                        <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 800K</p>
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" defaultValue="John" className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" defaultValue="Doe" className="bg-background/50" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Input id="bio" defaultValue="Senior Consultant at ConsultPro" className="bg-background/50" />
                                </div>
                            </CardContent>
                            <CardFooter className="justify-end border-t border-border/50 pt-6">
                                <Button className="rounded-full px-8">Save Changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="account" className="space-y-6 mt-0">
                        <Card className="border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Security Settings</CardTitle>
                                <CardDescription>
                                    Manage your password and security preferences.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="current-password">Current Password</Label>
                                    <Input id="current-password" type="password" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="new-password">New Password</Label>
                                    <Input id="new-password" type="password" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input id="confirm-password" type="password" className="bg-background/50" />
                                </div>
                            </CardContent>
                            <CardFooter className="justify-end border-t border-border/50 pt-6">
                                <Button className="rounded-full px-8">Update Password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="notifications" className="space-y-6 mt-0">
                        <Card className="border-none shadow-sm bg-white/50 dark:bg-black/40 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Email Notifications</CardTitle>
                                <CardDescription>
                                    Choose what you want to be notified about.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                                    <div className="space-y-0.5">
                                        <h4 className="font-medium text-sm">Communication emails</h4>
                                        <p className="text-xs text-muted-foreground">Receive emails about your account activity.</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="rounded-full">Configure</Button>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                                    <div className="space-y-0.5">
                                        <h4 className="font-medium text-sm">Marketing emails</h4>
                                        <p className="text-xs text-muted-foreground">Receive emails about new products, features, and more.</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="rounded-full">Configure</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
