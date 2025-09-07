import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Mail,
  Phone
} from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  color: string
}

function MetricCard({ title, value, change, trend, icon, color }: MetricCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400"
  }

  return (
    <Card className="border-2 hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </CardTitle>
        <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${colorClasses[color as keyof typeof colorClasses]}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        <p className={`text-xs flex items-center gap-1 ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
          <TrendingUp className={`h-3 w-3 ${trend === "down" ? "rotate-180" : ""}`} />
          {change}
        </p>
      </CardContent>
    </Card>
  )
}

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 text-sm font-medium text-green-800 dark:text-green-200 mb-4">
            <BarChart3 className="mr-2 h-4 w-4" />
            Dashboard Preview
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Analytics at Your Fingertips
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get real-time insights into your sales performance with customizable dashboards and intelligent reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Revenue"
            value="$124,563"
            change="+12.5% from last month"
            trend="up"
            icon={<DollarSign className="h-4 w-4" />}
            color="green"
          />
          <MetricCard
            title="Active Leads"
            value="1,429"
            change="+8.2% from last month"
            trend="up"
            icon={<Users className="h-4 w-4" />}
            color="blue"
          />
          <MetricCard
            title="Conversion Rate"
            value="24.8%"
            change="+2.1% from last month"
            trend="up"
            icon={<Target className="h-4 w-4" />}
            color="purple"
          />
          <MetricCard
            title="Avg. Deal Size"
            value="$8,450"
            change="-3.2% from last month"
            trend="down"
            icon={<PieChart className="h-4 w-4" />}
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      Sales Pipeline
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Track deals through each stage of your sales process
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div>Lead</div>
                    <div>Qualified</div>
                    <div>Proposal</div>
                    <div>Negotiation</div>
                    <div>Closed</div>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="grid grid-cols-5 gap-4 items-center">
                        <div className="h-8 bg-blue-200 dark:bg-blue-800 rounded" style={{ width: `${60 + item * 10}%` }}></div>
                        <div className="h-8 bg-green-200 dark:bg-green-800 rounded" style={{ width: `${40 + item * 5}%` }}></div>
                        <div className="h-8 bg-yellow-200 dark:bg-yellow-800 rounded" style={{ width: `${30 + item * 3}%` }}></div>
                        <div className="h-8 bg-orange-200 dark:bg-orange-800 rounded" style={{ width: `${20 + item * 2}%` }}></div>
                        <div className="h-8 bg-purple-200 dark:bg-purple-800 rounded" style={{ width: `${10 + item}%` }}></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-gray-600 dark:text-gray-400">45 leads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-600 dark:text-gray-400">32 qualified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <span className="text-gray-600 dark:text-gray-400">18 proposals</span>
                      </div>
                    </div>
                    <Activity className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">New lead assigned</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Sarah Johnson - 2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Deal closed</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">TechCorp Inc. - 4 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Meeting scheduled</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Global Systems - 6 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email sent</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Follow-up campaign - 8 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Add Lead
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore Full Dashboard
          </Button>
        </div>
      </div>
    </section>
  )
}