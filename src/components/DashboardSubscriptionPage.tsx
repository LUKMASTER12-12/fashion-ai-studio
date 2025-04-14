import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  CalendarDays,
  CreditCard,
  Download,
  History,
  BarChart,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardSubscriptionPage() {
  // Mock data for current subscription
  const currentSubscription = {
    plan: "Professional",
    status: "active",
    billingCycle: "monthly",
    nextBillingDate: "May 15, 2023",
    amount: "$79.00",
    photoshootsUsed: 32,
    photoshootsTotal: 50,
    paymentMethod: "Visa ending in 4242",
  };

  // Mock data for billing history
  const billingHistory = [
    {
      id: "INV-001",
      date: "April 15, 2023",
      amount: "$79.00",
      status: "paid",
    },
    {
      id: "INV-002",
      date: "March 15, 2023",
      amount: "$79.00",
      status: "paid",
    },
    {
      id: "INV-003",
      date: "February 15, 2023",
      amount: "$79.00",
      status: "paid",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Subscription
          </h1>
          <p className="text-muted-foreground">
            Manage your subscription plan and billing information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Current Plan Card */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">Current Plan</CardTitle>
                <CardDescription>
                  Your active subscription details
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                {currentSubscription.status.toUpperCase()}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    {currentSubscription.plan}
                  </h3>
                  <p className="text-muted-foreground">
                    {currentSubscription.billingCycle === "monthly"
                      ? "Monthly"
                      : "Yearly"}{" "}
                    billing
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Photoshoots Usage</span>
                    <span className="text-sm font-medium">
                      {currentSubscription.photoshootsUsed} /{" "}
                      {currentSubscription.photoshootsTotal}
                    </span>
                  </div>
                  <Progress
                    value={
                      (currentSubscription.photoshootsUsed /
                        currentSubscription.photoshootsTotal) *
                      100
                    }
                    className="h-2"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">
                      Next billing date: {currentSubscription.nextBillingDate}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">
                      Payment method: {currentSubscription.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Change Plan</Button>
              <Button
                variant="outline"
                className="text-destructive border-destructive hover:bg-destructive/10"
              >
                Cancel Subscription
              </Button>
            </CardFooter>
          </Card>

          {/* Subscription Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Subscription Summary</CardTitle>
              <CardDescription>
                Overview of your current billing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span>{currentSubscription.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Billing Cycle</span>
                  <span>
                    {currentSubscription.billingCycle === "monthly"
                      ? "Monthly"
                      : "Yearly"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span>{currentSubscription.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Billing</span>
                  <span>{currentSubscription.nextBillingDate}</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full">Manage Payment Methods</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Billing History */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Billing History</CardTitle>
            <CardDescription>
              View and download your past invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billingHistory.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div className="flex items-center">
                    <History className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {invoice.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4 font-medium">{invoice.amount}</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Invoices
            </Button>
          </CardFooter>
        </Card>

        {/* Usage Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Usage Analytics</CardTitle>
            <CardDescription>
              Track your AI photoshoot usage over time
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center">
            <div className="text-center">
              <BarChart className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">
                Usage analytics visualization would appear here
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              View Detailed Analytics
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
