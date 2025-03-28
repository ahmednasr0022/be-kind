"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, CalendarCheck2, Award, BarChart4, Plus, Menu } from "lucide-react"
import DailyKindness from "@/components/daily-kindness"
import KindnessFeed from "@/components/kindness-feed"
import AndroidStatusBar from "@/components/android-status-bar"
import { useToast } from "@/components/ui/use-toast"

export default function HomePage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("home")

  const handleFabClick = () => {
    toast({
      title: "Add New Act of Kindness",
      description: "This would open a form to log a new act of kindness",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* Android Status Bar */}
      <AndroidStatusBar />

      {/* App Bar */}
      <header className="sticky top-0 z-10 bg-teal-500 text-white shadow-md">
        <div className="flex items-center p-4">
          <Menu className="h-6 w-6 mr-4" />
          <h1 className="text-xl font-medium">Be Kind</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-2 px-4 max-w-md mx-auto pb-20">
        {activeTab === "home" && (
          <div className="space-y-4">
            <DailyKindness />
            <Card className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-4">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Community Challenge</h2>
                <p className="text-sm text-gray-600 mb-3">
                  This week: Spread kindness to 5 strangers in your community
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full w-3/5"></div>
                </div>
                <p className="text-xs text-right mt-1 text-teal-600">3/5 completed</p>
                <Button className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white">Join Challenge</Button>
              </CardContent>
            </Card>
            <KindnessFeed />
          </div>
        )}

        {activeTab === "log" && (
          <div className="space-y-4 pt-2">
            <h2 className="text-xl font-medium text-gray-800">Your Kindness Log</h2>
            <div className="grid gap-3">
              {[
                { date: "Today", act: "Paid for someone's coffee", completed: true },
                { date: "Yesterday", act: "Complimented a stranger", completed: true },
                { date: "May 15", act: "Helped elderly neighbor with groceries", completed: true },
                { date: "May 14", act: "Left a positive review for a local business", completed: true },
                { date: "May 13", act: "Donated to a charity", completed: true },
              ].map((item, i) => (
                <Card key={i} className="border-0 shadow-sm">
                  <CardContent className="p-3 flex items-center">
                    <div className="mr-3 bg-teal-100 rounded-full p-2">
                      <CalendarCheck2 className="h-5 w-5 text-teal-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{item.act}</p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                    {item.completed && (
                      <div className="bg-green-100 rounded-full p-1">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "rewards" && (
          <div className="space-y-4 pt-2">
            <h2 className="text-xl font-medium text-gray-800">Your Rewards</h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "First Step", desc: "Complete your first act", unlocked: true },
                { name: "Consistent", desc: "7 days streak", unlocked: true },
                { name: "Generous", desc: "Donate to charity", unlocked: true },
                { name: "Friendly", desc: "Help a stranger", unlocked: true },
                { name: "Supportive", desc: "Encourage someone", unlocked: false },
                { name: "Community", desc: "Join a challenge", unlocked: false },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`rounded-full p-4 ${badge.unlocked ? "bg-teal-100" : "bg-gray-100"}`}>
                    <Award className={`h-8 w-8 ${badge.unlocked ? "text-teal-500" : "text-gray-400"}`} />
                  </div>
                  <p
                    className={`text-xs font-medium mt-1 text-center ${badge.unlocked ? "text-teal-700" : "text-gray-500"}`}
                  >
                    {badge.name}
                  </p>
                  <p className="text-xs text-gray-500 text-center">{badge.desc}</p>
                </div>
              ))}
            </div>

            <Card className="border-0 shadow-sm mt-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Your Stats</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-teal-50 rounded-lg p-2">
                    <p className="text-2xl font-bold text-teal-600">27</p>
                    <p className="text-xs text-gray-600">Acts</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2">
                    <p className="text-2xl font-bold text-teal-600">7</p>
                    <p className="text-xs text-gray-600">Day Streak</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2">
                    <p className="text-2xl font-bold text-teal-600">4</p>
                    <p className="text-xs text-gray-600">Badges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div className="space-y-4 pt-2">
            <h2 className="text-xl font-medium text-gray-800">Kindness Leaderboard</h2>
            <div className="grid gap-2">
              {[
                { name: "Sarah J.", acts: 42, position: 1 },
                { name: "Michael T.", acts: 38, position: 2 },
                { name: "You", acts: 27, position: 3, highlight: true },
                { name: "Jessica K.", acts: 25, position: 4 },
                { name: "David M.", acts: 23, position: 5 },
              ].map((user, i) => (
                <Card key={i} className={`border-0 shadow-sm ${user.highlight ? "bg-teal-50" : ""}`}>
                  <CardContent className="p-3 flex items-center">
                    <div className="mr-3 bg-teal-100 rounded-full h-8 w-8 flex items-center justify-center">
                      <span className="font-bold text-teal-600">{user.position}</span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${user.highlight ? "text-teal-700" : "text-gray-800"}`}>
                        {user.name}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-teal-500 mr-1" />
                      <span className="text-sm font-medium text-teal-600">{user.acts}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={handleFabClick}
        className="absolute right-6 bottom-20 bg-teal-500 text-white rounded-full p-4 shadow-lg z-20"
      >
        <Plus className="h-6 w-6" />
      </button>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 flex bg-white border-t border-gray-200 shadow-md z-10">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center justify-center flex-1 ${activeTab === "home" ? "text-teal-500" : "text-gray-500"}`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => setActiveTab("log")}
          className={`flex flex-col items-center justify-center flex-1 ${activeTab === "log" ? "text-teal-500" : "text-gray-500"}`}
        >
          <CalendarCheck2 className="h-6 w-6" />
          <span className="text-xs mt-1">Log</span>
        </button>
        <button
          onClick={() => setActiveTab("rewards")}
          className={`flex flex-col items-center justify-center flex-1 ${activeTab === "rewards" ? "text-teal-500" : "text-gray-500"}`}
        >
          <Award className="h-6 w-6" />
          <span className="text-xs mt-1">Rewards</span>
        </button>
        <button
          onClick={() => setActiveTab("leaderboard")}
          className={`flex flex-col items-center justify-center flex-1 ${activeTab === "leaderboard" ? "text-teal-500" : "text-gray-500"}`}
        >
          <BarChart4 className="h-6 w-6" />
          <span className="text-xs mt-1">Leaders</span>
        </button>
      </div>
    </div>
  )
}

