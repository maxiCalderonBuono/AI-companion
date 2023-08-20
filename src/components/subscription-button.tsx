"use client"

import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import axios from "axios"

export const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {

  const [isLoading, setLoading] = useState(false)
  const { toast } = useToast()

  const onClick = async () => {
    try {
      setLoading(true)

      const response = await axios.get("/api/stripe")

      window.location.href = response.data.url

    } catch (error) {
      toast({ variant: "destructive", description: "Something went wrong" })

    } finally {
      setLoading(false)
    }
  }
  return (
    <Button disabled={isLoading} onClick={onClick} size="sm" variant={isPro ? "default" : "premium"}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Sparkles className="w-4 h-4 ml-2 fill-white" />}
    </Button>

  )
}