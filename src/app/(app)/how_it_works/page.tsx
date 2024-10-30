import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, ShieldCheck, BarChart } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Anonymous Feedback Works</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform ensures honest communication while maintaining complete anonymity. Here&#39;s how it works:
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </span>
                    Sign Up
                  </CardTitle>
                </CardHeader>
                <CardContent>Create an account for your organization and invite team members.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    Submit Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>Team members provide honest feedback through our secure platform.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    Anonymization
                  </CardTitle>
                </CardHeader>
                <CardContent>Our system removes all identifying information before delivery.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </span>
                    Receive Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>Leaders receive valuable, anonymous feedback to improve team dynamics.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Send className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Easy Submission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our user-friendly interface makes it simple for team members to submit feedback quickly and easily.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShieldCheck className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Guaranteed Anonymity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Advanced encryption and data handling ensure that feedback providers remain completely anonymous.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Actionable Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive compiled reports and analytics to help you make informed decisions and improvements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of organizations already benefiting from honest, anonymous feedback.
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