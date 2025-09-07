import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-200">
              <Zap className="mr-2 h-4 w-4" />
              AI-Powered Sales CRM
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Transform Your Sales Process with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Streamline your sales workflow, boost team productivity, and close more deals 
              with our comprehensive CRM solution designed for modern sales teams.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Higher Conversion</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl"></div>
              
              <div className="relative space-y-4">
                <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-600"></div>
                  <div className="h-3 w-3/4 rounded bg-gray-100 dark:bg-gray-600"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="h-16 rounded-lg bg-blue-500/20"></div>
                  <div className="h-16 rounded-lg bg-green-500/20"></div>
                  <div className="h-16 rounded-lg bg-purple-500/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}