import React from "react";
import ModelSelectionPanel from "./components/ModelSelectionPanel";
import UploadPanel from "./components/UploadPanel";
import PreviewGenerator from "./components/PreviewGenerator";
import PhotoshootCreator from "./components/PhotoshootCreator";

export function ModelSelectionPanelStoryboard() {
  return (
    <div className="bg-white p-6">
      <ModelSelectionPanel
        onSelectionComplete={(modelIds, backgroundIds) => {
          console.log("Selected models:", modelIds);
          console.log("Selected backgrounds:", backgroundIds);
        }}
      />
    </div>
  );
}

export function UploadPanelStoryboard() {
  return (
    <div className="bg-white p-6">
      <UploadPanel
        onUploadComplete={(images) => {
          console.log("Uploaded images:", images);
        }}
      />
    </div>
  );
}

export function PreviewGeneratorStoryboard() {
  return (
    <div className="bg-white p-6">
      <PreviewGenerator
        onGenerationComplete={(imageUrls) => {
          console.log("Generated images:", imageUrls);
        }}
      />
    </div>
  );
}

export function PhotoshootCreatorStoryboard() {
  return (
    <div className="bg-white p-6">
      <PhotoshootCreator
        onComplete={(data) => {
          console.log("Photoshoot completed:", data);
        }}
      />
    </div>
  );
}
