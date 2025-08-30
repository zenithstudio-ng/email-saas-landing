"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import {
  ArrowRight,
  GitBranch,
  Mail,
  Users,
  Code,
  TestTube,
  Star,
  Eye,
  GitFork,
  Bot,
  Sparkles,
  Target,
  UserPlus,
} from "lucide-react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showWaitlist, setShowWaitlist] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div> */}
              <span className="text-xl font-bold text-foreground">Dash9</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              {/* <Button size="sm" onClick={() => setShowWaitlist(true)}>
                <UserPlus className="mr-2 w-4 h-4" />
                Join Waitlist
              </Button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="md:h-[90vh] relative overflow-hidden hero-solid-slate grain-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-24 lg:py-32 flex items-center justify-center h-full">
          <div className={`text-center transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <Badge variant="secondary" className="mb-4 sm:mb-6 px-4 py-2 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Email Builder
            </Badge>
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 sm:mb-6">
              <span className="text-white">Build Emails with</span>{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            <p className="text-md sm:text-xl md:text-2xl text-slate-300 text-balance mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed md:px-4">
              The first AI-powered email management platform. Create, test, and deploy intelligent email campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base sm:text-lg bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setShowWaitlist(true)}
              >
                <UserPlus className="mr-2 w-5 h-5" />
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base sm:text-lg bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 relative group"
              >
                <Eye className="mr-2 w-5 h-5" />
                Watch AI Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating mockup */}
        <div className="hidden sm:block absolute inset-x-0 bottom-0 transform translate-y-1/3">
          <div className="max-w-[90%] lg:max-w-[80%] mx-auto px-4">
            <div className="animate-float relative">
              <div className="absolute -inset-4 bg-emerald-500/30 rounded-2xl blur-2xl"></div>
              <div className="absolute -inset-2 bg-emerald-400/20 rounded-xl blur-xl"></div>
              <img
                src="https://res.cloudinary.com/dsaqsxtup/image/upload/v1756546963/Screenshot_2025-08-30_at_2.42.24_AM_rr6qkq.png"
                alt="AI Email Builder Dashboard"
                className="relative w-full h-auto rounded-xl shadow-2xl border border-emerald-500/30"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  boxShadow: '0 0 40px -10px rgba(16, 185, 129, 0.3)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 mt-32">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-7xl font-bold text-balance mb-6">
              Three ways we transform your email workflow
            </h2>
            <p className="text-md sm:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Experience the power of AI-driven email management with these core features.
            </p>
          </div>

          <div>
            {/* Feature 1: AI Email Repositories */}
            <div className="h-auto md:min-h-[80vh] flex items-center pb-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mr-4">
                      <GitBranch className="w-6 h-6 text-violet-400" />
                    </div>
                    <Badge variant="secondary" className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                      AI-Powered
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Smart Email Repositories</h3>
                  <p className="text-md sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                    Create intelligent email repositories where AI automatically organizes campaigns, suggests
                    improvements, and manages version control. Branch, merge, and collaborate with AI-powered insights.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      <span>AI suggests optimal email structures and content</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      <span>Automatic A/B test generation and analysis</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      <span>Smart branching for campaign variations</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-violet-600 hover:bg-violet-700"
                    onClick={() => setShowWaitlist(true)}
                  >
                    <UserPlus className="mr-2 w-5 h-5" />
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
                <Card className="relative bg-card/50 backdrop-blur-sm border-violet-500/30">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <GitBranch className="w-4 h-4 text-violet-400" />
                          <span className="font-medium">newsletter-campaign</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          AI Optimized
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        AI detected 23% higher engagement potential with subject line optimization
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>📧 main branch</span>
                          <span className="text-green-400">+15% CTR</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>🔀 ai-subject-test</span>
                          <span className="text-violet-400">Testing</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>✨ personalization</span>
                          <span className="text-blue-400">Ready</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              </div>
            </div>

            {/* Feature 2: AI Template Library */}
            <div className="h-auto md:min-h-[80vh]  flex items-center pb-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      Community Driven
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">AI-Generated Templates</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Access thousands of AI-generated email templates that adapt to your brand and audience. Fork community
                    templates and let AI customize them for your specific needs.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>AI generates templates from simple descriptions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Automatic brand consistency across templates</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Smart template recommendations based on goals</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => setShowWaitlist(true)}
                  >
                    <UserPlus className="mr-2 w-5 h-5" />
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="lg:order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl"></div>
                  <Card className="relative bg-card/50 backdrop-blur-sm border-blue-500/30">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">AI Template Generator</span>
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                            Live
                          </Badge>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-4 text-sm">
                          <div className="text-blue-400 mb-2">Prompt:</div>
                          <div className="text-slate-300">"Create a welcome email for SaaS onboarding"</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>🎨 Modern Welcome</span>
                            <span className="text-green-400">Generated</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>📱 Mobile Optimized</span>
                            <span className="text-green-400">Generated</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>🔗 CTA Optimized</span>
                            <span className="text-violet-400">Generating...</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Feature 3: AI TestLab */}
            <div className="h-auto md:min-h-[80vh]  flex items-center pb-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4">
                      <TestTube className="w-6 h-6 text-emerald-400" />
                    </div>
                    <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                      Smart Testing
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Intelligent TestLab</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    AI-powered testing environment that predicts email performance across clients, devices, and audiences.
                    Get actionable insights before you send.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span>AI predicts deliverability and engagement rates</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span>Automated testing across 50+ email clients</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span>Smart recommendations for improvements</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => setShowWaitlist(true)}
                  >
                    <UserPlus className="mr-2 w-5 h-5" />
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl"></div>
                  <Card className="relative bg-card/50 backdrop-blur-sm border-emerald-500/30">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">AI Performance Prediction</span>
                          <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400">
                            92% Accuracy
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="text-muted-foreground">Deliverability</div>
                            <div className="flex items-center">
                              <div className="w-full bg-slate-700 rounded-full h-2 mr-2">
                                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: "94%" }}></div>
                              </div>
                              <span className="text-emerald-400">94%</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-muted-foreground">Engagement</div>
                            <div className="flex items-center">
                              <div className="w-full bg-slate-700 rounded-full h-2 mr-2">
                                <div className="bg-blue-400 h-2 rounded-full" style={{ width: "87%" }}></div>
                              </div>
                              <span className="text-blue-400">87%</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ✅ Passed spam filters • ✅ Mobile optimized • ⚠️ Consider shorter subject line
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 lg:py-32 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Join the email revolution</h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Connect with email professionals worldwide. Share templates, get feedback, and learn from the best in
                the industry.
              </p>

              {/* <div className="space-y-6">
                {[
                  { label: "Active Templates", value: "12,847", icon: Code },
                  { label: "Community Members", value: "45,231", icon: Users },
                  { label: "Repositories Created", value: "8,492", icon: GitBranch },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="space-y-4">
              {[
                {
                  user: "Sarah Chen",
                  action: "created a new template",
                  repo: "newsletter-modern",
                  time: "2 hours ago",
                  stars: 24,
                },
                {
                  user: "Alex Rodriguez",
                  action: "forked",
                  repo: "email-components",
                  time: "4 hours ago",
                  stars: 156,
                },
                {
                  user: "Emily Johnson",
                  action: "merged pull request in",
                  repo: "campaign-templates",
                  time: "6 hours ago",
                  stars: 89,
                },
              ].map((activity, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card/30 backdrop-blur-sm border-border/30 hover:bg-card/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-foreground">{activity.user}</span>
                          <span className="text-muted-foreground"> {activity.action} </span>
                          <span className="font-medium text-primary">{activity.repo}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{activity.stars}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Ready to build emails with AI?</h2>
          <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            Join thousands of professionals using AI to create, test, and deploy better emails faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-violet-600 hover:bg-violet-700 animate-glow"
              onClick={() => setShowWaitlist(true)}
            >
              <UserPlus className="mr-2 w-5 h-5" />
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg bg-transparent"
              onClick={() => setShowWaitlist(true)}
            >
              <Eye className="mr-2 w-5 h-5" />
              Watch Demo First
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">EmailHub</span>
              </div>
              <p className="text-muted-foreground">The future of email management is here.</p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Templates", "TestLab", "Pricing"],
              },
              {
                title: "Community",
                links: ["GitHub", "Discord", "Forum", "Blog"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Privacy"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EmailHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Waitlist Dialog */}
      <WaitlistDialog open={showWaitlist} onOpenChange={setShowWaitlist} />
    </div>
  )
}
