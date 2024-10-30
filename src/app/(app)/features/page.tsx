import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Shield, Zap, Users, BarChart, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Honest Feedback</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover how our platform empowers your team to communicate openly and improve continuously.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className=" px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Complete Anonymity</CardTitle>
                  <CardDescription>
                    Our advanced encryption ensures that feedback providers remain 100% anonymous.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>End-to-end encryption</li>
                    <li>No IP tracking</li>
                    <li>Randomized submission times</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Real-time Feedback</CardTitle>
                  <CardDescription>
                    Instant delivery of feedback to keep your team agile and responsive.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Immediate notifications</li>
                    <li>Live dashboard updates</li>
                    <li>Trend analysis</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Team Insights</CardTitle>
                  <CardDescription>
                    Gain valuable insights into team dynamics and performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Sentiment analysis</li>
                    <li>Performance metrics</li>
                    <li>Team health indicators</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Powerful tools to analyze feedback and track improvements over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Custom reports</li>
                    <li>Data visualization</li>
                    <li>Trend forecasting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Secure Platform</CardTitle>
                  <CardDescription>
                    Enterprise-grade security to protect your team&#39;s sensitive information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>SOC 2 compliant</li>
                    <li>Regular security audits</li>
                    <li>Data encryption at rest and in transit</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Customizable Feedback Forms</CardTitle>
                  <CardDescription>
                    Create tailored feedback forms to suit your team&#39;s unique needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Drag-and-drop form builder</li>
                    <li>Multiple question types</li>
                    <li>Conditional logic</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <Tabs defaultValue="submit" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="submit">Submit Feedback</TabsTrigger>
                <TabsTrigger value="process">Process & Anonymize</TabsTrigger>
                <TabsTrigger value="analyze">Analyze & Act</TabsTrigger>
              </TabsList>
              <TabsContent value="submit" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Submit Feedback</CardTitle>
                    <CardDescription>Team members provide honest, constructive feedback.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Users can easily submit feedback through our intuitive interface, available on web and mobile devices.</p>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width={400}
                      height={200}
                      alt="Submit Feedback Interface"
                      className="rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="process" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>2. Process & Anonymize</CardTitle>
                    <CardDescription>Our system ensures complete anonymity.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Feedback is processed through our advanced anonymization engine, removing all identifying information.</p>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width={400}
                      height={200}
                      alt="Anonymization Process"
                      className="rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analyze" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>3. Analyze & Act</CardTitle>
                    <CardDescription>Gain insights and take action to improve.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Leaders receive anonymized feedback and use our analytics tools to identify trends and areas for improvement.</p>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width={400}
                      height={200}
                      alt="Analytics Dashboard"
                      className="rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to transform your team&#39;s communication?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Start your journey towards more open, honest, and productive workplace conversations today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/sign-in">Get Started</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/how_it_works">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}