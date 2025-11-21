"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Command } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUser } from "@/context/user-context"

export default function LoginPage() {
    const [name, setName] = React.useState("")
    const { login } = useUser()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            login(name)
            router.push("/dashboard")
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md p-8"
            >
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-xl">
                        <Command className="h-8 w-8 text-primary" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-light tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-muted-foreground">
                            Enter your name to access your workspace
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-12 px-4 rounded-xl bg-white/50 border-zinc-200/50 focus:border-primary/50 focus:ring-primary/20 transition-all text-center text-lg placeholder:text-muted-foreground/50"
                                autoFocus
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                            disabled={!name.trim()}
                        >
                            Enter Dashboard
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground/50">
                        Press Enter to continue
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
