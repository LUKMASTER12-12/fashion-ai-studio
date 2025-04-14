import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, Image, Clock, Settings, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  // Mock data for recent projects
  const recentProjects = [
    {
      id: 1,
      title: "Summer Collection 2023",
      date: "2 days ago",
      images: 12,
      thumbnail:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    },
    {
      id: 2,
      title: "Winter Essentials",
      date: "1 week ago",
      images: 8,
      thumbnail:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    },
    {
      id: 3,
      title: "Casual Wear Collection",
      date: "2 weeks ago",
      images: 15,
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
    },
    {
      id: 4,
      title: "Accessories Line",
      date: "1 month ago",
      images: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80",
    },
  ];

  // Mock stats
  const stats = {
    totalPhotoshoots: 24,
    totalImages: 186,
    creditsRemaining: 350,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">AI Fashion Studio</h1>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=brand"
                    alt="User"
                  />
                  <AvatarFallback>BR</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Fashion Brand
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    brand@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section with Stats */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Welcome back, Fashion Brand
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Photoshoots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalPhotoshoots}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalImages}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Credits Remaining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.creditsRemaining}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions and Recent Projects */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <Link to="/create">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Photoshoot
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="recent">Recent Projects</TabsTrigger>
              <TabsTrigger value="all">All Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {project.date}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-0 flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {project.images} images
                      </span>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Image className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">All your projects</h3>
                <p className="text-muted-foreground mb-4">
                  View and manage all your photoshoot projects in one place.
                </p>
                <Button variant="outline">View All Projects</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Quick Start Guide */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">1</span>
                </div>
                <CardTitle>Upload</CardTitle>
                <CardDescription>
                  Upload the images of your products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Drag and drop your product images or browse your files to
                  upload them to our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">2</span>
                </div>
                <CardTitle>Transform</CardTitle>
                <CardDescription>
                  Select the model and background
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose from our diverse range of AI models and professional
                  backgrounds to showcase your products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">3</span>
                </div>
                <CardTitle>Share</CardTitle>
                <CardDescription>
                  Add to your website or social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Download your professional photoshoots or share them directly
                  to your website and social media profiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2023 AI Fashion Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
