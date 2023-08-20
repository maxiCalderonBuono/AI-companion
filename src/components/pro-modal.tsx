"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"
import { useState } from "react"
import axios from "axios"

export const ProModal = () => {

  const proModal = useProModal()

  const { toast } = useToast()

  const [isLoading, setLoading] = useState(false)

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get("api/stripe")

      window.location.href = response.data.url

    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        description: "Something went wrong"
      })

    } finally {
      setLoading(false)
    }
  }
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center">
            Upgrade to Pro
          </DialogTitle>
          <DialogDescription className="space-y-2 text-center">
            Create<span className="mx-1 font-medium text-sky-500">Custom AI</span>companions!
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex justify-between">
          <p className="text-2xl font-medium">$9
            <span className="text-sm font-normal">.99 / mo</span></p>
          <Button onClick={onSubscribe} disabled={isLoading} variant="premium">
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 