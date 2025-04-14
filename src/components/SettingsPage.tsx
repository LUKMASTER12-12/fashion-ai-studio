import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl bg-background">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 gap-6">
        {/* Account Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Email Notifications
                </h3>
                <p className="text-sm">
                  Receive email updates about your projects
                </p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Two-Factor Authentication
                </h3>
                <p className="text-sm">
                  Add an extra layer of security to your account
                </p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Password
                </h3>
                <p className="text-sm">
                  Update your password regularly for security
                </p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Changes</Button>
          </CardFooter>
        </Card>

        {/* Privacy Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>
              Control your data and privacy preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Profile Visibility
                </h3>
                <p className="text-sm">Control who can see your profile</p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  Public
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Data Usage
                </h3>
                <p className="text-sm">
                  How we use your data to improve our services
                </p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Update Privacy Settings</Button>
          </CardFooter>
        </Card>

        {/* Appearance Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how the application looks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Theme
                </h3>
                <p className="text-sm">Choose between light and dark mode</p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  Light
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Language
                </h3>
                <p className="text-sm">Select your preferred language</p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  English
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Apply Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
