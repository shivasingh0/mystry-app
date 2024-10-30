import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Anonymous Feedback</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are on a mission to improve workplace communication and team dynamics through honest, anonymous feedback.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-12">Our Core Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2" />
                  <CardTitle>Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We prioritize user anonymity and data protection above all else.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We believe in open communication and clear processes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mb-2" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We continuously improve our platform to meet evolving needs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mb-2" />
                  <CardTitle>Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We empower teams to communicate honestly and grow together.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Mission</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Help us create more open, honest, and productive workplaces. Start your journey with Anonymous Feedback today.
              </p>
              <Button asChild>
                <Link href="/sign-in">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}