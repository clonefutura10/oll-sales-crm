import Link from "next/link";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/ui/countdown-timer";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full mb-8">
            <Mail className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Contact Us - Coming Soon
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            We&apos;re setting up our contact channels to better serve you. 
            Soon you&apos;ll be able to reach out to our team through multiple convenient options.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Contact Form Launch Countdown
            </h2>
            <CountdownTimer />
          </div>
          
          {/* Contact Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Email Support</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                support@salescrm.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                support@ourcompany.com
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone Support</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                +1 (555) 123-4567
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mon-Fri 9AM-6PM EST
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Office Address</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Response Time</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Email: Within 24 hours
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Phone: Immediate during hours
              </p>
            </div>
          </div>
          
          {/* FAQ Preview */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12 text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">When will the contact form be available?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">We&apos;re working hard to launch our contact form soon. Use the countdown timer above to see when it goes live!</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Can I get support right now?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">While our full contact system is being prepared, please check back soon for complete support options.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What support channels will be available?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">We&apos;ll offer email support, phone support, live chat, and a comprehensive knowledge base.</p>
              </div>
            </div>
          </div>
          
          {/* Emergency Contact Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Need Immediate Help?</h3>
            <p className="text-blue-800 dark:text-blue-200">
              While our full contact system is being set up, please check back soon. 
              We&apos;re committed to providing excellent customer support and will have multiple ways to reach us very soon.
            </p>
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