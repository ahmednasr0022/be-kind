import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"

export default function KindnessFeed() {
  const feedItems = [
    {
      user: { name: "Sarah J.", initials: "SJ", image: "/placeholder.svg?height=40&width=40" },
      action: "Paid for a stranger's groceries",
      time: "2 hours ago",
      likes: 24,
    },
    {
      user: { name: "Michael T.", initials: "MT", image: "/placeholder.svg?height=40&width=40" },
      action: "Volunteered at the local animal shelter",
      time: "5 hours ago",
      likes: 18,
    },
    {
      user: { name: "Jessica K.", initials: "JK", image: "/placeholder.svg?height=40&width=40" },
      action: "Left encouraging notes on coworkers' desks",
      time: "Yesterday",
      likes: 32,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-800">Kindness Feed</h2>
        <Button variant="link" className="text-teal-600 p-0">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {feedItems.map((item, i) => (
          <Card key={i} className="border-0 shadow-sm overflow-hidden">
            <CardContent className="p-3">
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={item.user.image} alt={item.user.name} />
                  <AvatarFallback className="bg-teal-100 text-teal-600">{item.user.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.user.name}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-2">{item.action}</p>

              <div className="flex items-center text-xs text-gray-500">
                <Button variant="ghost" size="sm" className="h-8 px-2 text-teal-600">
                  <Heart className="h-4 w-4 mr-1" />
                  {item.likes}
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Comment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

