import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, Share, Trash, Edit, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = React.useState(false);

  // Mock project data - in a real app, this would be fetched from an API
  const project = {
    id: id || "1",
    title: "Summer Collection 2023",
    date: "2 days ago",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    ],
    models: ["Sophia", "Marcus"],
    backgrounds: ["Urban Street"],
    products: ["Blue T-Shirt", "Black Jeans"],
    stats: {
      views: 245,
      downloads: 32,
      shares: 18,
    },
  };

  const handleDelete = () => {
    // In a real app, this would make an API call to delete the project
    console.log("Deleting project:", id);
    setIsDeleteDialogOpen(false);
    // Redirect to home page
    window.location.href = "/";
  };

  const handleDuplicate = () => {
    // In a real app, this would make an API call to duplicate the project
    console.log("Duplicating project:", id);
    // Redirect to the new project
    window.location.href = "/project/new-id";
  };

  const handleDownload = (imageUrl: string) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `image-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}:`, project.title);
    // In a real app, this would open a share dialog for the specified platform
    alert(`Shared to ${platform} successfully!`);
    setIsShareDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDuplicate}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" /> Duplicate
            </Button>
            <Link to={`/edit/${id}`}>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Edit className="h-4 w-4" /> Edit
              </Button>
            </Link>
            <AlertDialog
              open={isDeleteDialogOpen}
              onOpenChange={setIsDeleteDialogOpen}
            >
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Trash className="h-4 w-4" /> Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your project and all associated images.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-muted-foreground">
            Created {project.date} • {project.images.length} images
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="gallery" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-[300px] object-cover"
                        />
                      </CardContent>
                      <CardFooter className="flex justify-between p-4">
                        <span className="text-sm font-medium">
                          Image {index + 1}
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(image)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Dialog
                            open={isShareDialogOpen}
                            onOpenChange={setIsShareDialogOpen}
                          >
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Share className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Share Image</DialogTitle>
                                <DialogDescription>
                                  Share this image to your social media
                                  platforms.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-2 gap-4 py-4">
                                <Button
                                  variant="outline"
                                  onClick={() => handleShare("instagram")}
                                >
                                  Instagram
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => handleShare("facebook")}
                                >
                                  Facebook
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => handleShare("twitter")}
                                >
                                  Twitter
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => handleShare("pinterest")}
                                >
                                  Pinterest
                                </Button>
                              </div>
                              <DialogFooter>
                                <Button
                                  variant="ghost"
                                  onClick={() => setIsShareDialogOpen(false)}
                                >
                                  Cancel
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium">Models Used</h3>
                      <p className="text-muted-foreground">
                        {project.models.join(", ")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Backgrounds</h3>
                      <p className="text-muted-foreground">
                        {project.backgrounds.join(", ")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Products</h3>
                      <p className="text-muted-foreground">
                        {project.products.join(", ")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Analytics</CardTitle>
                    <CardDescription>
                      Track how your photoshoot is performing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <p className="text-3xl font-bold">
                          {project.stats.views}
                        </p>
                        <p className="text-sm text-muted-foreground">Views</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <p className="text-3xl font-bold">
                          {project.stats.downloads}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Downloads
                        </p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <p className="text-3xl font-bold">
                          {project.stats.shares}
                        </p>
                        <p className="text-sm text-muted-foreground">Shares</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full"
                  onClick={() => handleDownload(project.images[0])}
                >
                  Download All Images
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsShareDialogOpen(true)}
                >
                  Share Project
                </Button>
                <Link to={`/edit/${id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Edit Project
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Similar Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&q=80"
                      alt="Winter Essentials"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">Winter Essentials</h3>
                      <p className="text-sm text-muted-foreground">
                        8 images • 1 week ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&q=80"
                      alt="Casual Wear Collection"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">Casual Wear Collection</h3>
                      <p className="text-sm text-muted-foreground">
                        15 images • 2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
