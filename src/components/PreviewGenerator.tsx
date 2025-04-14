import React, { useState, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Share,
  Download,
  Code,
  Rotate3D,
  ZoomIn,
  Move,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface PreviewGeneratorProps {
  selectedModels?: Array<{
    id: string;
    name: string;
    image: string;
    ethnicity?: string;
    bodyType?: string;
    style?: string;
  }>;
  selectedBackground?: {
    id: string;
    name: string;
    image: string;
    category?: string;
  };
  uploadedProducts?: Array<{
    id: string;
    name: string;
    image: string;
  }>;
  onGenerationComplete?: (imageUrls: string[]) => void;
}

const PreviewGenerator: React.FC<PreviewGeneratorProps> = ({
  onGenerationComplete,
  selectedModels = [
    {
      id: "1",
      name: "Sophia",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      ethnicity: "Asian",
      bodyType: "Slim",
      style: "Casual",
    },
    {
      id: "2",
      name: "Marcus",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      ethnicity: "Black",
      bodyType: "Athletic",
      style: "Urban",
    },
  ],
  selectedBackground = {
    id: "1",
    name: "Urban Street",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    category: "Urban",
  },
  uploadedProducts = [
    {
      id: "1",
      name: "Blue T-Shirt",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    },
    {
      id: "2",
      name: "Black Jeans",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [activeModel, setActiveModel] = useState(selectedModels[0]);
  const [zoomLevel, setZoomLevel] = useState(50);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [generatedImages, setGeneratedImages] = useState<string[]>(() => {
    // Try to load from localStorage first
    try {
      const saved = localStorage.getItem("generatedImages");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [exportFormat, setExportFormat] = useState("jpg");
  const [exportResolution, setExportResolution] = useState("high");
  const [shareUrl, setShareUrl] = useState("");
  const [embedCode, setEmbedCode] = useState("");
  const [apiKeyRequested, setApiKeyRequested] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [socialShareStatus, setSocialShareStatus] = useState<{
    platform: string;
    status: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ platform: "", status: "idle" });

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // In a real implementation, this would be an API call to an AI service
      // For now, we'll simulate the API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Generate images based on selected models, background and products
      // This is where you would make the actual API call to your AI service
      const generatedImageUrls = [
        `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&model=${activeModel.id}`,
        `https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&model=${activeModel.id}`,
        `https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80&model=${activeModel.id}`,
      ];

      // Save to localStorage for persistence
      try {
        localStorage.setItem(
          "generatedImages",
          JSON.stringify(generatedImageUrls),
        );
        localStorage.setItem("generationTimestamp", Date.now().toString());
        localStorage.setItem(
          "generationSettings",
          JSON.stringify({
            modelId: activeModel.id,
            zoomLevel,
            rotation,
            position,
            products: uploadedProducts.map((p) => p.id),
          }),
        );
      } catch (error) {
        console.error("Error saving generated images to localStorage:", error);
      }

      setGeneratedImages(generatedImageUrls);

      // Call the callback to notify parent component
      if (onGenerationComplete) {
        onGenerationComplete(generatedImageUrls);
      }

      setActiveTab("results");
    } catch (err) {
      console.error("Error generating images:", err);
      setError("Failed to generate images. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExport = () => {
    // Generate share URL and embed code
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const newShareUrl = `https://example.com/share/${uniqueId}`;
    setShareUrl(newShareUrl);
    setEmbedCode(
      `<iframe src="${newShareUrl}" width="800" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    );
    setIsDialogOpen(true);
  };

  const handleSocialShare = useCallback(
    (platform: string) => {
      if (generatedImages.length === 0) {
        setError("No images to share. Please generate images first.");
        return;
      }

      setSocialShareStatus({ platform, status: "loading" });

      // Simulate API call to share to social media
      setTimeout(() => {
        try {
          // In a real implementation, this would be an API call to the social media platform
          console.log(`Sharing to ${platform}:`, generatedImages[0]);

          // Simulate successful share
          setSocialShareStatus({
            platform,
            status: "success",
            message: `Successfully shared to ${platform}!`,
          });

          // Show success message in a toast or alert
          alert(`Successfully shared to ${platform}!`);
        } catch (err) {
          console.error(`Error sharing to ${platform}:`, err);
          setSocialShareStatus({
            platform,
            status: "error",
            message: `Failed to share to ${platform}. Please try again.`,
          });
          setError(`Failed to share to ${platform}. Please try again.`);
        }
      }, 1500);
    },
    [generatedImages],
  );

  const handleDownload = (imageUrl?: string) => {
    try {
      // If a specific image URL is provided, download just that image
      // Otherwise, download all images
      const imagesToDownload = imageUrl ? [imageUrl] : generatedImages;

      imagesToDownload.forEach((url, index) => {
        // Create a temporary anchor element
        const link = document.createElement("a");
        link.href = url;
        link.download = `generated-image-${index + 1}.${exportFormat}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } catch (err) {
      console.error("Error downloading images:", err);
      setError("Failed to download images. Please try again.");
    }
  };

  return (
    <div className="w-full h-full bg-background p-6 rounded-lg">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="preview">Preview & Adjust</TabsTrigger>
            <TabsTrigger value="results">Generated Results</TabsTrigger>
            <TabsTrigger value="export">Export Options</TabsTrigger>
          </TabsList>

          {activeTab === "preview" && (
            <Button onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  Generating...
                </>
              ) : (
                "Generate Images"
              )}
            </Button>
          )}

          {activeTab === "results" && (
            <Button onClick={() => setActiveTab("export")}>
              Continue to Export
            </Button>
          )}

          {activeTab === "export" && (
            <Button onClick={handleExport}>Export Now</Button>
          )}
        </div>

        <TabsContent value="preview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0 relative">
                  <div
                    className="w-full h-[500px] relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${selectedBackground.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${zoomLevel / 50})`,
                      }}
                      drag
                      dragConstraints={{
                        left: -200,
                        right: 200,
                        top: -200,
                        bottom: 200,
                      }}
                      onDragEnd={(_, info) => {
                        // Update position based on drag
                        const newX = position.x + info.offset.x / 5;
                        const newY = position.y + info.offset.y / 5;
                        setPosition({
                          x: Math.max(0, Math.min(100, newX)),
                          y: Math.max(0, Math.min(100, newY)),
                        });
                      }}
                    >
                      <img
                        src={activeModel.image}
                        alt={activeModel.name}
                        className="h-[400px] object-contain"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h3 className="text-lg font-medium">Adjust Preview</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Select Model</Label>
                        <Select
                          value={activeModel.id}
                          onValueChange={(value) => {
                            const model = selectedModels.find(
                              (m) => m.id === value,
                            );
                            if (model) setActiveModel(model);
                          }}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedModels.map((model) => (
                              <SelectItem key={model.id} value={model.id}>
                                {model.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ZoomIn className="h-4 w-4" />
                        <Label>Zoom Level</Label>
                      </div>
                      <Slider
                        value={[zoomLevel]}
                        min={10}
                        max={100}
                        step={1}
                        onValueChange={(value) => setZoomLevel(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Rotate3D className="h-4 w-4" />
                        <Label>Rotation</Label>
                      </div>
                      <Slider
                        value={[rotation]}
                        min={-180}
                        max={180}
                        step={1}
                        onValueChange={(value) => setRotation(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Move className="h-4 w-4" />
                        <Label>Position</Label>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs">Horizontal</Label>
                          <Slider
                            value={[position.x]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={(value) =>
                              setPosition({ ...position, x: value[0] })
                            }
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Vertical</Label>
                          <Slider
                            value={[position.y]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={(value) =>
                              setPosition({ ...position, y: value[0] })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4">
                    Selected Products
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {uploadedProducts.map((product) => (
                      <div
                        key={product.id}
                        className="relative rounded-md overflow-hidden border"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs text-center p-1">
                            {product.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-[500px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">
                Generating your photoshoot...
              </p>
            </div>
          ) : generatedImages.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Generated Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generatedImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={image}
                        alt={`Generated image ${index + 1}`}
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="p-3 flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Image {index + 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(image)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[500px]">
              <p className="text-muted-foreground">
                No generated images yet. Go to Preview tab and click Generate.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Export Options</h2>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Download Settings</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="format">File Format</Label>
                        <Select
                          value={exportFormat}
                          onValueChange={setExportFormat}
                        >
                          <SelectTrigger id="format">
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jpg">JPG</SelectItem>
                            <SelectItem value="png">PNG</SelectItem>
                            <SelectItem value="webp">WebP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resolution">Resolution</Label>
                        <Select
                          value={exportResolution}
                          onValueChange={setExportResolution}
                        >
                          <SelectTrigger id="resolution">
                            <SelectValue placeholder="Select resolution" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (720p)</SelectItem>
                            <SelectItem value="medium">
                              Medium (1080p)
                            </SelectItem>
                            <SelectItem value="high">High (2K)</SelectItem>
                            <SelectItem value="ultra">Ultra (4K)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleDownload()}
                      className="w-full"
                      disabled={generatedImages.length === 0}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download All Images
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Share Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleSocialShare("instagram")}
                      >
                        <Share className="mr-2 h-4 w-4" />
                        Share to Instagram
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleSocialShare("facebook")}
                      >
                        <Share className="mr-2 h-4 w-4" />
                        Share to Facebook
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleSocialShare("twitter")}
                      >
                        <Share className="mr-2 h-4 w-4" />
                        Share to Twitter
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleSocialShare("pinterest")}
                      >
                        <Share className="mr-2 h-4 w-4" />
                        Share to Pinterest
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Website Integration</h3>
                    <div className="space-y-2">
                      <Label htmlFor="embed-code">Embed Code</Label>
                      <div className="relative">
                        <Input
                          id="embed-code"
                          value={`<iframe src="${shareUrl || "https://example.com/embed/photoshoot"}" width="800" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`}
                          readOnly
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `<iframe src="${shareUrl || "https://example.com/embed/photoshoot"}" width="800" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                            );
                            alert("Embed code copied to clipboard!");
                          }}
                        >
                          Copy
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="direct-link">Direct Link</Label>
                      <div className="relative">
                        <Input
                          id="direct-link"
                          value={
                            shareUrl || "https://example.com/share/photoshoot"
                          }
                          readOnly
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              shareUrl ||
                                "https://example.com/share/photoshoot",
                            );
                            alert("Link copied to clipboard!");
                          }}
                        >
                          Copy
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label>Integration Options</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            const jsonData = {
                              images: generatedImages,
                              model: activeModel.name,
                              background: selectedBackground.name,
                              products: uploadedProducts.map((p) => p.name),
                            };
                            navigator.clipboard.writeText(
                              JSON.stringify(jsonData, null, 2),
                            );
                            alert("JSON data copied to clipboard!");
                          }}
                        >
                          <Code className="mr-2 h-4 w-4" />
                          Copy as JSON
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            setApiKeyRequested(true);
                            setIsDialogOpen(true);
                          }}
                        >
                          <Code className="mr-2 h-4 w-4" />
                          Get API Access
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4">Preview</h3>
                  <div className="space-y-4">
                    {generatedImages.length > 0 ? (
                      <img
                        src={generatedImages[0]}
                        alt="Preview"
                        className="w-full h-[200px] object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-[200px] bg-muted flex items-center justify-center rounded-md">
                        <p className="text-muted-foreground text-sm">
                          No preview available
                        </p>
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground">
                      <p>
                        Selected format:{" "}
                        <span className="font-medium">
                          {exportFormat.toUpperCase()}
                        </span>
                      </p>
                      <p>
                        Selected resolution:{" "}
                        <span className="font-medium">
                          {exportResolution === "low"
                            ? "720p"
                            : exportResolution === "medium"
                              ? "1080p"
                              : exportResolution === "high"
                                ? "2K"
                                : "4K"}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4">Export Checklist</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm">Images generated successfully</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm">
                        High-quality resolution available
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm">Multiple file formats supported</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm">Social media sharing enabled</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <p className="text-sm">Website integration ready</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md md:max-w-xl">
          <DialogHeader>
            <DialogTitle>Export Successful!</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {!apiKeyRequested ? (
              <>
                <p>
                  Your photoshoot has been successfully exported. You can now
                  download the images or share them directly.
                </p>

                <div className="space-y-2">
                  <Label>Share URL</Label>
                  <div className="flex gap-2">
                    <Input value={shareUrl} readOnly className="flex-1" />
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl);
                        alert("URL copied to clipboard!");
                      }}
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label>Embed Code</Label>
                  <div className="flex gap-2">
                    <Input value={embedCode} readOnly className="flex-1" />
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(embedCode);
                        alert("Embed code copied to clipboard!");
                      }}
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label>Social Media Sharing</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsDialogOpen(false);
                        handleSocialShare("instagram");
                      }}
                    >
                      <Share className="mr-2 h-4 w-4" />
                      Instagram
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsDialogOpen(false);
                        handleSocialShare("facebook");
                      }}
                    >
                      <Share className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </Button>
                  <Button onClick={() => handleDownload()}>Download Now</Button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-medium">API Access Request</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fill out the form below to request API access for integrating
                  our AI photoshoot generator into your website or application.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="use-case">Use Case</Label>
                    <Input
                      id="use-case"
                      placeholder="Describe how you'll use our API"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimated-volume">
                      Estimated Monthly Volume
                    </Label>
                    <Select defaultValue="low">
                      <SelectTrigger id="estimated-volume">
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">
                          Low (&lt; 1,000 images)
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium (1,000 - 10,000 images)
                        </SelectItem>
                        <SelectItem value="high">
                          High (&gt; 10,000 images)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setApiKeyRequested(false);
                      setIsDialogOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      alert(
                        "Thank you for your request! We'll be in touch with API access details shortly.",
                      );
                      setApiKeyRequested(false);
                      setIsDialogOpen(false);
                    }}
                  >
                    Submit Request
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PreviewGenerator;
