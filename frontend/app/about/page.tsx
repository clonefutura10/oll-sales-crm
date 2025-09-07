import Link from "next/link";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/ui/countdown-timer";
import { ArrowLeft, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full mb-8">
            <Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            About Us - Coming Soon
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            We&apos;re preparing to share our story with you. Learn about our mission, 
            values, and the passionate team behind our innovative CRM platform.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Full Story Coming Soon
            </h2>
            <CountdownTimer />
          </div>
          
          {/* Mission Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                To empower sales teams with intelligent tools that transform how they connect with customers and close deals.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Our Values</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Innovation, customer success, and transparency drive everything we do. We&apos;re committed to building trust through exceptional service.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Our Team</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                A diverse group of passionate professionals dedicated to revolutionizing the sales industry with cutting-edge technology.
              </p>
            </div>
          </div>
          
          {/* Timeline Preview */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12 text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Our Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">2024</div>
                  <div className="text-gray-600 dark:text-gray-400">Company founded with a vision to transform sales technology</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">2025</div>
                  <div className="text-gray-600 dark:text-gray-400">Launch of our innovative CRM platform</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Future</div>
                  <div className="text-gray-600 dark:text-gray-400">Continuing to innovate and serve our customers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
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