"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function ProfileCard() {
    return (
        <Card className="relative overflow-hidden h-full min-h-[300px] border-none shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <CardContent className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-2xl font-semibold">Lora Piterson</h3>
                        <p className="text-white/80 text-sm">UX/UI Designer</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                        <span className="font-semibold">$1,200</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
