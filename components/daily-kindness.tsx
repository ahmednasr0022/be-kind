"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const kindnessIdeas = [
  "Smile at a stranger today",
  "Pay for someone's coffee in line behind you",
  "Leave a positive review for a local business",
  "Send a thank you note to someone who helped you",
  "Compliment three people today",
  "Hold the door open for someone",
  "Donate clothes you no longer wear",
  "Call a friend or family member you haven't spoken to in a while",
  "Leave a generous tip for your server",
  "Pick up litter in your neighborhood",
]

export default function DailyKindness() {
  const { toast } = useToast()
  const [completed, setCompleted] = useState(false)
  const [currentIdea] = useState(() => {
    // In a real app, this would be based on the current date
    const randomIndex = Math.floor(Math.random() * kindnessIdeas.length)
    return kindnessIdeas[randomIndex]
  })

  const handleComplete = () => {
    setCompleted(true)
    toast({
      title: "Kindness Completed!",
      description: "Thank you for making the world a better place ❤️",
    })
  }

  const handleShare = () => {
    toast({
      title: "Sharing",
      description: "In a real app, this would open Android's share sheet",
    })
  }

  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-800">Today's Kindness</h2>
          <div className="bg-teal-100 text-teal-600 text-xs font-medium px-2 py-1 rounded-full">Daily Challenge</div>
        </div>

        <div className="bg-teal-50 rounded-lg p-4 text-center">
          <Heart className="h-8 w-8 text-teal-500 mx-auto mb-2" />
          <p className="text-gray-700 font-medium">{currentIdea}</p>
        </div>

        <div className="flex gap-2">
          <Button
            className={`flex-1 ${completed ? "bg-green-500 hover:bg-green-600" : "bg-teal-500 hover:bg-teal-600"} text-white`}
            onClick={handleComplete}
            disabled={completed}
          >
            {completed ? "Completed ✓" : "Mark as Done"}
          </Button>
          <Button variant="outline" className="border-teal-200 text-teal-600" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

