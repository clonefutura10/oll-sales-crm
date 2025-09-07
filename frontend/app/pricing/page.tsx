import Link from "next/link";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/ui/countdown-timer";
import { ArrowLeft, DollarSign, Clock, Star } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-8">
            <DollarSign className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Pricing Coming Soon
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            We&apos;re crafting competitive pricing plans that deliver exceptional value. 
            Stay tuned for flexible options designed to fit teams of all sizes.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Pricing Announcement Countdown
            </h2>
            <CountdownTimer />
          </div>
          
          {/* Pricing Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Starter Plan</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">$29<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Up to 5 users</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Basic CRM features</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> 1GB storage</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-left border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Plan</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">$79<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Up to 25 users</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Advanced analytics</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> 10GB storage</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Priority support</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Plan</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Custom</div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Unlimited users</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Custom integrations</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Unlimited storage</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Dedicated support</li>
              </ul>
            </div>
          </div>
          
          {/* Features List */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">All Plans Include</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5 mr-3 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Star className="w-5 h-5 mr-3 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5 mr-3 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Star className="w-5 h-5 mr-3 text-green-500" />
                99.9% uptime guarantee
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link href="/" className="inline-flex items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}