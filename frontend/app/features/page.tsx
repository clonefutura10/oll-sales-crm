import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/ui/countdown-timer';
import { ArrowLeft, Rocket } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Icon */}
          <div className='inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mb-8'>
            <Rocket className='w-10 h-10 text-blue-600 dark:text-blue-400' />
          </div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6'>
            Features Coming Soon
          </h1>

          {/* Description */}
          <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12'>
            We&apos;re building powerful features to revolutionize your sales
            workflow. Get ready for an amazing experience that will transform
            how you manage your sales process.
          </p>

          {/* Countdown Timer */}
          <div className='mb-16'>
            <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-8'>
              Launch Countdown
            </h2>
            <CountdownTimer />
          </div>

          {/* Feature Preview */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            <div className='bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left'>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>
                Smart Lead Scoring
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                AI-powered lead scoring to prioritize your most valuable
                prospects
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left'>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>
                Advanced Analytics
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Comprehensive dashboards and insights to track your sales
                performance
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-left'>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>
                Team Collaboration
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Seamless collaboration tools for your entire sales team
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href='/' className='inline-flex items-center'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white'
            >
              <ArrowLeft className='mr-2 h-5 w-5' />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
