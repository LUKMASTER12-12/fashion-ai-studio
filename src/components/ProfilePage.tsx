import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  company: string;
  joinedDate: string;
  projectsCount: number;
}

export default function ProfilePage() {
  // Mock user data - would be fetched from an API in a real implementation
  const user: UserProfile = {
    id: "user-123",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    role: "Fashion Designer",
    company: "StyleCraft Inc.",
    joinedDate: "January 15, 2023",
    projectsCount: 24,
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl bg-background">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="rounded-full w-32 h-32 border-4 border-primary/20"
              />
            </div>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.role}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">{user.company}</p>
            <p className="text-sm">Member since {user.joinedDate}</p>
            <p className="text-sm">{user.projectsCount} projects created</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Profile Details Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Manage your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Full Name
                </h3>
                <p>{user.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Email
                </h3>
                <p>{user.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Role
                </h3>
                <p>{user.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Company
                </h3>
                <p>{user.company}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="mr-2">Update Information</Button>
            <Button variant="outline">Change Password</Button>
          </CardFooter>
        </Card>

        {/* Recent Activity Card */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your recent photoshoots and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center p-3 border rounded-md"
                >
                  <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center mr-4">
                    <span className="text-secondary-foreground">#{item}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Summer Collection Photoshoot {item}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Modified {item} day{item !== 1 ? "s" : ""} ago
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
