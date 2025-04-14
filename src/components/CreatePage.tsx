import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PhotoshootCreator from "./PhotoshootCreator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CreatePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    // If we have an ID, this is an edit operation
    if (id) {
      // In a real app, fetch the project data from an API
      // For now, we'll simulate this with a timeout
      setTimeout(() => {
        // Mock data for the project being edited
        setProjectData({
          title: "Edit Project: " + id,
          uploadedImages: [],
          selectedModels: ["1", "3"],
          selectedBackgrounds: ["2"],
          generatedImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
          ],
        });
        setIsLoading(false);
      }, 1000);
    } else {
      // New project, no need to fetch data
      setIsLoading(false);
    }
  }, [id]);

  const handleComplete = (data: any) => {
    console.log("Photoshoot creation completed:", data);
    // In a real app, save the data to an API
    // For now, just navigate to the home page
    navigate("/");
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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="ml-4 text-muted-foreground">
              Loading project data...
            </p>
          </div>
        ) : (
          <PhotoshootCreator
            onComplete={handleComplete}
            initialData={projectData}
          />
        )}
      </main>
    </div>
  );
}
