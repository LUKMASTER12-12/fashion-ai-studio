import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Upload, X, Image as ImageIcon, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";

interface UploadPanelProps {
  onUploadComplete?: (images: UploadedImage[]) => void;
  maxImages?: number;
  initialFiles?: UploadedImage[];
}

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
}

const UploadPanel = ({
  onUploadComplete = () => {},
  maxImages = 10,
  initialFiles = [],
}: UploadPanelProps) => {
  const [uploadedImages, setUploadedImages] =
    useState<UploadedImage[]>(initialFiles);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFiles = (files: FileList | null) => {
    if (!files) return;

    // Check if adding these files would exceed the maximum
    if (uploadedImages.length + files.length > maxImages) {
      setError(`You can only upload a maximum of ${maxImages} images`);
      return;
    }

    setError(null);

    const newImages: UploadedImage[] = [];

    Array.from(files).forEach((file) => {
      // Only accept image files
      if (!file.type.startsWith("image/")) {
        setError("Only image files are accepted");
        return;
      }

      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const preview = URL.createObjectURL(file);

      newImages.push({ id, file, preview });
    });

    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
  };

  const removeImage = (id: string) => {
    setUploadedImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      return filtered;
    });
  };

  const handleContinue = () => {
    if (uploadedImages.length === 0) {
      setError("Please upload at least one image to continue");
      return;
    }
    onUploadComplete(uploadedImages);
  };

  return (
    <div className="w-full h-full p-6 bg-background">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Upload Your Products</h2>
        <p className="text-muted-foreground">
          Upload images of your clothing items. We recommend using high-quality
          images with a clean background.
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center transition-colors ${isDragging ? "border-primary bg-primary/5" : "border-border"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Upload className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">
              Drag and drop your product images
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              or click to browse your files
            </p>
          </div>
          <Label htmlFor="file-upload" className="cursor-pointer">
            <div className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              Browse Files
            </div>
            <Input
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileInput}
            />
          </Label>
          <p className="text-xs text-muted-foreground">
            Supported formats: JPEG, PNG, WebP. Max {maxImages} images.
          </p>
        </div>
      </div>

      {uploadedImages.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium">
              Uploaded Images ({uploadedImages.length}/{maxImages})
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setUploadedImages([])}
            >
              Clear All
            </Button>
          </div>
          <Separator className="mb-4" />
          <ScrollArea className="h-[300px] w-full rounded-md border">
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden relative group">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <img
                          src={image.preview}
                          alt={`Product ${image.file.name}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(image.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-2 text-xs truncate">
                        {image.file.name}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {uploadedImages.length === 0 && (
        <div className="border rounded-lg p-8 mb-6 flex flex-col items-center justify-center">
          <div className="p-4 rounded-full bg-muted">
            <ImageIcon className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mt-4">No images uploaded yet</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Upload your product images to continue
          </p>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={handleContinue}
          disabled={uploadedImages.length === 0}
          className="px-6"
        >
          Continue to Model Selection
        </Button>
      </div>
    </div>
  );
};

export default UploadPanel;
