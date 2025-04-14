import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import UploadPanel from "./UploadPanel";
import ModelSelectionPanel from "./ModelSelectionPanel";
import PreviewGenerator from "./PreviewGenerator";

type Step = "upload" | "model" | "preview" | "export";

interface PhotoshootCreatorProps {
  onComplete?: (data: any) => void;
  initialData?: {
    title?: string;
    uploadedImages?: File[];
    selectedModels?: string[];
    selectedBackgrounds?: string[];
    generatedImages?: string[];
  };
}

const PhotoshootCreator = ({
  onComplete = () => {},
  initialData,
}: PhotoshootCreatorProps) => {
  const [currentStep, setCurrentStep] = useState<Step>(
    initialData?.generatedImages?.length ? "export" : "upload",
  );
  const [uploadedImages, setUploadedImages] = useState<File[]>(
    initialData?.uploadedImages || [],
  );
  const [uploadedProductsData, setUploadedProductsData] = useState<
    Array<{
      id: string;
      name: string;
      image: string;
    }>
  >([]);
  const [selectedModels, setSelectedModels] = useState<string[]>(
    initialData?.selectedModels || [],
  );
  const [selectedBackgrounds, setSelectedBackgrounds] = useState<string[]>(
    initialData?.selectedBackgrounds || [],
  );
  const [generatedImages, setGeneratedImages] = useState<string[]>(
    initialData?.generatedImages || [],
  );
  const [projectTitle, setProjectTitle] = useState<string>(
    initialData?.title || "New Photoshoot",
  );

  const steps: { id: Step; label: string }[] = [
    { id: "upload", label: "Upload Products" },
    { id: "model", label: "Select Models" },
    { id: "preview", label: "Preview & Generate" },
    { id: "export", label: "Export" },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const handleUploadComplete = (files: File[]) => {
    setUploadedImages(files);

    // Convert uploaded files to product data format for PreviewGenerator
    const productsData = files.map((file, index) => ({
      id: `upload-${index}`,
      name: file.name.split(".")[0] || `Product ${index + 1}`,
      image: URL.createObjectURL(file),
    }));

    setUploadedProductsData(productsData);
  };

  const handleModelSelectionComplete = (
    modelIds: string[],
    backgroundIds: string[],
  ) => {
    setSelectedModels(modelIds);
    setSelectedBackgrounds(backgroundIds);
  };

  const handleGenerationComplete = (imageUrls: string[]) => {
    setGeneratedImages(imageUrls);
  };

  const handleExport = (exportType: string) => {
    // Handle export logic based on type (download, social media, etc.)
    onComplete({
      images: generatedImages,
      exportType,
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-background p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold mb-6">
        {initialData ? "Edit Photoshoot" : "Create New Photoshoot"}
      </h1>

      <div className="mb-8">
        <Tabs value={currentStep} className="w-full">
          <TabsList className="grid grid-cols-4 w-full">
            {steps.map((step) => (
              <TabsTrigger
                key={step.id}
                value={step.id}
                onClick={() => setCurrentStep(step.id)}
                disabled={step.id === "export" && generatedImages.length === 0}
                className="flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center border border-primary">
                  {currentStep === step.id ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <span className="text-sm">
                      {steps.findIndex((s) => s.id === step.id) + 1}
                    </span>
                  )}
                </div>
                <span>{step.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <Card className="mt-6 border-0 shadow-none">
            <CardContent className="p-0">
              <TabsContent value="upload" className="mt-0">
                <UploadPanel
                  onUploadComplete={handleUploadComplete}
                  initialFiles={uploadedImages}
                />
              </TabsContent>

              <TabsContent value="model" className="mt-0">
                <ModelSelectionPanel
                  onSelectionComplete={handleModelSelectionComplete}
                  uploadedImages={uploadedImages}
                  initialSelectedModels={selectedModels}
                  initialSelectedBackgrounds={selectedBackgrounds}
                />
              </TabsContent>

              <TabsContent value="preview" className="mt-0">
                <PreviewGenerator
                  uploadedProducts={uploadedProductsData}
                  selectedModels={selectedModels.map((id) => ({
                    id,
                    name: `Model ${id}`,
                    image: `https://images.unsplash.com/photo-${id}?w=400&q=80`,
                    ethnicity: "Various",
                    bodyType: "Various",
                    style: "Various",
                  }))}
                  selectedBackground={
                    selectedBackgrounds.length > 0
                      ? {
                          id: selectedBackgrounds[0],
                          name: `Background ${selectedBackgrounds[0]}`,
                          image: `https://images.unsplash.com/photo-${selectedBackgrounds[0]}?w=800&q=80`,
                          category: "Various",
                        }
                      : undefined
                  }
                  onGenerationComplete={handleGenerationComplete}
                />
              </TabsContent>

              <TabsContent value="export" className="mt-0">
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-semibold">Export Options</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {generatedImages.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border bg-card"
                      >
                        <img
                          src={
                            image ||
                            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                          }
                          alt={`Generated image ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4 space-y-4">
                          <h3 className="font-medium">Image {index + 1}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleExport("download")}
                              className="flex-1"
                            >
                              Download
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleExport("social")}
                              className="flex-1"
                            >
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>

      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === "upload"}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>

        {currentStep !== "export" ? (
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === "upload" && uploadedImages.length === 0) ||
              (currentStep === "model" &&
                (selectedModels.length === 0 ||
                  selectedBackgrounds.length === 0)) ||
              (currentStep === "preview" && generatedImages.length === 0)
            }
            className="flex items-center gap-2"
          >
            Next <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={() => onComplete(generatedImages)}
            className="flex items-center gap-2"
          >
            Complete <Check className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PhotoshootCreator;
