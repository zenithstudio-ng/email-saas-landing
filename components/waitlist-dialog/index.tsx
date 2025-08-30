"use client"

import * as React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

interface WaitlistDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1500)
  }
  
  const resetForm = () => {
    setEmail("")
    setSubmitted(false)
  }
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset form when dialog is closed
      setTimeout(() => {
        resetForm()
      }, 300) // Wait for dialog close animation
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Join our waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when we launch. Get early access to our AI-powered email platform.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <DialogFooter className="pt-4">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Submitting..." : "Join Waitlist"}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="rounded-full bg-emerald-100 p-3">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-xl">You're on the list!</DialogTitle>
            <DialogDescription>
              Thank you for joining our waitlist. We'll notify you when we launch.
            </DialogDescription>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="mt-4"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}