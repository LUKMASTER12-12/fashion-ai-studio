import React from "react";
import { Link } from "react-router-dom";
import PhotoshootCreator from "./PhotoshootCreator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CreatePage() {
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
        <PhotoshootCreator
          onComplete={(data) => {
            console.log("Photoshoot completed:", data);
            // In a real app, we would save this data to a database
            // and then redirect to the dashboard or a success page
            window.location.href = "/";
          }}
        />
      </main>
    </div>
  );
}
