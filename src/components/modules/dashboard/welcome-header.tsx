"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useUser } from "@/context/user-context"

const stats = [
    { label: "Interviews", value: "15%", color: "bg-zinc-900 text-white" },
    { label: "Hired", value: "15%", color: "bg-primary text-primary-foreground" },
    { label: "Project time", value: "60%", color: "bg-muted text-muted-foreground" },
    { label: "Output", value: "10%", color: "border border-zinc-200 text-muted-foreground" },
]

export function WelcomeHeader() {
    const { name } = useUser()

    return (
        <div className="space-y-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-light tracking-tight text-foreground"
            >
                Welcome in, <span className="font-medium">{name || "Guest"}</span>
            </motion.h1>

            <div className="flex flex-wrap gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-sm font-medium text-muted-foreground ml-1">{stat.label}</span>
                        <div className={`h-12 min-w-[100px] px-6 rounded-full flex items-center justify-center text-lg font-semibold shadow-sm ${stat.color}`}>
                            {stat.value}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
