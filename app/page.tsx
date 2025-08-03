import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            New Release
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Amazing
            <span className="text-blue-600"> Landing Pages</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Create stunning, responsive landing pages with Next.js and shadcn/ui components.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Your existing card content */}
        </div>
      </section>
    </div>
  )
}