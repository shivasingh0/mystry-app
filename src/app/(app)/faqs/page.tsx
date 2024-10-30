import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find answers to common questions about our anonymous feedback
                platform.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-24 lg:py-12 bg-gray-100 dark:bg-gray-800">
          <div className=" px-4 md:px-6">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>General Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                      <AccordionTrigger>
                        How do I create an account?
                      </AccordionTrigger>
                      <AccordionContent>
                        To create an account, click on the &quot;Get
                        Started&quot; button. You&#39;ll be
                        guided through a simple sign-up process where you&#39;ll
                        provide some basic information about your organization.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        What is Anonymous Feedback?
                      </AccordionTrigger>
                      <AccordionContent>
                        Anonymous Feedback is a platform that allows team
                        members to provide honest, constructive feedback without
                        revealing their identity. It&#39;s designed to improve
                        workplace communication and team dynamics.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        How does anonymity work on your platform?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our platform uses advanced encryption and data handling
                        techniques to ensure that all feedback is completely
                        anonymous. We don&#39;t track IP addresses or any other
                        identifying information when feedback is submitted.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        Is Anonymous Feedback suitable for all company sizes?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, our platform is scalable and can accommodate teams
                        of all sizes, from small startups to large enterprises.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        How can I get technical support?
                      </AccordionTrigger>
                      <AccordionContent>
                        For technical support, you can reach out to our support
                        team via email at shiva2003rajawat@gmail.com. Our support team is
                        available 24/7 to assist you.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Do you offer onboarding assistance?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we provide onboarding assistance for all users.
                        For enterprise customers, we offer personalized
                        onboarding sessions to ensure smooth implementation
                        across your organization.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is my data secure?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely. We use industry-standard encryption and
                        security measures to protect your data.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to get started?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join thousands of organizations already benefiting from honest, anonymous feedback.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-in">
                  <Button>Get Started</Button>
                </Link>
                <Link href="/how_it_works">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
