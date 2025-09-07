'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Trophy,
  Star,
  Target,
  Users,
  BarChart3,
  Zap,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  reward: string;
  points: number;
  completed: boolean;
}

const onboardingSteps: Step[] = [
  {
    id: 1,
    title: 'Create Your Profile',
    description: 'Set up your account and personalize your experience',
    icon: <Users className='h-6 w-6' />,
    reward: 'Profile Badge',
    points: 100,
    completed: true,
  },
  {
    id: 2,
    title: 'Import Your Contacts',
    description: 'Upload your existing customer data and start organizing',
    icon: <Target className='h-6 w-6' />,
    reward: 'Data Master Badge',
    points: 200,
    completed: true,
  },
  {
    id: 3,
    title: 'Set Your First Goal',
    description: 'Define your sales targets and track your progress',
    icon: <BarChart3 className='h-6 w-6' />,
    reward: 'Goal Setter Badge',
    points: 150,
    completed: false,
  },
  {
    id: 4,
    title: 'Complete First Deal',
    description: 'Close your first deal using our CRM tools',
    icon: <Trophy className='h-6 w-6' />,
    reward: 'Deal Closer Badge',
    points: 300,
    completed: false,
  },
  {
    id: 5,
    title: 'Unlock Advanced Features',
    description: 'Discover premium tools and automation capabilities',
    icon: <Zap className='h-6 w-6' />,
    reward: 'Power User Badge',
    points: 500,
    completed: false,
  },
];

export default function OnboardingPath() {
  const [currentStep] = useState(3);
  const [totalPoints] = useState(300);

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900 px-4 py-2 text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-4'>
            <Trophy className='mr-2 h-4 w-4' />
            Gamified Onboarding
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
            Your Journey to Sales Excellence
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Complete interactive challenges, earn badges, and unlock powerful
            features as you master our CRM platform.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <Card className='border-2 border-blue-100 dark:border-blue-900'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle className='text-xl font-bold text-gray-900 dark:text-white'>
                      Onboarding Progress
                    </CardTitle>
                    <CardDescription className='text-gray-600 dark:text-gray-400'>
                      Complete steps to unlock your full potential
                    </CardDescription>
                  </div>
                  <div className='text-right'>
                    <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                      {totalPoints}
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>
                      Points Earned
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className='space-y-6'>
                  {onboardingSteps.map((step, index) => (
                    <div key={step.id} className='relative'>
                      {index < onboardingSteps.length - 1 && (
                        <div className='absolute left-6 top-12 w-0.5 h-16 bg-gray-200 dark:bg-gray-700'></div>
                      )}

                      <div className='flex items-start gap-4'>
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                            step.completed
                              ? 'bg-green-500 border-green-500 text-white'
                              : step.id === currentStep
                                ? 'bg-blue-500 border-blue-500 text-white'
                                : 'bg-gray-100 border-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-600'
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className='h-6 w-6' />
                          ) : (
                            step.icon
                          )}
                        </div>

                        <div className='flex-1'>
                          <div className='flex items-center justify-between mb-2'>
                            <h3
                              className={`font-semibold ${
                                step.completed || step.id === currentStep
                                  ? 'text-gray-900 dark:text-white'
                                  : 'text-gray-500 dark:text-gray-400'
                              }`}
                            >
                              {step.title}
                            </h3>
                            <div className='flex items-center gap-2'>
                              <Star className='h-4 w-4 text-yellow-500' />
                              <span
                                className={`text-sm font-medium ${
                                  step.completed || step.id === currentStep
                                    ? 'text-gray-900 dark:text-white'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}
                              >
                                +{step.points}
                              </span>
                            </div>
                          </div>
                          <p
                            className={`text-sm mb-3 ${
                              step.completed || step.id === currentStep
                                ? 'text-gray-600 dark:text-gray-400'
                                : 'text-gray-500 dark:text-gray-500'
                            }`}
                          >
                            {step.description}
                          </p>
                          <div className='flex items-center justify-between'>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                step.completed
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              }`}
                            >
                              {step.reward}
                            </span>
                            {step.id === currentStep && !step.completed && (
                              <Button size='sm' className='h-8'>
                                Start
                                <ChevronRight className='ml-1 h-3 w-3' />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card className='border-2 border-yellow-200 dark:border-yellow-900 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-yellow-800 dark:text-yellow-200'>
                  <Trophy className='h-5 w-5' />
                  Achievement Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-full bg-green-500 flex items-center justify-center'>
                        <CheckCircle className='h-4 w-4 text-white' />
                      </div>
                      <div>
                        <div className='font-medium text-gray-900 dark:text-white'>
                          Quick Starter
                        </div>
                        <div className='text-xs text-gray-600 dark:text-gray-400'>
                          Completed profile setup
                        </div>
                      </div>
                    </div>
                    <span className='text-sm font-medium text-green-600 dark:text-green-400'>
                      +100
                    </span>
                  </div>

                  <div className='flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center'>
                        <Target className='h-4 w-4 text-white' />
                      </div>
                      <div>
                        <div className='font-medium text-gray-900 dark:text-white'>
                          Data Import Pro
                        </div>
                        <div className='text-xs text-gray-600 dark:text-gray-400'>
                          Imported 50+ contacts
                        </div>
                      </div>
                    </div>
                    <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                      +200
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-2 border-purple-200 dark:border-purple-900'>
              <CardHeader>
                <CardTitle className='text-purple-800 dark:text-purple-200'>
                  Next Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      Goal Setter Badge
                    </span>
                    <span className='text-sm font-medium text-purple-600 dark:text-purple-400'>
                      150 pts
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-purple-500 h-2 rounded-full'
                      style={{ width: '100%' }}
                    ></div>
                  </div>

                  <div className='flex items-center justify-between mt-4'>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      Deal Closer Badge
                    </span>
                    <span className='text-sm font-medium text-purple-600 dark:text-purple-400'>
                      300 pts
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-gray-300 dark:bg-gray-600 h-2 rounded-full'
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
