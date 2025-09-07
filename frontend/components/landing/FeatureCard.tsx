import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartBar, Shield, Target, Users, Zap } from "lucide-react"


const roleConfig = {
  sales: {
    icon: <Target className="h-6 w-6" />,
    color: "blue",
    title: "Sales Executive",
    description: "Close more deals with intelligent lead management and automated follow-ups",
    features: [
      "AI-powered lead scoring and prioritization",
      "Automated follow-up sequences",
      "Real-time deal tracking and insights",
      "Mobile CRM for on-the-go access",
      "Integrated communication tools"
    ]
  },
  manager: {
    icon: <ChartBar className="h-6 w-6" />,
    color: "green",
    title: "Sales Manager",
    description: "Drive team performance with comprehensive analytics and coaching tools",
    features: [
      "Team performance dashboards",
      "Pipeline visibility and forecasting",
      "Coaching insights and recommendations",
      "Goal tracking and achievement monitoring",
      "Revenue analytics and reporting"
    ]
  },
  admin: {
    icon: <Shield className="h-6 w-6" />,
    color: "purple",
    title: "IT Administrator",
    description: "Maintain security and compliance with enterprise-grade controls",
    features: [
      "Role-based access control",
      "Data encryption and security",
      "API integrations and webhooks",
      "Custom field and workflow configuration",
      "Audit logs and compliance reporting"
    ]
  }
}

export default function FeatureCard({ role }: { role: "sales" | "manager" | "admin" }) {
  const config = roleConfig[role]
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
    green: "bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
    purple: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800"
  }

  return (
    <Card className="relative overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className={`absolute top-0 left-0 h-1 w-full ${config.color === "blue" ? "bg-blue-500" : config.color === "green" ? "bg-green-500" : "bg-purple-500"}`}></div>
      
      <CardHeader className="pb-4">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[config.color as keyof typeof colorClasses]} mb-4`}>
          {config.icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          {config.title}
        </CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400">
          {config.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {config.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${config.color === "blue" ? "bg-blue-500" : config.color === "green" ? "bg-green-500" : "bg-purple-500"}`}></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {role === "sales" ? "Perfect for field reps" : role === "manager" ? "Team leadership tools" : "Enterprise ready"}
            </span>
          </div>
          <Zap className="h-4 w-4 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}