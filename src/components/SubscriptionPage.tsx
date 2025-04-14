import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface SubscriptionPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: PlanFeature[];
  highlighted?: boolean;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small brands just getting started",
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      { name: "10 AI model photoshoots per month", included: true },
      { name: "5 AI models to choose from", included: true },
      { name: "10 background options", included: true },
      { name: "Standard resolution exports", included: true },
      { name: "Email support", included: true },
      { name: "Advanced customization options", included: false },
      { name: "Priority rendering", included: false },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Professional",
    description: "Ideal for growing fashion brands",
    price: {
      monthly: 79,
      yearly: 790,
    },
    features: [
      { name: "50 AI model photoshoots per month", included: true },
      { name: "20 AI models to choose from", included: true },
      { name: "30 background options", included: true },
      { name: "High resolution exports", included: true },
      { name: "Priority email support", included: true },
      { name: "Advanced customization options", included: true },
      { name: "Priority rendering", included: true },
      { name: "API access", included: false },
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For established brands with high volume needs",
    price: {
      monthly: 199,
      yearly: 1990,
    },
    features: [
      { name: "Unlimited AI model photoshoots", included: true },
      { name: "All AI models available", included: true },
      { name: "All background options", included: true },
      { name: "Ultra-high resolution exports", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Advanced customization options", included: true },
      { name: "Priority rendering", included: true },
      { name: "Full API access", included: true },
    ],
  },
];

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div className="container mx-auto py-10 px-4 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Choose Your Subscription Plan
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your brand's needs. All plans include
            access to our AI model generation technology.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full mb-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger
                value="monthly"
                onClick={() => setBillingCycle("monthly")}
                className="px-8"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                onClick={() => setBillingCycle("yearly")}
                className="px-8"
              >
                Yearly{" "}
                <span className="ml-1 text-xs text-green-600 font-medium">
                  Save 17%
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <PlanCard
                  key={plan.name}
                  plan={plan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <PlanCard
                  key={plan.name}
                  plan={plan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Need a custom solution?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer tailored enterprise solutions for brands with specific
            requirements. Contact our sales team to discuss your needs.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>

        <div className="mt-16 border-t pt-8">
          <h3 className="text-lg font-medium mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Can I change my plan later?</h4>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                How do the AI model credits work?
              </h4>
              <p className="text-muted-foreground">
                Each plan comes with a set number of AI model photoshoots per
                month. One photoshoot equals one product with one model in one
                setting.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for
                enterprise customers.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Is there a free trial available?
              </h4>
              <p className="text-muted-foreground">
                Yes, new users can try our platform with 3 free AI model
                photoshoots before committing to a subscription.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  billingCycle,
}: {
  plan: SubscriptionPlan;
  billingCycle: "monthly" | "yearly";
}) {
  return (
    <Card
      className={`flex flex-col h-full ${plan.highlighted ? "border-primary shadow-lg ring-1 ring-primary" : ""}`}
    >
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold">
            ${plan.price[billingCycle]}
          </span>
          <span className="text-muted-foreground">
            /{billingCycle === "monthly" ? "month" : "year"}
          </span>
        </div>

        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
              )}
              <span className={feature.included ? "" : "text-muted-foreground"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={plan.highlighted ? "default" : "outline"}
        >
          {plan.highlighted ? "Get Started" : "Select Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
}
